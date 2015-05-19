;(collage=new function lib(){}).init=function(data)
{	var n = 0;
	for(type in data)
	{ if(type=='cfgs') continue;
	  for(a in data[type])(function(a,type)
	  { setTimeout(function()
	   { var node = document.createElement(type.substr(0,4)=='imgs'?'img':'div')
		 ,   add = 
		 function(node,data_id,a,container)
	     { container = (container||document.getElementById(type));
	       switch(type.substr(0,4))
		   { default:
	         case "links":
	          node.setAttribute('id',a);
	          if(typeof data_id[a]=="object") //added support for inlayed css menus
	          { node.innerHTML= "<a href='#'>"+a+"</a>";
	            node.setAttribute('class',type+' menu');
	            for(b in data_id[a])
	             add(document.createElement('div'),data_id[a],b,node);
	          }else
	          { node.innerHTML= "<a href='"+data_id[a]+"' target='_ep'>"+a+"</a>";
	            node.setAttribute('class',type);
	            (function link(href)
	            { node.onmouseover=function(){window.status=href};
	              node.onmouseout =function(){window.status=""};
	              node.onmouseup  =function(){window.open(href,"_collage.js")};
	            })(data_id[a]);
	          }
	         break;
		     case "imgs" :
	          node.setAttribute('src',data.cfgs['src']+a);
	          node.setAttribute('id',(data_id[a][5]||a));
	          node.style.width	= data_id[a][2]+'px';
	          node.style.left	= data_id[a][0]+'px';
	          node.style.top	= data_id[a][1]+'px';
	          node.style.height	= data_id[a][3]+'px';
			  //added support for motion control
			  node.style.zIndex	= (data_id[a][4]||null);
	         break;
	       } container.appendChild(node);
	     }; add(node,data[type],a,false);
		 
		 for(i=0;i<=100;i++)(function(i)
		 { setTimeout(function()
		  { node.style.opacity = i/100;
			node.style.filter = "alpha(opacity="+i+")";
		  }, i*data.cfgs['time']['done']/100 );
		 })(i);
					
	   }, data.cfgs['time']['next']*n); n++;
	  })(a,type);
	}
};
