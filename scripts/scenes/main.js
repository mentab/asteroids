import { k } from './../kaboom.js';
import { config } from './../config.js';
import { createShip } from './../objects/ship.js';
import { handleInputs } from './../input.js';

export const main = () => {
	createShip();
	handleInputs();
	k.focus();
};
