Meteor.startup(function () {
  if (Admin.find({}).count() === 0) {
    console.log('Starting Admin Migration');
    let defaultAdmins = ['admin'];
    for (let admins in defaultAdmins) {
      let admin = {username: defaultAdmins[admins]};
      Admin.insert(admin);
    }
  }
  if (Managers.find({}).count() === 0) {
    let defaultManagers = ['main'];
    for (let managers in defaultManagers) {
      let manager = {username: defaultManagers[managers]};
      Managers.insert(manager);
    }
  }
  if (Staff.find({}).count() === 0) {
    let defaultStaffs = ['staff1'];
    for (let staffs in defaultStaffs) {
      let staff = {username: defaultStaffs[staffs]};
      Staff.insert(staff);
    }
  }
//Creates Default admin account
  if (Meteor.users.find({}).count() === 0) {
    if (Branches.find({}).count()) {
      console.log('Branches were added, now checking if default admins are set');

      if (Admin.find({}).count()) {
        console.log('Default Admins were set, Adding Admin Accounts');

        Accounts.createUser({
          username: "admin",
          password: "password",
          profile: {firstName: 'Super', lastName: "Admin"}
        });
      }
      if (Managers.find({}).count()) {
        console.log('managers Were set. Adding Manager Accounts');
        Accounts.createUser({
          username: "main",
          password: "password",
          profile: {firstName: 'Main', lastName: "Manager"}
        });
      }

      if (Staff.find({}).count()) {
        console.log('Adding Staff');

        Accounts.createUser({
          username: "staff1",
          password: "password",
          profile: {firstName: 'Hair', lastName: "Stylist"}
        });


      }

    }
  }

})
;

