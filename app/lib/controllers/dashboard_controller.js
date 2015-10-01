DashboardController = RouteController.extend({
    layoutTemplate: 'MasterLayout',
    waitOn: function () {
        return this.subscribe('inventorylist');
    },
    data: {
        Inventory: Inventory.find()
    },
    onAfterAction: function () {
        Meta.setTitle('Dashboard');
    }
    ,
    action: function () {
        this.render('Dashboard');
    }
    ,
    sales: function () {
        this.render('Sales');
    }
    ,
    inventory: function () {
        this.render('Inventory');
    },
    addInventory: function () {
        this.render('AddItem');
    }
    ,
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
