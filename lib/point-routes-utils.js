function getFilter() {
  var query = Router.current().params.query;
  var filter = {};
  if (query.approved) {
    filter.approved = (query.approved === 'true') ? true : false;
  }
  return filter;
}


pointRoutesUtils = {
  getFilter: getFilter
};