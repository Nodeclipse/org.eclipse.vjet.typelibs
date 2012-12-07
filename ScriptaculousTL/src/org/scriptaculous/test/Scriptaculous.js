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
vjo.ctype('org.scriptaculous.test.Scriptaculous') //< public

.globals({
	Test: null	//< type::Scriptaculous
})
.props({
	/**
	 * 
	 */
	Unit: vjo.ctype() 	 //< public
	.props({
		/**
		 * 
		 */
		//> public String inspect(Object)
		inspect: vjo.NEEDS_IMPL,
		
		Assertions: null,//< public type::org.scriptaculous.test.Assertions
		Logger: null,	 //< public type::org.scriptaculous.test.Logger
		Runner: null,	 //< public type::org.scriptaculous.test.Runner
		Testcase: null	 //< public type::org.scriptaculous.test.TestCase
	})
	.endType()
})
.protos({
	
})
.endType();