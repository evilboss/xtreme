/**
 * Created by gilbertor on 8/24/15.
 */


Template._header.events({
    'click [data-action=doSomething]': function (e) {
        e.preventDefault();
    },
    'click #services-tab':function(){
        Router.go('dashboard.services');
    },
    'click #products-tab':function(){
        Router.go('dashboard.products');
    }

});