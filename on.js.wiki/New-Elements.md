Creating New Elements On The Document/Element(s)
====================================
    dynamic element appending
_New Elements_

### | OVERVIEW
_Creating/Appending Elements should be simple and universal, on.js makes everything possible in one easy step._

### ON DOCUMENT

_Elements_

```javascript

('new div')[on](document)('the-className', 'the-id');

```
```javascript

('new span')[on](document)('the-className', 'the-id');

```
```javascript

('new etc')[on](document)('the-className', 'the-id');

```

_Images_

```javascript

('new img')[on](document)('../the-source.jpg');

```

_I-Frames_

```javascript

('new iframe')[on](document)('../the-source.html', 'the-name', width, height);

```

_CSS_

```javascript

('new css')[on](document)('../the-source.css');

```
```javascript

('new link')[on](document)('../the-source.css');

```

_Scripts_

```javascript

('new script')[on](document)('../the-source.js');

```


### ON ELEMENT

_Elements_

```javascript

('new div')[on](theElement)('the-className','the-id');

```
```javascript

('new span')[on](theElement)('the-className','the-id');

```
```javascript

('new etc')[on](theElement)('the-className','the-id');

```

_Images_

```javascript

('new img')[on](theElement)('../the-source.jpg');

```

_I-Frames_

```javascript

('new iframe')[on](theElement)('../the-source.html', 'the-name', width, height);

```



on.js
====================================
    return true;

_A JavaScript Library_ 
