const express = require("express");
const multer = require("multer");
const Portfolio = require("../models/portfolio");
const { ref, uploadBytes, getDownloadURL, deleteObject } = require("firebase/storage");
const storage = require("../firebase");

const router = express.Router();
const maxFileSize = 5 * 1024 * 1024; // 5MB

// Helper function to extract object path from URL
function getObjectPathFromUrl(url) {
  const startIndex = url.indexOf("/o/") + 3;
  const endIndex = url.indexOf("?");
  return (startIndex !== -1 && endIndex !== -1) ? url.substring(startIndex, endIndex) : null;
}

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxFileSize },
});

// Create a new portfolio item
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { body } = req;
    const img = req.file;

    console.log(req)

    if (!img) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const filename = `${Date.now()}_${img.originalname}`;
    const fileRef = ref(storage, filename);

    await uploadBytes(fileRef, img.buffer);
    const imageUrl = await getDownloadURL(fileRef);

    const createdPortfolio = await Portfolio.create({ ...body, img: imageUrl });

    res.status(201).json(createdPortfolio);
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update an existing portfolio item
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { body } = req;
    const img = req.file;
    const portfolioItemId = req.params.id;

    const existingPortfolioItem = await Portfolio.findById(portfolioItemId);
    if (existingPortfolioItem) {
      const existingImageRef = ref(storage, getObjectPathFromUrl(existingPortfolioItem.img));

      try {
        await deleteObject(existingImageRef);
      } catch (error) {
        console.error("Error deleting existing image:", error);
      }
    }

    if (img) {
      const filename = `${Date.now()}_${img.originalname}`;
      const fileRef = ref(storage, filename);
      await uploadBytes(fileRef, img.buffer);
      const imageUrl = await getDownloadURL(fileRef);

      const updateData = img ? { ...body, img: imageUrl } : body;
      const updatedPortfolioItem = await Portfolio.findByIdAndUpdate(portfolioItemId, updateData, { new: true });
      res.status(200).json(updatedPortfolioItem);
    } else {
      const updatedPortfolioItem = await Portfolio.findByIdAndUpdate(portfolioItemId, body, { new: true });
      res.status(200).json(updatedPortfolioItem);
    }
  } catch (error) {
    console.error("Error updating portfolio item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve all portfolio items
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
