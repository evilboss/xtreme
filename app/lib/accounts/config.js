AccountsTemplates.configureRoute('signIn', {
    layoutTemplate: 'publicLayout',
    redirect: '/dashboard'
});
;
AccountsTemplates.configureRoute('ensureSignedIn', {
    layoutTemplate: 'publicLayout'
});

AccountsTemplates.configure({
    hideSignUpLink: true
});
AccountsTemplates.configure({
    texts: {
        title: {
            signIn: "eXtreme Salon",
        }
    }
});