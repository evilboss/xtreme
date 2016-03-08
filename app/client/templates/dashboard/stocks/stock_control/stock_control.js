/*****************************************************************************/
/* StockControl: Event Handlers */
/*****************************************************************************/
let searchText = new ReactiveVar('');

Template.StockControl.events({
});

/*****************************************************************************/
/* StockControl: Helpers */
/*****************************************************************************/
Template.StockControl.helpers({
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
    return '0';
  }

});

/*****************************************************************************/
/* StockControl: Lifecycle Hooks */
/*****************************************************************************/
Template.StockControl.created = function () {
};

Template.StockControl.rendered = function () {
};

Template.StockControl.destroyed = function () {
};
