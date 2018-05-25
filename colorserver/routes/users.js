const express = require('express');
const router = express.Router();

const User = require('../models/user.model');


const putFunction = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.sendStatus(400);
  }

  const existingUser = await User.findOne({name});
  if (existingUser) {
    return res.sendStatus(409);
  }

  const newUser = new User({ name });
  await newUser.save();
  
  res.sendStatus(200);
}

const logiranje = (req, res, next) => {
  console.log('pozivam neku funkciju');
  if (req.body.name) {
    next();
  } else {
    res.sendStatus(400);
  }
}

/**
 * PUT user
 * Creates user with a name
 * route: /user/
 * body: { name: string }
 */
router.put('/', logiranje, putFunction);

module.exports = router;
