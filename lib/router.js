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
Router.route('/points/submit', {
  name: 'submitPoint',
  data: function () {
    return {tosdr: {sources:[]}};
  }
});

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

Router.route('/points/edit/:_id', {
    name: 'editPoint',
    data: function () {
      return Points.findOne(this.params._id);
    }
  }
);

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