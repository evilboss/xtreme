Packages = new Mongo.Collection('packages');
Packages.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Package name",
        max: 200
    },
    services: {
        type: Array,
        optional: false

    },
    'services.$': {
        type: String,
        autoform: {
            afFieldInput: {
                options: function () {
                    var servcies = Services.find().fetch();
                    var options = [];
                    for (serviceItem in servcies) {
                        var option = {label: servcies[serviceItem].name, value: servcies[serviceItem].name};
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
        label: 'Description'

    }
}));

if (Meteor.isServer) {
    Packages.allow({
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

    Packages.deny({
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
