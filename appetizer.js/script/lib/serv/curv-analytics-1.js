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
	}
;

Curv
.	prototype =
	{	init: function( settings ) 
		{	
			var
				settings = this.cfgs.settings || settings
			,	defaults = this.cfgs.defaults
			;
			
			if (settings.nodeType !== void 0)
				settings = 
				{
					node : settings
				}
			;
			
			migrate
			(	settings
			,	defaults
			);
			
			if ( database )
			{
				//this.table = Curv.components.table = new Curv.components.table;
			}
			
			if ( video )
			{
				//this.graph = new Curv.components.video;
			}
			
			if ( settings.data == defaults.data )
			{
				//draw later
				//data later
			}
			else
			{
				//data now
				//draw now
			}
		}
	,	plot: function( position )
		{	
			var
				graph = this.graph
			,	video = this.video
			;
			
			graph.plot( position );
			video.seek( position[0] / graph.size[0] * video.length );
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
		draw: function( callback )
		{
		}
	}
;


//consolidated approach...

	var
		graph = new Curv
		(	{	node: emptyElement1
			,	mode: "terrain-map"
			,	data: "select *"
			}
		)
	;
	
	var
		graph = new Curv( videoElement1 )
	;
	
	var
		graph = new Curv
		(	{	node: videoElement1
			,	mode: "default-map"
			}
		)
	;
	
//components and extras...

		settings
		.	animation =
			{	
				load :
				{	data : Curv.animation[0]
				,	draw : Curv.animation[1]
				}
				
			,	ctrl :
				{	move : Curv.animation[2]
				}
			}
		;
		
		settings
		.	database =
			{
				data :
				{	table : {}
				,	query : {}
				,	reply : {}
				}	
			}
		;
