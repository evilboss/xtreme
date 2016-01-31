/*****************************************************************************/
/* ServiceInvoiceItem: Event Handlers */
/*****************************************************************************/
Template.ServiceInvoiceItem.events({
  'click [data-action=removeService]': function (e) {
    e.preventDefault();
    let customer = Customers.findOne({_id: Router.current().params.id});
    var serviceToRemove = Cart.findOne({_id: e.currentTarget.value});
    if (serviceToRemove.qty == 1) {
      Cart.remove(serviceToRemove);
    } else {
      Cart.update(serviceToRemove, {$inc: {qty: -1, subtotal: -serviceToRemove.price}});
    }
    if (customer) {
      if (!Cart.find().count()===0) {
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
/* ServiceInvoiceItem: Helpers */
/*****************************************************************************/
Template.ServiceInvoiceItem.helpers({});

/*****************************************************************************/
/* ServiceInvoiceItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ServiceInvoiceItem.onCreated(function () {
});

Template.ServiceInvoiceItem.onRendered(function () {
});

Template.ServiceInvoiceItem.onDestroyed(function () {
});
