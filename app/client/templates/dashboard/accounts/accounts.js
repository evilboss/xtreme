/*****************************************************************************/
/* Accounts: Event Handlers */
/*****************************************************************************/
Template.Accounts.events({});

/*****************************************************************************/
/* Accounts: Helpers */
/*****************************************************************************/
Template.Accounts.helpers({
  managers: function () {
    return Meteor.users.find({}).fetch();
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
