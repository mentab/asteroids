import { k } from './../scripts/kaboom.js';

export const loadAssets = () => {
	k.loadSprite("ship", "./src/assets/sprites/ship_L.png");
	k.loadSprite("asteroid_detailed_large", "./src/assets/sprites/meteor_detailedLarge.png");
	k.loadSprite("asteroid_detailed_small", "./src/assets/sprites/meteor_detailedSmall.png");
	k.loadSprite("asteroid_large", "./src/assets/sprites/meteor_large.png");
	k.loadSprite("asteroid_small", "./src/assets/sprites/meteor_small.png");
	k.loadSprite("asteroid_square_large", "./src/assets/sprites/meteor_squareLarge.png");
	k.loadSprite("asteroid_square_small", "./src/assets/sprites/meteor_squareSmall.png");
	k.loadSprite("asteroid_square_detailed_large", "./src/assets/sprites/meteor_squareDetailedLarge.png");
	k.loadSprite("asteroid_square_detailed_small", "./src/assets/sprites/meteor_squareDetailedSmall.png");
	k.loadSprite("effect_yellow", "./src/assets/sprites/effect_yellow.png");
	k.loadSprite("star_large", "./src/assets/sprites/star_large.png");
	k.loadSprite("star_medium", "./src/assets/sprites/star_medium.png");
	k.loadSprite("star_small", "./src/assets/sprites/star_small.png");
	k.loadSprite("star_tiny", "./src/assets/sprites/star_tiny.png");
	k.loadSound("explosion_soft", "./src/assets/sounds/sfx_exp_shortest_soft7.wav");
	k.loadSound("explosion_hard", "./src/assets/sounds/sfx_exp_shortest_hard5.wav");
	k.loadSound("laser", "./src/assets/sounds/sfx_wpn_laser8.wav");
	k.loadSound("vehicle", "./src/assets/sounds/sfx_vehicle_plainloop.wav");
}
