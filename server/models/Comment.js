const { Schema } = require("mongoose");

const commentSchema = ({
    commentBody: {
        type: String,
        required: true,
        maxLength: 4000
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now
    }
});

module.exports = commentSchema;
