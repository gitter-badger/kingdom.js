
	//|SERVICE:
	// ADAPTER

	//	[LIGHTWEIGHT CONSTRUCTOR MODEL]

		/*	
		 *	The idea here is that we only create one lightweight constructor
		 *	
		 *	that simply associates containers and provides indirect links to in-house methods
		 *
		 */

		window.onload = function(script)
		{	api = {provider:'google'};
			document.body.appendChild
			((	(script=document.createElement('script'))['type']='text/javascript'
			,	(script)
				.	src		= 'https://maps.googleapis.com/maps/api/js?'
				//	+ '&' 	+ 'key='
					+ '&' 	+ 'sensor=false'
					+ '&' 	+ 'callback=initialize'
			,	(script)
			));
		};
		
		function initialize()
		{	
		
												function migrate(table,template,i)
												{	
													for(i in template)
													{	//if template[i] is an object or array
														switch 
														(	Object.prototype.toString.call(template[i])
														)	{	
																case '[object Array]'	:	table[i] = migrate(table[i] || [], template[i]);
																	break;
																case '[object Object]'	:	table[i] = migrate(table[i] || {}, template[i]);
																	break;
															}
														
														if (table[i] == void 0)
															table[i] = template[i]
			
													}	return table;
												};
		
		
			var mapAdapter = function(override)
			{	
				this.overlay.configure = function(settings)
				{	
					return this.cfgs.settings = migrate(settings||{},this.cfgs.defaults);
				};
				this.container.designate = function(htmlElement)
				{	
					return this.data.container = document.getElementById(htmlElement)||htmlElement;
				};
				
				var 
				map = 
				{	cfgs:
					{	defaults:
						{	address	:	"St. Matthews Ky USA"
						,	gpos	:	[0,0]
						,	zoom	:	8
						,	mode	:	"driving"
						,	type	:	"roadmap"
						,	ctrl	:	true
						,	keys	:	false
						,	drag	:	true
						,	scroll	:	true
						}
					}
				,	data:
					{	container	:	null
					}
				};

				map.bind	=this.container.designate;
				map.init	=this.overlay.configure;
				map.draw	=this.overlay.render;

				map.gpos	=this.utilities.gpos.getByAddress;
				map.addr	=this.utilities.gpos.getAddress;
	
				map.zoom	=this.utilities.area.zoomTo;
				map.home	=this.utilities.area.center;
				map.area	=this.utilities.area.bounds;

				map.keys	=this.utilities.keys.listen;

				map.pins =
				{	cfgs:
					{	defaults:
						{	gpos	:	null
						,	title	:	"Home"
						,	address	:	"St. Matthews Ky"
						,	icon	:	''//
						,	html	:	"<div id='window'><h3>{{title}}</h3>{{address}}</div>"
						,	anim	:	"drop"
						,	drag	:	false
						}
					}
				,	data:
					{	points		:	[]
					}
				};
				
				map.pins.push	=this.utilities.pins.push;
				map.pins.pull	=this.utilities.pins.pull;
				map.pins.show	=this.utilities.pins.show;
				map.pins.hide	=this.utilities.pins.hide;

				map.path = 
				{	cfgs:
					{	defaults:
						{	points	:	[]
						,	color	:	"green"
						,	unit	:	"imperial"
						}
					}
				,	data:
					{	container	:	null
					}
				};

				map.path.init	=this.overlay.configure;
				map.path.draw	=this.overlay.render;

				map.path.bind	=this.container.designate;
				map.path.html	=this.container.display;

				
				//this is where we can override
				
				override = override || {};
				
				map.cfgs.settings =
				map.cfgs.defaults ;
				
				map.pins.cfgs.settings=
				map.pins.cfgs.defaults;
				
				map.path.cfgs.settings=
				map.path.cfgs.defaults;

				map.root = 
				map.path.root = 
				map.pins.root = map;
				
				return map;
			};
			
			switch(api.provider)
			{	default:
				case 'google':
				
				api.methods =
				mapAdapter.prototype = 
				{	overlay:
					{	render:function(callback)
						{	var map = this.root;
							switch (this)
							{	case map
								:	
										map.path.data.points	= [];	//might want to redraw	--	does google allow us to init points on map render?
										map.data.geocoder		= new google.maps.Geocoder();
										map.data.boundary		= new google.maps.LatLngBounds();
										map.data.instance		= new google.maps.Map
										(	map.data.container
										,	{	disableDoubleClickZoom	:	false
											,	disableDefaultUI		:	map.cfgs.settings.ctrl ^ 1
											,	scrollwheel				:	map.cfgs.settings.scroll
											,	draggable				:	map.cfgs.settings.drag
											,	mapTypeId				:	google.maps.MapTypeId  [map.cfgs.settings.type.toUpperCase()] || google.maps.MapTypeId ['ROADMAP']
											,	travelMode				:	google.maps.TravelMode [map.cfgs.settings.mode.toUpperCase()] || google.maps.TravelMode['DRIVING']
											,	zoom					:	parseInt(map.cfgs.settings.zoom)
				/**/						,	center					:	new google.maps.LatLng(map.cfgs.settings.gpos[0], map.cfgs.settings.gpos[1])
											}
										);
											
											//Google forces us to render the map instance first before producing a gposition from an address.
									
										map.gpos
										(	map.cfgs.settings.address
										,	function(error)
											{	
												if (!error)
												{			
													map.home(this);
												}

												map.keys(map.cfgs.settings.keys);
												callback && callback();
											}
										);
										
										return true;
								break;
								case map.path
								:	
											var data = map.path.data;
											var cfgs = map.path.cfgs;
								
											data.directions = data.directions || new google.maps.DirectionsService();
											data['overlay'] = data['overlay'] || new google.maps.DirectionsRenderer();

											var waypoints = [];
											
											if(callback!==false)
											{
												if(cfgs.settings.points.length)
												{
													for (var index in cfgs.settings.points)
													{	index = cfgs.settings.points[index];
														if(data.points[index])
														{
															waypoints.push
															(	{	location	:	data.points[index].position || data.points[index].address
																}
															);
															map.pins.hide(index);
														}
													}
													
												}else
												{
													for	(var index in data.points)
													{	waypoints.push
														(	{	location	:	data.points[index].position || data.points[index].address
															}
														);
														map.pins.hide(index);
													}
												}
											}
											
											if (waypoints.length < 2)
											{	data.container && (data.container.innerHTML="");
												data.overlay.setMap(null);
												map.pins.show();
												callback && callback(google.maps.DirectionsStatus['INVALID_REQUEST']);
												return false;
											}
											
											data.directions.route
											(	{	travelMode		:	google.maps.TravelMode [map.cfgs.settings.mode.toUpperCase()] || google.maps.TravelMode['DRIVING']
												,	waypoints		:	waypoints
												,	origin			:	waypoints.shift().location
												,	destination		:	waypoints.pop().location
												}
											,	function (response, status)
												{	
			/**/									callback
													(	status !== google.maps.DirectionsStatus['OK']
														?	status
														:	(	data.overlay.setMap(map.data.instance)
															,	data.overlay.setDirections(response)
															,	false
															)										
													);
												}
											);
											
											return true;
								break;
							}
						}
					}
				,	container:
					{	display:function(callback)
						{	var map = this.root;
						
							map.path.data.overlay.setPanel
							(	map.path.data.container
							);
							
							callback && callback();
						}
					}
				,	utilities:
					{	pins:
						{	push:function(settings,index)
							{	var map = this.root;
								
								var pin;
							
											settings = settings || map.pins.cfgs.defaults.address || map.cfgs.settings.address;

											if (typeof settings === "string")
											{	settings =
												{	address	:	settings
												}
											}

											if (settings[0] && settings[1])	//don't pass in [0,0] lol
											{	settings = 
												{	gpos	:	settings
												}
											}

											if(!settings.gpos)
											{	
												map.gpos
												(	settings.address
												,	function(error)
													{	
														if (error)
															delete map.path.data.points[index];

														if (map.path.data.points[index] != pin)
															return;

														settings.gpos = this;

														map.pins.push
														(	settings
														,	index
														);
														
														if (pin.isHidden)
															map.pins.hide(index);
													}
												);
												
												pin = settings;
											}
											else 
											if(settings.gpos)
											{
												map.pins.cfgs.settings = map.init.call(map.pins,settings);
												map.path.data.points = map.path.data.points || [];

												pin = new google.maps.Marker
												(	{	position	:	new google.maps.LatLng(map.pins.cfgs.settings.gpos[0],map.pins.cfgs.settings.gpos[1])
													,	map			:	map.data.instance
													,	icon		:	map.pins.cfgs.settings.icon		|| ''
													,	title		:	map.pins.cfgs.settings.title	|| ''
													,	animation	:	google.maps.Animation[map.pins.cfgs.settings.anim.toUpperCase()] || google.maps.Animation['BOUNCE']
													,	draggable	:	map.pins.cfgs.settings.drag		|| false
													}
												);
											
												var infoWindow;										

												settings.html && 
													google.maps.event.addListener
													(	pin
													,	'click'
													,	function()
														{
															(	infoWindow = infoWindow ||
																new google.maps.InfoWindow
																(	{	content
																	:	settings.html.replace
																		(	/{{([^}]+)}}/g
																		,	function()
																			{
																				return settings[arguments[1]];
																			}
																		)
																	}
																)
															)
															.	open
																(	map.data.instance
																,	pin
																);
														}
													);

												map.area(pin.position);
												map.home();
											}
											
											if(index >= 0)
											{	map.pins.pull(index);
												map.path.data.points[index] = pin;
												return index;
											}
											else
											{	return index = map.path.data.points.push(pin) - 1
											}
							
							}
						,	pull:function(index)
							{	var map = this.root;
							
								var pin;

								if(index >= 0)
								{	if (map.path.data.points[index].position)
									{	map.path.data.points[index].setMap(null);
									}
									delete map.path.data.points[index];
								}
								else
								{	while (map.path.data.points.length)
									{	if (pin = map.path.data.points.pop())
										{	
											if (pin.position)
											{	pin.setMap(null);
											
												if (index == void 0)
													break;
											}
										}
									}
								}
							}
						,	show:function(index,flag)
							{	var map = this.root;
							
								flag = +(flag==false);

								if (index >= 0)
								{	if (map.path.data.points[index].position)
										map.path.data.points[index].setMap
										(	[map.data.instance][flag]
										);
									else
										map.path.data.points[index].isHidden = flag;
								}
								else
								{	for (index in map.path.data.points)
										map.pins.show
										(	index
										,	!flag
										);
								}
							}
						,	hide:function(index)
							{	var map = this.root;
							
								map.pins.show
								(	index
								,	false
								);
							}
						}
					,	keys:
						{	listen:function(enable)
							{	var map = this.root;
							
								document.body.onkeydown =
								enable
								?	function(e)
									{	e = (e)||window.event;
										var PAN_DISTANCE = 128; // Pan distance is half a tile's width

										e.preventDefault();		//todo: cross-browser
										e.stopPropagation();	//todo: cross-browser

										switch (e.keyCode) 
										{	case 37: // left arrow
												map.data.instance.panBy(-PAN_DISTANCE, 0);
												break;
											case 38: // up arrow
												map.data.instance.panBy(0, -PAN_DISTANCE);
												break;
											case 39: // right arrow
												map.data.instance.panBy(PAN_DISTANCE, 0);
												break;
											case 40: // down arrow
												map.data.instance.panBy(0, PAN_DISTANCE);
												break;
											case 109: // numpad -
											case 189: // minus
											case 219: // open bracket
												map.data.instance.setZoom(map.data.instance.getZoom() - 1);
												break;
											case 107: // numpad +
											case 187: // equal
											case 221: // close bracket
												map.data.instance.setZoom(map.data.instance.getZoom() + 1);
												break;
										}
									}
								:	null
								;
							}
						}
					,	gpos:
						{	getByAddress:function(address, callback)
							{	var map = this.root;
									
								map.data.geocoder.geocode
								(	{	address	:	address
								//	,	bounds	:	
								//	,	region	:	
									}
								,	function(results, status)
									{	
	/**/								callback.call
										(	[	results[0].geometry.location.lat()
											,	results[0].geometry.location.lng()
											]
										,	(status !== google.maps.GeocoderStatus['OK']) && status
										);	
									}
								);
							}
						,	getAddress:function(position, callback)
							{	var map = this.root;
							
								map.data.geocoder.geocode
								(	{	position	:	new google.maps.LatLng(position[0], position[1])	
									}
								,	function(results, status)
									{	
	/**/								callback.call
										(	results[0].formatted_address
										,	(status !== google.maps.GeocoderStatus['OK']) && status
										);
									}
								);
							}
						}
					,	area:
						{	center:function(position)
							{	var map = this.root;
							
								map.data.instance.setCenter
								(	position instanceof Array
									?	new google.maps.LatLng(position[0], position[1])
									:	position
									||	map.data.boundary.getCenter()
								);
							}
						,	bounds:function(position)
							{	var map = this.root;
							
								map.data.boundary.extend
								(	position instanceof Array
									?	new google.maps.LatLng(position[0], position[1])
									:	position
								);

								//map.data.boundary.isEmpty()	
								map.data.instance.fitBounds
								(	map.data.boundary
								);
							}
						,	zoomTo:function(level)
							{	var map = this.root;
							
								map.data.instance.setZoom
								(	level
								);
							}
						}
					}
				};

				break;
				break;
				case 'bing':


				
				break;
			};

			
			mapService = 
			(	function()
				{
					return void 0 ||
					{
						createMap:function()
						{	
							//return new mapAdapter();
							return mapAdapter.apply(api.methods);
						}
					};
					
				}
			)();	
			
			/*
			 *
			 *
			 *	this is based on the following assumptions:
				
					each map has:
					- 1 map container
					- 1 directions list container
					- 1 directions routes overlay
					- 1 pushpin markers overlay
			 *
			 *	and allows us to visually represent every case in one simple constructor
			 *	and manage maps singularly as to not get them confused or excessively complicated
			 *
			 *	we can replace the ___function.apply(...) with actual function bodies if desired
			 *
			 */

		//	[GENERAL NAME CONVENTIONS, SPECIFIC TO PARENT OBJECT]

			//init: stores settings
			//bind: associates with container
			//
			//push:	adds settings		
			//pull: rems settings
			//
			//draw: renders API UI on-screen, fires optional callback
			//html:	display mark-up on-screen, fires optional callback	(possible sub-aliases: list)
			//

		//	[MAP-ADAPTER SPECIFIC NAME CONVENTIONS]	

				//gpos: [latitude,longitude] of address
				//addr:	address of [latitude,longitude]
				//area:	
				//zoom:


				//SET UPS
/*
				var 
				map = mapService.createMap();

				map.init(universal_map_settings)					//zoom, center, etc
				map.bind(map_container);
				map.draw(_callback);

				map.pins.push(universal_pin_settings);				//gpos/address, icon, title, 
				map.pins.pull(pin_id);

				map.path.init(universal_route_settings);			//waypoints, travelMode, 
				map.path.draw(_callback);

				map.path.bind(html_container);
				map.path.html(_callback);

				//TEAR DOWNS

				map.exit();											//also encompasses the following:
				map.draw(false);									//also encompasses the following:
				map.path.draw(false);		
				map.path.html(false);
*/			
				//var 
					map = mapService.createMap();
					map.bind(document.getElementById('map-canvas'));
					map.init
					(	{	
							zoom	:	15
						}
					);
					map.draw()


		//|MODULE: 
		// CORE MAPS
		};