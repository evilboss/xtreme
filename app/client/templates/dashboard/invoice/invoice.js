/*****************************************************************************/
/* Invoice: Event Handlers */
/*****************************************************************************/
let CurrentBill = new ReactiveVar(0);
let totalPayment = new ReactiveVar(0);
let Change = new ReactiveVar(0);
let paymentOk = new ReactiveVar(false);

Template.Invoice.events({
  'click #confirm-payment': function () {
    if (Router.current().params.id) {
      let billing = Customers.findOne({_id: Router.current().params.id});
      Customers.update({_id: billing._id}, {$set: {active: false}});
      sAlert.error('Transaction Completed');
    }


  },
  'keyup #payment-input': function (e) {
    if (parseInt(e.currentTarget.value)) {
      totalPayment.set(parseInt(e.currentTarget.value));
    } else {
      totalPayment.set(0);
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
    if (Router.current().params.id) {
      CurrentBill.set(Customers.findOne({_id: Router.current().params.id}).total)
      return CurrentBill.get();
    }
  },

  change: function () {
    Change.set(totalPayment.get() - CurrentBill.get());
    if (Change.get() <= 0) {
      Change.set(0);
    }
    return Change.get();
  }
  ,
  currentId: function () {
    if (Router.current().params.id) {
      return Customers.findOne({_id: Router.current().params.id})._id;
    }
  },

  hasPaid: function () {
    return Customers.findOne({_id: Router.current().params.id}).active;
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
