Router.configure({
  layoutTemplate: 'layout'
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