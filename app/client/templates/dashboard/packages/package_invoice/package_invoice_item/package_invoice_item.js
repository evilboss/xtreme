/*****************************************************************************/
/* PackageInvoiceItem: Event Handlers */
/*****************************************************************************/
Template.PackageInvoiceItem.events({
    'click [data-action=removePackage]':function(e){
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
/* PackageInvoiceItem: Helpers */
/*****************************************************************************/
Template.PackageInvoiceItem.helpers({

});

/*****************************************************************************/
/* PackageInvoiceItem: Lifecycle Hooks */
/*****************************************************************************/
Template.PackageInvoiceItem.onCreated(function () {
});

Template.PackageInvoiceItem.onRendered(function () {
});

Template.PackageInvoiceItem.onDestroyed(function () {
});
