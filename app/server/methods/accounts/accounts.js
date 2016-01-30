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
        firstName: user.profile.firstName,
        lastName: user.profile.lastName,
        number: user.profile.number,
        branchIds: user.profile.branchIds,
      }
    });
  },
  'update.account': function (user) {
    console.log('update user called');
    console.log(user);
    let updateUser = Meteor.users.findOne({_id:user.id});
    console.log(updateUser);
    Meteor.users.update(updateUser, {
      $set: {
        profile: {
          firstName: user.firstName,
          lastName: user.lastName,
          number: user.number,
          branchIds: user.branchIds,
        }}
    });

  }
});