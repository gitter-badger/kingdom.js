Curv.components
.	table = function()
	{
		this
		.	cfgs = 
			{	settings:
				{	
				}
			,	defaults:
				{	
				}
			}
		;
		
		this
		.	cmds =
			{
				init: this.authorize
			,	push: this.query
			,	pull: this.query
			}
		;
		
		this
		.	data =
			{	
			}
		;
	}
;

Curv.components
.	table.prototype =
	{
		authorize: function( settings )
		{
		}
	,
		query: function( request )
		{
		}
	,	
		reply: function( )
		{
		}
	}
;
