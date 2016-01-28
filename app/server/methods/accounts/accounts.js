/**
 * Created by jrreyes on 27/01/16.
 */
Meteor.methods({
  'new.account': function (user) {
    console.log('new user called');
    console.log(user);
    Accounts.createUser({
      username: user.username,
      password: user.password,
      profile: {
        firstName:user.profile.firstName,
        lastName:user.profile.lastName,
        number:user.profile.number,
        branchIds:user.profile.branchIds,
      }
    });
  },
  "update.account": function (user) {
    console.log('new user called');
    console.log(user);
    Meteor.users.update({
      username: user.username,
      password: user.password,
      profile: {
        firstName:user.profile.firstName,
        lastName:user.profile.lastName,
        number:user.profile.number,
        branchIds:user.profile.branchIds,
      }
    });
  }
});