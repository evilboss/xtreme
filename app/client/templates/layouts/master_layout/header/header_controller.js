/**
 * Created by gilbertor on 8/24/15.
 */

let clean = function (collection) {
  if (collection) {

    // clean items
    _.each(collection.find().fetch(), function (item) {
      collection.remove({_id: item._id});
    });
  }

}
Template._header.events({
  'click [data-action=doSomething]': function (e) {
    e.preventDefault();
  },
  'click #services-tab': function () {
    clean(Cart);
    Router.go('dashboard.services');
  },
  'click #products-tab': function () {
    clean(Cart);
    Router.go('dashboard.products');
  }

});