/**
 * Created by jrreyes on 10/17/15.
 */
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