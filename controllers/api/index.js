const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/comments', commentRoutes);

router.use((req, res) => {
    res.status(404).end();
});



module.exports = router;