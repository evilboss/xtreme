/*****************************************************************************/
/* ServiceCart: Event Handlers */
/*****************************************************************************/
Template.ServiceCart.events({});

/*****************************************************************************/
/* ServiceCart: Helpers */
/*****************************************************************************/
Template.ServiceCart.helpers({
  'serviceList': function () {
    if (Router.current().params.id) {
      let services = CartData.find({type: 'Service', customerId: Router.current().params.id}).fetch();
      return services;
    }
  },
  'packageList': function () {
    if (Router.current().params.id) {
      let packages = CartData.find({type: 'Package', customerId: Router.current().params.id}).fetch();
      return packages;
    }
  },
  'productList': function () {
    if (Router.current().params.id) {
      let products = CartData.find({type: 'Product', customerId: Router.current().params.id}).fetch();
      return products;
    }

  },
  'currentBill': function () {
    if (Router.current().params.id) {
      let currentCustomer = Customers.findOne({_id: Router.current().params.id});
      let currentBill = currentCustomer.total - currentCustomer.discount;
      return currentBill;
    }
  }
  ,
  'hasAvailed': function () {
    if (Router.current().params.id) {
      let availed = CartData.find({customerId: Router.current().params.id}).fetch();
      return availed;
    }
  }

  ,
  currentCustomer: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id});
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
