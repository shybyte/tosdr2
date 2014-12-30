Template.serviceFormFields.helpers({
  isTypeChecked: function (typeValue) {
    return this.type === typeValue ? 'checked' : '';
  }
});