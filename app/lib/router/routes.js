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
Router.route('/dashboard/sales', {
    name: 'dashboard.sales',
    where: 'client',
    controller:'DashboardController',
    action:'sales'
});
Router.route('/dashboard/inventory', {
    name: 'dashboard.inventory',
    where: 'client',
    controller:'DashboardController',
    action:'inventory'
});
Router.route('/dashboard/inventory/add', {
    name: 'dashboard.inventory.add',
    where: 'client',
    controller:'DashboardController',
    action:'addInventory'
});
Router.route('/dashboard/pos', {
    name: 'dashboard.pos',
    where: 'client',
    controller:'DashboardController',
    action:'pos'
});

Router.plugin('ensureSignedIn', {
    only: ['dashboard']
});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});