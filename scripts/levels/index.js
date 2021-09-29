import { k } from './../kaboom.js';
import { createShip } from './../objects/ship.js';
import { generateAsteroidWave } from './../levels/utils.js';
import { addLevel } from './../ui.js';

export const startLevels = () => {
	createShip();
	startLevel(1);
};

export const startLevel = (number) => {
    addLevel();
	generateAsteroidWave(number);
};
