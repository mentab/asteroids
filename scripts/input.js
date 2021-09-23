import { k } from './kaboom.js';

const input = {
	isAccelerating: false,
	rotatingDir: ''
};

export default input;

export const handleInputs = () => {
	k.keyDown("space", () => {
		input.isAccelerating = true;
	});

	k.keyRelease("space", () => {
		input.isAccelerating = false;
	});

	k.keyDown("left", () => {
		input.rotatingDir = 'left';
	});

	k.keyRelease("left", () => {
		input.rotatingDir = '';
	});

	k.keyDown("right", () => {
		input.rotatingDir = 'right';
	});

	k.keyRelease("right", () => {
		input.rotatingDir = '';
	});
};
