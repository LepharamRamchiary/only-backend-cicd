import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../models/task.model.js";

const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and description are required");
  }

  const task = await Task.create({ title, description });
  return res
    .status(201)
    .json(new ApiResponse(201, task, "Task Created sucessfully"));
});

export { createTask };
