import { k } from './kaboom.js';
import { main } from './scenes/main.js';
import { loadAssets } from './../assets/loader.js';

k.scene("main", main);

loadAssets();

k.go("main");
