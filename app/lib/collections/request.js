Request = new Mongo.Collection('request');

Request.after.insert(function(userid,doc){
  if(Meteor.isClient){
    sAlert.info('Delivery Sent');
  }
});
if (Meteor.isServer) {
  Request.allow({
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

  Request.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
