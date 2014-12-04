Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'index'});
Router.route('/submit-point', {name: 'submitPoint'});

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