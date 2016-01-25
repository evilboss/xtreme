Admin = new Mongo.Collection('admin');
Admin.attachSchema(new SimpleSchema({
  "email": {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
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
  Admin.deny({
    insert: function (userId, doc) {
      return false;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },
    remove: function (userId, doc) {
      return false;
    }
  });
}
