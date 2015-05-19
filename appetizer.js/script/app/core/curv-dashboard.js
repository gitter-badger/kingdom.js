dash
	= 
		{
			cfgs:
			{
			}
		,	data:
			{
				radius	: 500
			}
		,	wids: function( html )
			{
				return html.replace(/id="([^"]+)(-[0-9]+)?"/g, "id=\"$1-"+(arguments.callee.index = (arguments.callee.index || 0) + 1)+"\"")
			}
		,	node: function( suffix )
			{	
				return arguments.callee[suffix] = dom[byid]( this.cfgs.Id + '-' + suffix )
			}
		,	tree: function( prefix )
			{
				return true &&
				{	
					
				}
			}
		,	core:
			{	init: function ()
				{	
					migrate
					(	dash.cfgs
					,	arguments[0]
					);
					
					var
						data = dash.data
					,	area = dash.node('app')
					;
					var
						axes = area.children[0]
					,	tags	
					
					,	pane = area.children[1]
					,	hand = dash.node('hand')
					
					,	opts = dash.node('opts')
					,	temp
					;
					
					var
						i  = opts.children.length
					;
					while
					(	i--
					)	{
							opts.children[i].onclick = Appetizer.order
						}
					;
					
					axes
					.	rotation =
						[	0
						,	0	
						,	0	];
					
					(window
					.	onresize = function (e)
						{
							area
							.	boundary =
								[	area.offsetWidth/2
								,	area.offsetHeight/2		];
							
							area
							.	centerpt =
								[	area.offsetLeft + area.boundary[0]
								,	area.offsetTop  + area.boundary[1] 	];
						}
					)();
					
					('mousemove')[on](document)
					(	function (e)
						{
							
							if (hand.style.display === "none")
								return false
							;
							
							hand
							.	location = 
							[	e.clientX - area.centerpt[0]
							,	e.clientY - area.centerpt[1]	];
							
							if 
							(	area.boundary[0] <Math.abs(hand.location[0])
							||	area.boundary[1] <Math.abs(hand.location[1])
							)	return false;
								
							hand
							.	rotation =
							[	Math.round(-Math.asin(hand.location[1]/data.radius)/Math.PI*180 || 0)
							,	Math.round(+Math.asin(hand.location[0]/data.radius)/Math.PI*180 || 0)
							,	0	];
							
							hand
							.	location[2] =
							(	Math.sqrt
								(	Math.pow( data.radius,2 )
								- 	Math.pow
									(	Math.sqrt
										(	Math.pow( hand.location[0],2 )
										+	Math.pow( hand.location[1],2 )
										)
										,2 
									)
								)	
							||	0
							);
										
							hand.style.webkitTransform = 
							hand.style.mozTransform = 
							hand.style.msTransform = 
							hand.style.oTransform = 
							hand.style.transform = 
							(	
								"translateX("+hand.location[0]+"px) "
							+	"translateY("+hand.location[1]+"px) "
							+	"translateZ("+hand.location[2]+"px) "
							+	"rotateY("+hand.rotation[1]+"deg) "
							);
										
							var 
								tagX = hand.children[0]
							;
							
							tagX.style.webkitTransform = 
							tagX.style.mozTransform = 
							tagX.style.msTransform = 
							tagX.style.oTransform = 
							tagX.style.transform = 
							(	
								"rotateX("+hand.rotation[0]+"deg) "
							);	
							//*/
						}
					);
					
					('DOMMouseScroll')[on](document)
					(	document.onmousewheel = 
						function (e)
						{	
							axes.rotation[1]+=(on.event.preventDefault.call(e),
							hand.scrolled	 = on.event.detail.call(e));
								
							axes.style.webkitTransform = 
							axes.style.mozTransform = 
							axes.style.msTransform = 
							axes.style.oTransform = 
							axes.style.transform = 
							(	"translateZ("+(-data.radius)+"px) "
							+	"rotateY("+(axes.rotation[1])+"deg)"
							);
						}
					);
					
					('click')[on](document)
					(	function (e)
						{
							tags = tags || Appetizer.serve.call(axes);
						
							tags.style.display = "block";
							
							tags.style.webkitTransform = 
							tags.style.mozTransform = 
							tags.style.msTransform = 
							tags.style.oTransform = 
							tags.style.transform =
							( 	"rotateY("+(-axes.rotation[1])+"deg)"
							+	"translateX("+(hand.location[0])+"px) "
							+	"translateY("+(hand.location[1])+"px) "
							+	"translateZ("+(hand.location[2])+"px) "
							+	"rotateY("+hand.rotation[1]+"deg) "
							);
							
							var						
								tagX = tags.children[0]
							;
							
							tagX.style.webkitTransform = 
							tagX.style.mozTransform = 
							tagX.style.msTransform = 
							tagX.style.oTransform = 
							tagX.style.transform = 
							(	
								"rotateX("+hand.rotation[0]+"deg) "
							);
							//*/
							console.log( [e.clientX, e.clientY] );
						}
					);
					
					('mousemove')[on](opts)
					(	opts.onclick = 
						function (e)
						{
							on.event.stopPropagation.call(e);	//ammend this ?
						}
					);
				}
			}
		}
	;
/**\	curv by tinj 2014 (c)
\**/
