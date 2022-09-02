require("dotenv").config();
const jwt = require("jsonwebtoken");

const getAuthUserId = (req) => {

    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;

    return userId;
};

module.exports = getAuthUserId;