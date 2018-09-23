import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/routes';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

class App {
  public mongoUri: string = 'mongodb://localhost:27017';
  public app: express.Application;
  public routeObj: Routes = new Routes();

  constructor() {
		dotenv.config();
    this.app = express();
    this.config();
    this.routeObj.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017',{
      useNewUrlParser: true,
      user: process.env.user,
			pass: process.env.pass,
			dbName: process.env.dbName
		});
		mongoose.set('useFindAndModify', false);
  }
}

export default new App().app;
