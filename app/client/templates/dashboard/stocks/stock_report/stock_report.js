/*****************************************************************************/
/* StockReport: Event Handlers */
/*****************************************************************************/
let selectedBranch = new ReactiveVar('All');
let startDate = new ReactiveVar();
let endDate = new ReactiveVar();
let searchText = new ReactiveVar('');
Template.StockReport.events({
  'click .branch-selector': function (e) {
    selectedBranch.set($(e.currentTarget).text())
  },
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  }
});

/*****************************************************************************/
/* StockReport: Helpers */
/*****************************************************************************/
Template.StockReport.helpers({
  'currentReports': function (branchId) {
    let toSearch = searchText.get();
    if (toSearch) {
      return Request.find({
        name: {$regex: '.*' + toSearch + '.*'},
        branchId: branchId,
        createdAt: {$gte: startDate.get(), $lte: endDate.get()}
      });
    } else {
      return Request.find({
        branchId: branchId,
        createdAt: {$gte: startDate.get(), $lte: endDate.get()}
      });
    }
  },
  'getStatus': function (status) {
    if (status === 'received') {
      return 'bg-green'
    }
    else if (status === 'for delivery') {
      return 'bg-yellow'
    }

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
  totalRecived: function (branchId) {
    let totalRecieved = Request.find({branchId: branchId, status: 'received'}).fetch();
    let total = 0;
    _.each(totalRecieved, function (item) {
      console.log(item);
      total += item.qty;
    });
    return total;
  }
});

/*****************************************************************************/
/* StockReport: Lifecycle Hooks */
/*****************************************************************************/
Template.StockReport.created = function () {
};

Template.StockReport.rendered = function () {
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

Template.StockReport.destroyed = function () {
};
