(function(window, $) {
  $.fn.inGroupsOf = function(i, callback) {
    if ( typeof i == 'undefined' ) i = 1;
    var len = $(this).length;
    for( var start = 0; start < len; start += i )
      callback.call(this, $(this).splice(start, i));
  };
})(window, jQuery);
