Loading/Executing External JavaScript & Modules
====================================
    asynchronous javascript and xml
_Ajax_

### | OVERVIEW
_Loading/Executing external JavaScript should be simple and universal, on.js makes everything possible in one easy step._

### | KEYWORDS
 * this [optional]

### | ARGUMENTS
 * private [optional]

### | COMMANDS
 * 'load script'
 * 'load module'

### JAVASCRIPT

```javascript

('load script')[on]("../the-script-file.js")
(	function()		//the function to be executed after the script file has loaded
	{        
	}
);

```

### PUBLIC MODULE

```javascript

('load module')[on]("../the-module-file.js")
(	function()		//the function to be executed after the script file has loaded
	{        
		this;			//the public scope of the module (access to global)
		any_variable;		//any variable in the global scope
	}
);

```

### PRIVATE MODULE

```javascript

('load module')[on]("../the-module-file.js")
(	function(private)	//the function to be executed after the script file has loaded
	{        
		this;			//the private scope of the module (no access to global)
		any_variable;		//any variable in the private scope of the module
	}
);

```



on.js
====================================
    return true;

_A JavaScript Library_ 

