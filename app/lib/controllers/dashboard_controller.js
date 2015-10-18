DashboardController = RouteController.extend({
    layoutTemplate: 'MasterLayout',
    waitOn: function () {
        return this.subscribe('inventorylist'),this.subscribe('services'),this.subscribe('packages');
    },
    data: {
        Inventory: Inventory.find(),
        Services:Services.find(),
        Packages:Packages.find()
    },
    onAfterAction: function () {
        Meta.setTitle('Dashboard');
    },
    action: function () {
        this.render('Dashboard');
    },
    sales: function () {
        this.render('Sales');
    },
    inventory: function () {
        this.render('Inventory');
    },
    addInventory: function () {
        this.render('AddItem');
    },
    UpdateInventory:function(){
        this.render('UpdateItem');
    },
    services: function () {
        this.render('Services');
    },
    addServices: function () {
        this.render('AddServices');
    },
    UpdateServices:function(){
        this.render('UpdateServices');
    },
    pos: function () {
        this.render('Pos');
    },
    packages: function () {
        this.render('Packages');
    },
    addPackages: function () {
        this.render('AddPackages');
    },
    UpdatePackages:function(){
        this.render('UpdatePackages');
    },
    invoice:function(){
        this.render('Invoice')
    },

})
;

DashboardController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});
