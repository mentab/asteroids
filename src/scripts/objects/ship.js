import { k } from './../kaboom.js';
import input from './../input.js';
import { handleOut } from './../events/out.js';
import { createLaser } from './laser.js';
import { createTail } from './tail.js';

const maxShipSpeed = 200;
const delayBetweenShots = .25;

export const createShip = () => {
	const ship = k.add([
		k.sprite("ship"),
		k.pos(k.width() / 2, k.height() / 2),
		k.area(),
		k.layer("game"),
		k.origin("center"),
		k.rotate(0),
		k.health(3),
		"ship",
		{
			speed: 0,
			angle: 0,
			isAccelerating: false,
			rotatingAngle: '',
			isShooting: false,
			invulnerable: false,
			sound: k.play("vehicle", {
				volume: .2,
				loop: true
			})
		},
		handleOut(),
		k.z(999),
		k.area({ scale: .25 })
	]);

	const handleSpeedInput = () => {
		if (input.isAccelerating && ship.speed < maxShipSpeed) {
			ship.speed += 100 * k.dt();
		} else if (!input.isAccelerating) {
			if (ship.speed > 0) {
				ship.speed -= 100 * k.dt();
			} else {
				ship.speed = 0;
			}
		}
	};

	const handleRotationInput = () => {
		if (input.rotatingAngle === 'right') {
			ship.angle += 100 * k.dt();
		} else if (input.rotatingAngle === 'left') {
			ship.angle -= 100 * k.dt();
		}
	};


	const handleShootingInput = () => {
		if (input.isShooting && !ship.isShooting) {
			createLaser({...ship});
			ship.isShooting = true;
			k.wait(delayBetweenShots, () => {
				ship.isShooting = false;
			});
		}
	};

	const handleMoving = () => {
		ship.move(k.dir(ship.angle - 90).scale(ship.speed));
	};

	const handleSound = () => {
		ship.sound.detune(ship.speed * 4 - maxShipSpeed * 2);
	};

	ship.action(() => {
		handleSpeedInput();
		handleRotationInput();
		handleShootingInput();
		handleMoving();
		createTail(ship);
		handleSound();
	});
}
