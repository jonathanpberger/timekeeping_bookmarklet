javascript:(function (jQ) {
  var a = ['Will Read', 'Jonathan Barnes'];
  jQ(".stint_title_cell").each(function (c) {
    jQ(this).parent("tr").hide();
    if (jQ.inArray(jQ(this).text().strip(), a) >= 0) {
      jQ(this).parent("tr").show();
    }
  });
  jQ('#shift_table tr th').filter(
      function () {
        return jQ(this).text() == 'Description'
      }).css('width', '200px');
})(jQuery);