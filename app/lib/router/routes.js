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
Router.route('/dashboard/inventory/:id', {
    name: 'updateInventory',
    where: 'client',
    controller:'DashboardController',
    action:'UpdateInventory'
});
Router.route('/dashboard/pos', {
    name: 'dashboard.pos',
    where: 'client',
    controller:'DashboardController',
    action:'pos'
});
Router.route('/dashboard/services', {
    name: 'dashboard.services',
    where: 'client',
    controller:'DashboardController',
    action:'services'
});
Router.route('/dashboard/services/add', {
    name: 'dashboard.services.add',
    where: 'client',
    controller:'DashboardController',
    action:'addServices'
});
Router.route('/dashboard/services/:id', {
    name: 'updateServices',
    where: 'client',
    controller:'DashboardController',
    action:'UpdateServices'
});

/*Router.plugin('ensureSignedIn', {
    only: ['dashboard']
});*/
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});