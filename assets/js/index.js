(function main(){
	focusboxSetup();
})();

function focusboxSetup() {
	const $focusboxes = Array.from(document.querySelectorAll('[focusbox]'));
	for (const $focusbox of $focusboxes) {
		setListeners($focusbox);
	}

	function setListeners($focusbox) {
		const $items = Array.from($focusbox.querySelectorAll('[focusbox-item]'));
		for (const $item of $items) {
			const id = (Math.random() + 1).toString(36).substring(2, 5);
			$item.setAttribute('tabindex', 0);
			$item.setAttribute('focusbox-item', id);
			$item.onmouseover = handleHover;
			$item.onblur = removeClassesFromUnfocusedElements;
			$item.onfocus = handleFocus;

			const $triggers = $item.querySelectorAll('[focusbox-item-trigger]');
			for (const $trigger of $triggers) {
				$trigger.setAttribute('focusbox-item-trigger', id);
				$trigger.onmousedown = handleClick;
			}
		}
		$focusbox.onmouseout = removeClassesFromUnfocusedElements;

		function isFocusInFocusbox() {
			const focusElement = document.activeElement;
			return Boolean($items.includes(focusElement));
		}

		function findTargetByTrigger($trigger) {
			const id = $trigger.getAttribute('focusbox-item-trigger');
			return $items.find($item => $item.getAttribute('focusbox-item') === id);
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
			const $trigger = event.currentTarget;
			const $target = findTargetByTrigger($trigger);
			if ($target === document.activeElement) { // If already focused, do nothing
				event.preventDefault();
				return;
			}

			if (isFocusInFocusbox()) { // Go back to hover states
				event.preventDefault();
				document.activeElement.blur();
				focusOn($target);
				return;
			}
		}

		function handleFocus(event) {
			focusOn(event.currentTarget);
		}

		function handleHover(event) {
			if (isFocusInFocusbox()) {
				return;
			}
			focusOn(event.currentTarget);
		}

		function removeClassesFromUnfocusedElements() {
			if (isFocusInFocusbox()) {
				return;
			}

			const $offItems = [...$items];
			$offItems.splice($offItems.indexOf(document.activeElement), 1);
			for (const $item of $items) {
				$item.classList.remove('focus--off');
				$item.classList.remove('focus--on');
			}
		}

		function turnOff($target) {
			$target.classList.remove('focus--on');
			$target.classList.add('focus--off');
		}

		function turnOn($target) {
			$target.classList.add('focus--on');
			$target.classList.remove('focus--off');
		}
	}
}
