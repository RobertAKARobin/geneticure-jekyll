window.onload = () => {
	focusboxSetup();
	imageShapeSetup();
	toggleSetup();
}

function imageShapeSetup() {
	const $images = Array.from(document.querySelectorAll('img[data-shape]'));
	window.addEventListener('resize', setImageDimensions);
	setImageDimensions();

	function setImageDimensions() {
		for (const $image of $images) {
			setImageDimensionsOnce($image);
		}
	}

	function setImageDimensionsOnce($image) {
		$image.style.removeProperty('height');
		$image.style.removeProperty('width');

		const { naturalWidth, naturalHeight } = $image;
		const naturalConstraint = Math.min(naturalWidth, naturalHeight);

		const { width, height } = $image.getBoundingClientRect();
		let constraint = Math.min(width, height);
		if (constraint < naturalConstraint) {
			constraint = Math.max(width, height);
		}
		constraint += 'px'; 
		$image.style.height = constraint;
		$image.style.width = constraint;
		$image.setAttribute('data-shape-set', 1);
	}
}

function toggleSetup() {
	const CLASS_ON = 'toggle--on';

	const $toggles = Array.from(document.querySelectorAll('[data-toggle-target]'));
	const $triggers = Array.from(document.querySelectorAll('[data-toggle-trigger]'));

	for (const $trigger of $triggers) {
		$trigger.onclick = handleClick;
	}

	function handleClick(event) {
		const $targetTrigger = event.currentTarget;
		const targetId = $targetTrigger.getAttribute('data-toggle-trigger');
		let isTurnOn = null;

		for (const $trigger of $triggers) {
			const triggerId = $trigger.getAttribute('data-toggle-trigger');
			if (triggerId === targetId) {
				if (isTurnOn === null) {
					isTurnOn = $trigger.classList.contains(CLASS_ON);
				}
				if (isTurnOn) {
					turnOff($trigger);
				} else {
					turnOn($trigger);
				}
			}
		}
	
		for (const $toggle of $toggles) {
			const toggleId = $toggle.getAttribute('data-toggle-target');
			if (toggleId === targetId) {
				if (isTurnOn) {
					turnOff($toggle);
				} else {
					turnOn($toggle);
				}
			}
		}
	}

	function turnOff($target) {
		$target.classList.remove(CLASS_ON);
	}

	function turnOn($target) {
		$target.classList.add(CLASS_ON);
	}
}

function focusboxSetup() {
	const $focusboxes = Array.from(document.querySelectorAll('[data-focusbox]'));
	for (const $focusbox of $focusboxes) {
		setListeners($focusbox);
	}

	function setListeners($focusbox) {
		const $items = Array.from($focusbox.querySelectorAll('[data-focusbox-item]'));
		for (const $item of $items) {
			const id = (Math.random() + 1).toString(36).substring(2, 5);
			$item.setAttribute('tabindex', 0);
			$item.setAttribute('data-focusbox-item', id);
			$item.onmouseover = handleHover;
			$item.onblur = handleBlur;
			$item.onfocus = handleFocus;

			const $triggers = $item.querySelectorAll('[data-focusbox-item-trigger]');
			for (const $trigger of $triggers) {
				$trigger.setAttribute('data-focusbox-item-trigger', id);
				$trigger.onmousedown = handleClick;
			}
		}
		$focusbox.onmouseout = removeClassesFromUnfocusedElements;

		function isFocusInFocusbox() {
			const focusElement = document.activeElement;
			return Boolean($focusbox.contains(focusElement));
		}

		function findTargetByTrigger($trigger) {
			const id = $trigger.getAttribute('data-focusbox-item-trigger');
			return $items.find($item => $item.getAttribute('data-focusbox-item') === id);
		}

		function focusOn($target) {
			const $notTargets = [...$items];
			$notTargets.splice($notTargets.indexOf($target), 1);

			for (const $item of $notTargets) {
				turnOff($item);
			}
			turnOn($target);
		}

		function handleBlur(event) {
			const $target = event.currentTarget;
			const $focus = event.relatedTarget;
			if ($target.contains($focus)) {
				turnOn($target);
			} else {
				removeClassesFromUnfocusedElements();
			}
		}

		function handleClick(event) {
			const $trigger = event.currentTarget;
			const $target = findTargetByTrigger($trigger);
			const $focus = document.activeElement;
			if ($target === $focus || $target.contains($focus)) { // If already focused, do nothing
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
