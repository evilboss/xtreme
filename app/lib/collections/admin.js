Admin = new Mongo.Collection('admin');
Admin.attachSchema(new SimpleSchema({
  "username": {
    type: String,
    unique: true
  }
}));
if (Meteor.isServer) {
  Admin.allow({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });

}
