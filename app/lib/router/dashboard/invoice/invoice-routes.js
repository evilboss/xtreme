/**
 * Created by jrreyes on 10/18/15.
 */
Router.route('dashboard/invoice/:id', {
    name: 'dashboard.invoice',
    where: 'client',
    controller:'DashboardController',
    action:'invoice'
});
Router.route('dashboard/print/:id', {
    name: 'print',
    controller: 'PrintController',
    action: 'Print',
    where: 'client'
});
