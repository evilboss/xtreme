/*****************************************************************************/
/* Services: Event Handlers */
/*****************************************************************************/
Template.Services.events({
  'click .AvailService': function (e) {
    e.preventDefault();
    let customer = Customers.findOne({_id: Router.current().params.id});
    var service = Services.findOne({_id: e.currentTarget.value})
    service.type = 'Service';
    var alreadyAdded = Cart.findOne({_id: e.currentTarget.value});
    if (alreadyAdded) {
      Cart.update(alreadyAdded, {$inc: {qty: 1, subtotal: service.price}});
    } else {
      service.qty = 1;
      service.subtotal = service.price;
      Cart.insert(service);

    }

    if (customer) {
      if (Cart.find().count()) {
        let itemList = [];
        let items = Cart.find().fetch();
        let total = 0;
        _.each(items, function (item) {
          total += item.subtotal;
          itemList.push({
            name: item.name,
            description: item.description,
            qty: parseInt(item.qty),
            price: item.price,
            type: item.type,
            subtotal: item.subtotal
          });
        });
        customer.total = total;
        customer.items = itemList;
      }
      Customers.update(customer._id, {
          $set: {
            items:customer.items,
            total:customer.total
          }
        }
      );
    }
  }

});

/*****************************************************************************/
/* Services: Helpers */
/*****************************************************************************/
Template.Services.helpers({});

/*****************************************************************************/
/* Services: Lifecycle Hooks */
/*****************************************************************************/
Template.Services.created = function () {
};

Template.Services.rendered = function () {
};

Template.Services.destroyed = function () {
};
