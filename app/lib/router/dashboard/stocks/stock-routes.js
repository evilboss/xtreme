/**
 * Created by jrreyes on 01/02/16.
 */
Router.route('/dashboard/stocks', {
  name: 'dashboard.stocks',
  where: 'client',
  controller: 'DashboardController',
  action: 'stocks'
});