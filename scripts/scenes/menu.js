import { k } from './../kaboom.js';
import { addLayers } from "./../layers.js";
import { handleInputs } from './../input.js';
import { goToMainScene } from './utils.js';

export const menu = () => {
	addLayers();
	handleInputs();

	k.add([
		k.text("Asteroidz", {size: 30}),
		k.layer("ui"),
		k.pos(k.width() / 2, k.height() / 2),
		k.origin("center")
	]);

	k.add([
		k.text('Press Spacebar to Start', {size: 16}),
		k.layer('ui'),
		k.pos(k.width() / 2, k.height() / 2 + 100),
		k.origin('center')
	]);

	k.focus();

	goToMainScene();
};
