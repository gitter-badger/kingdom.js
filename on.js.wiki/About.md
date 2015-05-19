Printing Manual Pages
====================================
    on.about();
_on.about.js_

### | OVERVIEW
_As an optional feature, on.js prints out relevant usage information anywhere in your code with on.about()_

### | REQUIRE
[../script/opt/]
 * on.about.js 

### MANUAL PAGES

_Events_
 * document
 * element
 * element lists

_Ajax_
 * GET
 * POST

_Script Loading_
 * script
 * public module
 * private module

_DOM_
 * eachElementBy
 * for each

_Arrays_
 * for each

_Objects_
 * for each

_Element Lists_
 * for each

### NESTED CALLING

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

        ('POST')[on](this.href+"?ajax=true")
        (   function()
            {
				if (activeTab != me) return;
            
                on.about(); //prints man page for ajax POST on URL
                contentBody.innerHTML = this.responseText;
            }
        );
    }
);

on.about(); //prints man page for on.js
```



on.js
====================================
    return true;

_A JavaScript Library_ 

