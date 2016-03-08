Template.stocks.helpers({
  'currentStocks':function(branchId){
    return Stocks.find({branchId:branchId}, {sort: {'qty': 1}})
  },
  getItemPrice:function(id){
    return Inventory.findOne({_id:id}).price;
  },
  isLowLevel: function (qty, id) {
    let limiter = 10;
    let limit = StockControl.findOne({itemId: id});
    if (limit) {
      if (limit.limit) {
        limiter = limit.limit;
      }
    }
    if (parseInt(qty) <= limiter) {
      return 'bg-red badge';
    }

  },
  isOutOfStock:function(qty){
    if(qty == 0){
      return 'Out of Stock';
    }
    return qty;

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

