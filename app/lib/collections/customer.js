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
  },
  items: {
    type: [Object],
    optional: true
  },

  "items.$.name": {
    type: String
  },
  "items.$.qty": {
    type: Number
  },
  "items.$.description": {
    type: String
  },

  "items.$.type": {
    type: String
  },

  "items.$.price": {
    type: Number
  },
  "items.$.subtotal": {
    type: Number
  }


}));
Customers.before.update(function (userId, doc) {
  if (Cart.find().count()) {
    let itemList = [];
    let items = Cart.find().fetch();
    let total = 0;
    _.each(items, function (item) {
      total += item.subtotal;
      itemList.push({
        name: item.name,
        description: item.description,
        qty: parseInt(item.qty),
        price: item.price,
        type: item.type,
        subtotal: item.subtotal
      });
    });
    doc.branchId = Session.get('branch');
    doc.total = total;
    doc.items = itemList;
  }
  doc.staffId = userId;
  return doc;

});
if (Meteor.isClient) {
  Customers.before.insert(function (userId, doc) {
    if (Cart.find().count()) {
      let itemList = [];
      let items = Cart.find().fetch();
      let total = 0;
      _.each(items, function (item) {
        total += item.subtotal;
        itemList.push({
          name: item.name,
          description: item.description,
          qty: parseInt(item.qty),
          price: item.price,
          type: item.type,
          subtotal: item.subtotal
        });
      });
      doc.total = total;
      doc.items = itemList;
    }
    if (Session.get('branch')) {
      doc.branchId = Session.get('branch');
    } else {
      doc.branchId = Meteor.user().profile.branchIds[0];
    }
    doc.staffId = userId;
    return doc;

  });
  Customers.after.insert(function (userId, doc) {
    let currentPath = Router.current().route.getName();
    if(!currentPath.includes('customer')){
      Router.go(currentPath+'.customer',{id:doc._id});
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
