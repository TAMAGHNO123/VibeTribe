const express = require('express');
const jwt = require('jsonwebtoken'); // Added jwt import
const Post = require('../models/post.model');
const router = express.Router();

// Middleware to authenticate the user
const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Ensure payload has 'user'
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

// Create a new post
router.post('/', authMiddleware, async (req, res) => {
    const { content } = req.body;

    try {
        const post = new Post({
            content,
            user: req.user.id, // Associate post with the user
        });

        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username');
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;