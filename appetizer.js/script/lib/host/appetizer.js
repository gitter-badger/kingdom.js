Appetizer
=
	{
		cfgs
		:	{
				Id: "curv-graph"
			
			,	delimiter: "/"
			
			,	components:
				[	mode
				,	type
				]
			
			,	mode: 1
			,	type: 2
			
			
			,	entree: 0
			,	recipe: 1
			}
			
	,	data
		:	{
				
			}
			
	,	node
		:	function( suffix )
			{
				return this.node[suffix] = dom[byid](Appetizer.cfgs.Id +"-"+suffix +"-"+(Appetizer.stubs.length||0))
			}
		
	,	grill
		:	function( recipe )
			{
				return (arguments.callee.recipe=recipe).innerHTML = recipe.innerHTML.replace(/id="([^"]+)(-[0-9]+)?"/g, "id=\"$1-"+(Appetizer.stubs.length||0)+"\"")
			}
	
	,	order
		:	function( settings )
			{
				var
					cfgs = Appetizer.cfgs
				,	grill = Appetizer.grill
				;

				var
					component = this.id.split( cfgs.delimiter )
				,	recipe    = this.children[ cfgs.recipe ]
				;

				grill( recipe );
				
				Appetizer
				.	components
					[	component[cfgs.mode]	|| "default"	]
					[	component[cfgs.type]	|| "default"	]
					(	settings								)
				;
			}

	,	serve
		:	function( settings )
			{
				var _A;
				return (_A=Appetizer, _A.stubs[(_A.order.index=_A.stubs.push(this.appendChild(_A.grill.recipe.children[0])))-1])
			}
			
	,	clean
		:	function( )
			{
				//
			}
	,	stubs
		:	[	//
			]
	}
;



components =
{
	"default":
	{	"default":	
		{
			bind
			: 	function( )
				{
					var
						instance = 
						{
							node: Appetizer.node
						}
					;
					
					var
						tags = instance.node('widget')
					,	data = instance.node('data')
					,	ctrl = instance.node('ctrl')
					;
					
					tags.instance = 
					data.instance = 
					ctrl.instance = instance;
					
					ctrl.onclick = this.ctrl.refresh;
				}
		,	ctrl :
			{
				refresh
				:	function( e )
					{
						var
							node = this.instance.node
						;
						
						var
							tags = node['widget']
						,	data = node['data']
						,	ctrl = node['ctrl']
						;
						
						//on.graph.draw(on.table.query("select *"));
					}
			}
		}
	}
};


node
.	onclick = function( e )
	{	
		Appetizer.bind.call( this );
		Appetizer.draw.call( that );
	}
;
