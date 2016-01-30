/*****************************************************************************/
/* Accounts: Event Handlers */
/*****************************************************************************/
Template.Accounts.events({});

/*****************************************************************************/
/* Accounts: Helpers */
/*****************************************************************************/
Template.Accounts.helpers({
  managers: function () {
    let users = Meteor.users.find({}).fetch();
    let managers = [];
    _.forEach(users, function (user) {
      if (Roles.userIsInRole(user._id, 'manager')) {
         managers.push(user);
      }
    });
    console.log(users);
    return managers;
  }

});

/*****************************************************************************/
/* Accounts: Lifecycle Hooks */
/*****************************************************************************/
Template.Accounts.onCreated(function () {
});

Template.Accounts.onRendered(function () {
});

Template.Accounts.onDestroyed(function () {
});
