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
    console.log(currentSelectedAccount);
    return currentSelectedAccount;
  },
});

Template.updateAccount.events({
  'submit #updateAccountForm': function (e) {
    e.preventDefault();
    console.log('update-account called');
    var data = SimpleForm.processForm(event.target);

    let error = [];
    errors.set(error);
    if (error.length === 0) {
      if (data.role.value === 'admin') {
        if (Admin.find({username: data.username}).count() === 0) {
          Admin.insert({username: data.username});
        }
      }
      else if (data.role.value === 'manager') {
        if (Managers.find({username: data.username}).count() === 0) {
          newUser.profile.branchIds = selectedBranch.get();
          Managers.insert({username: newUser.username});
        }
      }
      console.log(selectedBranch.get());
      data.branchIds = selectedBranch.get();
      Meteor.call('update.account', data, function (err, result) {
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

