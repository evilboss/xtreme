Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});
Template.registerHelper('appName', function() {
  return 'Extreme Salon';
});
Template.registerHelper('isManager', function() {
  return Roles.userIsInRole(Meteor.userId(),'manager');  // => true
});
Template.registerHelper('isAdmin', function() {
  return Roles.userIsInRole(Meteor.userId(),'admin');  // => true
});
Template.registerHelper('isInvoiceRoute', function() {
  if(Router.current().route.getName()==='invoice'||Router.current().route.getName()=='print'){
    return true
  }
  return false;
});