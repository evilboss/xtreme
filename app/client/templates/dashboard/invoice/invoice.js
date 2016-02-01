/*****************************************************************************/
/* Invoice: Event Handlers */
/*****************************************************************************/
let CurrentBill = new ReactiveVar(0);
let totalPaymente = new ReactiveVar(0);

Template.Invoice.events({
  'click #checkout': function () {
    console.log('checkojt');
  },
  'keyup #payment-input': function (e) {
    if (parseInt(e.currentTarget.value)) {
      totalPaymente.set(parseInt(e.currentTarget.value));
    } else {
      totalPaymente.set(0);
    }
  }
});

/*****************************************************************************/
/* Invoice: Helpers */
/*****************************************************************************/
Template.Invoice.helpers({
  'today': function () {
    return moment(Date.now()).format('MM/DD/YYYY');

  },
  'currentBill': function () {
    var billList = Cart.find().fetch();
    var currentBill = 0;
    for (var bills in billList) {
      currentBill += billList[bills].subtotal;
    }
    CurrentBill.set(currentBill);
    return CurrentBill.get();
  },
  change: function () {
    let change = totalPaymente.get() - CurrentBill.get();
    if (change <= 0) {
      change = 0;
    }
    return change;
  }
});

/*****************************************************************************/
/* Invoice: Lifecycle Hooks */
/*****************************************************************************/
Template.Invoice.created = function () {
};

Template.Invoice.rendered = function () {
};

Template.Invoice.destroyed = function () {
};
