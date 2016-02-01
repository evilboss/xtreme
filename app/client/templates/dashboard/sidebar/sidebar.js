Template.sidebar.helpers({
  //add you helpers here
});

Template.sidebar.events({
  'click #services-tab': function (e) {
    Router.go('dashboard.services');


  },
  'click #products-tab': function (e) {
    Router.go('dashboard.products');
  },


});

Template.sidebar.onCreated(function () {
  //add your statement here
});

Template.sidebar.onRendered(function () {
  //add your statement here
});

Template.sidebar.onDestroyed(function () {
  //add your statement here
});

