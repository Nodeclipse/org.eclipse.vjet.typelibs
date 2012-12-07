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
vjo.mtype('org.scriptaculous.ext.StringExt') //< public

.props({
	/**
	 * 
	 */
	//> public HTMLDivElement
	__parseStyleElement: null
})
.protos({
	/** - from effect.js
	 * converts rgb() and #xxx to #xxxxxx format
	 * <p>
	 * returns self (or first argument) if not convertable
	 */
	//> public String parseColor(Object... args)
	parseColor: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object parseStyle()
	parseStyle: vjo.NEEDS_IMPL
	
})
.endType();