var getFieldValue = utils.getFieldValue;

Template.createTopic.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var newTopic = {
      id: getFieldValue(template, 'id'),
      title: getFieldValue(template, 'title'),
      subtitle: getFieldValue(template, 'subtitle'),
      description: getFieldValue(template, 'description'),
      submittedBy: Meteor.userId(),
      "meta": {
        "license-for-this-file": "This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, .USA",
        "spec-version": "1.1"
      }
    };
    console.log('Save new Topic:', newTopic);
    Topics.insert(newTopic);
    Router.go('topics');
  }
})

