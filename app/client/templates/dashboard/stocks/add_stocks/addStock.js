let stockList = new ReactiveVar([]);
Template.addStock.helpers({
  currentBranch: function () {
    if (Router.current().params.id) {
      return Branches.findOne({_id: Router.current().params.id});
    }
  },
  'addedItems': function () {
    return stockList.get();
  }

});

Template.addStock.events({
  'click .stockup-button': function (e, t) {
    let buttonId = $(e.currentTarget).attr('data-value');
    let branchSelected;
    if (Router.current().params.id) {
      branchSelected = Branches.findOne({_id: Router.current().params.id});
    }
    if (branchSelected) {
      let valToAdd = parseInt($(t.find('#' + buttonId)).val());
      if (valToAdd || valToAdd == 0) {
        let selectedItem = Inventory.findOne({_id: buttonId});
        if (selectedItem.quantity < valToAdd) {
          sAlert.error('You are tying to add more than the quantity of the Item');
        } else {
          let itemList = stockList.get();
          let match = _.where(itemList, {id: selectedItem._id});
          console.log(match);
          if (match.length) {
            match[0].qty += valToAdd;
          } else {
            itemList.push({
              name: selectedItem.name,
              id: selectedItem._id,
              qty: valToAdd,
              status: 'for delivery',
              branchId: branchSelected._id,
              requestedBy: Meteor.userId()
            });
          }
          stockList.set(itemList);


        }

      } else {
        sAlert.error('Must add Item');
      }
    }

  },
  'change input.item-quantity': function (e) {
    console.log('change');
    console.log($(e.currentTarget).val());
  },
  'click #cancel-delivery': function () {
    stockList.set([]);
  },
  'click #send-delivery': function () {
    let itemlist = stockList.get();
    _.each(itemlist, function (item) {
      item.createdAt = new Date();
      Inventory.update({_id: item.id}, {$inc: {quantity: -item.qty}});
      console.log(item);
      Request.insert(item);
    });
    stockList.set([]);
  }
});

Template.addStock.onCreated(function () {
  //add your statement here
});

Template.addStock.onRendered(function () {
  //add your statement here
});

Template.addStock.onDestroyed(function () {
  //add your statement here
});

