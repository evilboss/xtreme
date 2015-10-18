/**
 * Created by jrreyes on 10/18/15.
 */
Router.route('/dashboard/packages', {
    name: 'dashboard.packages',
    where: 'client',
    controller:'DashboardController',
    action:'packages'
});
Router.route('/dashboard/packages/add', {
    name: 'dashboard.packages.add',
    where: 'client',
    controller:'DashboardController',
    action:'addPackages'
});
Router.route('/dashboard/packages/:id', {
    name: 'updatePackages',
    where: 'client',
    controller:'DashboardController',
    action:'UpdatePackages'
});