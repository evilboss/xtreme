/**
 * Created by jrreyes on 01/02/16.
 */
Router.route('/dashboard/stocks', {
  name: 'dashboard.stocks',
  where: 'client',
  controller: 'DashboardController',
  action: 'stocks'
});
Router.route('/dashboard/stocks/:id', {
  name: 'dashboard.stocks.add',
  where: 'client',
  controller: 'DashboardController',
  action: 'addStocks'
});