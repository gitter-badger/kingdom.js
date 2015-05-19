define
({  creator:    function (sandbox)
    {   

            //Element Offset Calculator Tool
			var Node = function(node)
            {   this.offset = function(p)
			    {	for(p='offset'+p,this[p]=0;node;node=node.offsetParent) this[p]+=node[p];
				    return this[p];
			    };
                this.nextElementSibling = node.nextElementSibling||(function()
                {   for(var next; next=(next||node).nextSibling;) if(next.nodeType===1) break;
                    return (next);
                })();
            };
			var _ = function(that)
            {  return new Node(that);
            };

            var ev = window.addEventListener?['addEventListener','']:['attachEvent','on'];
			var ev_add = function(node,ev_type,exec){ node[ev[0]](ev[1]+ev_type, function(e){return exec.call(node,e||window.event,ev_type);}, false); }

        /***** TimeMachine Lite Class *****/
        var TimeMachine =
        {   lite: document.getElementById(sandbox.getOption('name'))
        ,   text: {}
        ,   init: function ()
            {   
                document.body.appendChild(TimeMachine.lite);

                ev_add
                (   document
                ,   'click'
                ,   function (e)
                    {
                       var node,down;

                       node = (down = e.srcElement||e.target).parentNode;

                        if(down.tagName=='BUTTON')
                            if((node.className+'-').indexOf(sandbox.getOption('name')+'-') >=0)
                                return TimeMachine.show(node);
                        if(down.tagName=='OPTION')                      //WK
                            if(node.parentNode.id == sandbox.getOption('name'))
                                return TimeMachine.next(node);
                        if(down.tagName=='SELECT')                      //IE
                            if(node.id == sandbox.getOption('name'))
                                return TimeMachine.next(down);

                        return TimeMachine.hide();
                    }
                );
            }
        ,   show: function (node)
            {
                TimeMachine.time = node.getElementsByTagName('input')[0];
                TimeMachine.lite.style.position= 'absolute';
                TimeMachine.lite.style.display = 'block';

                TimeMachine.lite.style.left = _(TimeMachine.time).offset('Left') + "px";
                TimeMachine.lite.style.top =  _(TimeMachine.time).offset('Top')  + TimeMachine.time.offsetHeight + "px";

                if('one-column' == sandbox.getOption('mode'))
                    return;

                for(var s=TimeMachine.lite.children,i=0;i<=2;i++)
                    (s[i].selectedIndex = -1) && (i) && (s[i].setAttribute('disabled',true));

            }
        ,   next: function (node)
            {
                TimeMachine.text[node.id] = node.options[node.selectedIndex].text;

                var next = _(node).nextElementSibling;

                if(next)
                    next.removeAttribute('disabled');
                else
                    return TimeMachine.save();
            }
        ,   save: function ()
            {                
                if('one-column' == sandbox.getOption('mode'))
                    TimeMachine.time.value = TimeMachine.text['Hours12 Minutes DayTime'];
                else
                    TimeMachine.time.value = TimeMachine.text['Hours12'] + ':' + TimeMachine.text['Minutes'] +' '+ TimeMachine.text['DayTime'];

                TimeMachine.hide();
            }
        ,   hide: function ()
            {
                TimeMachine.lite.style.display = 'none';
            }
        ,   exit: function ()
            {   
            }
        };

        /******* Create/Destroy ********/
        return { create : TimeMachine.init , destroy : TimeMachine.exit }
    }
});	