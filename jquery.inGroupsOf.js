(function(window, $) {
  'use strict';
  $.fn.inGroupsOf = function(i, callback) {
    if ( typeof i == 'undefined' ) i = 1;
    var len    = $(this).length;
    var groups = $([]);
    for( var start = 0; start < len; start += i ) {
      var index = groups.push($(this).splice(start, i));
      if ( $.isFunction(callback) ) {
        callback.call(this, groups[index-1]);
      }
    }
    return groups;
  };
})(window, jQuery);
