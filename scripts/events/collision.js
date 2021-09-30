import { k } from './../kaboom.js';
import { removeLives } from './../ui.js';
import { addScore } from './../ui.js';
import { createAsteroid } from './../objects/asteroid.js';
import { addExplode } from './utils.js';

const handleShipCollision = (ship, asteroid) => {
	if (!ship.invulnerable) {
		ship.hurt(1);
		removeLives();
		ship.invulnerable = true;
		ship.color = k.rgb('255', '255', '255');
		k.wait(1, () => ship.invulnerable = false);
	}
};

const handleAsteroidCollision = (asteroid, laser) => {
	asteroid.hurt(1);
	laser.hurt(1);
};

const handleShipHurt = (ship, asteroid) => {
	k.shake(20);
};

const handleAsteroidHurt = (asteroid, laser) => {
	k.shake(5);
};

const handleLaserHurt = (laser, asteroids) => {
};

const handleShipDeath = (ship, asteroid) => {
	ship.destroy();
	addExplode(k.center(), 200, 200, 50);
	k.wait(1, () => k.go('death'));
};

const handleAsteroidDeath = (asteroid, laser) => {
	asteroid.destroy();
	addScore();
	addExplode(asteroid.pos, 20, 20, 10);
	if (asteroid.size === 'large') {
		createAsteroid('small', asteroid.pos);
		createAsteroid('small', asteroid.pos);
	}
};

const handleLaserDeath = (laser, asteroid) => {
	laser.destroy();
};

export const addCollisionEvents = () => {
	k.collides("ship", "asteroid", handleShipCollision);
	k.collides("asteroid", "laser", handleAsteroidCollision);
	k.on("hurt", "ship", handleShipHurt);
	k.on("hurt", "asteroid", handleAsteroidHurt);
	k.on("hurt", "laser", handleLaserHurt);
	k.on("death", "ship", handleShipDeath);
	k.on("death", "asteroid", handleAsteroidDeath);
	k.on("death", "laser", handleLaserDeath);
};


