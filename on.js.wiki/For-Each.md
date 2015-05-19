For Each Loops
====================================
    for each property/item in data
_for each_

### | OVERVIEW
_For Each Loops should be simple and universal, on.js makes everything possible in one easy step._

### | KEYWORDS
 * this

### | ARGUMENTS
 * i/name

### | COMMANDS
 * 'for each'

### ARRAYS

```javascript

('for each')[on](['abc',123,'xyz',789])
(	function(i)		//the function to be called on every item with index [i]
	{
		i;		//each item index
		this[i];	//each item value
	}
);

```

### OBJECTS

```javascript

('for each')[on]({'abc':123,'xyz':789})
(	function(name)		//the function to be called on every property with index [name]
	{
		name;		//each property name
		this[name];	//each property value
	}
);

```

### ON DOCUMENT

_Nodes_

```javascript

('for each')[on](document)
(	function(i)		//the function to be called on every element with index [i]
	{
		i;		//each element index
		this[i];	//each element
	}
);

```

```javascript

('for each div')[on](document)
(	function(i)		//the function to be called on every div with index [i]
	{
		i;		//each div index
		this[i];	//each div
	}
);

```

_Children_

```javascript

('for each child')[on](document)
(	function(i)		//the function to be called on every element with index [i]
	{
		i;		//each child element index
		this[i];	//each child element
	}
);

```

```javascript

('for each child div')[on](document)
(	function(i)		//the function to be called on every child div with index [i]
	{
		i;		//each child div index
		this[i];	//each child div
	}
);

```

### ON ELEMENT

_Nodes_

```javascript

var element = document.getElementById('the-element');

('for each')[on](element)
(	function(i)		//the function to be called on every element with index [i]
	{
		i;		//each element index
		this[i];	//each element
	}
);

```

```javascript

var element = document.getElementById('the-element');

('for each div')[on](element)
(	function(i)		//the function to be called on every div with index [i]
	{
		i;		//each div index
		this[i];	//each div
	}
);

```

_Children_

```javascript
var element = document.getElementById('the-element');

('for each child')[on](element)
(	function(i)		//the function to be called on every element with index [i]
	{
		i;		//each child element index
		this[i];	//each child element
	}
);

```

```javascript

var element = document.getElementById('the-element');

('for each child div')[on](element)
(	function(i)		//the function to be called on every child div with index [i]
	{
		i;		//each child div index
		this[i];	//each child div
	}
);

```



on.js
====================================
    return true;

_A JavaScript Library_ 

