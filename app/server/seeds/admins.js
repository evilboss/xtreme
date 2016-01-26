
if (Admin.find({}).count() === 0) {
    var defaultAdmins = ['admin@admin.com'];

    for (var admins in defaultAdmins) {
        var admin = {email: defaultAdmins[admins]};
        Admin.insert(admin);
    }
}
//Creates Default admin account
if (Meteor.users.find({}).count() === 0) {
    Accounts.createUser({
        username: "admin",
        password: "password",
        profile:{firstName:'Admin'}
    });
    Accounts.createUser({
        username: "manager1",
        password: "password",
        profile:{firstName:'Manager1'}
    });
}