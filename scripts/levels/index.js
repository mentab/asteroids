import { k } from './../kaboom.js';
import { createShip } from './../objects/ship.js';
import { generateAsteroidWave } from './../levels/utils.js';

const numberOfLevels = 10;

let currentLevel = 0;

export const startLevels = () => {
	createShip();
	startLevel();
};

export const startLevel = () => {
	generateAsteroidWave();
};
