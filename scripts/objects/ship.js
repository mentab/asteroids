import { k } from './../kaboom.js';
import input from './../input.js';
import { handleOut } from './../events/out.js';

export const createShip = () => {
	const ship = k.add([
		k.sprite("ship", 32),
		k.pos(320, 240),
		k.area(),
		k.origin("center"),
		k.rotate(0),
		{
			speed: 0,
			angle: 0,
			isAccelerating: false,
			rotatingDir: ''
		},
		handleOut()
	]);

	ship.action(() => {
		if (input.isAccelerating && ship.speed < 200) {
			ship.speed += 100 * k.dt();
		} else if (!input.isAccelerating && ship.speed > 0) {
			ship.speed -= 100 * k.dt();
		}

		if (input.rotatingDir === 'right') {
			ship.angle += 100 * k.dt();
		} else if (input.rotatingDir === 'left') {
			ship.angle -= 100 * k.dt();
		}

		ship.move(k.dir(ship.angle - 90).scale(ship.speed));
	});
}
