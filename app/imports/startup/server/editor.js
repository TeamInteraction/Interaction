import { Meteor } from 'meteor/meteor';
import { Editors } from '../../api/editor/editor';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Editors', function publish() {
  if (this.userId) {
    return Editors.find();
  }
  return this.ready();
});
