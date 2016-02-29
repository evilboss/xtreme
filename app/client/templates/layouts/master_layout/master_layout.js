
function incrementProduct(itemId, amount) {
  let stock = Stocks.findOne({id: itemId});
  Stocks.update({_id: stock._id}, {$inc: {qty: amount}});
}
function checkService(serviceId) {
  let service = Services.findOne({_id: serviceId});
  let allow = true;
  if (service.recipe) {
    let items = service.recipe;
    _.each(items, function (item) {
      let branchStock = Stocks.findOne({id: item.ingredient});
      console.log(branchStock.qty, item.amount);
      if (item.amount < branchStock.qty) {
        decrementProduct(item.ingredient, item.amount);
      } else {
        sAlert.error('Insuficient stock');
        allow = false;
      }
    });
  }
  return allow;
}
function returnService(serviceId) {
  let service = Services.findOne({_id: serviceId});
  console.log(service);
  if (service.recipe) {
    let items = service.recipe;
    _.each(items, function (item) {
      let branchStock = Stocks.findOne({id: item.ingredient});
      if (branchStock) {
        incrementProduct(item.ingredient, item.amount);
      }
    });
  }


}
function checkPackage(packageId) {
  let packages = Packages.findOne({_id: packageId});
  let allow = true;
  if (packages.services) {
    let items = packages.services;
    _.each(items, function (item) {
      console.log(item);
      let service = Services.findOne({_id: item});
      allow = checkService(service._id);
    });
  }
  return allow;
}
function returnPackage(packageId) {
  let packages = Packages.findOne({_id: packageId});
  if (packages.services) {
    let items = packages.services;
    _.each(items, function (item) {
      let service = Services.findOne({_id: item});
      returnService(service._id);
    });
  }

}
function decrementProduct(itemId, amount) {
  let stock = Stocks.findOne({id: itemId});
  Stocks.update({_id: stock._id}, {$inc: {qty: -amount}});
}

Template.MasterLayout.rendered = function () {


}
Template.MasterLayout.helpers({
  availableBranches: function () {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return true;
    }
    if (Meteor.user()) {
      if (Meteor.user().profile) {
        if (Meteor.user().profile.branchIds) {
          Session.set('branch', Meteor.user().profile.branchIds[0]);
          return Meteor.user().profile.branchIds[0];
        }
      }
    }
    return false;
  }
});
Template.MasterLayout.events({
  'click [data-action=logout]': function () {
    AccountsTemplates.logout();
  },
  'click .avail-button': function (e) {
    e.preventDefault();
    let event = $(e.currentTarget);
    let itemId = e.currentTarget.value;
    let transType = event.attr('data-type');
    let customerId = Router.current().params.id;
    let allowSale = true;
    if (customerId) {
      let itemToAdd;
      if (transType === 'Service') {
        itemToAdd = Services.findOne({_id: itemId});
        allowSale = checkService(itemId);
        console.log(allowSale);
      }
      if (transType === 'Product') {
        itemToAdd = Inventory.findOne({_id: itemId});
      }
      if (transType === 'Package') {
        itemToAdd = Packages.findOne({_id: itemId});
        allowSale = checkPackage(itemId);
        console.log(allowSale);

      }
      if (allowSale) {
        let branchId = Session.get('branch');
        if (branchId) {
          if (itemToAdd) {
            console.log(itemToAdd);
            let currentData = CartData.findOne({customerId: customerId, itemId: itemId});
            let currentSubtotal = itemToAdd.price;
            let update = true;
            if (currentData) {
              console.log('Already Added');
              if (transType === 'Product') {
                let checkStocks = Stocks.findOne({id: itemId});
                console.log(checkStocks);
                console.log(currentData.qty);
                if (checkStocks.qty === 0) {
                  sAlert.error('You cannot add any more');
                  update = false;
                } else {
                  CartData.update({_id: currentData._id}, {$inc: {qty: 1, subtotal: itemToAdd.price}});


                }
              } else {
                CartData.update({_id: currentData._id}, {$inc: {qty: 1, subtotal: itemToAdd.price}});

              }


            } else {
              CartData.insert({
                type: transType,
                customerId: customerId,
                itemId: itemId,
                branchId: branchId,
                qty: 1,
                staffId: Meteor.user()._id,
                name: itemToAdd.name,
                description: itemToAdd.description,
                price: parseInt(itemToAdd.price),
                subtotal: parseInt(itemToAdd.price)
              });
              if (transType === 'Product') {
                decrementProduct(itemId, 1);
              }


            }
            if (update) {
              let total = Customers.findOne({_id: customerId}).total;
              total += itemToAdd.price;
              Customers.update({_id: customerId}, {$set: {total: total}});
              if (transType === 'Product') {
                decrementProduct(itemId, 1);
              }


            }


          }

        } else {
          sAlert.error('Please Set your branch');
        }
      }

    }


  },
  'click .remove-item-button': function (e) {
    e.preventDefault();
    let event = $(e.currentTarget);
    let itemId = e.currentTarget.value;
    let transType = event.attr('data-type');
    let customerId = Router.current().params.id;
    if (customerId) {
      let itemToAdd;
      if (transType === 'Service') {
        let itemToRemove = CartData.findOne({_id: itemId});
        returnService(itemToRemove.itemId);
      }
      if (transType === 'Product') {
        let itemToRemove = CartData.findOne({_id: itemId});
        incrementProduct(itemToRemove.itemId, 1);
      }
      if (transType === 'Package') {
        let itemToRemove = CartData.findOne({_id: itemId});
        returnPackage(itemToRemove.itemId);

      }
    }

    var serviceToRemove = CartData.findOne({_id: itemId});

    console.log(serviceToRemove);
    if (serviceToRemove.qty == 1) {
      CartData.remove({_id: itemId});
    } else {
      CartData.update({_id: itemId}, {$inc: {qty: -1, subtotal: -serviceToRemove.price}});
    }
    if (customerId) {
      Customers.update({_id: customerId}, {$inc: {total: -serviceToRemove.price}})
    }

  }
});
Template.MasterLayout.onRendered(function () {



});