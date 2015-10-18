/**
 * Created by gilbertor on 8/24/15.
 */


Template._header.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    },
    'click #services-tab':function(){
        Router.go('dashboard.services');
    }

});