/*****************************************************************************/
/* Accounts: Event Handlers */
/*****************************************************************************/
Template.Accounts.events({
});

/*****************************************************************************/
/* Accounts: Helpers */
/*****************************************************************************/
Template.Accounts.helpers({
  managers:function(){
    let manager = Meteor.users.find().fetch();
    console.log(manager)
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
