import SimpleSchema from 'simpl-schema';

const MessageSchema = new SimpleSchema({
  username: String,
  image: String,
  message: String,
  members: [String],
  groupId: String,
  createdAt: Date,
});


export { MessageSchema };