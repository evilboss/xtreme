let onSignIn = function (error, state) {
  if (!error) {
    if (state === "signIn") {
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
    }
  }
};

AccountsTemplates.configureRoute('signIn', {
  layoutTemplate: 'loginLayout',
  redirect: '/dashboard'
});
AccountsTemplates.configureRoute('ensureSignedIn', {
  layoutTemplate: 'loginLayout'
});
AccountsTemplates.configure({
  hideSignUpLink: true,
  onSubmitHook: onSignIn

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
      signIn: "",
    }
  }
});