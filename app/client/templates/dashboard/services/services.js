/*****************************************************************************/
/* Services: Event Handlers */
/*****************************************************************************/
let searchText = new ReactiveVar('');
Template.Services.events({
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    console.log(searchText.get());
    searchText.set(text);
  }
});

/*****************************************************************************/
/* Services: Helpers */
/*****************************************************************************/
Template.Services.helpers({
  hasCustomer: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id});
    }
  },
  serviceList:function(){
    let toSearch = searchText.get();
    if (toSearch) {
      return Services.find({
        name: {$regex: '.*' + toSearch + '.*'}
      });
    }

    return Services.find().fetch();
  }
});

/*****************************************************************************/
/* Services: Lifecycle Hooks */
/*****************************************************************************/
Template.Services.created = function () {
};

Template.Services.rendered = function () {
};

Template.Services.destroyed = function () {
};
