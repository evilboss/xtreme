/*****************************************************************************/
/* Packages: Event Handlers */
/*****************************************************************************/
Template.Packages.events({
    'click [data-action=availPackage]':function(e){
        e.preventDefault();
        var packages = Packages.findOne({_id:e.currentTarget.value})
        packages.type = 'Package';
        var alreadyAdded = Cart.findOne({_id:e.currentTarget.value});
        if(alreadyAdded){
            Cart.update(alreadyAdded, {$inc: {qty: 1,subtotal:packages.price}});
        }else{
            packages.qty=1;
            packages.subtotal = packages.price;
            Cart.insert(packages);

        }
    }
});

/*****************************************************************************/
/* Packages: Helpers */
/*****************************************************************************/
Template.Packages.helpers({
});

/*****************************************************************************/
/* Packages: Lifecycle Hooks */
/*****************************************************************************/
Template.Packages.onCreated(function () {
});

Template.Packages.onRendered(function () {
});

Template.Packages.onDestroyed(function () {
});
