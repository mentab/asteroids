import { k } from './../kaboom.js';
import input from './../input.js';
import { handleOut } from './../events/out.js';

const bulletSpeed = 500;

export const createLaser = (ship) => {
	const laser = k.add([
		k.sprite("effect_yellow", {width: 15, height: 50}),
		k.pos(ship.pos.x, ship.pos.y),
		k.area(),
		k.layer("game"),
		k.origin("center"),
		k.rotate(ship.angle),
		k.health(1),
		k.cleanup(),
		"laser",
		k.move(ship.angle - 90, bulletSpeed),
		k.z(998)
	]);
}
