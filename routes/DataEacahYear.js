const router = require("express").Router();
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
} = require("../controller/DataEachYear.controller");

router.get("/api/FindDataEachYear", FindDataEachYear);
router.get("/api/FindDataEachYearById/:id", FindDataEachYearById);
router.get("/api/FindDataEachYearByDate/:param1/:param2", FindDataEachYearByDate);

router.post("/api/CreateDataYear", CreateDataYear);
router.post("/api/CreateDataName/:param", CreateDataName);
router.post("/api/CreateDate/:param/:param2", CreateDate);
router.post("/api/CreateData/:param/:param2/:param3", CreateData);

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
