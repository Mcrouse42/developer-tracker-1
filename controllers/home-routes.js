const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');


router.get("/", (req, res) => {
  res.render("homepage", {
    id: 1,
    skills: "JavaScript ",
    status: "In Progress ",
    // created_at: new Date(),
    user: {
      username: "test_user",
    },
  });
});



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




module.exports = router;