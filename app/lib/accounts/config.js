AccountsTemplates.configureRoute('signIn', {
    layoutTemplate: 'loginLayout',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('ensureSignedIn', {
    layoutTemplate: 'loginLayout'
});
AccountsTemplates.configure({
    hideSignUpLink: true
});
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
  },
  pwd
]);

AccountsTemplates.configure({
    texts: {
        title: {
            signIn: "eXtreme Salon",
        }
    }
});