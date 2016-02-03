/*****************************************************************************/
/* PrintPreview: Event Handlers */
/*****************************************************************************/
Template.PrintPreview.events({
});

/*****************************************************************************/
/* PrintPreview: Helpers */
/*****************************************************************************/
Template.PrintPreview.helpers({
  currentId:function(){
    if (Router.current().params.id) {
     return Customers.findOne({_id:Router.current().params.id})._id;
    }
  }
});

/*****************************************************************************/
/* PrintPreview: Lifecycle Hooks */
/*****************************************************************************/
Template.PrintPreview.onCreated(function () {
});

Template.PrintPreview.onRendered(function () {
});

Template.PrintPreview.onDestroyed(function () {
});
