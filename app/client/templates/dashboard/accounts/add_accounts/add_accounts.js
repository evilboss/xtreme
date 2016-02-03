/*****************************************************************************/
/* AddAccounts: Event Handlers */
/*****************************************************************************/
let errors = new ReactiveVar();
let managerSelected = new ReactiveVar(false);
let selectedBranch = new ReactiveVar([]);
Template.AddAccounts.events({
  'submit #registration': function (e) {
    e.preventDefault();
    errors.set();
    let formData = e.target;
    newUser = {
      username: formData.username.value,
      password: formData.password.value,
      profile: {
        firstName: formData.firstName.value,
        lastName: formData.lastName.value,
        number: formData.number.value
      }
    };
    let error = [];
    if (!newUser.username) {
      error.push('Username Required')
    }
    if (!newUser.password) {
      error.push('Password Required')

    }
    if (!newUser.profile.firstName) {
      error.push('firstName Required')

    }
    if (!newUser.profile.lastName) {
      error.push('LastName Required');
    }
    errors.set(error);
    if (error.length === 0) {
      if (formData.role.value === 'admin') {
        if (Admin.find({username: newUser.username}).count() === 0) {
          Admin.insert({username: newUser.username});
        }
      }
      else if (formData.role.value === 'manager') {
        if (Managers.find({username: newUser.username}).count() === 0) {
          newUser.profile.branchIds = selectedBranch.get();
          Managers.insert({username: newUser.username});
        }
      }
      Meteor.call('new.account', newUser, function (err, result) {
        if (err) {
          error.push(err.reason);
          errors.set(error);
        }else{
          Router.go('accounts');

        }

      });


    }


  },
  'change #role': function (e) {
    if (e.currentTarget.value === 'admin') {
      managerSelected.set(false);
    } else {
      managerSelected.set(true);
    }

  }
  ,
  'change input[type=checkbox]': function (e) {
    let selected = e.target.checked;
    let currentBranches = selectedBranch.get();
    if (selected) {
      currentBranches.push(e.currentTarget.value);
    } else {
      currentBranches.slice(e.currentTarget.value);
    }
    selectedBranch.set(currentBranches);
  }

});
Template.AddAccounts.helpers({
  hasErrors: function () {
    if (errors.get()) {
      return errors.get();
    }
    return '';
  },
  isManagerSelected: function () {
    return managerSelected.get();
  }
});
Template.AddAccounts.onCreated(function () {
});
Template.AddAccounts.onRendered(function () {
});
Template.AddAccounts.onDestroyed(function () {
});