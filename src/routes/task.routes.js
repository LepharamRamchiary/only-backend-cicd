import { Router } from "express";
import { createTask, getAllTask } from "../controllers/task.controllers.js";

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
 *     tags: [api/tasks]
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

/**
 * @swagger
 * /api/tasks/get:
 *   get:
 *     summary: Get all tasks
 *     tags: [api/tasks]
 *     responses:
 *       200:
 *         description: List of all tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Task'
 *                 message:
 *                   type: string
 *                   example: "Tasks retrieved successfully"
 *       404:
 *         description: No tasks found
 */

router.post("/", createTask);
router.get("/get", getAllTask);

export default router;
