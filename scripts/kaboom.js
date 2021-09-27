import kaboom from './kaboom/kaboom.js';
import { config } from './config.js'

export const kaboomOptions = {
	global: false,
	width: config.width,
	height: config.height,
	clearColor: [ 32, 33, 37 ],
	debug: true
};

export const k = kaboom(kaboomOptions);


// k.debug.inspect = true;