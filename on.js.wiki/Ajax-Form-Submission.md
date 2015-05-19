Submitting Form Data
====================================
    asynchronous javascript and xml
_Ajax_

### | OVERVIEW
_Ajax form submission should be simple and universal, on.js makes everything possible in one easy step._

### SINGLE FORM

```html

<form id="TheForm" action="../the/url">

<input type="submit" value="Submit" />

</form>

```
```javascript

('submit')[on](document.getElementById('TheForm'))	//the "submit" on the form
(	function(e)
	{
		on.event.preventDefault.call(e);	//prevent default html submit

		('POST')[on](this)	//the ajax form post (formatted/encoded)
		(	function()
			{
				this.responseText;						//the content fetched
			}
		);
	}
);

```

### MULTIPLE FORMS

```html

<form class="AnyForm" id="TheForm1" action="../the/first/url">

<input type="submit" value="Submit" />

</form>

<form class="AnyForm" id="TheForm2" action="../the/second/url">

<input type="submit" value="Submit" />

</form>

```
```javascript

/**\	Get Elements By ClassName
\**/
/**\	Submit Form
\**/

var anyForm = on.document.getElementsByClassName('AnyForm');	//the elements [for more possibilities, see "class.html" or "attribute.html" or "dom.html"]

('submit')[on](anyForm)											//the "submit" on each form
(	function(e)
	{
		on.event.preventDefault.call(e);	//prevent default html submit

		('POST')[on](this)				//the ajax form post (formatted/encoded)
		(	function()
			{
				this.responseText;									//the content fetched
			}
		);
	}
);

```

### ACTION & METHOD

_In JavaScript_

```html
<form id="TheJavaScriptForm">

<input type="submit" value="Submit" />

</form>

```
```javascript

('submit')[on](document.getElementById('TheJavaScriptForm'))	//the "submit" on the form
(	function(e)
	{
		on.event.preventDefault.call(e);	//prevent default html submit
		this.action = "../the/js/url";

		('GET')[on](this)	//the ajax form post (formatted/encoded)
		(	function()
			{
				this.responseText;						//the content fetched
			}
		);
	}
);

```

_In HTML_

```html
<form id="TheHTMLForm" method="POST" action="../the/html/url">

<input type="submit" value="Submit" />

</form>

```
```javascript

('submit')[on](document.getElementById('TheHTMLForm'))	//the "submit" on the element
(	function(e)
	{
		on.event.preventDefault.call(e);	//prevent default html submit

		on.form.submit.call	//the ajax form post (formatted/encoded)
		(	this
		,	function()
			{
				this.responseText;						//the content fetched
			}
		);
	}
);

```

on.js
====================================
    return true;

_A JavaScript Library_ 

