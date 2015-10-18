/**
 * Created by jrreyes on 10/17/15.
 */
Router.route('/dashboard/pos', {
    name: 'dashboard.pos',
    where: 'client',
    controller:'DashboardController',
    action:'pos'
});