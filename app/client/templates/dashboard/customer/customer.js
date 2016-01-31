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
    let customer = Customers.findOne({_id: Router.current().params.id});
    if (Router.current().params.id) {
      if (customer) {
        if (customer.items) {
          _.each(customer.items, function (item) {
            let cartContents =Cart.find({name: item.name});
            item.qty = parseInt(item.qty);
            Cart.insert(item);
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
