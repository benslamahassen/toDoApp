import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Enter a title'
  },
  description: {
    type: String,
    required: 'Enter a description'
  },
  done: {
    type: Boolean
  },
  owner: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
