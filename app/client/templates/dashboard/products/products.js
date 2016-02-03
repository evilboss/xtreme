/*****************************************************************************/
/* Products: Event Handlers */
/*****************************************************************************/
Template.Products.events({


});

/*****************************************************************************/
/* Products: Helpers */
/*****************************************************************************/
Template.Products.helpers({
  productList: function () {
    Stocks.find({qty: {$ne: 0}});
  },
  hasCustomer: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id});
    }
  }
});

/*****************************************************************************/
/* Products: Lifecycle Hooks */
/*****************************************************************************/
Template.Products.onCreated(function () {
});

Template.Products.onRendered(function () {
});

Template.Products.onDestroyed(function () {
});
