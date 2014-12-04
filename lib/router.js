Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'index'});
Router.route('/submit-point', {name: 'submitPoint'});