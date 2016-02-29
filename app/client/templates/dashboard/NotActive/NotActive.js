Template.NotActive.helpers({
  connectedBranches: function () {
    $(document).ready(function () {
      if (Meteor.user()) {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
          return true;
        }
        if (Meteor.user().profile) {
          if (Meteor.user().profile.branchIds) {
            if(Meteor.user().profile.branchIds[0]){
              Session.set('branch', Meteor.user().profile.branchIds[0]);
              return true;
            }

          }
        }
      }
      return false;

    });
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

