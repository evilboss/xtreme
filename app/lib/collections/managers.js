Managers = new Mongo.Collection('managers');
Managers.attachSchema(new SimpleSchema({
  "username": {
    type: String,
    unique: true
  }
}));

if (Meteor.isServer) {
  Managers.allow({
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
