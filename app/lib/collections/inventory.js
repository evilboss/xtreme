Inventory = new Mongo.Collection('inventory');
Inventory.attachSchema(new SimpleSchema({
    "name": {
        type: String,
        unique: true
    },
    "quantity": {
        type: Number
    },
    "description": {
        type: String,
        label:'Description'

    },
    salesprice:{
        type: Number,
        label:"Sales Price"
    }
}));

if (Meteor.isServer) {
    Inventory.allow({
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

    Inventory.deny({
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
