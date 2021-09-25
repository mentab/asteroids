import { k } from './../kaboom.js';

const handleShipCollision = (ship, asteroid) => {
	ship.hurt(1);
};

const handleAsteroidCollision = (asteroid, laser) => {
	asteroid.hurt(1);
};

const handleShipHurt = (ship, asteroid) => {
};

const handleAsteroidHurt = (asteroid, laser) => {
};

const handleShipDeath = (ship, asteroid) => {
	ship.destroy();
};

const handleAsteroidDeath = (asteroid, laser) => {
	asteroid.destroy();
};

export const addCollisionEvents = () => {
	k.collides("ship", "asteroid", handleShipCollision);
	k.collides("asteroid", "laser", handleAsteroidCollision);
	k.on("hurt", "ship", handleShipHurt);
	k.on("hurt", "asteroid", handleAsteroidHurt);
	k.on("death", "ship", handleShipDeath);
	k.on("death", "asteroid", handleAsteroidDeath);
};
