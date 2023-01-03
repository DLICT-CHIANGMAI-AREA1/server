const router = require("express").Router();
const { register, login } = require("../controller/auth.controller");
/**
 * @swagger
 * components:
 *   schemas:
 *     ยืนยันตัวตน:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: username
 *         password:
 *           type: string
 *           description: password
 *       example:
 *         username: David
 *         password: 1234
 */
/**
 * @swagger
 * tags:
 *   name: ยืนยันตัวตน
 */

/**
 * @swagger
 * /admin/api/register:
 *   post:
 *     summary: Create a new admin
 *     tags: [ยืนยันตัวตน]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ยืนยันตัวตน'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ยืนยันตัวตน'
 *       500:
 *         description: Some server error
 */

router.post("/api/register", register);
router.post("/api/login", login);

/**
 * @swagger
 * /admin/api/login:
 *   post:
 *     summary: Create a new admin
 *     tags: [ยืนยันตัวตน]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ยืนยันตัวตน'
 *     responses:
 *       200:
 *         description:  successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ยืนยันตัวตน'
 *       500:
 *         description: Some server error
 */

/*router.get("/api/me", authenticateJWT, (req, res) => {
    res.send(req.user);
});*/

/*function authenticateJWT(req, res, next) {
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
}*/
module.exports = router;
