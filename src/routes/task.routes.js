import { Router } from "express";
import { createTask } from "../controllers/task.controllers.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: Task title
 *         description:
 *           type: string
 *           description: Task description
 *       example:
 *         title: "Learn Swagger"
 *         description: "Add swagger docs to API"
 */

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 201
 *                 data:
 *                   $ref: '#/components/schemas/Task'
 *                 message:
 *                   type: string
 *                   example: "Task Created successfully"
 *       400:
 *         description: Bad request (validation error)
 */


router.post("/", createTask);

export default router;