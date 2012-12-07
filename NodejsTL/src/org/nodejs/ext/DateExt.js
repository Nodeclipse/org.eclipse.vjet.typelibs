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
vjo.mtype('org.nodejs.ext.DateExt')
.props({
	// now() is already supported
})
.protos({
	/**
	 * 
	 */
	//> public String toISOString()
	toISOString: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();