import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Groups = new Mongo.Collection('Groups');

const GroupSchema = new SimpleSchema({
  name: String,
  members: [String],
}, { tracker: Tracker });

Groups.attachSchema(GroupSchema);

export { Groups, GroupSchema };
