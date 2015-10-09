DashboardController = RouteController.extend({
    layoutTemplate: 'MasterLayout',
    waitOn: function () {
        return this.subscribe('inventorylist'),this.subscribe('services');
    },
    data: {
        Inventory: Inventory.find(),
        Services:Services.find()
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
    }
})
;

DashboardController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});
