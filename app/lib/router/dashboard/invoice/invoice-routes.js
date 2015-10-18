/**
 * Created by jrreyes on 10/18/15.
 */
Router.route('dashboard/invoice', {
    name: 'invoice',
    where: 'client',
    controller:'DashboardController',
    action:'invoice'
});
Router.route('invoice/print', {
    name: 'print',
    controller: 'PrintController',
    action: 'Print',
    where: 'client'
});
