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
vjo.ctype('org.json.JSON') //< public
.globals({
	JSON : undefined //<<type::JSON
})
.props({
	//> public String parse(String text, JSON.objects::reviver? reviver)
	parse:vjo.NEEDS_IMPL,
	
	//> private
	objects: vjo.otype()
	.defs({
		//> public Object fn(String key, Object value)
		reviver: vjo.NEEDS_IMPL,
		//> public Object fn(String key, Object value)
		replacer: vjo.NEEDS_IMPL
	}).endType(),
	
	//> public String stringify(Object value, JSON.objects::replacer? replacer, String? space)
	stringify:vjo.NEEDS_IMPL

})
.options({
	metatype:true
})
.endType();