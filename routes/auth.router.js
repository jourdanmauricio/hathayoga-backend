const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { config } = require('./../config/config');

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
      };
      const token = jwt.sign(payload, config.jwtSecret);
      const userResponse = JSON.parse(JSON.stringify(user));
      userResponse.token = token;
      res.json({
        user: userResponse,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
