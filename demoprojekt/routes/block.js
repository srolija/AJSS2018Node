const express = require('express');
const router = express.Router();


/**
 * GET color blocks
 * route: /block/rgbMatrix
 * returns: [[colorHex]]
 */
router.get('/rgbMatrix', async (req, res, next) => {
	res.json([['000000']])
});

/**
 * POST
 * description: Colors the defined block with given color
 * route: /block/color
 * body: { x: number, y: number, color: string }
 * color example: 'FFFFFF'
 */


module.exports = router;
