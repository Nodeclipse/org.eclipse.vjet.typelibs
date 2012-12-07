/*******************************************************************************
 * Copyright (c) 2012 eBay Inc. and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     eBay Inc. - initial API and implementation
 *******************************************************************************/
vjo.ftype('org.dojotoolkit.ext.Cookie') //< public
.globals({
	cookie : undefined //<type::Cookie
}, dojo)
.props({
	//>public String cookie(String name)
	//>public void cookie(String name, String value, Cookie.__options::cookieProps? props)
	_invoke_ : vjo.NEEDS_IMPL,
	
	//>public boolean isSupported()
	isSupported : vjo.NEEDS_IMPL,
	
	__options : vjo.otype().defs({ //<public
		cookieProps : { //<public
			domain : null, //<public String?
			expires : null, //<public Object?
			path : null, //<public String?
			secure : null //<public boolean?	
		}
	}).endType()
})
.options({
	metatype:true
})
.endType();