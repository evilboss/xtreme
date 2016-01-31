/*****************************************************************************/
/* Services: Event Handlers */
/*****************************************************************************/
Template.Services.events({
    'click .AvailService':function(e){
        e.preventDefault();
        var service = Services.findOne({_id:e.currentTarget.value})
        service.type = 'Service';
        var alreadyAdded = Cart.findOne({_id:e.currentTarget.value});
        if(alreadyAdded){
            Cart.update(alreadyAdded, {$inc: {qty: 1,subtotal:service.price}});
        }else{
            service.qty=1;
            service.subtotal = service.price;
            Cart.insert(service);

        }
    }
});

/*****************************************************************************/
/* Services: Helpers */
/*****************************************************************************/
Template.Services.helpers({


});

/*****************************************************************************/
/* Services: Lifecycle Hooks */
/*****************************************************************************/
Template.Services.created = function () {
};

Template.Services.rendered = function () {
};

Template.Services.destroyed = function () {
};
