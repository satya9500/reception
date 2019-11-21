const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
const request = require("request");

router.post("/users", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
  next();
});

router.post("/checkout", async (req, res, next) => {
  try {
    const email = req.body.email;
    let user = await User.findOne({ email });
    if (user) {
      user.checkout = Date.now();
      await user.save();
      const url = `https://us-central1-cloud-fbef8.cloudfunctions.net/sendMail?dest=${user.email}&&name=${user.name}&&email=${user.email}&&phone=${user.phone}&&checkin=${user.checkin}&&address=${user.address}&&checkout=${user.checkout}`;
      await request(url, function(err, res, body) {
        console.log("Checked Out");
      });
      res.send(user);
    } else {
      console.log("Email Address Not Found");
    }
  } catch (error) {
    console.log(error);
  }
  next();
});

module.exports = router;
