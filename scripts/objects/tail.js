import { k } from './../kaboom.js';
import input from './../input.js';
import { handleOut } from './../events/out.js';

export const createTail = (ship) => {
	const tail = k.add([
		k.sprite("effect_yellow", {width: 30, height: ship.speed / 10 + k.rand(15, 20)}),
		k.pos(ship.pos),
		k.layer("game"),
		k.origin("top"),
		k.rotate(ship.angle),
		k.lifespan(.05),
		k.z(997)
	]);
}
