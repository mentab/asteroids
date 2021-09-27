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

export const createLargeAsteroid = () => {
	const randomPos = startingPos[Math.floor(Math.random() * startingPos.length)];

	const asteroid = k.add([
		k.sprite("asteroid_large"),
		k.pos(randomPos.x, randomPos.y),
		k.area(),
		k.origin("center"),
		k.rotate(0),
		k.health(1),
		"asteroid",
		{
			speed: 100,
			angle: k.rand(0, 360),
			dir: k.rand(0, 360)
		},
		handleOut(),
		k.area({ scale: .5 })
	]);

	asteroid.action(() => {
		asteroid.angle += 100 * k.dt();
		asteroid.move(k.dir(asteroid.dir).scale(asteroid.speed));
	});

	return asteroid;
}
