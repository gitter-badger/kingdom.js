define  /*   Use as a "one-time Function" (DO NOT INCLUDE ON PARTIALS/MULTIPLE TIMES)     */
({  creator:    function (sandbox)
    {   

        //get className settings from sandbox
        sandbox.className =eval('('+sandbox.getOption('className')+')')||{};        //TODO: Recalling for ajax page chaining
        sandbox.className['auto'] = sandbox.className['auto']||{};

       /***** CONFIGURATION DEFAULTS *****/   
            
        var defaults = 
		{	timeDefault			:	'current'
        ,   iconUp              :   'Up'
        ,   iconDown            :   'Down'
		,	format				:	"{Hours}:{Minutes} {DayTime:am|pm}"
		};

        /***** Local Library *****/

        //DayTime Specifier Tool
		Date.prototype.getDayTime = function()
		{	return (this.getHours() >= 12)?"pm":"am";
		};
        //Split Tool
	    var splitAny = function(a,s)
		{	(a) && (!(a = a.split(s))[1]) && (a = a[0]); return a;
		};
        //Input Select Range Tool
        var inputSelectRange = function(node,pos0,pos1)
        {   node.selectionStart = pos0; node.selectionEnd = pos1;
        };
            //Integer Pad Tool
			var pad =
			{	left:	function(str,l)
				{	return l?(str<0?'-':'')+(('0000000000')+Math.abs(str)).slice(-l):str;
				}
			};

            //Window Event Tool
			var ev = window.addEventListener?['addEventListener','']:['attachEvent','on'];
			var ev_add = function(node,ev_type,exec){ node[ev[0]](ev[1]+ev_type, function(e){return exec.call(node,e||window.event,ev_type);}, false); }
			var ev_stopPropagation = function(e){ e.stopPropagation?e.stopPropagation():e.cancelBubble=true; }


        /***** TimeMachine Class *****/
        var TimePicker =
        {   name : 'TimeMachine-lite-'
        ,	node : null						//the container node
        ,   root : function (node)          //the container structure
            {   
                return node.parentNode.parentNode;          
            }
        ,   find : function (node)
            {   				
                TimePicker.node = TimePicker.root(node);
		        TimePicker.conf = sandbox.className[TimePicker.node.className.substr(TimePicker.name.length)];
            }
        ,	bind	:	function ()
	        {	
		        ev_add(document,'mousedown',TimePicker.mouse.down.domdoc);
                ev_add(document,'keyup',TimePicker.key.up.domdoc);
	        }
        ,	conf : null
        ,	comp : function (option)
	        {	
                if (TimePicker.conf[option]!=undefined)
                    return (TimePicker.conf[option]);
                else
                    if (sandbox.className['auto'][option]!=undefined)
                        return (sandbox.className['auto'][option]);
                    else
			            return (defaults[option]);
	        }
        ,   mouse:
	        {	down:	
		        {	hold: false
		        ,	domdoc: function (e)           //TODO: move to mouse.up?
			        {	
				       //TimePicker.picker.hide();
                       var self = (e.srcElement||e.target);

                       for(var conf in sandbox.className)
                            if(self.tagName == 'INPUT' && self.type=='text')
                                if(TimePicker.root(self).className == TimePicker.name + conf)
                                    return TimePicker.mouse.down.time.call(self,e);     //simulate time focus

                       if (TimePicker.time.node)
                            TimePicker.key.up.time.call(TimePicker.time.node,e);        //simulate time blur
                       
                       TimePicker.node = null;
                       TimePicker.time.node = null;
                       TimePicker.button.node = null;
			        }
                ,   time:   function (e)
                    {   
                        TimePicker.find(this);
                        TimePicker.time.find();
                    }
                ,   clearer: function (e)
                    {       //checkbox -> checked container -> checkbox container -> label -> parent container
                            var nodes = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('input');

                            for (var i=nodes.length-1;i>=0;i--)
                            {
                                if(nodes[i].type != 'text')
                                    continue;

                                TimePicker.find(nodes[i]);
                                TimePicker.button.find();
                                TimePicker.time.find();

                                if(this.checked)
                                {   
                                    TimePicker.button.node.disabled = false;
                                    TimePicker.time.node.disabled = false;
                                    TimePicker.time.tool.reset();
                                }
                                else
                                {
                                    TimePicker.button.node.disabled = true;
                                    TimePicker.time.node.disabled = true;
                                    TimePicker.time.node.value='';
                                }
                            }

                            TimePicker.time.node = null;
                    }
		        }
	        }
        ,	key:
	        {	up:
		        {	domdoc: function (e)
                    {
                       if (e.keyCode == 9)
                            return TimePicker.mouse.down.domdoc(e);                                //simulate mouse click (on Tab)

                        if (TimePicker.time.node)
                            TimePicker.key.up.time.call(TimePicker.time.node,e);            //simulate time key up
                    }
                ,   time: function (e)
			        {
                        if(this.disabled)
                            return;

                        TimePicker.find(this);
				        TimePicker.time.find();
                        TimePicker.time.tool.parse();


				        switch(e.keyCode)
				        {	
                            case 37: TimePicker.time.char.Select(-1); return; break;		//left
					        case 39: TimePicker.time.char.Select(+1); return; break;		//right
					        case 38: TimePicker.time.tool.set(TimePicker.time.char.get(),TimePicker.comp('iconUp'));   break;		//up
					        case 40: TimePicker.time.tool.set(TimePicker.time.char.get(),TimePicker.comp('iconDown')); break;		//down
                            case  0: case 9: case null: case undefined: case false: case NaN: console.log(e.keyCode);  break;
                            default: return; break;
				        }

				        TimePicker.time.tool.format();
				        TimePicker.time.tool.update();

                        switch(e.keyCode)                                       //Why is this getting ignored?
				        {	
					        case 38: TimePicker.time.char.Select(0); break;		//up
					        case 40: TimePicker.time.char.Select(0); break;		//down
                            default: TimePicker.time.char.Selected=0;
				        }
			        }
		        }
	        }
        ,	button:
	        {	node	:	null	
            ,   find    :   function ()
                {
                    TimePicker.button.node = TimePicker.node.getElementsByTagName('button')[0];
                }
	        }
        ,   time :	
	        {	node	:	null		
	        ,	find	:	function ()
		        {	
			        TimePicker.time.node = TimePicker.node.getElementsByTagName('input')[0];	
		        }	
	        ,	values	:
		        {	Seconds	:	{text:null,	Reg: "([0-9]+)"   , step: 1	 	      }
		        ,	Minutes	:	{text:null,	Reg: "([0-9]+)"   , step: 1		      }
		        ,	Hours	:	{text:null, Reg: "([0-9]+)"   , step: 1	 	      }
		        ,	DayTime	:	{text:null,	Reg: "([ap \.m]+)", step: ["am","pm"] }
		        }
            ,   char :
                {   Index       : 0
                ,   Selected    : -1
                ,   Select:    function (inc)
                    {
                        this.Selected += inc;

                        var i=0;
                        for(var type in TimePicker.conf.timeValues)
                        i++;

                        if (this.Selected < 0) this.Selected = i-1;
                        if (this.Selected > i-1) this.Selected = 0;

                        i=0;
                        for(var type in TimePicker.conf.timeValues)
                        {   if(i++ > this.Selected) break;
                    
                            inputSelectRange
                            (   (TimePicker.time.node)
                            ,   (TimePicker.time.char.Index += (TimePicker.conf.timeValues[type].prefix.length))
                            ,   (TimePicker.time.char.Index += (TimePicker.time.values[type].text.length))
                            );
                         }

                        this.Index = 0;
                    }
                ,   get:   function ()
                    {   var i=0;
                        for(var type in TimePicker.conf.timeValues)
                            if(this.Selected == i++)
                                return type;
                    }
                }
	        ,	tool :
		        {   set: function (type,ctrl)
                    {
                        if(type == 'Hours')
                            TimePicker.time.values[type].prev = TimePicker.time.values[type].text;

				        if(ctrl == 'input')
					        TimePicker.time.values[type].text = this.value;
				        else
					        if(type == 'DayTime')
						        TimePicker.time.values[type].text = TimePicker.time.values[type].step[+(/a/i.test(TimePicker.time.values[type].text))];
					        else
                                if(ctrl == TimePicker.comp('iconUp'))
						            TimePicker.time.values[type].text = parseInt(TimePicker.time.values[type].text) + (TimePicker.conf.timeValues[type].step *  1);
                                else
                                    TimePicker.time.values[type].text = parseInt(TimePicker.time.values[type].text) + (TimePicker.conf.timeValues[type].step * -1);
                    }
                ,   reset:	function ()
			        {	
				        TimePicker.time.node.value = TimePicker.comp('timeDefault');
			
				        if( TimePicker.time.node.value == 'current')
				        {	for(var type in TimePicker.conf.timeValues)
						        TimePicker.time.values[type].text = TimePicker.time.current['get'+type]();

					        TimePicker.time.tool.update();		
				        }
			        }
		        ,	configure:	function ()		//get the format and translate into conf
			        {	
                        TimePicker.conf.timeValues = {};
				        TimePicker.conf.timeHours = TimePicker.comp("hideMeridian")?24:12;

				        TimePicker.conf.RegX = "";
				        TimePicker.comp('format').replace
				        (	new RegExp("([^{]+)?{(" + "Hours|Minutes|Seconds|DayTime" + ")(:?([A-Za-z0-9 \.|]+))?}","g")
				        ,	function(match,prefix,type,p3,step)
					        {   
                                TimePicker.conf.timeFirst = TimePicker.conf.timeFirst||type;
						        TimePicker.conf.timeValues[type] = 
						        {	prefix			:	prefix	            ||  ''
						        ,	step			:	splitAny(step,'|')	||  TimePicker.time.values[type].step
						        };
                        
                                TimePicker.conf.RegX += "" + TimePicker.conf.timeValues[type].prefix + "" + TimePicker.time.values[type].Reg + "?";	
					        }
				        );  

			        }
		        ,	parse :	function ()
			        {
				        //	parse time node value 
				        //	set local time values

                        var i = 0
				        ,   m = TimePicker.time.node.value.match
				        (	new RegExp
					        (	TimePicker.conf.RegX
					        ,	"i"
					        )
				        ); 
				        if(m)
				            for (var type in TimePicker.conf.timeValues)
					        {   TimePicker.time.values[type].text = m[++i];
                            }
                        else
                            if(  isNaN(TimePicker.time.values[TimePicker.conf.timeFirst].text = parseInt(TimePicker.time.node.value)) )
                            {   TimePicker.time.tool.reset();
                                TimePicker.time.tool.parse();
                            }

			        }
		        ,	format :	function ()
			        {
				        //	make local values cohere	(sandbox)
				        //		-->		AM||am||A M||A.m.||...
				        //		-->		15||3
				        //		-->		-1||23||11
				        //		-->		-1||59
				        //		-->		60||0
				        var h = parseInt(TimePicker.time.values.Hours.text)	        ||0		
				        ,	m = parseInt(TimePicker.time.values.Minutes.text)       ||0
				        ,	s = parseInt(TimePicker.time.values.Seconds.text)       ||0
				        ,	d = +(/p/i.test(TimePicker.time.values.DayTime.text))
				        ;   
				        var H = TimePicker.conf.timeHours;
                        var old_h = parseInt(TimePicker.time.values.Hours.prev)     ||h;
				
					        if(s >= 60)			{	m+=(Math.floor(s/60));	s = (s % 60);			}
					        else if(s < 0)		{	m+=(Math.floor(s/60));	s = (s % 60) + 60;		}

					        if(m >= 60)			{	h+=(Math.floor(m/60));	m = (m % 60);			}
					        else if(m < 0)		{	h+=(Math.floor(m/60));	m = (m % 60) + 60;		}

					        if(h >= H)			{	                        h = (h % H) ||H;	    }
					        else if(h < 1)		{	                        h = (h % H) + H;		}

                            if(H == 12)     //TODO: Military Time Overflow
                            {   if(h == 12 && old_h == 11)
                                    d ^= 1;
                                if(old_h == 12 && h == 11)
                                    d ^= 1;
                            }

				        TimePicker.time.values.Hours.text   = h;
                        TimePicker.time.values.Hours.prev   = undefined;
				        TimePicker.time.values.Minutes.text = pad.left(m,2);
				        TimePicker.time.values.Seconds.text = pad.left(s,2);
				        TimePicker.time.values.DayTime.text = TimePicker.conf.timeValues.DayTime.step[d];	
			        }
		        ,	update :	function ()		
			        {
				        //	make format cohere
				        //		-->		12:00:00 pm||12:00 pm||12pm||12 pm||etc
				        TimePicker.time.node.value = '';
				        for (var type in TimePicker.conf.timeValues)
					        TimePicker.time.node.value += TimePicker.conf.timeValues[type].prefix + TimePicker.time.values[type].text;
			        }
		        }
	        }
        ,   init: function ()
            {    
                TimePicker.time.current = new Date();

    	        for(var conf in sandbox.className)
		        {
			        TimePicker.conf = sandbox.className[conf];
                    if(TimePicker.conf instanceof Object === false)
                    {   console.log("***TimePicker Config. Warning***: '"+conf+"' is not an object!");
                        continue;
                    }
			        TimePicker.time.tool.configure();
		        }
		        TimePicker.conf = null;
		        TimePicker.bind();
		        return true;
            }
        ,   exit: function()
            {   
                for(var k in this.subs)
                    sandbox.app.unsubscribe(this.subs[k]);
            }
        };

        /******* Subscriptions *********/
        TimePicker.pubs = [];
        TimePicker.subs = 
        {   clearer: 
                sandbox.app.subscribe
                (   '/checkbox-clearer/click'
                ,   function (data)
                    {   TimePicker.mouse.down.clearer.call(data.node,data.event);
                    }
                )
        };
        /******* Create/Destroy ********/
        return { create : TimePicker.init , destroy : TimePicker.exit }
    }
});	