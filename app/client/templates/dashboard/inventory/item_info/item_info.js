/*****************************************************************************/
/* ItemInfo: Event Handlers */
/*****************************************************************************/
Template.ItemInfo.events({
});

/*****************************************************************************/
/* ItemInfo: Helpers */
/*****************************************************************************/
Template.ItemInfo.helpers({
  isOutOfStock:function(qty){
    if(qty == 0){
      return 'Out of Stock';
    }
    return qty;

  },
  isLowLevel:function(qty){
    if(parseInt(qty)<=10){
      return 'bg-red badge';
    }

  },
});

/*****************************************************************************/
/* ItemInfo: Lifecycle Hooks */
/*****************************************************************************/
Template.ItemInfo.created = function () {
};

Template.ItemInfo.rendered = function () {
};

Template.ItemInfo.destroyed = function () {
};
