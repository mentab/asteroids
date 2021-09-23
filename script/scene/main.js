import k from '../kaboom.js';
import c from './../const.js';

export default function Main()
{
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
	]);

	ship.action(() => {
		if (ship.isAccelerating && ship.speed < 200) {
			ship.speed += 100 * k.dt();
		} else if (!ship.isAccelerating && ship.speed > 0) {
			ship.speed -= 100 * k.dt();
		}

		if (ship.rotatingDir === 'right') {
			ship.angle += 100 * k.dt();
		} else if (ship.rotatingDir === 'left') {
			ship.angle -= 100 * k.dt();
		}

		ship.move(k.dir(ship.angle - 90).scale(ship.speed));
	});

	k.keyDown("space", () => {
		ship.isAccelerating = true;
	});

	k.keyRelease("space", () => {
		ship.isAccelerating = false;
	});

	k.keyDown("left", () => {
		ship.rotatingDir = 'left';
	});

	k.keyRelease("left", () => {
		ship.rotatingDir = '';
	});

	k.keyDown("right", () => {
		ship.rotatingDir = 'right';
	});

	k.keyRelease("right", () => {
		ship.rotatingDir = '';
	});

	k.action(() => {

	});

	k.focus();
};
