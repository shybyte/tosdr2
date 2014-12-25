Template.editPointForm.helpers({
  services: function () {
    return Services.find();
  },
  topics: function () {
    return Topics.find();
  },
  currentUserEmailAddress: function () {
    return Meteor.user() ? Meteor.user().emails[0].address : '';
  },
  pointChecked: function (pointValue) {
    return this.tosdr.point === pointValue ? 'checked' : '';
  },
  source: function () {
    return this.tosdr.sources[0] || '';
  }
});

Template.editPointForm.rendered = function () {
  $("#services").select2({placeholder: "Select at least one service"});
  $("#topics").select2({placeholder: "Select at least one topic"});
};

function isOptionSelected(selectedValues) {
  return _.contains(selectedValues, this.id) ? 'selected' : '';
}

var selectOption = {
  isSelected: isOptionSelected
}

Template.serviceOption.helpers(selectOption);
Template.topicOption.helpers(selectOption);