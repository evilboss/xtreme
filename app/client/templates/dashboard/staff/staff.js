/*****************************************************************************/
/* Staff: Event Handlers */
/*****************************************************************************/
Template.Staff.events({});

/*****************************************************************************/
/* Staff: Helpers */
/*****************************************************************************/
Template.Staff.helpers({
  staff: function () {
    let users = Meteor.users.find({}).fetch();
    let staff = [];
    _.forEach(users, function (user) {
      if (Roles.userIsInRole(user._id, 'staff')) {
        staff.push(user);
      }
    });
    return staff;
  },

});

/*****************************************************************************/
/* Staff: Lifecycle Hooks */
/*****************************************************************************/
Template.Staff.onCreated(function () {
});

Template.Staff.onRendered(function () {
});

Template.Staff.onDestroyed(function () {
});
