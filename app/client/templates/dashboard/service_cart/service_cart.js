/*****************************************************************************/
/* ServiceCart: Event Handlers */
/*****************************************************************************/
Template.ServiceCart.events({});

/*****************************************************************************/
/* ServiceCart: Helpers */
/*****************************************************************************/
Template.ServiceCart.helpers({
  'serviceList': function () {
    return Cart.find({type: 'Service'}).fetch();
  },
  'packageList': function () {
    return Cart.find({type: 'Package'}).fetch();
  },
  'productList': function () {
    if (Router.current().params.id) {
      let products= CartData.find({type: 'Product', customerId: Router.current().params.id}).fetch();
      console.log(products);
      return products
    }

  },
  'currentBill': function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id}).total;
    }


  }

});

/*****************************************************************************/
/* ServiceCart: Lifecycle Hooks */
/*****************************************************************************/
Template.ServiceCart.onCreated(function () {
});

Template.ServiceCart.onRendered(function () {
});

Template.ServiceCart.onDestroyed(function () {
});
