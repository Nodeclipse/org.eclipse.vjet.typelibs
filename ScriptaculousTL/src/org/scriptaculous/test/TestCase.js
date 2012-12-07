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
vjo.ctype('org.scriptaculous.test.TestCase') //< public

.props({
	
})
.protos({
	/**
	 * 
	 */
	//> public constructs(String name, Object test, Function? setup, Function? teardown)
	constructs: function() {},
	
	/**
	 * 
	 */
	//> public void wait(Number time, Object nextPart)
	wait: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void run()
	run: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();