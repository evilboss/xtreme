/*****************************************************************************/
/* Products: Event Handlers */
/*****************************************************************************/
Template.Products.events({
  'click [data-action=availProduct]': function (e) {
    e.preventDefault();
    var product = Products.findOne({_id: e.currentTarget.value})
    product.type = 'Product';
    var alreadyAdded = Cart.findOne({name: product.name});
    if (alreadyAdded) {
      Cart.update(alreadyAdded, {$inc: {qty: 1, subtotal: product.price}});
    } else {
      product.qty = 1;
      product.subtotal = product.price;
      Cart.insert(product);
    }
  },

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
