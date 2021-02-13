const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const skillRoutes = require('./api/skills-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', skillRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;