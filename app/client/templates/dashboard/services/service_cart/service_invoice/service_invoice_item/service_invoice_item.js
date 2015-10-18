/*****************************************************************************/
/* ServiceInvoiceItem: Event Handlers */
/*****************************************************************************/
Template.ServiceInvoiceItem.events({
    'click [data-action=removeService]':function(e){
        e.preventDefault();
        var serviceToRemove = Cart.findOne({_id:e.currentTarget.value});
        if(serviceToRemove.qty == 1){
            Cart.remove(serviceToRemove);
        }else{
            Cart.update(serviceToRemove, {$inc: {qty: -1,subtotal:-serviceToRemove.price}});

        }
    }

});

/*****************************************************************************/
/* ServiceInvoiceItem: Helpers */
/*****************************************************************************/
Template.ServiceInvoiceItem.helpers({
});

/*****************************************************************************/
/* ServiceInvoiceItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ServiceInvoiceItem.onCreated(function () {
});

Template.ServiceInvoiceItem.onRendered(function () {
});

Template.ServiceInvoiceItem.onDestroyed(function () {
});
