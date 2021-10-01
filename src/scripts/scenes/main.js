import { k } from './../kaboom.js';
import { config } from './../config.js';
import { addLayers } from "./../layers.js";
import { initializeUi } from "./../ui.js";
import { addCollisionEvents } from "./../events/collision.js";
import { startLevels } from './../levels/index.js';
import { handleInputs } from './../input.js';
import { addBackgrounds } from './../layers.js';

export const main = () => {
    addLayers();
    addBackgrounds();
    initializeUi();
    addCollisionEvents();
    startLevels();
	handleInputs();

	k.focus();
};
