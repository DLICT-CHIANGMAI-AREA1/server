const router = require("express").Router();
const {
    DataPerson,
    DeletePerson,
    DataPersonById,
    UpdatePerson,
    CreatePerson,
} = require("../controller/peron.controller");

router.get("/api/DataPerson", DataPerson);
router.get("/api/DataPersonById/:id", DataPersonById);
router.delete("/api/DeletePerson/:id", DeletePerson);
router.post("/api/UpdatePerson/:id", UpdatePerson);
router.post("/api/CreatePerson/", CreatePerson);

/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       required:
 *         - First_name
 *         - Last_name
 *         - Gender
 *         - Job_title
 *         - Department
 *         - Email
 *         - Phone
 *         - Operating_Manual
 *         - Profile
 *         - _id
 *       properties:
 *         First_name:
 *           type: string
 *           description: First_name
 *         Last_name:
 *           type: string
 *           description: Last_name
 *         Gender:
 *           type: string
 *           description: Gender
 *         Job_title:
 *           type: string
 *           description: Job_title
 *         Department:
 *           type: string
 *           description: Department
 *         Email:
 *           type: string
 *           description: Email
 *         Phone:
 *           type: string
 *           description: Phone
 *         Operating_Manual:
 *           type: Object
 *           description: Operating_Manual
 *         Profile:
 *           type: string
 *           description: Profile
 *         _id:
 *           type: string
 *           description: _id
 *       example:
 *         _id: 63a4206e491b9c921b3c2cf7
 *         First_name: นางสาวปิยรัตน์
 *         Last_name: วงศ์เติง
 *         Gender: หญิง
 *         Job_title: นักวิเคราะห็นโยบายเเละเเผนชำนาญการ
 *         Department: ICT
 *         Email: email@gmail.com
 *         Phone: 065-489-5888
 *         Operating_Manual: Object
 *         Profile: data:image/png;base64,iVBORw0KGgoAAAANS
 *
 */
/**
 * @swagger
 * tags:
 *   name: Person
 */

/**
 * @swagger
 * /admin/api/DataPerson:
 *   get:
 *     summary: DataPerson
 *     tags: [Person]
 *     responses:
 *       200:
 *         description:   list of DataPerson
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/DataPersonById/{id}:
 *   get:
 *     summary: DataPerson
 *     tags: [Person]
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description:   list of DataPerson By Id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/CreatePerson:
 *   post:
 *     summary: CreatePerson
 *     tags: [Person]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /admin/api/UpdatePerson/{id}:
 *   put:
 *     summary: UpdatePerson
 *     tags: [Person]
 *     parameters:
 *        - in: path
 *          name: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       200:
 *         description:   successfully Updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       500:
 *         description: Some server error
 */


/**
 * @swagger
 * /admin/api/DeletePerson/{id}:
 *  delete:
 *      description: DeletePerson
 *      tags: [Person]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              $ref: '#/definitions/Person'
 *          required: true
 *          description:  delete Person
 *      responses:
 *          200:
 *              description: Delete successful
 *          500:
 *              description: Some server error
 *
 *
 */

module.exports = router;
