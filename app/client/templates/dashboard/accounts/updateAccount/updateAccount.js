var errors = new ReactiveVar();
let managerSelected = new ReactiveVar(false);
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
    if (currentSelectedAccount.profile.branchIds) {
      let branches = currentSelectedAccount.profile.branchIds;
      selectedBranch.set(branches);
    }
    return currentSelectedAccount;
  },
  isSelectedRole: function (role, option) {
    if (role[0] === 'manager' || role[0] === 'staff') {
      managerSelected.set(true);
    }
    if (role[0] === option) {
      return 'selected';
    }
  }
});

Template.updateAccount.events({
  'submit #updateAccountForm': function (e) {
    e.preventDefault();
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
          Managers.insert({username: newUser.username});
        }
      }
      else if (data.role.value === 'staff') {
        if (Staff.find({username: data.username}).count() === 0) {
          Staff.insert({username: newUser.username});
        }
      }
      data.branchIds = selectedBranch.get();
      Meteor.call('update.account', data, function (err, result) {
        if (err) {
          error.push(err.reason);
          errors.set(error);
        } else {
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

Template.updateAccount.onCreated(function () {
  //add your statement here
});

Template.updateAccount.onRendered(function () {
  selectedBranch.set([]);
});

Template.updateAccount.onDestroyed(function () {
  //add your statement here
});

