Document & Element
====================================
    Document Object Model
_DOM_

### | OVERVIEW

_It's best not to iterate on the DOM selectively, but if you must, on.js adheres closest to native JavaScript._

### DOCUMENT

_By Id_

```javascript

document.getElementById('the-id');

```

_By TagName_

```javascript

on.document.getElementsByTagName('*');		//on.document.getElementsBy.tagName

```

```javascript

on.document.getElementsByTagName('div');		//on.document.getElementsBy.tagName

```

```javascript

on.document.eachElementByTagName		//on.document.eachElementBy.tagName
(	'*'
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```

```javascript

on.document.eachElementByTagName		//on.document.eachElementBy.tagName
(	'div'
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```

_By Class_

```javascript

on.document.getElementsByClassName('the-class-to-find');		//on.document.getElementsBy.className

```

```javascript

on.document.getElementsByClassPrefix('the-class-prefix-');		//on.document.getElementsBy.classPrefix

```

```javascript

on.document.getElementsByClassSuffix('-the-class-suffix');		//on.document.getElementsBy.classSuffix

```

```javascript

on.document.getElementsByClassContains('the-search-string');		//on.document.getElementsBy.classContains

```

```javascript

on.document.eachElementByClassName		//on.document.eachElementBy.className
(	'the-class-to-find'
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```

```javascript

on.document.eachElementByClassPrefix		//on.document.eachElementBy.classPrefix
(	'the-class-prefix-'
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```

```javascript

on.document.eachElementByClassSuffix		//on.document.eachElementBy.classSuffix
(	'-the-class-suffix'
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```

```javascript

on.document.eachElementByClassContains		//on.document.eachElementBy.classContains
(	'the-search-string'
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```

_By Attribute_

```javascript

on.document.getElementsByAttribute('the-attribute');		//on.document.getElementsBy.attribute

```

```javascript

on.document.getElementsByAttribute('the-attribute','the-value');		//on.document.getElementsBy.attribute

```

```javascript

on.document.getElementsByAttribute		//on.document.eachElementBy.attribute
(	'the-attribute'
,	null
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```

```javascript

on.document.getElementsByAttribute		//on.document.eachElementBy.attribute
(	'the-attribute'
,	'the-value'
,	function(i)							//perform a function on each current element
	{
		this[i];						//each element
		return false;					//break the loop early (if needed)
	}
);

```


### ELEMENT

_Classes_

```javascript

on.element.hasClass.call(theElement,'the-class');

```

```javascript

on.element.addClass.call(theElement,'the-new-class');

```

```javascript

on.element.delClass.call(theElement,'the-old-class');

```

```javascript

on.element.hasClasses.call(theElement,'the-class the-other-class');

```

```javascript

on.element.addClasses.call(theElement,'the-new-class the-other-new-class');

```

```javascript

on.element.delClasses.call(theElement,'the-old-class the-other-old-class');

```

_Offsets_

```javascript

on.element.offsetLeft.call(theElement);

```

```javascript

on.element.offsetTop.call(theElement);

```


_Next Element Siblings_

```javascript

on.element.nextElementSibling.call(theElement);

```


_TagBodies_

```javascript

on.element.hasTagBody.call('<div id="the-id" class="the-class the-other-class" the-attribute="the-value">');

```

```javascript

on.element.hasTagBody.call('<div class="the-class the-other-class" the-attribute="the-value">');

```

```javascript

on.element.hasTagBody.call('id="the-id" class="the-class the-other-class" the-attribute="the-value"');

```

```javascript

on.element.hasTagBody.call('<div the-attribute="the-value" class="the-class" the-other-attribute="the-other-value">');

```


on.js
====================================
    return true;

_A JavaScript Library_ 
