/*****************************************************************************/
/* StockItem: Event Handlers */
/*****************************************************************************/

let context = {text: "Comment text!", selected: false};

Template.StockItem.events({
  'change .stock-control-limit': function (e) {
    Template.instance().state.set('selected', true);
    Template.instance().state.set('value', $(e.currentTarget).val());

  },
  'click .change-limit-button': function (e) {
    let ItemId = $(e.currentTarget).attr('data-value');
    let stockControl = StockControl.findOne({itemId: ItemId});
    if (stockControl) {
      StockControl.update({_id: stockControl._id}, {
        $set: {limit: parseInt(Template.instance().state.get('value'))}
      })
    } else {
      StockControl.insert({itemId: ItemId, limit: parseInt(Template.instance().state.get('value'))})

    }
    Template.instance().state.set('selected', false);

  }
});

/*****************************************************************************/
/* StockItem: Helpers */
/*****************************************************************************/
Template.StockItem.helpers({
  getStockLimit: function (id) {
    let stockLimit = StockControl.findOne({itemId: id});
    if (stockLimit) {
      if (stockLimit.limit) {
        return stockLimit.limit;
      }
    }
    return 10;
  },
  isChanged: function () {
    return Template.instance().state.get('selected');
  }
});

/*****************************************************************************/
/* StockItem: Lifecycle Hooks */
/*****************************************************************************/
Template.StockItem.created = function () {
  this.state = new ReactiveDict();
  this.state.set('selected', false);
  this.state.set('value', 0);
};

Template.StockItem.rendered = function () {
};

Template.StockItem.destroyed = function () {
};
