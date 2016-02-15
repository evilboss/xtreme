Services = new Mongo.Collection('services');
Services.attachSchema(new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  price: {
    type: Number
  },
  description: {
    type: String,
    label: 'Description'

  },
  type: {
    type: String,
    defaultValue: 'Service',
  },
  recipe: {
    type: Array,
    optional: true,
  },
  'recipe.$': {
    type: Object
  },
  'recipe.$.ingredient': {
    type: String,
    label: 'Chemical Mixture  ',
    autoform: {
      afFieldInput: {
        options: function () {
          var ingredients = Inventory.find().fetch();
          var options = [];
          for (ingredient in ingredients) {
            var option = {label: ingredients[ingredient].name, value: ingredients[ingredient]._id};
            options.push(option)
          }
          return options;
        }
      }
    }
  },
  'recipe.$.amount': {
    type: Number,
    label: "Amount Needed",
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
