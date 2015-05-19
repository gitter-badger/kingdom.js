on.js
====================================
    return true;

_A JavaScript Library_ 

### What is on.js?

This free library aims to help client-side programmers maintain performance and functionality in the cross-browser environment, where the JavaScript run-time manages HTML/CSS content and presentation.

Allow me to thank some of the great people that can relate!

_Supporters!_

```javascript
Thank(You);
```

[XirSys, awesome, free WebRTC Cloud Service!](Http://xirsys.com)
 * making the web a better place

[Alex Thomas, great guy and start-up founder of Pylon.io!](http://xirsys.com)
 * seeing on's benefit in Pylon's future web success

_Contributers!_

```javascript
Thank(You);
```

[John-David Dalton, great guy and the creator of Lo-Dash!](https://github.com/jdalton/)
 * renaming on's toString return value

____________________________________

### What is on.js?

_A Javascript Library_

It uniquely integrates the essentials of web JavaScript.

* a.) Best-practices
* b.) Cross-browser compatability
* c.) DOM iteration/manipulation
* d.) Event callbacks
* e.) Ajax polling
* f.) File-uploading
* g.) Script-loading
* h.) Asynchronous scope-intelligence
* i.) Datatype-detection
* j.) Iframes and more!

Including optional resources for development:

* * Scope-intelligent console wiki

***

_A Keyword_ 

```javascript
on
```

The single keyword, on, sweetens your javascript with two flavors of sugar!

***

_A Syntax_ 

```javascript
(command)[on](data)(parameter);
```

Friendly and intuitive!

====================================



```javascript

('mouseup')[on](theElement)
(   function(e)
    {   
        this;
    }
);

```

```javascript

('for each img')[on](theElement)
(   function(i)
    {   
        this[i];
        return false;
    }
);

```

```javascript

('POST applesauce=true')[on]('../ajax/url/?topic=food')
(   function()
    {   
        this.POST;
        this.GET;
        this.responseText;
    }
);

```

***

_A Standard_ 

```javascript
on[type];
```

Conventional augmentation!

====================================

```javascript
on.document.eachElementByAttribute
(   'the-attribute'
,   'the-value'
,   function(i)                        
    {
        this[i];                  
        return false;
    }
);
```

```javascript
on.element.offsetLeft.call(theElement);
```

```javascript
on.iframe.document(theIframeElement);
```

***

_A Paradigm_

```javascript
this instanceof Cool;
```

Fluidly adapts to your HTML with

 * Hybrid functionality!
 * Nestable bindings!
 * Graceful degradation!
 * Polyfill!
 * & More!

====================================

```html

<form id="TheUploadForm" action="../the/static/url">

	<input type="file" value="Select A File" />

	<input type="submit" value="Submit" />

</form>

```
```javascript

('submit')[on](document.getElementById('TheUploadForm'))
(	function(e)
	{
		on.event.preventDefault.call(e);
		
		this.action = "../the/ajax/url";
	
		('upload')[on](this)
		(	function(e)
			{
				console.log( 100 * ( e.loaded/e.total ) + "%" )
			}
		);

		('POST')[on](this)
		(	function()
			{
				console.log( this.responseText )
			}
		);
	}
);

```

***

_A Mentor_

```javascript
on.about();
```

Live console manual!

source: /opt/on.about.js
 * Inject during development
 * Delete during production

method: on.about()
 * Call anywhere!
 * Asynchronously scope-intelligent


====================================

```javascript
var contentBody = document.getElementById('content-body');
var contentTabs = document.getElementById('content-tabs');

var activeTab;

('mouseover')[on](contentTabs.children)
(   function(e)
    {
        on.event.preventDefault.call(e);
        on.about(); //prints man page for Events on Elements
        
        var me = activeTab = this;

        ('GET')[on](this.href+"?ajax=true")
        (   function()
            {
            	if (activeTab != me) return;
            	
                on.about(); //prints man page for ajax GET on URL
                contentBody.innerHTML = this.responseText;
            }
        );
    }
);

on.about(); //prints man page for on.js
```

***

_A Performance_ 

Benchmarks!

DOM
 * http://jsperf.com/on-js-lib-dom-benchmark
 * http://jsperf.com/javascript-dom-benchmark

Classes
 * http://jsperf.com/on-js-lib-classes-benchmark
 * http://jsperf.com/javascript-classes-benchmark

Attributes
 * http://jsperf.com/on-js-lib-attributes-benchmark
 * http://jsperf.com/javascript-attributes-benchmark

____________________________________

![alt text](https://raw.githubusercontent.com/clayendisk/on.js/master/benchmark/Chrome/for%20each.png "For Each Raw Iteration Speed")

***

_A Revolution_

Download the [source](https://github.com/clayendisk/on.js/tree/master/script/lib/)!

 * _14kb_ [Min.](https://cdn.rawgit.com/clayendisk/on.js/master/script/lib/on.js)

Beginners, grab [this](https://cdn.rawgit.com/clayendisk/on.js/master/script/opt/on.about.js) too!

 * [Live Console Manual](https://github.com/clayendisk/on.js/wiki/About)

Check out the [tutorials](https://github.com/clayendisk/on.js/tree/master/example)!

 * [Live Console Manual](https://github.com/clayendisk/on.js/blob/master/example/about.html)
 * [Element Resources](https://github.com/clayendisk/on.js/blob/master/example/node.html)
 * [Element Classes](https://github.com/clayendisk/on.js/blob/master/example/class.html)
 * [Event Callbacks](https://github.com/clayendisk/on.js/blob/master/example/event.html)
 * [Ajax Requests](https://github.com/clayendisk/on.js/blob/master/example/ajax/basic_overview.html)
 * [Ajax Submission](https://github.com/clayendisk/on.js/blob/master/example/ajax/submit.html)
 * [Syntax Overview](https://github.com/clayendisk/on.js/blob/master/example/syntax.html)

Bookmark the [wiki](https://github.com/clayendisk/on.js/wiki/)!

 * [Live Console Manual](https://github.com/clayendisk/on.js/wiki/About)
 * [DOM](https://github.com/clayendisk/on.js/wiki/DOM)
 * [Iframes](https://github.com/clayendisk/on.js/wiki/Iframes)
 * [Events](https://github.com/clayendisk/on.js/wiki/Events)
 * [For Each](https://github.com/clayendisk/on.js/wiki/For-Each)
 * [Ajax](https://github.com/clayendisk/on.js/wiki/Ajax)
 * [Ajax Forms](https://github.com/clayendisk/on.js/wiki/Ajax-Form-Submission)
 * [Ajax Uploads](https://github.com/clayendisk/on.js/wiki/Ajax-Form-File-Uploading)
 * [Script-Loading](https://github.com/clayendisk/on.js/wiki/Script-Loading)

____________________________________

