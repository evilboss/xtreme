Meteor.users.after.insert(function (userId, doc) {
  var adminlist = Admin.find().fetch();
  var managerList = Managers.find().fetch();
  var staffList = Staff.find().fetch();

  if (doc.username) {
    for (var admin in adminlist) {
      if (doc.username === adminlist[admin].username) {
        Meteor.users.update({_id: doc._id}, {$set: {roles: ['admin']}});
        break;
      }
    }
    for (var manager in managerList) {
      if (doc.username === managerList[manager].username) {
        Meteor.users.update({_id: doc._id}, {$set: {roles: ['manager']}});
        break;
      }
    }
    for (var staff in staffList) {
      if (doc.username === staffList[staff].username) {
        Meteor.users.update({_id: doc._id}, {$set: {roles: ['staff']}});
        break;
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
      var user = Meteor.users.findOne({
        _id: userId
      });
      if (Roles.userIsInRole(user, ['admin'])) {
        return true;

      }
      return false
    }
  });

}