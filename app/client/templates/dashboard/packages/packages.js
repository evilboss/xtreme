/*****************************************************************************/
/* Packages: Event Handlers */
/*****************************************************************************/
let searchText = new ReactiveVar('');

Template.Packages.events({
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    console.log(searchText.get());
    searchText.set(text);
  }

});

/*****************************************************************************/
/* Packages: Helpers */
/*****************************************************************************/
Template.Packages.helpers({
  hasCustomer: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id});
    }
  },
  packageList: function () {
    let toSearch = searchText.get();
    if (toSearch) {
      return Packages.find({
        name: {$regex: '.*' + toSearch + '.*'}
      });
    }
    return Packages.find({qty: {$ne: 0}});

  }
});

/*****************************************************************************/
/* Packages: Lifecycle Hooks */
/*****************************************************************************/
Template.Packages.onCreated(function () {
});

Template.Packages.onRendered(function () {
});

Template.Packages.onDestroyed(function () {
});
