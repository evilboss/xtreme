/*****************************************************************************/
/* Inventory: Event Handlers */
/*****************************************************************************/
let searchText = new ReactiveVar('');
Template.Inventory.events({
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  },
});

/*****************************************************************************/
/* Inventory: Helpers */
/*****************************************************************************/
Template.Inventory.helpers({
  InventoryList: function () {
    let toSearch = searchText.get();
    if (toSearch) {
      return Inventory.find({
        name: {$regex: '.*' + toSearch + '.*'}
      }, {sort: {'quantity': 1}});
    } else {
      return Inventory.find({}, {sort: {'quantity': 1}});
    }
  },
  branchList: function () {
    return Branches.find();
  },
  getStockAmount(itemId, branchId){
    let stockAmount = Stocks.findOne({branchId: branchId, id: itemId});
    if (stockAmount) {
      if (stockAmount.qty) {
        return stockAmount.qty
      }
    }
    return 'Out of Stock';
  },
  isOutOfStock: function (qty) {
    if (qty == 0) {
      return 'Out of Stock';
    }
    return qty;

  },
  isLowLevel: function (itemId, branchId) {
    let stockAmount = Stocks.findOne({branchId: branchId, id: itemId});
    if (stockAmount) {
      if (stockAmount.qty) {
        let limiter = 10;
        let limit = StockControl.findOne({itemId: itemId});
        if (limit) {
          if (limit.limit) {
            limiter = limit.limit;
          }
        }
        if (parseInt(stockAmount.qty) <= parseInt(limiter)) {
          return 'bg-red badge';
        }
      }
    }
    else {
      return 'bg-red badge';
    }


  },

});

/*****************************************************************************/
/* Inventory: Lifecycle Hooks */
/*****************************************************************************/
Template.Inventory.created = function () {
};

Template.Inventory.rendered = function () {
};

Template.Inventory.destroyed = function () {
};
