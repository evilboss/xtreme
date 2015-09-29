DashboardController = RouteController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  },
  action:function(){
    this.render('dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
