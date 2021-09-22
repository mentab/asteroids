import k from '../kaboom.js';
import c from './../const.js';

export default function Main()
{
	const ship = k.add([
		k.sprite("ship", 32),
		k.pos(120, 80),
		k.area(),
		k.origin("center"),
		{
			dir: 0,
			speed: 200,
		},
	]);

	k.keyDown("space", () => {
		ship.move(k.dir(ship.dir).scale(ship.speed));
	});

	k.keyDown("left", () => {
		// ship.dir++;
		// ship.angle += 100 * k.dt();
	});

	k.keyDown("right", () => {
		// ship.dir--;
		// ship.angle += 100 * k.dt();
	});

	k.action(() => {
		// k.scale = k.wave(-5, 5, k.time());
		// ship.angle = k.time() * 60;
	});

	focus();
};
