/*****************************************************************************/
/* Invoice: Event Handlers */
/*****************************************************************************/

Template.Print.helpers({
  'today': function () {
    return moment(Date.now()).format('MM/DD/YYYY');

  },
  currentCustomer: function () {
      return Customers.findOne({_id: Router.current().params.id});
      },
});

Template.Print.rendered = function () {
  window.print();
};
