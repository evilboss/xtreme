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
      console.log(user);
      if (Roles.userIsInRole(user._id, 'manager')) {
         managers.push(user);
      }
    });
    return managers;
  },
  getBranchName:function(branchId){
    return Branches.findOne({_id:branchId}).fetch().name;
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
