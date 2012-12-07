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
vjo.ctype('org.scriptaculous.Effect_Morph') //< public
//> needs(org.scriptaculous.Effect_Base)
.inherits('org.scriptaculous.Effect_Base')
.props({
	
})
.protos({
	/**
	 * 
	 */
	//> public constructs({String | Element} idOrElement)
	constructs: function() {},
	
	/**
	 * 
	 */
	//> public void setup()
	setup: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void update(Number position)
	update: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();