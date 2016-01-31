/**
 * Created by jrreyes on 31/01/16.
 */
Router.route('/dashboard/customers/services/:id', {
  name: 'dashboard.customer.services',
  where: 'client',
  controller: 'DashboardController',
  action: 'customerServices'
});
Router.route('/dashboard/customers/packages/:id', {
  name: 'dashboard.customer.packages',
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