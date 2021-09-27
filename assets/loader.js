import { k } from './../scripts/kaboom.js';

export const loadAssets = () => {
	k.loadSprite("ship", "./assets/sprites/ship_L.png");
	k.loadSprite("asteroid_large", "./assets/sprites/meteor_detailedLarge.png");
	k.loadSprite("asteroid_small", "./assets/sprites/meteor_detailedSmall.png");
	k.loadSprite("effect_yellow", "./assets/sprites/effect_yellow.png");
}
