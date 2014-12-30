var getFieldValue = utils.getFieldValue;
var getFieldValues = utils.getFieldValues;
var getRadioValue = utils.getRadioValue;

Template.editService.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var updatedService = {
      name: getFieldValue(template, 'name'),
      type: getRadioValue(template, 'type'),
      urls: getFieldValues(template, '.urlInput')
    };
    console.log('Save Service:', updatedService);
    Services.update(this._id, {$set: updatedService});
    Router.go('services');
  }
});