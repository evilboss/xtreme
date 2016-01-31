/**
 * Created by gilbertor on 8/24/15.
 */


Template._header.events({
  'click [data-action=doSomething]': function (e) {
    e.preventDefault();
  },
  'click li.branch-item>a': function (e) {
    e.preventDefault();
    Session.set('branch',$(e.currentTarget).attr('value'));
  }
});