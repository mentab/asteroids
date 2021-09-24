import { k } from './../kaboom.js';

const handleShipCollision = (ship, asteroid) => {
	ship.hurt(1);
};

const handleAsteroidCollision = (asteroid, laser) => {
	asteroid.hurt(1);
};

const handleShipHurt = (ship, asteroid) => {
	console.log('ship hurt');
};

const handleAsteroidHurt = (asteroid, laser) => {
	console.log('asteroid hurt');
};

const handleShipDeath = (ship, asteroid) => {
	console.log('ship death');
};

const handleAsteroidDeath = (asteroid, laser) => {
	console.log('asteroid death');
};

export const addCollisionEvents = () => {
	k.collides("ship", "asteroid", handleShipCollision);
	k.collides("asteroid", "laser", handleAsteroidCollision);
	k.on("hurt", "ship", handleShipHurt);
	k.on("hurt", "asteroid", handleAsteroidHurt);
	k.on("death", "ship", handleShipDeath);
	k.on("death", "asteroid", handleAsteroidDeath);
};
