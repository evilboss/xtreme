/*****************************************************************************/
/* UpdateServices: Event Handlers */
/*****************************************************************************/
Template.UpdateServices.events({
});

/*****************************************************************************/
/* UpdateServices: Helpers */
/*****************************************************************************/
Template.UpdateServices.helpers({
    selectedItem:function(){
        return Services.findOne({_id:Router.current().params.id});
    }
});

/*****************************************************************************/
/* UpdateServices: Lifecycle Hooks */
/*****************************************************************************/
Template.UpdateServices.created = function () {
};

Template.UpdateServices.rendered = function () {
};

Template.UpdateServices.destroyed = function () {
};
