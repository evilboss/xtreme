Router.route('/', {
  name: 'home',
  controller: 'PublicController',
  where: 'client',
  action: 'action'
});
Router.route('/dashboard/sales', {
  name: 'dashboard.sales',
  where: 'client',
  controller: 'DashboardController',
  action: 'sales'
});
Router.plugin('ensureSignedIn', {
  except: ['home']
});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});