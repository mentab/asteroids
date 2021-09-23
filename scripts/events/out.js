import { k } from './../kaboom.js';

export const handleOut = () => {
	return {
		id: "handleout",
		require: [ "pos" ],
		update() {
			const spos = this.screenPos();

			if (spos.x < 0) {
				this.pos.x = k.width();
			} else if (spos.x > k.width()) {
				this.pos.x = 0;
			}

			if (spos.y < 0) {
				this.pos.y = k.height();
			} else if (spos.y > k.height()) {
				this.pos.y = 0;
			}
		},
	};
}
