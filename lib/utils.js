function getFieldValue(template, id) {
  return $(template.find('#' + id)).val();
}

function getRadioValue(template, name) {
  return template.find('input[name="' + name + '"]:checked').value;
}

utils = {
  getFieldValue: getFieldValue,
  getRadioValue: getRadioValue
}