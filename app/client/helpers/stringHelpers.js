Template.registerHelper('truncate', function (string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});
Template.registerHelper('appName', function () {
  return 'Extreme Salon';
});
Template.registerHelper('isManager', function () {
  return Roles.userIsInRole(Meteor.userId(), ['admin', 'manager']);  // => true
});
Template.registerHelper('isAdmin', function () {
  return Roles.userIsInRole(Meteor.userId(), 'admin');  // => true
});
Template.registerHelper('isInvoiceRoute', function () {
  if (Router.current().route.getName() === 'invoice' || Router.current().route.getName() == 'print') {
    return true
  }
  return false;
});
Template.registerHelper('getUserName', function (id) {
  let user = Meteor.users.findOne({_id: id});
  if (user) {
    if (user.profile) {
      if (user.profile.firstName) {
        if (user.profile.lastName) {
          return user.profile.firstName + ' ' + user.profile.lastName;
        }
        return user.profile.firstName
      }
    }
  }
  return '';

});
Template.registerHelper('getBranchName', function (id) {
  let branch = Branches.findOne({_id: id});
  if (branch) {
    if (branch.name) {
      return branch.name;
    }
  }
  return '';

});