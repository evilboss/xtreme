/*****************************************************************************/
/* EditBranch: Event Handlers */
/*****************************************************************************/
Template.EditBranch.events({
});

/*****************************************************************************/
/* EditBranch: Helpers */
/*****************************************************************************/
Template.EditBranch.helpers({
  selectedBranch:function(){
    return Branches.findOne({_id:Router.current().params.id});
  }
});

/*****************************************************************************/
/* EditBranch: Lifecycle Hooks */
/*****************************************************************************/
Template.EditBranch.onCreated(function () {
});

Template.EditBranch.onRendered(function () {
});

Template.EditBranch.onDestroyed(function () {
});
