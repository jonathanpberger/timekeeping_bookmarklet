javascript:(function (jQ) {
  var people_lists = {
    'Will Read':['Roberto Ostinelli', 'Charles Hansen', 'Max Brunsfeld', 'Stephen Hopkins', 'Mark Rushakoff', 'Aaron VonderHaar', 'Rachel Bobbins', 'Will Read'],
    'Davis Frank':[],
    'Jonathan Barnes':[],
    'David Goudreau':[],
    'Ryan Richard':[],
    'Danny Burkes':[],
  };
  var signed_in_manager = jQ('.welcome_message').text().replace('Welcome, ', '').trim();
  var people = people_lists[signed_in_manager];
  jQ(".stint_title_cell").each(function (c) {
    jQ(this).parent("tr").hide();
    if (jQ.inArray(jQ(this).text().strip(), people) >= 0) {
      jQ(this).parent("tr").show();
    }
  });
  jQ('#shift_table tr th').filter(
      function () {
        return jQ(this).text() == 'Description'
      }).css('width', '200px');
  jQ("table th").each(function (t) {
    if (jQ.inArray(jQ(this).text().strip(), people) >= 0) {
      jQ(this).parents(".stint_details")
          .removeClass()
          .addClass("content_subsection")
          .css('display', 'block')
          .after("<br/>")
          .before("<br/>");
    }
  })
})(jQuery);