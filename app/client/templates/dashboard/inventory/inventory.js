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
    return '0';
  }

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
