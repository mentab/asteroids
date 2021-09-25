import { k } from './../kaboom.js';
import { createShip } from './../objects/ship.js';
import { generateAsteroidWave } from './../levels/utils.js';

export const startLevels = () => {
	createShip();
	startLevel(1);
};

export const startLevel = (number) => {
	generateAsteroidWave(number);
};
