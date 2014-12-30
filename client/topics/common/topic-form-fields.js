Template.topicFormFields.helpers({
  categories: function () {
    return Topics.find({type: 'category'});
  },
  isTypeChecked: function (typeValue) {
    return this.type === typeValue ? 'checked' : '';
  }
});


function isOptionSelected(selectedValues) {
  return _.contains(selectedValues, this.id) ? 'selected' : '';
}

Template.categoryOption.helpers({
  isSelected: function (selectedValue) {
    return this.id === selectedValue ? 'selected' : '';
  }
});