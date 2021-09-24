import { k } from './../kaboom.js';
import input from './../input.js';
import { handleOut } from './../events/out.js';

const maxShipSpeed = 200;

export const createShip = () => {
	const ship = k.add([
		k.sprite("ship"),
		k.pos(k.width() / 2, k.height() / 2),
		k.area(),
		k.origin("center"),
		k.rotate(0),
		k.health(3),
		"ship",
		{
			speed: 0,
			angle: 0,
			isAccelerating: false,
			rotatingAngle: ''
		},
		handleOut()
	]);

	const handleMovementInputSpeed = () => {
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

	const handleMovementInputRotation = () => {
		if (input.rotatingAngle === 'right') {
			ship.angle += 100 * k.dt();
		} else if (input.rotatingAngle === 'left') {
			ship.angle -= 100 * k.dt();
		}
	};

	const handleMoving = () => {
		ship.move(k.dir(ship.angle - 90).scale(ship.speed));
	};

	ship.action(() => {
		handleMovementInputSpeed();
		handleMovementInputRotation();
		handleMoving();
	});
}
