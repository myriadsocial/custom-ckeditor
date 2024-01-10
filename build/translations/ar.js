(function (e) {
  const t = (e['ar'] = e['ar'] || {});
  t.dictionary = Object.assign(t.dictionary || {}, {
    '%0 of %1': '%0 من %1',
    Accept: 'قبول',
    Aquamarine: 'أخضر زبرجد',
    Black: 'أسود',
    Blue: 'أزرق',
    Cancel: 'إلغاء',
    Clear: 'مسح',
    'Click to edit block': 'انقر لتحرير الوحدة التجميعية',
    'Dim grey': 'رمادي خافت',
    'Drag to move': 'اسحب للنقل',
    'Dropdown toolbar': 'شريط أدوات القائمة المنسدلة',
    'Edit block': 'كتلة التحرير',
    'Editor block content toolbar': 'شريط المحرر لأدوات كتلة المحتوى',
    'Editor contextual toolbar': 'شريط المحرر للأدوات السياقية',
    'Editor editing area: %0': 'منطقة تحرير المحرر: %0',
    'Editor toolbar': 'شريط أدوات المحرر',
    Green: 'أخضر',
    Grey: 'رمادي',
    HEX: 'لون سداسي عشري',
    'Insert paragraph after block': 'إدراج فقرة بعد الكتلة',
    'Insert paragraph before block': 'إدراج فقرة قبل الكتلة',
    'Light blue': 'أزرق فاتح',
    'Light green': 'أخضر فاتح',
    'Light grey': 'رمادي فاتح',
    Next: 'التالي',
    'No results found': 'لم يتم العثور على نتائج',
    'No searchable items': 'لا توجد عناصر قابلة للبحث متاحة',
    Orange: 'برتقالي',
    'Press Enter to type after or press Shift + Enter to type before the widget':
      'اضغط على Enter للكتابة بعد ذلك أو اضغط على Shift + Enter للكتابة قبل الأداة',
    Previous: 'السابق',
    Purple: 'أرجواني',
    Red: 'أحمر',
    Redo: 'إعادة',
    'Rich Text Editor': 'معالج نصوص',
    'Select all': 'تحديد الكل',
    'Show more items': 'عرض المزيد من العناصر',
    Turquoise: 'فيروزي',
    Undo: 'تراجع',
    White: 'أبيض',
    'Widget toolbar': 'شريط أدوات الواجهة',
    Yellow: 'أصفر',
  });
  t.getPluralForm = function (e) {
    return e == 0
      ? 0
      : e == 1
      ? 1
      : e == 2
      ? 2
      : e % 100 >= 3 && e % 100 <= 10
      ? 3
      : e % 100 >= 11 && e % 100 <= 99
      ? 4
      : 5;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
