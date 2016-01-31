Template.customerList.helpers({
  customerList:function(){
    return Customers.find({active:true},{sort:{createdAt:-1}});
  }
  //add you helpers here
});

Template.customerList.events({
  //add your events here
});

Template.customerList.onCreated(function () {
  //add your statement here
});

Template.customerList.onRendered(function () {
  //add your statement here
});

Template.customerList.onDestroyed(function () {
  //add your statement here
});

