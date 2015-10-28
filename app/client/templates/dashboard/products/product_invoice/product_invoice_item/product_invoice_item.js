/*****************************************************************************/
/* ProductInvoiceItem: Event Handlers */
/*****************************************************************************/
Template.ProductInvoiceItem.events({
    'click [data-action=removeProduct]':function(e){
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
/* ProductInvoiceItem: Helpers */
/*****************************************************************************/
Template.ProductInvoiceItem.helpers({
});

/*****************************************************************************/
/* ProductInvoiceItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ProductInvoiceItem.onCreated(function () {
});

Template.ProductInvoiceItem.onRendered(function () {
});

Template.ProductInvoiceItem.onDestroyed(function () {
});
