import * as mongoose from 'mongoose';
import { TaskSchema } from '../models/model';
import { Request, Response } from 'express';

const Task = mongoose.model('Task', TaskSchema);
export class TaskController {
  public async addNewTask(req: Request, res: Response) {
    const newTask = new Task(req.body);
    try {
      const task = await newTask.save();
      res.json(task);
    } catch (err) {
      res.json(err);
    }
  }
  public async getTasks(req: Request, res: Response) {
    try {
      const result = await Task.find();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  public async getTaskWithID(req: Request, res: Response) {
    try {
      const task = await Task.findById(req.params.contactId);
      res.json(task);
    } catch (err) {
      res.json(err);
    }
  }
  public async updateTask(req: Request, res: Response) {
    try {
      const task = await Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, {
        new: true
      });
      res.json(task);
    } catch (err) {
      res.json(err);
    }
  }
  public async deleteTask(req: Request, res: Response) {
    try {
      await Task.deleteOne({ _id: req.params.taskId });
      res.json({ success: true });
    } catch (err) {
      res.json(err);
    }
  }
}
