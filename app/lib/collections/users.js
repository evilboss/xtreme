Meteor.users.after.insert(function (userId, doc) {
    var adminlist = Admin.find().fetch();
    if (doc.emails) {
        for (var email in doc.emails) {
            for (var admin in adminlist) {
                if (doc.emails[email].address === adminlist[admin].email) {
                    Meteor.users.update({_id: doc._id}, {$set: {roles: ['admin']}});
                    break;
                }
            }

        }
    }
});
if (Meteor.isServer) {
    Meteor.users.allow({
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

    Meteor.users.deny({
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