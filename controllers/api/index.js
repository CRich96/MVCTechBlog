const router = require('express').Router();

const apiRoutes = require('../api');

const userRoutes = require('../api/user-routes');
const postRoutes = require('../api/post-routes');
const commentRoutes = require('../api/comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;