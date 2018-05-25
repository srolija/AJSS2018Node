const rgbHex = require('rgb-hex');

const BlockViewModel = (blocks) => {

	let elements = [];

	(blocks || []).forEach((_block) => {
		if (!elements[_block.x]) {
			elements[_block.x] = [];
		}
		elements[_block.x][_block.y] = _block.color;
	});

	for (let i = 0; i < 5; i++) {
		if (!elements[i]) {
			elements[i] = [];
		}
		for (let j = 0; j < 5; j++) {
			elements[i][j] = (elements[i][j])
				? elements[i][j]
				: rgbHex(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
		}
	}

	return elements;
}

module.exports = BlockViewModel;