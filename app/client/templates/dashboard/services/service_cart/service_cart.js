/*****************************************************************************/
/* ServiceCart: Event Handlers */
/*****************************************************************************/
Template.ServiceCart.events({
});

/*****************************************************************************/
/* ServiceCart: Helpers */
/*****************************************************************************/
Template.ServiceCart.helpers({
    'serviceList':function(){
        return Cart.find({type:'Service'}).fetch();
    },
    'packageList':function(){
        return Cart.find({type:'Package'}).fetch();
    },
    'currentBill':function(){
        var billList = Cart.find().fetch();
        var currentBill = 0;
        for (var bills in billList){
            currentBill += billList[bills].subtotal;
        }
        return currentBill;
    }
});

/*****************************************************************************/
/* ServiceCart: Lifecycle Hooks */
/*****************************************************************************/
Template.ServiceCart.onCreated(function () {
});

Template.ServiceCart.onRendered(function () {
});

Template.ServiceCart.onDestroyed(function () {
});
