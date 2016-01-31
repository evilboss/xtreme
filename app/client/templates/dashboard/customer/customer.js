let clean = function (collection) {
  if (collection) {

    // clean items
    _.each(collection.find().fetch(), function (item) {
      collection.remove({_id: item._id});
    });
  }

}
Template.customer.helpers({
  currentCustomer: function () {
    let customer = '';
    if (Router.current().params.id) {
      customer = Customers.findOne({_id: Router.current().params.id});
      console.log(customer);
      if (customer) {
        if (customer.items) {
          _.each(customer.items, function (item) {
            if (Cart.find({name: item.name}).count() === 0) {
              Cart.insert(item);
            }
          });
        }

      }
    }
    return Customers.findOne({_id: Router.current().params.id});
  }
});

Template.customer.events({
  //add your events here
});

Template.customer.onCreated(function () {
  //add your statement here
});

Template.customer.onRendered(function () {
  clean(Cart);

});

Template.customer.onDestroyed(function () {
  //add your statement here
});
