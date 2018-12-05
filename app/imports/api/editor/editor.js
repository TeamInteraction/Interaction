import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Editors = new Mongo.Collection('Editors');

const EditorSchema = new SimpleSchema({
  text: String,
  groupid: String,
}, { tracker: Tracker });

Editors.attachSchema(EditorSchema);

export { Editors, EditorSchema };
