/*****************************************************************************/
/* Products: Event Handlers */
/*****************************************************************************/
let searchText = new ReactiveVar('');

Template.Products.events({
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  }
});

/*****************************************************************************/
/* Products: Helpers */
/*****************************************************************************/
Template.Products.helpers({
  productList: function () {
    let toSearch = searchText.get();
    if (toSearch) {
      return Stocks.find({

        name: {$regex: '.*' + toSearch + '.*'},
        qty:{$ne:0}
      });
    }
    return Stocks.find({qty: {$ne: 0}});
  },
  hasCustomer: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id});
    }
  }
});

/*****************************************************************************/
/* Products: Lifecycle Hooks */
/*****************************************************************************/
Template.Products.onCreated(function () {
});

Template.Products.onRendered(function () {
});

Template.Products.onDestroyed(function () {
});
