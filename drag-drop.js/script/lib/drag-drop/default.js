define
({  creator:    function (sandbox)
    {       var _ = function(that)
            {  return new Node(that);
            };

            var Node = function(node)
            {   this.insert = function(c,a,b)
			    {	node.insertBefore(a,c=='After'?b.nextSibling:b);
			    };
                this.offset = function(p)
			    {	for(this[p]=0;node;node=node.offsetParent) this[p]+=node['offset'+p];
				    return this[p];
			    };
            };

            var each =
            {   ElementBy:
                {   className: function(list,className,search,callback)
                    {   search=search?search+' ':'';
                        for(var i=0,l=list.length;i<l;i+=1) ((list[i].className+' ').indexOf(className+search)>=0) && callback.call(list,i);
                    }
                ,   attribute: function(list,attribute,search,callback)
                    {   var test;
                        for(var i=0,l=list.length;i<l;i+=1) (test = list[i].getAttribute(attribute)) && (search?((test+' ').indexOf(search+' ')>=0):true) && callback.call(list,i);
                    }
                }
            };

            String.prototype.hyphenMatch = function(search)
				{   var l = search.length, m=[];
					if(search = this.match(new RegExp(search+"-[\\w\\d-]+","g")) )
						while(search.length) m.push(search.shift().slice(l));
					else
						return false;
						return m;
				}

            var ev = window.addEventListener?['addEventListener','']:['attachEvent','on'];
			var ev_add = function(node,ev_type,exec){ node[ev[0]](ev[1]+ev_type, function(e){return exec.call(node,e||window.event);}, false); }
        
        var lib;
			lib = 
			{	name:
				{	parent		:	'h-parent'
				,	parentMode	:	'h-parent-mode'
				,	child		:	'h-child'
				,	hold		:	'h-hold'
				,	drag		:	'h-drag'
				}
			,	init: 	function()		//add event listeners
				{	
                    console.log('version 1.00');
					ev_add(document,'mouseup',lib.mouse.up);
					ev_add(document,'mousedown',lib.mouse.down);
					ev_add(document,'mousemove',lib.mouse.move);
				}
			,	mouse:
				{	down:	function(e)
					{	
						(lib.drag.find(e.srcElement||e.target))
					&&	(lib.drop.make())
					&&	(lib.drag.make())
                    &&  (lib.drag.move())
					&&	(lib.drag.time = setInterval
						(	function()
							{	lib.drag.move();
								lib.drop.move();
							}
						,	100/4
						));
					}
				,	up:		function(e)
					{	
						(lib.drop.node)
					&&	(lib.drag.node)
					&&	(lib.drop.done())
					&&	(lib.drag.done());
					}
				,	move:	function(e)
					{	
						e.preventDefault?e.preventDefault():e.returnValue=false;
						lib.mouse.X_px = e.clientX + (document.body.scrollLeft||document.documentElement.scrollLeft);
						lib.mouse.Y_px = e.clientY + (document.body.scrollTop ||document.documentElement.scrollTop );
						//MAKE SCROLL EFFECT?
					}
				}
			,	drag:
				{	find:   function(node)//find the draggable node
                    {   
                        if(sandbox.getOption('mode')=='className')
                        {   for(;node;node=node.parentNode)
                            {   if (lib.drag.type = (node.className||'').hyphenMatch(lib.name.child) )  //methodized
                                {   lib.drag.node = (node);
                                    lib.drag.copy = (node.cloneNode(true));
                                    return true;
                                }
                            }   return false;
                        }else
                        {	for(;node;node=node.parentNode)
                            {   if (lib.drag.type = node.getAttribute(lib.name.child))
                                {   lib.drag.type = lib.drag.type.split(' ');
							        lib.drag.node = node;
							        lib.drag.copy = node.cloneNode(true);
                                    return true;
                                }
                            }   return false;
					    }
                    }	
				,	make: 	function()	//make the draggable node
					{	
						lib.drag.x_px = lib.mouse.X_px - _(lib.drag.node).offset('Left');	//methodized
						lib.drag.y_px = lib.mouse.Y_px - _(lib.drag.node).offset('Top'); 	//methodized

						lib.drag.copy.className += ' ' + lib.name.drag;
						lib.drag.copy['style']['width'] = (lib.drag.node).offsetWidth + ('px');
						lib.drag.copy['style']['height'] = (lib.drag.node).offsetHeight + ('px');
						lib.drag.copy['style']['position'] = 'absolute';

						lib.drag.node.parentNode.removeChild	(	lib.drag.node	);
						document.body.appendChild			(	lib.drag.copy	);

						return true;
					}
				,	move: 	function()	//move the draggable node
					{	
						lib.drag.copy['style']['left']=(lib.mouse.X_px - lib.drag.x_px) + ('px');
						lib.drag.copy['style']['top' ]=(lib.mouse.Y_px - lib.drag.y_px) + ('px');
                        return true;
					}
				,	done: 	function()	//stop the draggable node
					{		
						//stop move handler/timer
						clearInterval(	lib.drag.time	);
						//free drag node dependencies
						for(var i in lib.drag)
							if( lib.drag[i] instanceof Function === false )    //fixme
								lib.drag[i] = undefined;

						return true;
					}
				}
			,	drop:
				{	make: 	function()	//make the droppable node
					{	
						lib.drop.node = document.createElement('div');
						lib.drop.node.setAttribute('class', lib.name.hold);
						lib.drop.node.setAttribute('id'	 , lib.name.hold);
						lib.drag.node.parentNode.insertBefore(	lib.drop.node,	lib.drag.node.nextSibling	);
						return true;
					}
                ,   move:   function()  //move the droppable node
                    {   for(var k in lib.drag.type)  
                            each.ElementBy[sandbox.getOption('mode')]
						    (	document.getElementsByTagName('*')
                            ,   lib.name.parent
                            ,   lib.drag.type[k]
                            ,   function(i)
							    {	lib.parent = 
								    {	node:	this[i]
								    ,	mode:	this[i].getAttribute(lib.name.parentMode)||('y')
								    };
                                
                                    each.ElementBy[sandbox.getOption('mode')]
								    (	lib.parent.node.children
                                    ,   lib.name.child
                                    ,   false
                                    ,   function(i)
									    {	lib.child = 
										    {	node:	this[i]
										    ,	x_px:	_(this[i]).offset('Left')	    // + lib.parent.page.X
										    ,	y_px:	_(this[i]).offset('Top')		// + lib.parent.page.Y
										    ,	w_px:	this[i].offsetWidth
										    ,	h_px:	this[i].offsetHeight
										    };

										    lib.child.inside =
										    {	x	:	+( lib.mouse.X_px > lib.child.x_px )
												    *	+((lib.mouse.X_px < lib.child.x_px + lib.child.w_px)
												    +	+( lib.mouse.X_px < lib.child.x_px + lib.child.w_px/2 ))
										    ,	y	:	+( lib.mouse.Y_px > lib.child.y_px )
												    *	+((lib.mouse.Y_px < lib.child.y_px + lib.child.h_px)
												    +	+( lib.mouse.Y_px < lib.child.y_px + lib.child.h_px/2 ))
										    };

										    if ( lib.child.inside.x && lib.child.inside.y )
											    _(lib.parent.node).insert
											    (	['After','Before'][--lib.child.inside[lib.parent.mode]]
											    ,	lib.drop.node
											    ,	lib.child.node
											    );
									    }
								    );
							    }
						    );
                    }
				,	done: 	function()	//drop the droppable node
					{	
						lib.drop.node.parentNode.insertBefore	(	lib.drag.node,	lib.drop.node);	
						lib.drop.node.parentNode.removeChild	(	lib.drop.node	);	
						document.body.removeChild				(	lib.drag.copy	);
						lib.drop.node = undefined;
						lib.parent = undefined;
						lib.child  = undefined;
						return true;
					}
				}
			};

        var init = lib.init
        ,   exit = function (){console.log('Weld App Denitialized')}
        ;   return { create : init , destroy : exit }
    }
});		