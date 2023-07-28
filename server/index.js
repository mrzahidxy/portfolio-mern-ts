const express = require("express");
const mongoose = require("mongoose");

//router
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//? DATABASE-CONNECTED
mongoose
  .connect(
    "mongodb+srv://mrzahidxy:mrzahidxy10@social-media-app.lvndutj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Is Connetced!"))
  .catch((error) => console.log(error));

//? ROUTES
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

//? APP RUNNING
app.listen(8080, () => {
  console.log("Backened Server Is Running!");
});
