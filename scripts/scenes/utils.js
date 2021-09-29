import { k } from './../kaboom.js';
import input from './../input.js';

export const goToMainScene = () => {
	let hasStarted = false;

	k.action(() => {
		if (input.isShooting && !hasStarted) {
			setTimeout(() => k.go('main'), 200);
			hasStarted = true;
		}
	});
};
