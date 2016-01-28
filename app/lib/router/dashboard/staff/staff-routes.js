/**
 * Created by jrreyes on 27/01/16.
 */
Router.route('/dashboard/staff', {
  name: 'dashboard.staff',
  where: 'client',
  controller:'DashboardController',
  action:'staff'
});

Router.route('/dashboard/staff/new', {
  name: 'dashboard.staff.add',
  where: 'client',
  controller:'DashboardController',
  action:'addStaff'
});

Router.route('/dashboard/staff/:id', {
  name: 'updateStaff',
  where: 'client',
  controller:'DashboardController',
  action:'updateStaff'
});