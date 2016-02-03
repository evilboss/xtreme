Products = new Mongo.Collection('products');

Products.attachSchema(new SimpleSchema({
  "name": {
    type: String,
    unique: true,
    autoform: {
      afFieldInput: {
        options: function () {
          var ingredients = Inventory.find().fetch();
          var options = [];
          for (ingredient in ingredients) {
            var option = {label: ingredients[ingredient].name, value: ingredients[ingredient].name};
            options.push(option)
          }
          return options;
        }
      }
    }

  },
  "price": {
    type: Number
  },
  "description": {
    type: String,
    label:'Description'

  },
  type: {
    type: String,
    defaultValue: 'Product',
  },
}));
if (Meteor.isServer) {
  Products.allow({
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

  Products.deny({
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
