function decrementProduct(itemId, amount) {
  let stock = Stocks.findOne({id: itemId});
  Stocks.update({_id: stock._id}, {$inc: {qty: -amount}});
}
function incrementProduct(itemId, amount) {
  let stock = Stocks.findOne({id: itemId});
  Stocks.update({_id: stock._id}, {$inc: {qty: amount}});
}
function checkService(serviceId) {
  let service = Services.findOne({_id: serviceId});
  let allow = true;
  if (service.recipe) {
    let items = service.recipe;
    _.each(items, function (item) {
      let branchStock = Stocks.findOne({id: item.ingredient});
      console.log(branchStock.qty, item.amount);
      if (item.amount < branchStock.qty) {
        decrementProduct(item.ingredient, item.amount);
      } else {
        sAlert.error('Insuficient stock');
        allow = false;
      }
    });
  }
  return allow;
}
Template.MasterLayout.helpers({
  availableBranches: function () {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return true;
    }
    if (Meteor.user()) {
      if (Meteor.user().profile) {
        if (Meteor.user().profile.branchIds) {
          Session.set('branch', Meteor.user().profile.branchIds[0]);
          return Meteor.user().profile.branchIds[0];
        }
      }
    }
    return false;
  }
});
Template.MasterLayout.events({
  'click [data-action=logout]': function () {
    AccountsTemplates.logout();
  },
  'click .avail-button': function (e) {
    e.preventDefault();
    let event = $(e.currentTarget);
    let itemId = e.currentTarget.value;
    let transType = event.attr('data-type');
    let customerId = Router.current().params.id;
    let allowSale = true;
    if (customerId) {
      let itemToAdd;
      if (transType === 'Service') {
        itemToAdd = Services.findOne({_id: itemId});
        allowSale = checkService(itemId);
        console.log(allowSale);
      }
      if (transType === 'Product') {
        itemToAdd = Inventory.findOne({_id: itemId});
      }
      if (transType === 'Package') {
        itemToAdd = Packages.findOne({_id: itemId});
      }
      if (allowSale) {
        let branchId = Session.get('branch');
        if (branchId) {
          if (itemToAdd) {
            console.log(itemToAdd);
            let currentData = CartData.findOne({customerId: customerId, itemId: itemId});
            let currentSubtotal = itemToAdd.price;
            let update = true;
            if (currentData) {
              console.log('Already Added');
              if (transType === 'Product') {
                let checkStocks = Stocks.findOne({id: itemId});
                console.log(checkStocks);
                console.log(currentData.qty);
                if (checkStocks.qty === 0) {
                  sAlert.error('You cannot add any more');
                  update = false;
                } else {
                  CartData.update({_id: currentData._id}, {$inc: {qty: 1, subtotal: itemToAdd.price}});


                }
              } else {
                CartData.update({_id: currentData._id}, {$inc: {qty: 1, subtotal: itemToAdd.price}});

              }


            } else {
              CartData.insert({
                type: transType,
                customerId: customerId,
                itemId: itemId,
                branchId: branchId,
                qty: 1,
                staffId: Meteor.user()._id,
                name: itemToAdd.name,
                description: itemToAdd.description,
                price: parseInt(itemToAdd.price),
                subtotal: parseInt(itemToAdd.price)
              });
              if (transType === 'Product') {
                decrementProduct(itemId, 1);
              }


            }
            if (update) {
              let total = Customers.findOne({_id: customerId}).total;
              total += itemToAdd.price;
              Customers.update({_id: customerId}, {$set: {total: total}});
              if (transType === 'Product') {
                decrementProduct(itemId, 1);
              }


            }


          }

        } else {
          sAlert.error('Please Set your branch');
        }
      }

    }


  },
  'click .remove-item-button': function (e) {
    e.preventDefault();
    let event = $(e.currentTarget);
    let itemId = e.currentTarget.value;
    let transType = event.attr('data-type');
    let customerId = Router.current().params.id;
    if (customerId) {
      let itemToAdd;
      if (transType === 'Service') {
        itemToAdd = Services.findOne({_id: itemId});
      }
      if (transType === 'Product') {
        let itemToRemove = CartData.findOne({_id: itemId});
        incrementProduct(itemToRemove.itemId, 1);
      }
      if (transType === 'Package') {
        itemToAdd = Packages.findOne({_id: itemId});
      }
    }

    var serviceToRemove = CartData.findOne({_id: itemId});

    console.log(serviceToRemove);
    if (serviceToRemove.qty == 1) {
      CartData.remove({_id: itemId});
    } else {
      CartData.update({_id: itemId}, {$inc: {qty: -1, subtotal: -serviceToRemove.price}});
    }
    if (customerId) {
      Customers.update({_id: customerId}, {$inc: {total: -serviceToRemove.price}})
    }

  }
});
Template.MasterLayout.onRendered(function () {
  $('.sidebar-toggle').each(function () {
    var group = $(this);
    $(this).find(".btn").click(function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });
  });

  $('.sidebar-toggle').click(function (e) {
    e.preventDefault();
    //Enable sidebar push menu
    $("body").toggleClass('sidebar-collapse');
    $("body").toggleClass('sidebar-open');
  });
  $(".content-wrapper").click(function () {
    //Enable hide menu when clicking on the content-wrapper on small screens
    if ($(window).width() <= 767 && $("body").hasClass("sidebar-open")) {
      $("body").removeClass('sidebar-open');
    }
  });

  $("li a", $('.sidebar')).click(function (e) {
    //Get the clicked link and the next element
    var $this = $(this);
    var checkElement = $this.next();

    //Check if the next element is a menu and is visible
    if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
      //Close the menu
      checkElement.slideUp('normal', function () {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
    }
    //If the menu is not visible
    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
      //Get the parent menu
      var parent = $this.parents('ul').first();
      //Close all open menus within the parent
      var ul = parent.find('ul:visible').slideUp('normal');
      //Remove the menu-open class from the parent
      ul.removeClass('menu-open');
      //Get the parent li
      var parent_li = $this.parent("li");

      //Open the target menu and add the menu-open class
      checkElement.slideDown('normal', function () {
        //Add the class active to the parent li
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is('.treeview-menu')) {
      e.preventDefault();
    }
  });
});