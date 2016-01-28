var errors = new ReactiveVar();
let managerSelected = new ReactiveVar(true);
let selectedBranch = new ReactiveVar([]);
Template.updateAccount.helpers({
  hasErrors: function () {
    if (errors.get()) {
      return errors.get();
    }
    return '';
  },
  isManagerSelected: function () {
    return managerSelected.get();
  },
  selectedAccount: function () {
    let currentSelectedAccount = Meteor.users.findOne({_id: Router.current().params.id});
    if(currentSelectedAccount.profile.branchIds){
      let branches = currentSelectedAccount.profile.branchIds;
      selectedBranch.set(branches);
    }
    return currentSelectedAccount;
  },
});

Template.updateAccount.events({
  'submit #updateAccountForm': function (e) {
    e.preventDefault();
    console.log('registration called');
    errors.set();
    let formData = e.target;
    newUser = {
      profile: {
        firstName: formData.firstName.value,
        lastName: formData.lastName.value,
        number: formData.number.value
      }
    };
    let error = [];
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
        console.log(newUser);
      }
      Meteor.call('update.account', newUser, function (err, result) {
        if (err) {
          error.push(err.reason);
          errors.set(error);
        }
      });
    }
  },
  'change #role': function (e) {
    console.log(e);
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

Template.updateAccount.onCreated(function () {
  //add your statement here
});

Template.updateAccount.onRendered(function () {
  //add your statement here
});

Template.updateAccount.onDestroyed(function () {
  //add your statement here
});

