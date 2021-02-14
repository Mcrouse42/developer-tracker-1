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

// get one skill
router.get('/skill/:id', (req, res) => {
    Skills.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbSkillsData => res.json(dbSkillsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

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

// put request - edit skill







// delete skill
// need to add withAuth as param, and if (req.session) before function
router.delete('/skill/:id', (req, res) => {
  Skills.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbSkillsData => {
      if (!dbSkillsData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbSkillsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
