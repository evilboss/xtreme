PrintController = RouteController.extend({
  layoutTemplate: 'printLayout',
  waitOn: function () {
    return this.subscribe('inventorylist'),
      this.subscribe('services'),
      this.subscribe('packages'),
      this.subscribe('products'),
      this.subscribe('branches'),
      this.subscribe('users'),
      this.subscribe('customers'),
      this.subscribe('cartData');
  },
  data: {
    Inventory: Inventory.find(),
    Services: Services.find(),
    Packages: Packages.find(),
    Products: Products.find(),
    Branches: Branches.find(),
    Customers: Customers.find(),
    CartData: CartData.find(),
  },
  Print: function () {
    this.render('Print');
  }
});
