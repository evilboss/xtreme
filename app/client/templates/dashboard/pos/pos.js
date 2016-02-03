/*****************************************************************************/
/* Pos: Event Handlers */
/*****************************************************************************/
let startDate = new ReactiveVar();
let endDate = new ReactiveVar();
let selectedBranch = new ReactiveVar('All');
Template.Pos.events({
  'click .branch-selector': function (e) {
    selectedBranch.set($(e.currentTarget).text())
  }
});

/*****************************************************************************/
/* Pos: Helpers */
/*****************************************************************************/
Template.Pos.helpers({
  customerByBranch: function (branchId) {
    return Customers.find({
      branchId: branchId,
      createdAt: {$gte: startDate.get(), $lte: endDate.get()}
    });
  },
  formatDate: function (date) {
    return moment(date).format('ll');
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
      createdAt: {$gte: startDate.get(), $lte: endDate.get()}
    }).fetch();
    let grandTotal = 0;
    console.log(totalList);
    _.each(totalList,function(item){
      grandTotal+=item.total;
    });
    return grandTotal;

  },
  totalSoldBranch: function (branchId) {
    let totalList = Customers.find({branchId:branchId,createdAt: {$gte: startDate.get(), $lte: endDate.get()}
    }).fetch();
    let grandTotal = 0;
    console.log(totalList);
    _.each(totalList,function(item){
      grandTotal+=item.total;
    });
    return grandTotal;

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
