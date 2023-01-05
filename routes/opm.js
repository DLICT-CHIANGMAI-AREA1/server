const router = require("express").Router()
const {CreatePDF,FindOP,UpdateOPM,DeleteOPM} = require("../controller/admin.controller");


router.post('/api/CreatePDF',CreatePDF)
router.get('/api/FindPDF',FindOP)
router.put('/api/UpdatePDF_OPM/:id',UpdateOPM)
router.delete('/api/Delete/:id',DeleteOPM)



/**
 * @swagger
 * components:
 *   schemas:
 *     Operating_Manual :
 *       type: object
 *       required:
 *         - _id
 *         - url
 *         - size
 *         - type
 *         - filename
 *        
 *       properties:
 *         url:
 *           type: string
 *           description: url
 *         size:
 *           type: number
 *           description: size
 *         type:
 *           type: string
 *           description: type
 *         filename:
 *           type: string
 *           description: filename
 *       example:
 *         _id: 63a4206e491b9c921b3c2cf7
 *         url: https://cdn.filestackcontent.com/lf6qGRfSNuW64Xz29Na4
 *         size: 19653193
 *         type: application/pdf
 *         filename: temp.obj
 *        
 *
 */
/**
 * @swagger
 * tags:
 *   name: Operating_Manual
 */
/**
 * @swagger
 * /admin/api/FindPDF:
 *   get:
 *     summary: FindPDF
 *     tags: [Operating_Manual]
 *     responses:
 *       200:
 *         description:   list of FindPDF
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operating_Manual'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /admin/api/UpdatePDF_OPM/{id}:
 *   put:
 *     summary: UpdatePDF_OPM
 *     tags: [Operating_Manual]
 *     parameters:
 *        - in: path
 *          name: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operating_Manual'
 *     responses:
 *       200:
 *         description:   successfully Updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operating_Manual'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/api/Delete/{id}:
 *  delete:
 *      description: Delete OPM
 *      tags: [Operating_Manual]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              $ref: '#/definitions/Operating_Manual'
 *          required: true
 *          description:  delete Operating_Manual
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
 * /admin/api/CreatePDF:
 *   post:
 *     summary: CreatePDF
 *     tags: [Operating_Manual]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operating_Manual'
 *     responses:
 *       200:
 *         description:   successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operating_Manual'
 *       500:
 *         description: Some server error
 */


module.exports = router