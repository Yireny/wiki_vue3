var express = require('express');
var router = express.Router();
var post = require('../controller/posts')


router.get('/posts',post.posts)

router.post('/publish',post.publish)

router.post('/addView',post.addView)

router.post('/addPostReply',post.addReply)

router.post('/addPostLike',post.addLike)


module.exports = router;