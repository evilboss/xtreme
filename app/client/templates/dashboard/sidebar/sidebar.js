Template.sidebar.helpers({

});

Template.sidebar.events({
  'click #services-tab': function (e) {
    Router.go('dashboard.services');


  },
  'click #products-tab': function (e) {
    Router.go('dashboard.products');
  },
  'click .treeview':function(e){
   let menu = $(e.currentTarget).find('.treeview-menu');
    let ul = $(menu);
    if(ul.hasClass('menu-open')){
      ul.slideUp('normal', function () {
        //Add the class active to the parent li
        ul.removeClass('menu-open');
      });
    }else{
      ul.slideDown('normal', function () {
        //Add the class active to the parent li
        ul.addClass('menu-open');
      });

    }

  },
});

Template.sidebar.onCreated(function () {
  //add your statement here
});


Template.sidebar.onDestroyed(function () {
  //add your statement here
});
Template.sidebar.rendered = function () {

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

}
