Router.route('/services', {
    name: 'services',
    data: function () {
      return Services.find();
    }
  }
);