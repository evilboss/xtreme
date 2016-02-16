let startDate = new ReactiveVar();
let endDate = new ReactiveVar();
let selectedBranch = new ReactiveVar('All');
let searchText = new ReactiveVar('');
Template.customerList.helpers({
  customerList: function () {
    let toSearch = searchText.get();
    if (toSearch) {
      return Customers.find({
        name: {$regex: '.*' + toSearch + '.*'},

        active: true,
        createdAt: {
          $gte: startDate.get(), $lte: endDate.get()
        }
      }, {sort: {createdAt: -1}});
    } else {
      return Customers.find({

        active: true,
        createdAt: {$gte: startDate.get(), $lte: endDate.get()}
      }, {sort: {createdAt: -1}});
    }
  }
});
Template.customerList.events({
  'click .branch-selector': function (e) {
    selectedBranch.set($(e.currentTarget).text())
  },
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  }
});
Template.customerList.onCreated(function () {
  //add your statement here
});

Template.customerList.onRendered(function () {
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
});

Template.customerList.onDestroyed(function () {
  //add your statement here
});

