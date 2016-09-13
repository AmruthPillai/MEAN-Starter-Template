// Require the Mongoose Module
var mongoose = require('mongoose');

// Define the Post Module
// module.exports allows us to pass this to other files when called
module.exports = mongoose.model('Post', {
    title: {
        type: String,
        default: ''
    },
    body: {
        type: String,
        default: ''
    }
});