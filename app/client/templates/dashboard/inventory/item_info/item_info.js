/*****************************************************************************/
/* ItemInfo: Event Handlers */
/*****************************************************************************/
Template.ItemInfo.events({});

/*****************************************************************************/
/* ItemInfo: Helpers */
/*****************************************************************************/
Template.ItemInfo.helpers({
  isOutOfStock: function (qty) {
    if (qty == 0) {
      return 'Out of Stock';
    }
    return qty;

  },
  isLowLevel: function (qty, id) {
    let limiter = 10;
    let limit = StockControl.findOne({itemId: id});
    if (limit) {
      if (limit.limit) {
        limiter = limit.limit;
      }
    }
    console.log(parseInt(qty) <= limiter);
    if (parseInt(qty) <= limiter) {
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
