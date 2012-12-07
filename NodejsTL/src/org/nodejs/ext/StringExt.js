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
vjo.mtype('org.nodejs.ext.StringExt')

.props({
	
})
.protos({
	/**
	 * Trims whitespace from both ends of the string
	 */
	//> public String trim()
	trim: vjo.NEEDS_IMPL,
	
	/**
	 * Trims whitespace from the right side of the string
	 */
	//> public String trimRight()
	trimRight: vjo.NEEDS_IMPL,
	
	/**
	 * Trims whitespace from the left side of the string
	 */
	//> public String trimLeft()
	trimLeft: vjo.NEEDS_IMPL
})
.endType();