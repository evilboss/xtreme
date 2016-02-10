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
  if (user) {
    if (Roles.userIsInRole(user, ['admin'])) {
      return Branches.find();
    } else {
      if (user.profile) {
        if (user.profile.branchIds) {
          var ids = user.profile.branchIds;
          return Branches.find({_id: {$in: ids}});

        }
      }
      return [];
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
        username: 1,
        profile: 1
      }
    });
  }
  if (Roles.userIsInRole(user, ['manager'])) {
    return Meteor.users.find({}, {
      fields: {
        profile: 1
      }
    });
  }
  return [];
});

Meteor.publish('staff', function () {
  return Staff.find();
});

Meteor.publish('customers', function () {
  var user = Meteor.users.findOne({
    _id: this.userId
  });
  if (user) {
    if (Roles.userIsInRole(user, ['admin'])) {
      return Customers.find();
    } else {
      if (user.profile) {
        if (user.profile.branchIds) {
          if (Roles.userIsInRole(user, ['manager'])) {
            var ids = user.profile.branchIds;
            return Customers.find({branchId: {$in: ids}});
          } else {
            return Customers.find({staffId: user._id});

          }
        }
      }
      return [];
    }
  }
});

Meteor.publish('request', function (/* args */) {
  var user = Meteor.users.findOne({
    _id: this.userId
  });
  if (user) {
    if (Roles.userIsInRole(user, ['admin'])) {
      return Request.find();
    } else {
      if (user.profile) {
        if (user.profile.branchIds) {
          if (Roles.userIsInRole(user, ['manager'])) {
            var ids = user.profile.branchIds;
            return Request.find({branchId: {$in: ids}});
          }
        }
      }
      return [];
    }
  }
});

Meteor.publish('stocks', function (/* args */) {
  var user = Meteor.users.findOne({
    _id: this.userId
  });
  if (user) {
    if (Roles.userIsInRole(user, ['admin'])) {
      return Stocks.find();
    } else {
      if (user.profile) {
        if (user.profile.branchIds) {
          var ids = user.profile.branchIds;
          return Stocks.find({branchId: {$in: ids} });
        }
      }
      return [];
    }
  }
});

Meteor.publish('cartData', function (/* args */) {
  var user = Meteor.users.findOne({
    _id: this.userId
  });
  if (user) {
    if (Roles.userIsInRole(user, ['admin'])) {
      return CartData.find();
    } else {
      if (user.profile) {
        if (user.profile.branchIds) {
          if (Roles.userIsInRole(user, ['manager'])) {
            var ids = user.profile.branchIds;
            return CartData.find({branchId: {$in: ids}});
          } else {
            return CartData.find({staffId: user._id});

          }
        }
      }
      return [];
    }
  }
});