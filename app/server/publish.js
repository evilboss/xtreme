/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('inventorylist', function (/* args */) {
  return Inventory.find();
});