Branches = new Mongo.Collection('branches');
Branches.attachSchema(new SimpleSchema({
  name: {
    type: String,
    unique: true,
    label: 'Branch Name'
  },
  location: {
    type: String,
    label: 'Branch Location'
  },
  stocks: {
    type: [Object],
    optional: true,
    defaultValue:[]
  },
  "stocks.$.name": {
    type: String
  },
  "stocks.$.id": {
    type: String
  },
  "stocks.$.qty": {
    type: Number
  }
}));
if (Meteor.isServer) {
  Branches.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {

      return true;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Branches.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
