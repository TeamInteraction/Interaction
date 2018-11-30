import { Meteor } from 'meteor/meteor';
import { Tasks } from '../../api/task/task';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Tasks', function publish() {
  if (this.userId) {
    return Tasks.find();
  }
  return this.ready();
});
