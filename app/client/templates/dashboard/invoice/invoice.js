/*****************************************************************************/
/* Invoice: Event Handlers */
/*****************************************************************************/
Template.Invoice.events({
});

/*****************************************************************************/
/* Invoice: Helpers */
/*****************************************************************************/
Template.Invoice.helpers({
    'today':function(){
        return moment(Date.now()).format('MM/DD/YYYY');

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
