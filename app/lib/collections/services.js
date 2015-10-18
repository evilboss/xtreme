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
        label: 'Description'

    },
    recipe: {
        type: Array,
        optional: true,
        unique: true
    },
    'recipe.$': {
        type: Object


    },
    'recipe.$.ingredient': {
        type: String,
        label: 'Ingredient',
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
    'recipe.$.amount': {
        type: Number,
        label: "Amount Needed",
        min: 25,
        max:100,
        autoform: {
            type: "noUiSlider",
            noUiSliderOptions: {
                step: 25
            },
            noUiSlider_pipsOptions: {
                mode: 'steps',
                density: 25
            }
        }
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
