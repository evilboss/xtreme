/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('inventorylist', function (/* args */) {
  return Inventory.find();
});

Meteor.publish('services', function (/* args */) {
  return Services.find();
});

Meteor.publish('packages', function () {
  return Packages.find();
});

Meteor.publish('products', function () {
  return Products.find();
});

Meteor.publish('branches', function () {
  var user = Meteor.users.findOne({
    _id: this.userId
  });
  if (Roles.userIsInRole(user, ['admin'])) {
    return Branches.find();
  }else{
    if(user.profile.branchIds){
      var ids = user.profile.branchIds;
      if(ids){
        ids = ids.map(function(id) { return ObjectId(id); });
        Branches.find({_id: {$in: ids}});
      }
      return Branches.find();
    }

  }
});

Meteor.publish('users', function () {
  var user = Meteor.users.findOne({
    _id: this.userId
  });
  if (Roles.userIsInRole(user, ['admin'])) {
    return Meteor.users.find({}, {
      fields: {
        roles: 1,
        username:1,
        profile: 1,
        branchIds:1,
      }
    });
  }
  return [];
});

Meteor.publish('staff', function () {
  return Staff.find();
});