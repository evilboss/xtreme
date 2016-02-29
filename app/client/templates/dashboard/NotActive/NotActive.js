Template.NotActive.helpers({
  connectedBranches: function () {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return true;
    }
    if (Meteor.user()) {
      if (Meteor.user().profile) {
        if (Meteor.user().profile.branchIds) {
          Session.set('branch', Meteor.user().profile.branchIds[0]);
          return Meteor.user().profile.branchIds[0];
        }
      }
    }
    return false;
  }});

Template.NotActive.events({
  //add your events here
});

Template.NotActive.onCreated(function () {
  //add your statement here
});

Template.NotActive.onRendered(function () {
  //add your statement here
});

Template.NotActive.onDestroyed(function () {
  //add your statement here
});

