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
 * This mixin is mixed into Element via Element.addMethods(Effect.Methods)
 * from effect.js
 */
vjo.mtype('org.scriptaculous.Effect_Methods') //< public

.props({
	
})
.protos({
	/**
	 * 
	 */
	//> public Element morph({String | Element} idOrElement, String style)
	morph: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element visualEffect({String | Element} idOrElement, String effect, Object options)
	visualEffect: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element highlight({String | Element} idOrElement, Object options)
	highlight: vjo.NEEDS_IMPL
})
.endType();