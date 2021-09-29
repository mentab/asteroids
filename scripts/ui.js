import { k } from './kaboom.js';
import { config } from './config.js'

let ui = {
	score: null,
	lives: null,
	level: null
}

export const initializeUi = () => {
	ui.score = k.add([
		k.text("Score: 0", {size: 20}),
		k.layer("ui"),
		k.pos(20, 20),
		{
			value: 0,
		}
	]);

	ui.lives = k.add([
		k.text("Lives: " + config.lives, {size: 20}),
		k.layer("ui"),
		k.pos(20, 40),
		{
			value: config.lives,
		}
	]);

	ui.level = k.add([
		k.text("Level: 0", {size: 20}),
		k.layer("ui"),
		k.pos(20, 60),
		{
			value: 0,
		}
	]);
};

export const addScore = () => {
	ui.score.value++;
	ui.score.text = "Score:" + ui.score.value;
};

export const removeLives = () => {
	ui.lives.value--;
	ui.lives.text = "Lives:" + ui.lives.value;
};

export const addLevel = () => {
	ui.level.value++;
	ui.level.text = "Level:" + ui.level.value;
};
