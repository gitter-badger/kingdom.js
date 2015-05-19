on_about = function(INFO_FLAG)
{	
	
	console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
	console.log("on.js manual");
	console.log("version 1.00");
	console.log("-- - -- - -- - -- - -- - -- - -- - --");
	
	switch(INFO_FLAG)
	{	default:
		case 00: 
			console.log	("          Welcome to on.js           ");
			console.log	("                                     ");
			console.log	("|on.about()                          ");
			console.log	("  call on.about()                    ");
			console.log	("  in the scope of any function       ");
			console.log	("  for specific information.          ");
			console.log	("                                     ");
			console.log	("|SYNTAX                              ");
			console.log	(" (command)[on](data)(parameter)      ");
			console.log	('  executes a command on the data     ');
			console.log	('  with specified parameter/s         ');
			console.log	("                                     ");
			console.log	("  on.document                        ");
			console.log	("                                     ");
			console.log	("  on.element                         ");
			console.log	("                                     ");
			console.log	("|EVENTS                              ");
			console.log	(" (eventType)[on](element)(callback)  ");
			console.log	('  fires a callback function          ');
			console.log	('  on an event of an element          ');
			console.log	("                                     ");
			console.log	(" (eventType)[on](elements)(callback) ");
			console.log	('  fires a callback function          ');
			console.log	('  on an event of an element array    ');
			console.log	("                                     ");
			console.log	(" (eventType)[on](document)(callback) ");
			console.log	('  fires a callback function          ');
			console.log	('  on an event of any element         ');
			console.log	("                                     ");
			console.log	("                                     ");
			console.log	("                                     ");
			console.log	("                                     ");
		break;
		break;
		case 10:
			console.log	("         \\_/  Events  \\_/          ");
			console.log	("Adding Event Listener/s on Element/s ");
			console.log	("                                     ");
			console.log	("|DESCRIPTION                         ");
			console.log	('  fires a callback function          ');
			console.log	('  on an event of an element          ');
			console.log	("                                     ");
			console.log	("|USAGE                               ");
			console.log	("  (eventType)[on](element)(callback) ");
			console.log	("                                     ");
			console.log	("|ARGUMENTS                           ");
			console.log	("  e                                  ");
			console.log	("                                     ");
			console.log	("|KEYWORDS                            ");
			console.log	("  this                               ");
			console.log	("                                     ");
			console.log	("|COMMANDS                            ");
			console.log	(" (eventType)                         ");
			console.log
			(			("  'mouseup'                          ")
			 +("\r\n")+ ("  'mousedown'                        ")
			 +("\r\n")+ ("  'click'                            ")
			);
			console.log	("                                     ");
			console.log	("|EXAMPLE                             ");
			console.log
			(			("  ('mouseup')[on](element)           ")
			 +("\r\n")+ ("  ( function(e)                      ")
			 +("\r\n")+ ("  ( {                                ")
			 +("\r\n")+ ("      this                           ")
			 +("\r\n")+ ("    }                                ")
			 +("\r\n")+ ("  );                                 ")
			);
			console.log	("                                     ");
		break;
		break;
		case 11: 
			console.log("binding events");
		break;
		break;
		case 20: 
			console.log("fetching with ajax");
		break;
		break;
		case 21: 
			console.log("script onload");
		break;
		break;
		case 22: 
			console.log("loading public modules");
		break;
		break;
		case 23: 
			console.log("loading private modules");
		break;
		break;
	}
	console.log("> return true;                       ");
	console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
	console.log("\r\n");
};
