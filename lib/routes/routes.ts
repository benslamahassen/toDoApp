import { Request, Response } from 'express';
import { TaskController } from '../controllers/controller';

export class Routes {
  public TaskController: TaskController = new TaskController();
  public routes(app): void {
    // task
    app
      .route('/task')
      .get(this.TaskController.getTasks)
      .post(this.TaskController.addNewTask);

    // task operations
    app
      .route('/task/:taskId')
      .get(this.TaskController.getTaskWithID)
      .put(this.TaskController.updateTask)
      .delete(this.TaskController.deleteTask);
  }
}
