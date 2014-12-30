var getFieldValue = utils.getFieldValue;
var getFieldValues = utils.getFieldValues;
var getRadioValue = utils.getRadioValue;

Template.createService.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var newService = {
      id: getFieldValue(template, 'id'),
      name: getFieldValue(template, 'name'),
      type: getRadioValue(template, 'type'),
      urls: getFieldValues(template,'.urlInput'),
      submittedBy: Meteor.userId()
    };
    console.log('Save new Service:', newService);
    Services.insert(newService);
    Router.go('services');
  }
});

