/**
 * Created by jrreyes on 10/17/15.
 */
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