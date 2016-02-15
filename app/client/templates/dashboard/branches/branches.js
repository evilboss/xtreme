/*****************************************************************************/
/* Branches: Event Handlers */
/*****************************************************************************/
Template.Branches.events({});

/*****************************************************************************/
/* Branches: Helpers */
/*****************************************************************************/
Template.Branches.helpers({
  branchList: function () {
    return Branches.find({}, {
      sort: [
        ['name', 'asc']
      ]
    }).fetch();
  }
});

/*****************************************************************************/
/* Branches: Lifecycle Hooks */
/*****************************************************************************/
Template.Branches.onCreated(function () {
});

Template.Branches.onRendered(function () {
});

Template.Branches.onDestroyed(function () {
});
