var getFieldValue = utils.getFieldValue;

Template.createTopic.events({
  'submit form': function (event,template) {
    event.preventDefault();
    var newTopic = {
      id: getFieldValue(template,'id'),
      title: getFieldValue(template, 'title'),
      subtitle: getFieldValue(template, 'subtitle'),
      description: getFieldValue(template, 'description'),
      submittedBy: Meteor.userId()
    };
    console.log('Save new Topic:', newTopic);
    Topics.insert(newTopic);
    Router.go('topics');
  }
})

