import { k } from './kaboom.js';

const input = {
	isAccelerating: false,
	rotatingAngle: '',
	isShooting: false
};

export default input;

export const handleInputs = () => {
	k.keyDown("up", () => {
		input.isAccelerating = true;
	});

	k.keyRelease("up", () => {
		input.isAccelerating = false;
	});

	k.keyDown("left", () => {
		input.rotatingAngle = 'left';
	});

	k.keyRelease("left", () => {
		input.rotatingAngle = '';
	});

	k.keyDown("right", () => {
		input.rotatingAngle = 'right';
	});

	k.keyRelease("right", () => {
		input.rotatingAngle = '';
	});

	k.keyPress("space", () => {
		input.isShooting = true;
	});

	k.keyRelease("space", () => {
		input.isShooting = false;
	});
};
