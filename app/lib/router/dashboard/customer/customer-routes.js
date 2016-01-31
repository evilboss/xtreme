/**
 * Created by jrreyes on 31/01/16.
 */
Router.route('/dashboard/services/customers/:id', {
  name: 'dashboard.services.customer',
  where: 'client',
  controller: 'DashboardController',
  action: 'customerServices'
});
Router.route('/dashboard/products/customers/:id', {
  name: 'dashboard.products.customer',
  where: 'client',
  controller: 'DashboardController',
  action: 'customerProducts'
});
Router.route('/dashboard/packages/customers/:id', {
  name: 'dashboard.packages.customer',
  where: 'client',
  controller: 'DashboardController',
  action: 'customerPackages'
});
Router.route('/dashboard/customers', {
  name: 'dashboard.customers.list',
  where: 'client',
  controller: 'DashboardController',
  action: 'customersList'
});