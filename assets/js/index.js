(function main(){
	sequenceGridFocusActions();
})();

function sequenceGridFocusActions() {
	const $sequences = Array.from(document.getElementsByClassName('seq--type__grid'));
	for (const $sequence of $sequences) {
		setListeners($sequence);
	}

	function setListeners($sequence) {
		const $items = Array.from($sequence.getElementsByClassName('seq__item'));
		for (const $item of $items) {
			$item.onmouseover = handleHover;
			$item.onblur = removeClassesFromUnfocusedElements;
			$item.onmousedown = handleClick;
			$item.onfocus = handleFocus;
		}
		$sequence.onmouseout = removeClassesFromUnfocusedElements;

		function isFocusInSequence() {
			const focusElement = document.activeElement;
			return Boolean($items.includes(focusElement));
		}

		function focusOn($target) {
			const $notTargets = [...$items];
			$notTargets.splice($notTargets.indexOf($target), 1);

			for (const $item of $notTargets) {
				turnOff($item);
			}
			turnOn($target);
		}

		function handleClick(event) {
			const $target = event.currentTarget;
			if ($target === document.activeElement) { // If already focused, do nothing
				event.preventDefault();
				return;
			}

			if (isFocusInSequence()) { // Go back to hover states
				event.preventDefault();
				document.activeElement.blur();
				turnOn($target);
				return;
			}
		}

		function handleFocus(event) {
			focusOn(event.currentTarget);
		}

		function handleHover(event) {
			if (isFocusInSequence()) {
				return;
			}
			focusOn(event.currentTarget);
		}

		function removeClassesFromUnfocusedElements() {
			if (isFocusInSequence()) {
				return;
			}

			const $offItems = [...$items];
			$offItems.splice($offItems.indexOf(document.activeElement), 1);
			for (const $item of $items) {
				$item.classList.remove('seq__item--off');
				$item.classList.remove('seq__item--on');
			}
		}

		function turnOff($target) {
			$target.classList.remove('seq__item--on');
			$target.classList.add('seq__item--off');
		}

		function turnOn($target) {
			$target.classList.add('seq__item--on');
			$target.classList.remove('seq__item--off');
		}
	}
}
