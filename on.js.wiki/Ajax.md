Fetching Content
====================================
    asynchronous javascript and xml
_Ajax_

### | OVERVIEW
_Ajax content retrieval should be simple and universal, on.js makes everything possible in one easy step._

### | KEYWORDS
 * this

### | COMMANDS
 * 'GET'
 * 'POST'

### GET

```javascript

/**\	basic "GET"
\**/
/**\	fetch content
\**/

('GET')[on]("../ajax/get/url/")						//the page to get
(	function()
	{
		console.log(this.responseText);				//the content fetched
	}
);

```

```javascript

/**\	"GET" with variables		(first way)
\**/
/**\	fetch content
\**/

('GET')[on]("../ajax/get/url/?applesauce=true")		//the page to get
(	function()
	{
		console.log(this.responseText);				//the content fetched
	}
);

```

```javascript

/**\	"GET" with variables		(second way)
\**/
/**\	fetch content
\**/

('GET applesauce=true')[on]("../ajax/get/url/")		//the page to get
(	function()
	{
		console.log(this.responseText);				//the content fetched
	}
);

```

### POST

```javascript

/**\	basic "POST"
\**/
/**\	fetch content
\**/

('POST')[on]("../ajax/post/url/")					//the page to post to
(	function()
	{
		console.log(this.responseText);				//the content fetched
	}
);

```

```javascript

/**\	"POST" with variables		(standard way)
\**/
/**\	fetch content
\**/

('POST applesauce=true')[on]("../ajax/post/url/")	//the page to post to
(	function()
	{
		console.log(this.responseText);				//the content fetched
	}
);

```

```javascript

/**\	"POST" & "GET" with variables		(standard way)
\**/
/**\	fetch content
\**/

('POST applesauce=true')[on]("../ajax/post/url/?topic=food")	//the page to post/get
(	function()
	{
		console.log(this.responseText);							//the content fetched
	}
);

```


on.js
====================================
    return true;

_A JavaScript Library_ 


