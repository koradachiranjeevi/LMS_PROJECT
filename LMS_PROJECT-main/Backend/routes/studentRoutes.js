const express = require("express");

const router = express.Router();

const {
  studentSignup,
  studentLogin
} = require("../controllers/studentController.js");

router.post("/signup", studentSignup);

router.post("/login", studentLogin);

module.exports = router;