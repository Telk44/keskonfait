const validator = require("email-validator");
require('dotenv').config();

module.exports = (req, res, next) => {
    // username min length 3
    // if (!req.body.userName || req.body.userName.length < 3) {
    //     return res.status(400).send({
    //         msg: "Please enter a username with min. 3 chars",
    //     });
    // }
    // valide email
    if (!req.body.email || !validator.validate(req.body.email)) {
        return res.status(400).send({
            msg: "Please enter a valid email address",
        });
    }
    // email (repeat) does not match
    // if (
    //     !req.body.email_repeat ||
    //     req.body.email != req.body.email_repeat
    // ) {
    //     return res.status(400).send({
    //         msg: "Both email must match",
    //     });
    // }

    // password min 8 chars
    // if (!req.body.password || req.body.password.length < 8) {
    //     return res.status(400).send({
    //         msg: "Please enter a password with min. 8 chars",
    //     });
    // }
    next();

}