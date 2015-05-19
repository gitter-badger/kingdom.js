Binding Current/Element & Live/Document Events
====================================
    browser event object
_Events_

### | OVERVIEW
_Attaching event handlers to elements should be simple and universal, on.js makes everything possible in one easy step [including time-travel.]_

### | KEYWORDS
 * this

### | ARGUMENTS
 * e

### | COMMANDS
 * 'load'
 * 'unload'
 * 'abort'
 * 'error'
 * 'scroll'
 * 'resize'
 * 'reset'
 * 'submit'
 * 'focus'
 * 'blur'
 * 'select'
 * 'change'
 * 'cut'
 * 'copy'
 * 'paste'
 * 'keydown'
 * 'keyup'
 * 'keypress'
 * 'touchstart'
 * 'touchend'
 * 'touchmove'
 * 'touchcancel'
 * 'contextmenu'
 * 'dblclick'
 * 'mousewheel' (webkit)
 * 'DOMMouseScroll' (firefox)
 * 'mousemove'
 * 'mouseover'
 * 'mouseout'
 * 'mousedown'
 * 'mouseup'
 * 'click'

### | METHODS

```javascript

on.event.preventDefault.call(e);	//cancels default browser behavior on the event object

```

```javascript

on.event.stopPropagation.call(e);	//cancels upward propagation in the browser on the event object

```

### DOCUMENT

```javascript

('mouseup')[on](document)
(	function(e)			//the function with the event object
	{
			this;		//target element
	}
);

```

### ELEMENT

_Current_

```javascript

var theElement = document.getElementById('the-id');

('mouseup')[on](theElement)
(	function(e)			//the function with the event object
	{
		this;			//the element
	}
);

```

_Live_

```javascript

('mouseup')[on](document)
(	function(e)			//the function with the event object
	{
		if(this.id==='the-id')
		{
			this;		//each element
		}
	}
);

```

### ELEMENT(S)

_Current_

```javascript

var theElements = on.document.getElementsByAttribute('the-attribute');

('mouseup')[on](theElements)
(	function(e)			//the function with the event object
	{
		this;			//each element
	}
);

```

_Live_

```javascript

('mouseup')[on](document)
(	function(e)			//the function with the event object
	{
		if(this.getAttribute('the-attribute'))
		{
			this;		//each element
		}
	}
);

```



on.js
====================================
    return true;

_A JavaScript Library_ 
