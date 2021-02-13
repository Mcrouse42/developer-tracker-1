const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Skills } = require('../../models/');
const withAuth = require('../../utils/auth');
const { post } = require('./user-routes');

// get all skills
router.get('/skill', (req, res) => {
    Skills.findAll()
    .then(dbSkillsData => res.json(dbSkillsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one skill (not sure if we will need this?)



// post new skill
// need to add withAuth as param, and if (req.session) before function
router.post('/', (req, res) => {
    Skills.create({
        title: req.body.title,
        status: req.body.status
    })
    .then(dbSkillsData => res.json(dbSkillsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// put (edit) skill


// delete skill


module.exports = router;
