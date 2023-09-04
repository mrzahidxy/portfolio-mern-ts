const express = require("express");
const multer = require("multer");
const Portfolio = require("../models/portfolio");
const {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} = require("firebase/storage");
const storage = require("../firebase");

const router = express.Router();
const maxFileSize = 5 * 1024 * 1024; // 5MB

function getObjectPathFromUrl(url) {
  const startIndex = url.indexOf("/o/") + 3; // +3 to skip "/o/"
  const endIndex = url.indexOf("?"); // Index of the "?" character

  if (startIndex !== -1 && endIndex !== -1) {
    const objectPath = url.substring(startIndex, endIndex);
    return objectPath;
  } else {
    return null; // Invalid URL format
  }
}

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

// Update an existing portfolio item
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const img = req.file;
    const portfolioItemId = req.params.id;

    // First, delete the old image from Firebase Storage (if it exists)
    const existingPortfolioItem = await Portfolio.findById(portfolioItemId);
    if (existingPortfolioItem) {
      // Extract the filename from the existing image URL
      const existingImageRef = ref(
        storage,
        getObjectPathFromUrl(existingPortfolioItem.img)
      );

      // Delete the existing image
      try {
        await deleteObject(existingImageRef);
      } catch (error) {
        console.error("Error deleting existing image:", error);
      }
    }

    // Upload the new image to Firebase Storage
    if (img) {
      const filename = `${Date.now()}_${img.originalname}`;
      const fileRef = ref(storage, filename);
      await uploadBytes(fileRef, img.buffer);
      const imageUrl = await getDownloadURL(fileRef);

      // Update the portfolio item in the database with the new image URL
      const updatedPortfolioItem = await Portfolio.findByIdAndUpdate(
        portfolioItemId,
        {
          title,
          description,
          img: imageUrl,
          link,
        },
        { new: true }
      );

      res.status(200).json(updatedPortfolioItem);
    } else {
      // If no new image is provided, update the portfolio item without changing the image
      const updatedPortfolioItem = await Portfolio.findByIdAndUpdate(
        portfolioItemId,
        {
          title,
          description,
          link,
        },
        { new: true }
      );

      res.status(200).json(updatedPortfolioItem);
    }
  } catch (error) {
    console.error("Error updating portfolio item:", error);
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
