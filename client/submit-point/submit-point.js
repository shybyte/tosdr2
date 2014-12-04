Template.submitPoint.helpers({
  services: function () {
    return Services.find();
  },
  topics: function () {
    return Topics.find();
  }

});

Template.submitPoint.rendered = function () {
  $("#services").select2();
  $("#topics").select2();
};