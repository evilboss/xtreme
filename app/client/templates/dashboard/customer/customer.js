Template.customer.helpers({
  currentCustomer: function () {
    let customer = Customers.findOne({_id: Router.current().params.id});
    return customer;
  }
});

Template.customer.events({
  'submit #insertCustomersForm': function (e) {
    e.preventDefault();
    let data = SimpleForm.processForm(event.target);
    let branchId = Session.get('branch');
    if (branchId) {
      data.staffId = Meteor.userId();
      data.branchId = branchId;
      Customers.insert(data);
    } else {
      sAlert.error('Select Your Branch');
    }
    console.log(data);

  },

});

Template.customer.onCreated(function () {
  //add your statement here
});

Template.customer.onRendered(function () {

});

Template.customer.onDestroyed(function () {
  //add your statement here
});
