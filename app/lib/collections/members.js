Members = new Mongo.Collection('members');

Members.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "First name",
    max: 200
  },
  lastName: {
    type: String,
    label: "Last name",
    max: 200
  },
  address: {
    type: String,
    label: "Address",

  },
}));
if (Meteor.isServer) {
  Members.allow({
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

  Members.deny({
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
