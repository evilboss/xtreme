Template.stocks.helpers({
  'currentStocks':function(branchId){
    return Stocks.find({branchId:branchId})
  },
  getItemPrice:function(id){
    return Inventory.findOne({_id:id}).price;
  },
  isLowLevel:function(qty){
    if(parseInt(qty)<=10){
      return 'bg-red badge';
    }

  }
});

Template.stocks.events({
  //add your events here
});

Template.stocks.onCreated(function () {
  //add your statement here
});

Template.stocks.onRendered(function () {
  //add your statement here
});

Template.stocks.onDestroyed(function () {
  //add your statement here
});

