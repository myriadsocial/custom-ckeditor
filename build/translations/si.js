(function (n) {
  const o = (n['si'] = n['si'] || {});
  o.dictionary = Object.assign(o.dictionary || {}, {
    '%0 of %1': '',
    Cancel: '',
    Clear: '',
    Redo: 'නැවත කරන්න',
    'Show more items': '',
    Undo: 'අහෝසි කරන්න',
  });
  o.getPluralForm = function (n) {
    return n != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
