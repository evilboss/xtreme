/*****************************************************************************/
/* Invoice: Event Handlers */
/*****************************************************************************/
let CurrentBill = new ReactiveVar(0);
let totalPayment = new ReactiveVar(0);
let Change = new ReactiveVar(0);
let paymentOk = new ReactiveVar(false);
let Discount = new ReactiveVar(0);
let DiscountValue = new ReactiveVar(0);
let currentCustomer = new ReactiveVar();

Template.Invoice.events({
  'click #confirm-payment': function () {
    if (Router.current().params.id) {
      let billing = Customers.findOne({_id: Router.current().params.id});
      Customers.update({_id: billing._id}, {$set: {active: false, paid: totalPayment.get(), change: Change.get()}});
      billing = Customers.findOne({_id: Router.current().params.id});
      console.log(billing);
      sAlert.error('Transaction Completed');
    }


  },
  'keyup #payment-input': function (e) {
    if (parseInt(e.currentTarget.value)) {
      totalPayment.set(parseInt(e.currentTarget.value));
    } else {
      totalPayment.set(0);
    }
  },
  'click #confirm-member': function (e) {
    if (Router.current().params.id) {
      let billing = Customers.findOne({_id: Router.current().params.id});
      Customers.update({_id: billing._id}, {$set: {member: true}});
      currentCustomer.set(Customers.findOne({_id: Router.current().params.id}));
      Router.current().render(Template.Invoice);
      sAlert.error('Member Confirmed');

    }
  },

  'click #discount': function () {
    let discount = DiscountValue.get();
    if (discount) {
      console.log('discount is set', discount);
      let bill = Customers.findOne({_id: Router.current().params.id}).total;
      let myDiscount = bill * discount;

      if (myDiscount) {
        let customerToUpdate = Customers.findOne({_id: Router.current().params.id});
        if (customerToUpdate) {
          Customers.update({_id: customerToUpdate._id}, {$set: {discount: myDiscount}});
          currentCustomer.set(Customers.find({_id: Router.current().params.id}).fetch());

        }
      }
    }
    console.log('discount');
  },
  'click .discount-option': function (e) {
    DiscountValue.set($(e.currentTarget).attr('discount'));
  }
});

Template.Invoice.helpers({
  currentCustomer: function () {
    let currentCustomer =Customers.findOne({_id: Router.current().params.id});
    return currentCustomer;
  },
  'today': function () {
    return moment(Date.now()).format('MM/DD/YYYY');

  },
  'currentBill': function () {
    if (Router.current().params.id) {
      let currentCustomer = Customers.findOne({_id: Router.current().params.id});
      let currentBill = currentCustomer.total - currentCustomer.discount;
      console.log(currentBill);
      CurrentBill.set(currentBill);
      return CurrentBill.get();
    }
  },
  change: function () {
    Change.set(totalPayment.get() - CurrentBill.get());
    if (Change.get() <= 0) {
      Change.set(0);
    }
    return Change.get();
  },
  isCurrentCustomer(id){
    if (Router.current().params.id) {
      if(Router.current().params.id == id){
        Customers.findOne({_id:id});
        return true;
      }
    }
  },

  hasPaid: function () {
    return Customers.findOne({_id: Router.current().params.id}).active;
  },
  hasDiscount: function () {
    console.log(currentCustomer.get());

    return currentCustomer.get().discount;


  },
  isMember: function () {
    console.log(currentCustomer.get());
    return currentCustomer.get().member;
  }
});

/*****************************************************************************/
/* Invoice: Lifecycle Hooks */
/*****************************************************************************/
Template.Invoice.created = function () {
};

Template.Invoice.rendered = function () {
  Change.set(0);
};

Template.Invoice.destroyed = function () {
};
