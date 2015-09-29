PublicController = RouteController.extend({
    layoutTemplate: 'publicLayout',
    action: function () {
        this.render('Home')
    }
})
;

PublicController.events({
    'click [data-action=logout]': function () {
        AccountsTemplates.logout();
    }
});