const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    img: String,
    liveLink: String,
    githubLink: String,
  },
  { timestamps: true, collection: "portfolio" }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
