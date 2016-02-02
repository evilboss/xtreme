/**
 * Created by gilbertor on 8/24/15.
 */
Template._header.helpers({
  deliveries: function () {
    if (Roles.userIsInRole(Meteor.userId(), ['manager'])) {
      let request = Request.find({status: 'for delivery'});
      if (request.count()) {
        return request;
      }
    } else {
      return '';
    }
  }
});


Template._header.events({
  'click [data-action=doSomething]': function (e) {
    e.preventDefault();
  },
  'click li.branch-item>a': function (e) {
    e.preventDefault();
    Session.set('branch', $(e.currentTarget).attr('value'));
  },
  'click .notification-button': function (e) {
    e.preventDefault();
    let requestId = $(e.currentTarget).attr('data-value');
    if (requestId) {
      let request = Request.findOne({_id: requestId});
      let inventoryItem = Inventory.find({_id: request.id});
      console.log(request);
      if (request) {
        let branchId;
        if (Session.get('branch')) {
          branchId = Session.get('branch');
        } else {
          branchId = Meteor.user().profile.branchIds[0];
        }
        let currentBranch = Branches.find({_id: branchId}).fetch();
        if (currentBranch) {
          let selectedStock = Stocks.findOne({id: request.id});
          if (selectedStock) {
            request.qty += selectedStock.qty;
            Stocks.update({_id: selectedStock._id}, {$set: {qty: request.qty}});
          } else {
             Stocks.insert({
             name: request.name,
             id: request.id,
             qty: request.qty,
             status: 'received',
             branchId: request.branchId
             });
          }
          Request.update({_id: requestId}, {$set: {status: 'received'}});
          sAlert.info('Stocks Updated');
        }
      }


    }
  }
});