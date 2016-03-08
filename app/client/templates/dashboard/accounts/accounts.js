/*****************************************************************************/
/* Accounts: Event Handlers */
/*****************************************************************************/
let roleSelected = new ReactiveVar('All');
let searchText = new ReactiveVar('');

Template.Accounts.events({
  'click .branch-selector': function (e) {
    roleSelected.set($(e.currentTarget).attr('data-name'));
  },
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  }

});

/*****************************************************************************/
/* Accounts: Helpers */
/*****************************************************************************/
Template.Accounts.helpers({
  managers: function () {
    let toSearch = searchText.get();
    let role = roleSelected.get();
    if (toSearch) {
      return Meteor.users.find({
        username: {$regex: '.*' + toSearch + '.*'}

      }, {
        sort: [
          ['username', 'asc']
        ]
      });
    }
    if (role === 'All') {
      return Meteor.users.find({}, {
        sort: [
          ['username', 'asc']
        ]
      }).fetch();
    }
    let managers = Meteor.users.find({
      roles: {$in: [role]}
    }, {
      sort: [
        ['username', 'asc']
      ]
    }).fetch();
    return managers;

  },
  selectedUserRole: function () {
    return roleSelected.get();
  }


});

/*****************************************************************************/
/* Accounts: Lifecycle Hooks */
/*****************************************************************************/
Template.Accounts.onCreated(function () {
});

Template.Accounts.onRendered(function () {
});

Template.Accounts.onDestroyed(function () {
});
