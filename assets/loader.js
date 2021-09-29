import { k } from './../scripts/kaboom.js';

export const loadAssets = () => {
	k.loadSprite("ship", "./assets/sprites/ship_L.png");
	k.loadSprite("asteroid_detailed_large", "./assets/sprites/meteor_detailedLarge.png");
	k.loadSprite("asteroid_detailed_small", "./assets/sprites/meteor_detailedSmall.png");
	k.loadSprite("asteroid_large", "./assets/sprites/meteor_large.png");
	k.loadSprite("asteroid_small", "./assets/sprites/meteor_small.png");
	k.loadSprite("asteroid_square_large", "./assets/sprites/meteor_squareLarge.png");
	k.loadSprite("asteroid_square_small", "./assets/sprites/meteor_squareSmall.png");
	k.loadSprite("asteroid_square_detailed_large", "./assets/sprites/meteor_squareDetailedLarge.png");
	k.loadSprite("asteroid_square_detailed_small", "./assets/sprites/meteor_squareDetailedSmall.png");
	k.loadSprite("effect_yellow", "./assets/sprites/effect_yellow.png");
	k.loadSprite("star_large", "./assets/sprites/star_large.png");
	k.loadSprite("star_medium", "./assets/sprites/star_medium.png");
	k.loadSprite("star_small", "./assets/sprites/star_small.png");
	k.loadSprite("star_tiny", "./assets/sprites/star_tiny.png");
}
