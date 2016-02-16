let searchText = new ReactiveVar('');

Template.memberList.helpers({
  memberList: function () {
    let toSearch = searchText.get();
    if (toSearch) {
      return Members.find({
        firstName: {$regex: '.*' + toSearch + '.*'}
      });
    } else {
      return Members.find({});
    }
  }});

Template.memberList.events({
  'keyup #search-box': function (e) {
    var text = $(e.target).val().trim();
    searchText.set(text);
  }
});

Template.memberList.onCreated(function () {
  //add your statement here
});

Template.memberList.onRendered(function () {
  //add your statement here
});

Template.memberList.onDestroyed(function () {
  //add your statement here
});

