(function (n) {
  const e = (n['af'] = n['af'] || {});
  e.dictionary = Object.assign(e.dictionary || {}, {
    '%0 of %1': '%0 van %1',
    Cancel: 'Kanselleer',
    Clear: '',
    'Show more items': 'Wys meer items',
  });
  e.getPluralForm = function (n) {
    return n != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
