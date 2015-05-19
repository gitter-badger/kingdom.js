Uploading Files
====================================
    asynchronous javascript and xml
_Ajax_

### | OVERVIEW
_Ajax file uploads should be simple and universal, on.js makes everything possible in one easy step._

### | HIGHLIGHTS
 * Support for All Browsers
 * Progress/Event Support for Modern Browsers

### | EVENTS
 * 'progress'
 * 'complete'
 * 'start'
 * 'end'
 * 'error'
 * 'abort'

### | ALIASES
_Upload Event(s)_
```javascript
('upload progress')[on](this)
(	function(e)
	{
		e.loaded;
		e.total;
		100 * (e.loaded/e.total) + "%";
	}
);
```
```javascript
on.form.upload.progress.call
(	this
,	function(e)
	{
		e.loaded;
		e.total;
		100 * (e.loaded/e.total) + "%";
	}
);
```
```javascript
('upload')[on](this)
(	function(e)
	{
		e.loaded;
		e.total;
		100 * (e.loaded/e.total) + "%";
	}
);
```

### UPLOAD PROGRESS

```html

<form id="TheUploadForm" action="../the/url">

<input type="file" value="Select A File" />

<input type="submit" value="Submit" />

</form>

```
```javascript

('submit')[on](document.getElementById('TheUploadForm'))
(	function(e)
	{
		on.event.preventDefault.call(e);
	
		('upload progress')[on](this)
		(	function(e)
			{
				e.loaded;
				e.total;
				100 * (e.loaded/e.total) + "%";
			}
		);

		('POST')[on](this)
		(	function()
			{
				this.responseText;
			}
		);
	}
);

```


on.js
====================================
    return true;

_A JavaScript Library_ 