import { k } from './../kaboom.js';

export const addExplode = (p, n, rad, size) => {
	for (let i = 0; i < n; i++) {
		k.wait(k.rand(n * .05), () => {
			k.add([
				k.pos(p.add(k.rand(k.vec2(-rad), k.vec2(rad)))),
				k.rect(1, 1),
				k.scale(size, size),
				k.outline(2, k.rgb(207, 207, 219)),
				k.lifespan(.1),
				k.origin("center")
			]);
		});
	}
};
