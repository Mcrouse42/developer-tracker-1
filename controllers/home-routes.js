const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Skills  } = require('../models');
const withAuth = require('../utils/auth');

//homepage route
router.get("/", withAuth, (req, res) => {
  Skills.findAll({
    where: {
      user_id: req.session.user_id
    }
  })
  .then(dbSkillsData => {
    const skills = dbSkillsData.map(skill => skill.get({ plain: true }));
    res.render('homepage', {
      skills,
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