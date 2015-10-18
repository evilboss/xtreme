DashboardController = RouteController.extend({
    layoutTemplate: 'MasterLayout',
    waitOn: function () {
        return this.subscribe('inventorylist'),
        this.subscribe('services'),
        this.subscribe('packages'),
        this.subscribe('products');
    },
    data: {
        Inventory: Inventory.find(),
        Services: Services.find(),
        Packages: Packages.find(),
        Products: Products.find()
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
    /*Inventory Controllers*/
    inventory: function () {
        this.render('Inventory');
    },
    addInventory: function () {
        this.render('AddItem');
    },
    UpdateInventory: function () {
        this.render('UpdateItem');
    },
    /*services Controllers*/

    services: function () {
        this.render('Services');
    },
    addServices: function () {
        this.render('AddServices');
    },
    UpdateServices: function () {
        this.render('UpdateServices');
    },
    /*pos Controllers*/

    pos: function () {
        this.render('Pos');
    },
    /*packages Controllers*/

    packages: function () {
        this.render('Packages');
    },
    addPackages: function () {
        this.render('AddPackages');
    },
    UpdatePackages: function () {
        this.render('UpdatePackages');
    },
    products: function () {
        this.render('Products');
    },
    addProducts: function () {
        this.render('AddProducts');
    },
    UpdateProducts: function () {
        this.render('UpdateProducts');
    },
    /*invoice Controllers*/

    invoice: function () {
        this.render('Invoice')
    },

})
;

DashboardController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});
