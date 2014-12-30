function getFieldValue(template,id) {
  return template.find('#' + id).value;
}

utils = {
  getFieldValue: getFieldValue
}