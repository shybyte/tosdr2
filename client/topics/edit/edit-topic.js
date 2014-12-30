var getFieldValue = utils.getFieldValue;
var getRadioValue = utils.getRadioValue;

Template.editTopic.events({
  'submit form': function (event,template) {
    event.preventDefault();
    var category = getFieldValue(template, 'category');
    var updatedTopic = {
      title: getFieldValue(template, 'title'),
      subtitle: getFieldValue(template, 'subtitle'),
      description: getFieldValue(template, 'description'),
      type: getRadioValue(template, 'type'),
      category: category ? category : null
    };
    console.log('Save Topic:', updatedTopic);
    Topics.update(this._id, {$set: updatedTopic});
    Router.go('topics');
  }
});