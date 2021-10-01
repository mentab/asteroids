import { k } from './../kaboom.js';

import { menu } from './menu.js';
import { main } from './main.js';
import { death } from './death.js';

export const loadScenes = () => {
	k.scene("menu", menu);
	k.scene("main", main);
	k.scene("death", death);
}
