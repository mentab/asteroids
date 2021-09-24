import { k } from './../kaboom.js';
import { config } from './../config.js';
import { addCollisionEvents } from "./../events/collision.js";
import { startLevels } from './../levels/index.js';
import { handleInputs } from './../input.js';

export const main = () => {
    addCollisionEvents();
    startLevels();
	handleInputs();

	k.focus();
};
