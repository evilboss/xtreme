/**
 * Created by jrreyes on 01/02/16.
 */
Router.route('/dashboard/stocks', {
  name: 'dashboard.stocks',
  where: 'client',
  controller: 'DashboardController',
  action: 'stocks'
});
Router.route('/dashboard/report/stocks', {
  name: 'dashboard.stocks.reports',
  where: 'client',
  controller: 'DashboardController',
  action: 'reportStocks'
});
Router.route('/dashboard/stocks/:id', {
  name: 'dashboard.stocks.add',
  where: 'client',
  controller: 'DashboardController',
  action: 'addStocks'
});

