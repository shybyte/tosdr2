var CURRENT_URLS_KEY = 'serviceFormFields.currentUrls';

Template.serviceFormFields.helpers({
  isTypeChecked: function (typeValue) {
    return this.type === typeValue ? 'checked' : '';
  },
  currentUrls: function () {
    return Session.get(CURRENT_URLS_KEY);
  }
});

Template.serviceFormFields.created= function () {
  Session.set(CURRENT_URLS_KEY, Template.currentData().urls || ['']);
  console.log('Created', this);
};

Template.serviceFormFields.events({
  'click .addUrlButton': function (event) {
    event.preventDefault();
    var currentUrls = Session.get(CURRENT_URLS_KEY);
    currentUrls.push('');
    Session.set(CURRENT_URLS_KEY, currentUrls);
  }
})