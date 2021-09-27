import { k } from './../kaboom.js';
import input from './../input.js';
import { handleOut } from './../events/out.js';

const bulletSpeed = 600;

export const createLaser = (pos, angle) => {
	const laser = k.add([
		k.sprite("effect_yellow", {width: 15}),
		k.pos(pos.x, pos.y),
		k.area(),
		k.origin("center"),
		k.rotate(angle),
		k.health(1),
		k.cleanup(),
		"laser",
		k.move(angle - 90, bulletSpeed),
		k.z(998)
	]);
}
