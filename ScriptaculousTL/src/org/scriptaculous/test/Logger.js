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
vjo.ctype('org.scriptaculous.test.Logger') //< public

.props({
	/**
	 * 
	 */
	//> public void start(String testName)
	start: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void finish(String status, String summary)
	finish: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void message(String message)
	message: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void summary(String summary)
	summary: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void addLinksToResults()
	addLinksToResults: vjo.NEEDS_IMPL
})
.protos({
	/**
	 * 
	 */
	//> public constructs(Object log)
	constructs: function() {}
})
.options({
	metatype: true
})
.endType();