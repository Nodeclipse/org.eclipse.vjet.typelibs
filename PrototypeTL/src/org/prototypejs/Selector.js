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
 * @deprecated
 * Prototype.Selector
 *
 * A namespace that acts as a wrapper around
 * the choosen selector engine (Sizzle by default).
 *
**/
vjo.ctype('org.prototypejs.Selector') //< public
.props({
	
	/**
   *  Prototype.Selector.select(expression[, root = document]) -> [Element...]
   *  - expression (String): A CSS selector.
   *  - root (Element | document): A "scope" to search within. All results will
   *    be descendants of this node.
   *
   *  Searches `root` for elements that match the provided CSS selector and returns an
   *  array of extended [[Element]] objects.
  **/
	select: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] findChildElements(Element element, String... selectors)
	findChildElements: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element findElement(Element[] elements, String expression, int? index)
	//> public Element findElement(Element[] elements, int? index) 
	findElement: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] matchElements(Element[] elements, String cssSelector)
	matchElements: vjo.NEEDS_IMPL
	
})
.protos({
	/**
	 * 
	 */
	//> public constructs(String cssSelector)
	constructs: function() {},
	
	/**
	 * 
	 */
	//> public Element[] findElements({Element | Object} root) ; MrP should be {Element | document}
	findElements: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean match(String cssSelector) 
	match: vjo.NEEDS_IMPL
})
.endType() ;