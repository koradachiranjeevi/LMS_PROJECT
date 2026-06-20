const multer = require("multer");
const path = require("path");
const fs = require("fs");

//  Ensure the upload directory exists using a guaranteed absolute path
const uploadPath = path.join(__dirname, "uploads"); // Adjust this path based on your project structure


if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, uploadPath); 
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;