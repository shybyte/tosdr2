Template.publish.helpers({
  isPublishing: function () {
    return Session.get('isPublishing');
  }
});


Template.publish.events({
  'click .publishButton': function () {
    Session.set('isPublishing', true);
    Meteor.call("publishToApi", function (error, result) {
      Session.set('isPublishing', false);
    });
  }
})