import { k } from './../kaboom.js';
import { config } from './../config.js';
import { createShip } from './../objects/ship.js';
import { createLargeAsteroid } from './../objects/asteroid.js';
import { handleInputs } from './../input.js';

export const main = () => {
	createShip();
	createLargeAsteroid();
	handleInputs();
	k.focus();
};
