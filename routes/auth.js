const router = require("express").Router();
const { register, login } = require("../controller/auth.controller");

const jwt = require("jsonwebtoken");
router.post("/api/register", register);
router.post("/api/login", login);

router.get("/api/me", authenticateJWT, (req, res) => {
    res.send(req.user);
});

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if (error) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}
module.exports = router;
