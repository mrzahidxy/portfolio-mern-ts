const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);