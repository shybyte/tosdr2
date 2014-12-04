function isLoggedIn(userId) {
  return !!userId;
}

// https://github.com/tosdr/tosdr.org/wiki/Specification:-points
Points = new Meteor.Collection('points');

Points.allow({
  insert: function (userId, point) {
    return point && point.submittedBy === userId;
  },
  update: isLoggedIn,
  remove: isLoggedIn
});

// https://github.com/tosdr/tosdr.org/wiki/Specification:-services
Services = new Meteor.Collection('services');

// https://github.com/tosdr/tosdr.org/wiki/Specification:-topics
Topics = new Meteor.Collection('topics');
