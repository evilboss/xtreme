Template.serviceMenu.helpers({
  isActiveButton: function (activeRoute) {
    if (Router.current().route.getName() === activeRoute) {
      return 'callout-info'
    }
  },
  hasCustomer: function () {
    if (Router.current().params.id) {
      let customer = Customers.findOne({_id: Router.current().params.id});
      return customer;
    }

  }
});

Template.serviceMenu.events({
  //add your events here
});

Template.serviceMenu.onCreated(function () {
  //add your statement here
});

Template.serviceMenu.onRendered(function () {
  //add your statement here
});

Template.serviceMenu.onDestroyed(function () {
  //add your statement here
});

