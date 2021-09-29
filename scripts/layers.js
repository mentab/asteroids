import { k } from './kaboom.js';

export const addLayers = () => {
	k.layers([
		"bg",
		"game",
		"ui",
	], "game");
};

export const addBackgrounds = () => {
	Array.from(Array(4)).forEach(() => addStar(k.rand(0, k.width())));

	k.loop(1, () => {
		addStar();
	});
};

const addStar = (posx = k.width()) => {
	k.add([
		k.sprite(k.choose(['star_large', 'star_medium', 'star_small', 'star_tiny'])),
		k.pos(posx, k.rand(0, k.height())),
		k.layer('bg'),
		k.move(k.LEFT, k.rand(50, 150)),
		k.area(),
		k.cleanup(),
		k.opacity(.5),
		k.color(255, k.rand(200, 255), k.rand(0, 205)),
		k.scale(.5)
	]);
};
