export const debounce = (fn, delay) => {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		// Используем .apply() для передачи контекста this и аргументов
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};
