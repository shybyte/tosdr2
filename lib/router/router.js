Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return [
      Meteor.subscribe('points'),
      Meteor.subscribe('services'),
      Meteor.subscribe('topics')];
  }
});

Router.route('/', {name: 'index'});

Router.route('/publish', {
    name: 'publish'
  }
);

function requireLogin() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    }
    else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {except: 'index'});