import { k } from './../kaboom.js';
import { createShip } from './../objects/ship.js';
import { createLargeAsteroid } from './../objects/asteroid.js';

export const startLevels = () => {
	createShip();
	startLevel();
};

export const startLevel = () => {
	createLargeAsteroid();
};
