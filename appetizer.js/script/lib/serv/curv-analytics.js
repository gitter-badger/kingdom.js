(	/* (c) tinj */
	Curv
	=	function ()
		{	
			this
			.	cfgs =
				{	settings: arguments[0]
				,	defaults:
					{	mode: "default-map"
					,	data: "insert curv"
					}
				}
			;
			
			this.init ();	
		}
)	['components']
=	{
		video
		:	function ()
			{
				
			}
	,	
		graph
		:	function ()
			{
				
			}
	,
		table
		:	function ()
			{
				
			}
	}
;

Curv.components
.	video.prototype =
	{	
		seek: function( position )
		{
		}
	,	play: function( toggle )
		{
		}
	,	stop: function( )
		{
		}
	}
;

Curv.components
.	graph.prototype =
	{	
		bind: function( element )
		{
			// 1.) take a template element
			// 2.) process classNames and determine:
			//   a.) the type
			//   b.) the mode
			// 3.) bind controls to the template
		}
	}
;

Curv.components
.	graph.templates =
	{
		"terrain" :
		{
			
		}
	,
		"scatter" :
		{
			
		}
	,
		"default" :
		{
			
		}
	}
;


Curv.components
.	table = function()
	{
		this
		.	cfgs = 
			{	settings: arguments[0]
			,	defaults:
				{	
				}
			}
		;
		
		this
		.	cmds =
			{	
			}
		;
		
		this
		.	data =
			{	
			}
		;
	}
;
