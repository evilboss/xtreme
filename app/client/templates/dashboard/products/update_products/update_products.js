/*****************************************************************************/
/* UpdateProducts: Event Handlers */
/*****************************************************************************/
Template.UpdateProducts.events({
});

/*****************************************************************************/
/* UpdateProducts: Helpers */
/*****************************************************************************/
Template.UpdateProducts.helpers({
    selectedItem:function(){
        return Products.findOne({_id:Router.current().params.id});
    }
});

/*****************************************************************************/
/* UpdateProducts: Lifecycle Hooks */
/*****************************************************************************/
Template.UpdateProducts.onCreated(function () {
});

Template.UpdateProducts.onRendered(function () {
});

Template.UpdateProducts.onDestroyed(function () {
});
