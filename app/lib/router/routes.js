Router.route('/', {
    name: 'home',
    controller: 'PublicController',
    where: 'client',
    action:'action'
});

Router.route('/dashboard', {
    name: 'dashboard',
    where: 'client',
    controller:'DashboardController',
    action:'action'
});

Router.plugin('ensureSignedIn', {
    only: ['dashboard']
});
