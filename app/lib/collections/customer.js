/**
 * Created by jrreyes on 31/01/16.
 */
Customers = new Mongo.Collection('customers');
Customers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Customer name",
    optional: false
  },
  branchId: {
    type: String,
    optional: true
  },
  staffId: {
    type: String,
    optional: true
  },
  total: {
    type: Number,
    optional: true,
    defaultValue: 0

  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  active: {
    type: Boolean,
    defaultValue: true
  }

}));
if (Meteor.isClient) {
  Customers.after.insert(function (userId, doc) {
    let currentPath = Router.current().route.getName();
    if (!currentPath.includes('customer')) {
      Router.go(currentPath + '.customer', {id: doc._id});
    }
  });

  Customers.after.update(function (userId, doc) {
    if (!doc.active) {
      let items = CartData.find({customerId: doc._id}).fetch();
      _.each(items, function (item) {
        if (item.type === 'Product') {
          console.log(item, 'Decrement time');
          let stock = Stocks.findOne({id: item.itemId});
          Stocks.update({_id: stock._id}, {$inc: {qty: - parseInt(item.qty)}});

        }

      })
    }
  });
}
if (Meteor.isServer) {
  Customers.allow({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
}
