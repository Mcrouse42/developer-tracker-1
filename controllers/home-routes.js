const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Skills  } = require('../models');

//homepage route
router.get("/", (req, res) => {
  Skills.findAll()
  .then(dbSkillsData => {
    const skills = dbSkillsData.map(skill => skill.get({ plain: true }));
    res.render("homepage", {
    skills,
    // created_at: new Date(),
    loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
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