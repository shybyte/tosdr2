Template.submitPoint.helpers({
  services: function () {
      return Services.find()
  }
});

Template.submitPoint.rendered = function () {
  $("#services").select2();
};