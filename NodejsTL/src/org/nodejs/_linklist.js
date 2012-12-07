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
/**
 * 
 */
//> public 
vjo.ctype('org.nodejs._linklist')

.props({
	
})
.protos({
	/**
	 * 
	 */
	//> public void init(Object list)
	init: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object peek(Object list)
	peek: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object shift(Object list)
	shift: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void remove(Object item)
	remove: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void append(Object list, Object item)
	append: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void isEmpty(Object list)
	isEmpty: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();