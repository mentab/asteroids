import { k } from './kaboom.js';
import { loadScenes } from './scenes/loader.js';
import { loadAssets } from './../assets/loader.js';

loadScenes();
loadAssets();

k.go("menu");
