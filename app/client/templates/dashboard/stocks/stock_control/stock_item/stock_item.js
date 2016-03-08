/*****************************************************************************/
/* StockItem: Event Handlers */
/*****************************************************************************/
Template.StockItem.events({
  'change .stock-control-limit':function(e){
    console.log('change',e.currentTarget)
  }
});

/*****************************************************************************/
/* StockItem: Helpers */
/*****************************************************************************/
Template.StockItem.helpers({
  getStockLimit:function(id){
    return 10;
  }
});

/*****************************************************************************/
/* StockItem: Lifecycle Hooks */
/*****************************************************************************/
Template.StockItem.created = function () {
};

Template.StockItem.rendered = function () {
};

Template.StockItem.destroyed = function () {
};
