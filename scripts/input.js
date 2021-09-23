import { k } from './kaboom.js';

const input = {
	isAccelerating: false,
	rotatingDir: ''
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
