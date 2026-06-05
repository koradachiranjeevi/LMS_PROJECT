require("dotenv").config();

const express = require("express");
const cors = require("cors");

const ConnectDb = require("./config/db");
const authRoutes = require("./routes/authRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

ConnectDb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));