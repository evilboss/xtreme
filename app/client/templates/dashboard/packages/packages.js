/*****************************************************************************/
/* Packages: Event Handlers */
/*****************************************************************************/
Template.Packages.events({
});

/*****************************************************************************/
/* Packages: Helpers */
/*****************************************************************************/
Template.Packages.helpers({
  hasCustomer: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id});
    }
  }
});

/*****************************************************************************/
/* Packages: Lifecycle Hooks */
/*****************************************************************************/
Template.Packages.onCreated(function () {
});

Template.Packages.onRendered(function () {
});

Template.Packages.onDestroyed(function () {
});
