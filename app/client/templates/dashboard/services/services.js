/*****************************************************************************/
/* Services: Event Handlers */
/*****************************************************************************/
Template.Services.events({
});

/*****************************************************************************/
/* Services: Helpers */
/*****************************************************************************/
Template.Services.helpers({
  hasCustomer: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id});
    }
  }
});

/*****************************************************************************/
/* Services: Lifecycle Hooks */
/*****************************************************************************/
Template.Services.created = function () {
};

Template.Services.rendered = function () {
};

Template.Services.destroyed = function () {
};
