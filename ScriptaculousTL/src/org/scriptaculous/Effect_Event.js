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
vjo.ctype('org.scriptaculous.Effect_Event') //< public
//> needs(org.scriptaculous.Effect_Base)
.inherits('org.scriptaculous.Effect_Base')
.props({
	/**
	 * 
	 */
	//> public constructs(Object... args)
	constructs: function() {},
	
	/**
	 * 
	 */
	//> public void update(Object...)
	update: vjo.NEEDS_IMPL
})
.protos({
	
})
.options({
	metatype: true
})
.endType();