/*****************************************************************************/
/* Inventory: Event Handlers */
/*****************************************************************************/
let searchText = new ReactiveVar('');
Template.Inventory.events({
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  }
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
      });
    } else {
      return Inventory.find({});
    }
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
