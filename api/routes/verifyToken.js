const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  console.log("Mu achiii ");
  verifyToken(req, res, () => {
    if (req.user.id === req.params.userId) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user);
    if (req.user?.isAdmin) {
      console.log("123");
      next();
    } else {
      console.log("1234");
      //res.status(403).json("You are not allowed to do that!");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
