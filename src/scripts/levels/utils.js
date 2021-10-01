import { k } from './../kaboom.js';
import { createAsteroid } from './../objects/asteroid.js';
import { startLevel } from './../levels/index.js';

export const generateAsteroidWave = (waveLength) => {
	return new Promise((resolve) => {
		let spawner = [];
		let killed = 0;

		while (waveLength > spawner.length) {
			spawner.push(createAsteroid('large'));
		}

		const handleDeath = () => {
			killed++;
			if (killed === waveLength) resolve(startLevel(waveLength + 1));
		};

		spawner.forEach(obj => obj.on("death", handleDeath));
	});
};
