/*****************************************************************************/
/* Pos: Event Handlers */
/*****************************************************************************/
let startDate = new ReactiveVar();
let endDate = new ReactiveVar();
let selectedBranch = new ReactiveVar('All');
let searchText = new ReactiveVar('');
Template.Pos.events({
  'click .branch-selector': function (e) {
    selectedBranch.set($(e.currentTarget).text())
  },
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  }
});

/*****************************************************************************/
/* Pos: Helpers */
/*****************************************************************************/
Template.Pos.helpers({
  customerByBranch: function (branchId) {
    let toSearch = searchText.get();
    if (toSearch) {
      return Customers.find({
        name: {$regex: '.*' + toSearch + '.*'},
        branchId: branchId,
        active: false,
        createdAt: {$gte: startDate.get(), $lte: endDate.get()}
      });
    } else {
      return Customers.find({
        branchId: branchId,
        active: false,
        createdAt: {$gte: startDate.get(), $lte: endDate.get()}
      });
    }

  },
  totalAndDiscount:function(){

  },
  getDiscountPrice:function(total,discount){
    return total - discount;
  },
  selectedBranch: function () {
    return selectedBranch.get();
  },
  branchList: function () {
    if (selectedBranch.get() === 'All') {
      return Branches.find();
    } else {
      return Branches.find({name: selectedBranch.get()});
    }
  },
  totalSold: function () {
    let totalList = Customers.find({
      active: false,
      createdAt: {$gte: startDate.get(), $lte: endDate.get()}
    }).fetch();
    let grandTotal = 0;
    _.each(totalList, function (item) {
      if(item.discount){
        grandTotal -= item.discount
      }
      grandTotal += item.total;
    });
    return grandTotal;

  },
  totalSoldBranch: function (branchId) {
    let totalList = Customers.find({
      active: false, branchId: branchId, createdAt: {$gte: startDate.get(), $lte: endDate.get()}
    }).fetch();
    let grandTotal = 0;
    console.log(totalList);
    _.each(totalList, function (item) {
      if(item.discount){
        grandTotal -= item.discount
      }
      grandTotal += item.total;
    });
    return grandTotal;

  },
  allCartData:function(customerId){
    return CartData.find({customerId:customerId}).fetch();
  }

});

/*****************************************************************************/
/* Pos: Lifecycle Hooks */
/*****************************************************************************/
Template.Pos.created = function () {
};

Template.Pos.rendered = function () {
  Meteor.typeahead.inject();
  $(function () {
    function cb(start, end) {
      $('#daterange-btn ').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

      startDate.set(moment(start).toDate());
      endDate.set(moment(end).toDate());
    }

    cb(moment().subtract(29, 'days'), moment());

    $('#daterange-btn').daterangepicker({
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);

  });
};

Template.Pos.destroyed = function () {
};
