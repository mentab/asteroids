import k from './kaboom.js';

import Main from './scene/main.js';

k.loadSprite("ship", "img/ship_L.png");

k.scene("main", Main);

k.go("main");
