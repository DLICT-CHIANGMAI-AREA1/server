const router = require("express").Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const admin = require("firebase-admin");

const {
    FindDataEachYear,
    FindDataEachYearById,
    FindDataEachYearByDate,
    DeleteDataDate,
    DeleteDataYear,
    CreateDataYear,
    CreateDataName,
    CreateDate,
    CreateData,
    UpdateData,
    DeleteData,
    DeleteDataRecordDate,
    FindDataInGroupOfData,
} = require("../controller/DataEachYear.controller");

const serviceAccount = require("../config/chiangmaiarea1-server-key.json");
const BUCKET = "chiangmaiarea1-server.appspot.com";
const FirebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET,
});
const storage = FirebaseApp.storage();
const bucket = storage.bucket();

router.get("/api/FindDataEachYear", FindDataEachYear);
router.get("/api/FindDataEachYearById/:id", FindDataEachYearById);
router.get("/api/FindDataInGroupOfData/:param1/:param2", FindDataInGroupOfData);
router.get("/api/FindDataEachYearByDate/:param1/:param2", FindDataEachYearByDate);

router.post("/api/CreateDataYear", CreateDataYear);
router.post("/api/CreateDataName/:param", CreateDataName);
router.post("/api/CreateDate/:param/:param2", CreateDate);
router.post(
    "/api/CreateData/:param/:param2/:param3",
    upload.single("pdf"),
    (req, res, next) => {
        const folder = "file";
        const fileName = `${folder}/${Date.now()}`;
        const fileUpload = bucket.file(fileName);
        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: req.file.mimetype,
            },
        });

        blobStream.on("error", (err) => {
            res.status(405).json(err);
        });

        blobStream.on("finish", async () => {
            await fileUpload.makePublic();
            req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${fileName}`;
            next();
            // สร้าง path
        });
        blobStream.end(req.file.buffer);
    },
    CreateData
);

router.put("/api/UpdateData/:param/:param2/:param3", UpdateData);

router.delete("/api/DeleteData/:param1/:param2/:param3/:id", DeleteData);
router.delete("/api/DeleteDataDate/:param1/:id", DeleteDataDate);
router.delete("/api/DeleteDataYear/:id", DeleteDataYear);
router.delete("/api/DeleteDataRecordDate/:param1/:id", DeleteDataRecordDate);

/**
 * @swagger
 * components:
 *   schemas:
 *     BigData:
 *       type: object
 *       required:
 *         - name_year
 *         - data
 *       properties:
 *         _id:
 *           type: string
 *           description: _id
 *         name_year:
 *           type: string
 *           description: name_year
 *         date:
 *           type: array
 *           description: date
 *       example:
 *          _id: 63a4206e491b9c921b3c2cf7
 *          name_year: ข้อมูลปี 2566
 *          data: array
 *
 *
 */
/**
 * @swagger
 * tags:
 *   name: BigData
 */

/**
 * @swagger
 * /admin/api/FindDataEachYear:
 *   get:
 *     summary: FindDataEachYear
 *     tags: [BigData]
 *     responses:
 *       200:
 *         description:   list of FindDataEachYear
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/FindDataEachYearById/{id}:
 *   get:
 *     summary: FindDataEachYear
 *     tags: [BigData]
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description:   list of FindDataEachYear
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/FindDataEachYearByDate/{param1}/{param2}:
 *   get:
 *     summary: FindDataEachYear
 *     tags: [BigData]
 *     parameters:
 *        - in: path
 *          name: param1
 *        - in: path
 *          name: param2
 *     responses:
 *       200:
 *         description:   list of FindDataEachYear
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/CreateDataYear:
 *   post:
 *     summary: CreateDataYear
 *     tags: [BigData]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BigData'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/CreateDataName/{param}:
 *   post:
 *     summary: CreateDataName
 *     tags: [BigData]
 *     parameters:
 *        - in: path
 *          name: param
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BigData'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/CreateDate/{param}/{param2}:
 *   post:
 *     summary: CreateDate
 *     tags: [BigData]
 *     parameters:
 *        - in: path
 *          name: param
 *        - in: path
 *          name: param2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BigData'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/CreateData/{param}/{param}/{param3}:
 *   post:
 *     summary: CreateData
 *     tags: [BigData]
 *     parameters:
 *        - in: path
 *          name: param
 *        - in: path
 *          name: param2
 *        - in: path
 *          name: param3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BigData'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/UpdateData/{param}/{param2}/{param3}:
 *   put:
 *     summary: UpdateData
 *     tags: [BigData]
 *     parameters:
 *        - in: path
 *          name: param
 *        - in: path
 *          name: param2
 *        - in: path
 *          name: param3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BigData'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BigData'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/DeleteData/{param1}/{param2}/{param3}/{id}:
 *  delete:
 *      description: DeleteData
 *      tags: [BigData]
 *      parameters:
 *        - in: path
 *          name: param1
 *        - in: path
 *          name: param2
 *        - in: path
 *          name: param3
 *        - in: path
 *          name: id
 *          schema:
 *              $ref: '#/definitions/BigData'
 *          required: true
 *          description:  delete Data
 *      responses:
 *          200:
 *              description: Delete successful
 *          500:
 *              description: Some server error
 *
 *
 */

/**
 * @swagger
 * /admin/api/DeleteDataDate/{param1}/{id}:
 *  delete:
 *      description: DeleteDataDate
 *      tags: [BigData]
 *      parameters:
 *        - in: path
 *          name: param1
 *        - in: path
 *          name: id
 *          schema:
 *              $ref: '#/definitions/BigData'
 *          required: true
 *          description:  DeleteDataDate
 *      responses:
 *          200:
 *              description: Delete successful
 *          500:
 *              description: Some server error
 *
 *
 */

/**
 * @swagger
 * /admin/api/DeleteDataYear/{id}:
 *  delete:
 *      description: DeleteDataYear
 *      tags: [BigData]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              $ref: '#/definitions/BigData'
 *          required: true
 *          description:   DeleteDataYear
 *      responses:
 *          200:
 *              description: Delete successful
 *          500:
 *              description: Some server error
 *
 *
 */

/**
 * @swagger
 * /admin/api/DeleteDataRecordDate/{param1}/{id}:
 *  delete:
 *      description: DeleteDataRecordDate
 *      tags: [BigData]
 *      parameters:
 *        - in: path
 *          name: param1
 *        - in: path
 *          name: id
 *          schema:
 *              $ref: '#/definitions/BigData'
 *          required: true
 *          description:   DeleteDataRecordDate
 *      responses:
 *          200:
 *              description: Delete successful
 *          500:
 *              description: Some server error
 *
 *
 */
module.exports = router;
