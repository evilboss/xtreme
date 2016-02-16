/**
 * Created by gilbertor on 2/16/16.
 */
Router.route('/dashboard/members', {
  name: 'dashboard.members',
  where: 'client',
  controller:'DashboardController',
  action:'members'
});
Router.route('/dashboard/members/new', {
  name: 'dashboard.members.add',
  where: 'client',
  controller:'DashboardController',
  action:'members.add'
});
Router.route('/dashboard/members/:id', {
  name: 'dashboard.members.update',
  where: 'client',
  controller:'DashboardController',
  action:'members.update'
});