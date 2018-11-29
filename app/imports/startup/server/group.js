import { Meteor } from 'meteor/meteor';
import { Groups } from '../../api/group/group.js';



/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`Adding Group`);
  Groups.insert(data);
}

/** Initialize the collection if empty. */
if (Groups.find().count() === 0) {
  if (Meteor.settings.defaultGroups) {
    console.log('Creating default groups.');
    Meteor.settings.defaultGroups.map(data => addData(data));
  }
}

Meteor.publish('Groups', function publish() {
  if (this.userId) {
    // return Groups.find({ members: Meteor.user().username });
      return Groups.find();
  }
});
