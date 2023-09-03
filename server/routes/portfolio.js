const express = require("express");
const multer = require("multer");
const Portfolio = require("../models/portfolio");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const storage = require("../firebase");

const router = express.Router();
const maxFileSize = 5 * 1024 * 1024; // 5MB

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxFileSize },
});

// Uploads an image to Firebase Storage and creates a portfolio item
const uploadImageAndCreatePortfolio = async (img, title, description, link) => {
  const filename = `${Date.now()}_${img.originalname}`;
  const fileRef = ref(storage, filename);

  await uploadBytes(fileRef, img.buffer);
  const imageUrl = await getDownloadURL(fileRef);

  return new Portfolio({
    title,
    description,
    img: imageUrl, // Use the Firebase Storage URL as the image URL
    link,
  }).save();
};

// Create a new portfolio item
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const img = req.file;

    if (!img) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const createdPortfolio = await uploadImageAndCreatePortfolio(
      img,
      title,
      description,
      link
    );

    res.status(201).json(createdPortfolio);
  } catch (error) {
    console.error("Error creating portfolio item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find();
    res.status(200).json(portfolioItems);
  } catch (error) {
    console.error("Error retrieving portfolio items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
