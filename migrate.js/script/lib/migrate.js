/**\	on.js
\**/
/**\	(c)	2014
\**/
function migrate
(	table
,	template
)	{	
		for(var i in template)
		{
			if (!template.hasOwnProperty(i))
				continue
			;
			
			switch
			(	Object.prototype.toString.call( template[i] )
			)	{	case '[object Array]' : table[i] = migrate(table[i]||[], template[i]);
						break;
					case '[object Object]': table[i] = migrate(table[i]||{}, template[i]);
				}
			
			if (table[i] == void 0)
				table[i] = template[i]
		}
		
		return table
	}
;
/**\	Ryan Stortz
\**/
/**\	May 11
\**/