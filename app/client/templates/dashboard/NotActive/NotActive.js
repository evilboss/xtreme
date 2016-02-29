Template.notActive.helpers({
  availableBranches: function () {
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

Template.notActive.events({
  //add your events here
});

Template.notActive.onCreated(function () {
  //add your statement here
});

Template.notActive.onRendered(function () {
  //add your statement here
});

Template.notActive.onDestroyed(function () {
  //add your statement here
});

