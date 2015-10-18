/**
 * Created by jrreyes on 10/18/15.
 */
Router.route('/dashboard/products', {
    name: 'dashboard.products',
    where: 'client',
    controller:'DashboardController',
    action:'products'
});
Router.route('/dashboard/products/add', {
    name: 'dashboard.products.add',
    where: 'client',
    controller:'DashboardController',
    action:'addProducts'
});
Router.route('/dashboard/products/:id', {
    name: 'updateProducts',
    where: 'client',
    controller:'DashboardController',
    action:'UpdateProducts'
});
