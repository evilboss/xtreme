/**
 * Created by jrreyes on 10/17/15.
 */
Router.route('/dashboard/branches', {
  name: 'dashboard.branch',
  where: 'client',
  controller:'DashboardController',
  action:'branch'
});
Router.route('/dashboard/branches/add', {
  name: 'dashboard.branch.add',
  where: 'client',
  controller:'DashboardController',
  action:'addBranch'
});
Router.route('/dashboard/branches/:id', {
  name: 'updateBranch',
  where: 'client',
  controller:'DashboardController',
  action:'updateBranch'
});