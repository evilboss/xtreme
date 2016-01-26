/**
 * Created by jrreyes on 10/21/15.
 */
/*Router.route('dashboard/accounts', {
    name: 'accounts',
    where: 'client',
    controller:'DashboardController',
    action:'accounts'
});*/
Router.route('dashboard/accounts', {
  name: 'accounts',
  where: 'client',
  controller:'DashboardController',
  action:'accounts'
});
Router.route('dashboard/accounts/new', {
    name: 'accounts.add',
    where: 'client',
    controller:'DashboardController',
    action:'accountsAdd'
});