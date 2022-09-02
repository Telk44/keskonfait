const getAuthUserIdToken = require("../middleware/getAuthUserId");

module.exports = (req, res, next) => {

    const userId = req.body.userId;

    const reqAuthorization = req.headers.authorization;
    try {
        if (!reqAuthorization) throw new Error("Problème auth");
        if (userId && userId !== getAuthUserIdToken(req)) throw new Error("userId est invalide");
        next();
    } catch (error) {
        res.status(401).json({
            error
        });
    }
};

