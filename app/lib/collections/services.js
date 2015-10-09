Services = new Mongo.Collection('services');
Services.attachSchema(new SimpleSchema({
  "name": {
    type: String,
    unique: true
  },
  "price": {
    type: Number
  },
  "description": {
    type: String,
    label:'Description'

  }
}));

if (Meteor.isServer) {
  Services.allow({
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

  Services.deny({
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
