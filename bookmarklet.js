javascript:(function (jQ) {
  var people_lists = {

    'Will Read':['Roberto Ostinelli', 'Charles Hansen', 'Max Brunsfeld', 'Stephen Hopkins', 'Mark Rushakoff', 'Aaron VonderHaar', 'Rachel Bobbins', 'Will Read'],
    'Davis Frank':[],
    'Jonathan Barnes':[],
    'David Goudreau':[],
    'Ryan Richard':[],
    'Danny Burkes':[],

    'Jonathan Berger':['Steve Ellis', 'Daniel Fox', 'Robbie Clutton', 'Ryan Ong', 'Micah Young', 'Grant Hutchins', 'Jeff Saracco', 'Ben Moss', 'Dimitri Roche', 'Johnny Mukai'],
		'Cathy O\'Connell':['Matthew Parker','Matt Royal','Dirk Kelly','John Barker','Nick Greenfield','Andy Pliszka','James Somers','David Goddard','Alex Kwiatkowski','Michael Freedman'],
		'Josh Knowles':['Cathy O\'Connell','Kris Hicks','Jonathan Berger','Ian Zabel','Michael Schubert','Peter Jaros'],
		'Ian Zabel':['Mark Gangl','Andrew Fader','Jake Quain','Brent Wheeldon','Luke Crawford','JT Archie','Evan Farrar','Lee Byrd','Adam Berlin','Sam Coward'],


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