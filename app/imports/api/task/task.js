import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Tasks = new Mongo.Collection('Tasks');

/** Create a schema to constrain the structure of documents associated with this collection. */
const TasksSchema = new SimpleSchema({
  title: String,
  task: String,
  members:[String],
  groupId: String
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Tasks.attachSchema(TasksSchema);

/** Make the collection and schema available to other code. */
export { Tasks, TasksSchema };
