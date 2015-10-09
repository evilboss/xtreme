/*****************************************************************************/
/* UpdateItem: Event Handlers */
/*****************************************************************************/
Template.UpdateItem.events({
});

/*****************************************************************************/
/* UpdateItem: Helpers */
/*****************************************************************************/
Template.UpdateItem.helpers({
    selectedItem:function(){
        return Inventory.findOne({_id:Router.current().params.id});
    }
});

/*****************************************************************************/
/* UpdateItem: Lifecycle Hooks */
/*****************************************************************************/
Template.UpdateItem.created = function () {
};

Template.UpdateItem.rendered = function () {
};

Template.UpdateItem.destroyed = function () {
};
