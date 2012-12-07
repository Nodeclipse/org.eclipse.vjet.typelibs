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
 *<code>
 *$(id) ? Element
 *$(id...) ? [Element…]
 *</code>
 *id (String | Element) – A DOM node or a string that references a node's ID.
 *<p>
 *If provided with a string, returns the element in the document with matching 
 *ID; otherwise returns the passed element.
 *<p>
 *Takes in an arbitrary number of arguments. Returns one Element if given one 
 *argument; otherwise returns an Array of Elements.
 *<p>
 *All elements returned by the function are "extended" with Element instance methods.
 *<p>
 *More Information
 *The $ function is the cornerstone of Prototype. Not only does it provide a 
 *handy alias for document.getElementById, it also lets you pass indifferently 
 *IDs (strings) or DOM node references to your functions:
 *<p>
 *<code>
 *function foo(element) {
 *  element = $(element);
 *  //  rest of the function...
 *}
 *</code>
 *<p>
 *Code written this way is flexible — you can pass it the ID of the element or 
 *the element itself without any type sniffing.
 *<p>
 *Invoking it with only one argument returns the Element, while invoking it with 
 *multiple arguments returns an Array of Elements (and this works recursively: 
 *if you're twisted, you could pass it an array containing some arrays, and so 
 *forth). As this is dependent on getElementById, W3C specs apply: nonexistent 
 *IDs will yield null and IDs present multiple times in the DOM will yield 
 *erratic results. If you're assigning the same ID to multiple elements, you're 
 *doing it wrong!
 *<p>
 *The function also extends every returned element with Element.extend so you can 
 *use Prototype's DOM extensions on it. In the following code, the two lines are 
 *equivalent. However, the second one feels significantly more object-oriented:
 *<p>
 *<code>
 * // Note quite OOP-like...
 * Element.hide('itemId');
 * // A cleaner feel, thanks to guaranted extension
 * $('itemId').hide();
 * </code>
 * <p>
 * However, when using iterators, leveraging the $ function makes for more elegant, 
 * more concise, and also more efficient code:
 * <p>
 * <code>
 * ['item1', 'item2', 'item3'].each(Element.hide);
 * // The better way:
 * $('item1', 'item2', 'item3').invoke('hide');
 * </code>
 */
//> public
vjo.ftype('org.prototypejs.$') 
.props({
	/**
	 * 
	 */
	//> public Element _invoke_(String? element)
	//> public Element[] _invoke_(String elem1, String elem2, String... elems)
	//> public Element _invoke_(Element element)
	//> public Element[] _invoke_(Element elem1, Element elem2, Element... elems)
	_invoke_: function() { return null ; }
})
.options({
	metatype: true
})
.endType();