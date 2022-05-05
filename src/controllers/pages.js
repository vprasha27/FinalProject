const express = require("express");
const router = express.Router();
const PUBLISHABLE_KEY = "pk_test_Wl2rlrhGcvRBzUSYmAK7FhSE00nHDHsr3N"

router.get("/", (req, res) => {
    res.render("home");
  
});

router.get("/registration", (req, res) => {
    res.render("registeration");
  
});

router.get("/login", (req, res) => {
    res.render("login");
  
});

router.get("/signup", (req, res) => {
    res.render("signup");
  
});



router.get("/admin", (req, res) => {
    res.render("admin");
  
});

router.get("/profile", (req, res) => {
    res.render("profile");
  
});

router.get("/main", (req, res) => {
    res.render("main");
  
});

router.get("/host", (req, res) => {
    res.render("host");
  
});

router.get("/hostcar", (req, res) => {
    res.render("hostcar");
  
});

module.exports = router;