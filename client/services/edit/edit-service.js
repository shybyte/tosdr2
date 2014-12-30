var getFieldValue = utils.getFieldValue;
var getRadioValue = utils.getRadioValue;

Template.editService.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var updatedService = {
      name: getFieldValue(template, 'name'),
      type: getRadioValue(template, 'type')
    };
    console.log('Save Service:', updatedService);
    Services.update(this._id, {$set: updatedService});
    Router.go('services');
  }
});