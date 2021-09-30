import { k } from './../kaboom.js';
import input from './../input.js';
import { handleOut } from './../events/out.js';

const cornerMargin = 25;

const startingPos = [
	k.vec2(0, k.rand(0 + cornerMargin, k.height() - cornerMargin)),
	k.vec2(k.width(), k.rand(0 + cornerMargin, k.height() - cornerMargin)),
	k.vec2(k.rand(0 + cornerMargin, k.width() - cornerMargin), 0),
	k.vec2(k.rand(0 + cornerMargin, k.width() - cornerMargin), k.height())
];

export const createAsteroid = (size, pos) => {
	pos = pos ?? startingPos[Math.floor(Math.random() * startingPos.length)];

	const asteroid = k.add([
		k.sprite("asteroid_" + k.choose(['detailed_', 'square_', 'square_detailed_', '']) + size),
		k.pos(pos.x, pos.y),
		k.area(),
		k.layer("game"),
		k.origin("center"),
		k.rotate(0),
		k.health(1),
		"asteroid",
		{
			speed: 100,
			angle: k.rand(0, 360),
			dir: k.rand(0, 360),
			size: size,
			rotationSpeed: k.rand(50, 150)
		},
		handleOut(),
		k.area({ scale: .5 })
	]);

	asteroid.action(() => {
		asteroid.angle += asteroid.rotationSpeed * k.dt();
		asteroid.move(k.dir(asteroid.dir).scale(asteroid.speed));
	});

	return asteroid;
}
