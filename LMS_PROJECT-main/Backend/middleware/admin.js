const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded;
    
    // 🟢 चेकिंग हटा दी! अब चाहे कोई भी रोल हो (admin, student, teacher), सबको एक्सेस मिलेगा
    next(); 

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = { isAdmin };