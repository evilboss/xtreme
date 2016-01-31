Template.userAccount.helpers({
  getBranchName:function(branchId){
    return Branches.findOne({_id:branchId}).name;
  },
  getBranchId:function(branchId){
    return Branches.findOne({_id:branchId})._id;
  },
  isUserAdmin: function (id) {
    return Roles.userIsInRole(id,'admin');
  },
  isSameUser:function(id){
    return Meteor.userId() === id;
  }
});

Template.userAccount.events({
  //add your events here
});

Template.userAccount.onCreated(function () {
  //add your statement here
});

Template.userAccount.onRendered(function () {
  //add your statement here
});

Template.userAccount.onDestroyed(function () {
  //add your statement here
});

