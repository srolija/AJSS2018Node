const express = require('express');
const router = express.Router();

const Block = require('../models/block.model');

const BlockViewModel = require('../viewModels/block.viewModel');

/**
 * GET color blocks
 * route: /block/rgbMatrix
 * returns: [[colorHex]]
 */
router.get('/rgbMatrix', async (req, res, next) => {
  const elements = await Block.find({ x: { $lt: 5 }, y: { $lt: 5 } });

  res.json(BlockViewModel(elements));

});

/**
 * POST
 * description: Colors the defined block with given color
 * route: /block/color
 * body: { x: number, y: number, color: string }
 * color example: 'FFFFFF'
 */
router.post('/color', async (req, res, next) => {
  const { x, y, color } = req.body;

  let element = await Block.findOne({ x, y });

  if (!element) {
    element = new Block({ x, y, color });
    await element.save();
  } else {
    element.color = color;
    await element.save();
  }

  res.sendStatus(200);

});

module.exports = router;
