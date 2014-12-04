Meteor.publish('points', function () {
  return Points.find();
});

Meteor.publish('services', function () {
  return Services.find();
});

Meteor.publish('topics', function () {
  return Topics.find();
});

