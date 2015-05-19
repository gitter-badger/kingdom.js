engine-framework
================

I'd love to tell you about this unique JavaScript Component Importation Engine I got to work on. It had me studying and playing with how to import a file-system of javascript-based components into what would be an effective engine-like framework. 

So you could have partial or full javascript code existing in files of any type. An example could be something exactly like the json documents you use, just in plain javascript. You would get to choose how to handle different file-extensions, and then build components out of those based on how you organized them within subdirectories in your file-system. It had a flexible way of doing this that would actually end up structuring your code to be the most dynamic. That's what happens when you open up the most optimal pathways by simplifying the integral relationships, just like what you guys are doing! With these kinds of things, they inevitably end up more light-weight too. 

Since I got to read examples of yours, I think I can explain it to you like this: 

You start out with a basic filesystem like this:
```
_fs/   --for file-system rules
app/   --applications
lib/   --libraries
mod/   --modules
ext/   --extensions/extras/configs/etc.
```
In the _fs directory belongs file-extension rules. Like "txt.exts" would have the way to handle a ".txt"

Recursively, every subdirectory becomes an object, and every file becomes a property. This is where it became flexible, because of the naming options. 

For example, a tree like this
```
- ext/
  - cfgs/
    - defaults.cfgs
    - settings.cfgs
  - cmds/
    - voice.cmds
  - data/ 
    - status/
      - status.flag
      - status.mask
```
would become objects in the engine like:
```
"cfgs" : {
 "defaults" : {...},
 "settings" : {...}
},

"cmds" : {
 "voice" : {...}
},

"data" : {
 "status" : {
  "flag" : "...",
  "mask" : [...]
 }
}
```
Notice how "flag" and "mask" picked up their names from their file-extensions, instead of their file-names. But you could also achieve the same result by placing both "status.flag" and "status.mask" directly under "data" They don't necessarily need to be contained like that. It will automatically create the "status" object anyway. Also, you don't have to name the folder after the file-extensions contained either. That's just for simplicity's sake.

Now you can also combine the two and have a subdirectory and a file-extension share the same name. 

For example, this component:
```
- carousel/
  - cfgs/
    - custom1.cfgs 
    - custom2.cfgs 
  - default.cfgs      <<
```
would become:
```
"carousel" : {
 "cfgs" : { 
  "default" : {...},  <<
  "custom1" : {...},  
  "custom2" : {...}   
 }
}
```
And lastly, those simple file-extension rules in "_fs" can make any type, including functions. They can also access data recently imported from the current tree.

For example, a component like:
```
- global/
  - carousel/
    - carousel.init
    - carousel.exit
  - global.vars
```
would make:
```
"global" : {
 "carousel" : {
  "init" : function(){...},
  "exit" : function(){...}
 },
 "vars" : "..."
}
```
The "init" and "exit" functions would have their code and the code from "global.vars"


=================
engine-framework
=================

One of the things I wanted to do was give each javascript component its own global scope. Typically, when you write javascript, you have to be careful about managing what variables you put into the global namespace. With this approach, you would get into the habit of each file having it's own.

The only way to do this in the web-browser is to create an iframe, which is an entirely new javascript environment that is nested within the original javascript environment. It has its own global scope, as well as its own datatypes and natives and everything that comes with a javascript instantiation. So if I tried to test an instance of an array built in an iframe from the original context, it wouldn't succeed, because the iframe is its own environment, and vice-versa.

The idea was to come up with a way to have this be a part of the engine as a new-paradigm feature, but it just turns out, as we would expect, to be too expensive and impractical. For every javascript file that it reads, the engine would load up a new iframe, which had its own javascript function that would reference the engine in the original environment. To do this from an iframe is simple, you just use the parent keyword, so it would be parent.engine.

Then I would run a function inside the iframe that would create objects in its own global scope and place references to them on the engine. I tested this, and after about 100 iframes, the browser gets a headache and complains for some aspirin. It just wasn't designed to do this. The memory starts to pile up and the browser just can't handle it this way. You can probably get away with about 15 to 25 iframes like this, but that wasn't going to be enough for what I needed.

So then I thought about just giving a new global scope to each folder that I pull in, but that seemed useless since everything in that folder would still run into each other and overlap global variables in the same way.

So then I tried to see what would happen if I deleted the iframe after it ran the code. So what I had was a function that had an address in my engine, but resided in the iframe's scope. Then I deleted the iframe and attempted to execute the function. Well, as I suspected, the function would still run, but it's global environment was missing.

Essentially, an iframe is like having a javascript parallel universe. And I put this code in that parallel universe and then deleted the universe. It's like voyaging a rocket-ship out to another universe, and then that universe disappears. The rocket-ship just pauses in afterthought, blinking, "Wha- what is this, where did everything go?" You, as an astronaut aboard the space-ship, could turn the lights on, or even turn the thrusters on, and it would work, but you wouldn't go anywhere, because the space-ship is floating out there in an empty void.

My javascript function behaved thus how; its environment was missing. So you could have run all the code you want, but there's no datatypes, no natives, no scope, it was just floating out there in an empty void. I tried to log anything out to the console; it recanted, both ignorantly and ironically, "What are you talking about?" You couldn't alert anything, because it was altogether bothered by that notion, "Again, I don't know what you think of me, what is this alert you speak of?" Finally, the original scope lost, because there was no inner scope for it to begin with, it was just a raw javascript-syntax shell. You could add variables to each other all day long, but if you tried to square root something, it would admit, "Again, I don't know what you are suggesting."

So this was very strange. As far as I knew, there's no other way to delete a scope in javascript. It made me laugh. I figured there's got to be some kind of a use for this. I would have awarded creativity points to anybody that came up with a project for this to be integral in the design.
