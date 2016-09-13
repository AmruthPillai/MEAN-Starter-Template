var path = require('path');
var Post = require('./models/post');

module.exports = function (app) {
    // ==========
    // Backend Routes
    // ==========
    // Route to get all Posts
    app.get('/api/posts', function (req, res) {
        Post.find(function (err, posts) {
            if (err) {
                res.send(err);
            }

            res.json(posts);
        });
    });

    // ==========
    // Frontend Routes
    // ==========
    // Route to Handle All Angular Requests
    app.get('*', function (req, res) {
        res.sendFile(path.resolve('public/views/index.html'));
    });
};