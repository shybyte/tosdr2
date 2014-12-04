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
Router.route('/points/submit', {name: 'submitPoint'});

Router.route('/services', {
    name: 'services',
    data: function () {
      return Services.find();
    }
  }
);

Router.route('/topics', {
    name: 'topics',
    data: function () {
      return Topics.find();
    }
  }
);

Router.route('/points', {
    name: 'points',
    data: function () {
      return Points.find();
    }
  }
);

Router.route('/points/moderate', {
    name: 'moderatePoints',
    data: function () {
      return Points.find({approved: false});
    }
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