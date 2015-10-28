/*****************************************************************************/
/* UpdatePackages: Event Handlers */
/*****************************************************************************/
Template.UpdatePackages.events({
});

/*****************************************************************************/
/* UpdatePackages: Helpers */
/*****************************************************************************/
Template.UpdatePackages.helpers({
    selectedItem:function(){
        return Packages.findOne({_id:Router.current().params.id});
    }
});

/*****************************************************************************/
/* UpdatePackages: Lifecycle Hooks */
/*****************************************************************************/
Template.UpdatePackages.onCreated(function () {
});

Template.UpdatePackages.onRendered(function () {
});

Template.UpdatePackages.onDestroyed(function () {
});
