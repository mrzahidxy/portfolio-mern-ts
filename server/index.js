const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

//** DB CONNECTION */
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Database Is Connetced!"))
  .catch((error) => console.log(error));

//** ROUTE */
const portfolioRouter = require("./routes/portfolio");
app.use("/api/portfolio", portfolioRouter);

const userRouter = require("./routes/user");
app.use("/api/auth", userRouter);

//** APP */
app.listen(PORT, () => {
  console.log(`Backend Server Is Running on port ${PORT}`);
});
