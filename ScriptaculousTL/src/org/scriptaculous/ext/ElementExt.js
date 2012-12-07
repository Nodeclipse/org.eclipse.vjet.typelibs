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
vjo.mtype('org.scriptaculous.ext.ElementExt') //< public

.props({
	// vvvvvvvvvvvvv Extensions from effects.js vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public String collectTextNodes({String | Element} idOrElement)
	collectTextNodes: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String collectTextNodesIgnoreClass({String | Element} idOrElement, String className)
	collectTextNodesIngoreClass: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element setContentZoom({String | Element} idOrElement, Number percent)
	setContentZoom: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String getInlineOpacity({String | Element} idOrElement)
	getInlineOpacity: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void forceRendering({String | Element} idOrElement) 
	forceRendering: vjo.NEEDS_IMPL,
	
	/**
	 * 'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
	 * 'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
	 * 'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
	 * 'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
	 * 'fontSize fontWeight height left letterSpacing lineHeight ' +
	 * 'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
	 * 'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
	 * 'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
	 * 'right textIndent top width wordSpacing zIndex'
	 */
	//> public String[]
	CSS_PROPERTIES: null,
	
	/**
	 * Value is: /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
	 */
	//> public RegExp
	CSS_LENGTH: null,
	
	// ^^^^^^^^^^^ End Extensions from effects.js ^^^^^^^^^^^^^
	
	// vvvvvvvvvvvvv Extensions from dragdrop.js vvvvvvvvvvvvvvv
	
	/**
	 * 
	 */
	//> public boolean isParent(Element child, Element element)
	isParent: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] findChildren(Element element, boolean only, boolean recursive, String tagName)
	findChildren: vjo.NEEDS_IMPL,
	
	/**
	 * return element['offset' + ((type=='vertical' || type=='height') ? 'Height' : 'Width')];
	 */
	//> public String offsetSize(Element element, String type)
	offsetSize: vjo.NEEDS_IMPL
	
	// ^^^^^^^^^^^ End Extensions from dragdrop.js ^^^^^^^^^^^^^
})
.protos({
	
	
})
.endType();