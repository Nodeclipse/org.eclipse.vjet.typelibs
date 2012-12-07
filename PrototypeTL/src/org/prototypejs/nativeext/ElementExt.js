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
// Extensions from Event.js (yes Event.js adds some extensions to Element) specifically for Element
vjo.mtype('org.prototypejs.nativeext.ElementExt') //< public
//> needs(org.prototypejs.Element_Layout)
//> needs(org.prototypejs.Element_Methods)
//> needs(org.prototypejs.Element_Offset)
.props({
	Layout: null,	//< public type::Element_Layout
	Methods: null,	//< public type::Element_Methods
	Offset: null,	//< public type::Element_Offset
	
	/**
	 * 
	 */
	//> public Event fire({String | Element} idOrElement, String eventName, Object? memo, boolean? bubble)
	fire: vjo.NEEDS_IMPL,

	/**
	 * 
	 */
	//> public Element observe({String | Element} idOrElement, String eventName, Function handler)
	observe: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public org.prototypejs.Event.Handler on({String | Element} idOrElement, String eventName, String? selector, Function? callback)
	on: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element stopObserving({String | Element} idOrElement, String? eventName, Function? handler)
	stopObserving: vjo.NEEDS_IMPL
})
.protos({
	
})
.endType();