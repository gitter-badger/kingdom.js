var App = function(settings)
{	settings = settings||
	{	root : ''	
	};
	var modules = [];
	this.create = function(path,conf)
	{	conf = conf||{};
		conf.getOption = function(key)
		{	return conf[key];	
		};
		return modules.push({path:path,conf:conf})-1;
	};
	this.start = function(module)
	{	module = modules[module];
		
		var ajaxRequest =
		(( new XMLHttpRequest()
		|| new ActiveXObject("Msxml2.XMLHTTP")
		|| new ActiveXObject("Microsoft.XMLHTTP")
		));
		
		ajaxRequest.onreadystatechange = function()
		{	if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
			{	
				window['define'] = function(code)
				{	module.code = code;
				};
				eval(ajaxRequest.responseText);
				module.inst = module.code.creator(module.conf);
				module.inst.create();
			}
		}
		ajaxRequest.open('GET', settings.root + module.path + '.js', true);
		ajaxRequest.send(null);		
	};
	this.stop = function(module)
	{	module = modules[module];
		module.inst.destroy();
	};
};