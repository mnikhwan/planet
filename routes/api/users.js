const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const app = express();
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ nisn: req.body.nisn, email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ nisn: "NISN already exists" });
    } else if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        nisn: req.body.nisn,
        sekolah: req.body.sekolah,
        email: req.body.email,
        password: req.body.password,
        skorlatihan: 0,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/Alluserdata
// @desc Login user and return JWT token
// @access Public
router.post("/alluserdata", async (req, res) => {
  try {
    const alluser = await User.find({});
    console.log(alluser);
    res.send({ status: "ok", data: alluser });
  } catch (error) {
    console.log(error);
  }
});



// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const nisn = req.body.nisn;
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ nisn, email }).then((user) => {
    // Check if user exists
    if (!user.nisn) {
      return res.status(404).json({ nisnnotfound: "Nisn not found" });
    }
    if (!user.email) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          nisn: user.nisn,
          sekolah: user.sekolah,
          email: user.email,
          skorlatihan: user.skorlatihan,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
