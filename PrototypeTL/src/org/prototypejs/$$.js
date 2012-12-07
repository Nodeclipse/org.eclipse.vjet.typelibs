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
 * $$(cssRule...) ? [Element…]
 * <p>
 * Takes an arbitrary number of CSS selectors (strings) and returns a 
 * document-order array of extended DOM elements that match any of them.
 * <p>
 * Sometimes the usual tools from your DOM arsenal -- document.getElementById 
 * encapsulated by $, getElementsByTagName and even Prototype's very own 
 * getElementsByClassName extensions -- just aren't enough to quickly find 
 * elements or collections of elements. If you know the DOM tree structure, you 
 * can simply resort to CSS selectors to get the job done.
 * <p>
 * Quick examples
 * <p>
 * <code>
 * $$('div');
 * // -> all DIVs in the document. Same as document.getElementsByTagName('div').
 * // Nice addition, the elements you're getting back are already extended!
 * $$('#contents');
 * // -> same as $('contents'), only it returns an array anyway (even though IDs must
 * // be unique within a document).
 * $$('li.faux');
 * // -> all LI elements with class 'faux'
 * </code>
 * <p>
 * The $$ function searches the entire document. For selector queries on more 
 * specific sections of a document, use Element.select.
 * <p>
 * Supported CSS syntax
 * <p>
 * The $$ function does not rely on the browser's internal CSS parsing capabilities 
 * (otherwise, we'd be in cross-browser trouble...), and therefore offers a 
 * consistent set of selectors across all supported browsers.
 * <p>
 * Supported in v1.5.0
 * <ul>
 * <li>Type selector: tag names, as in div.</li>
 * <li>Descendant selector: the space(s) between other selectors, as in #a li.</li>
 * <li>Attribute selectors: the full CSS 2.1 set of [attr], [attr=value], 
 * [attr~=value] and [attr|=value]. It also supports [attr!=value]. If the value 
 * you're matching against includes a space, be sure to enclose the value in quotation 
 * marks ([title="Hello World!"]).</li>
 * <li>Class selector: CSS class names, as in .highlighted or .example.wrong.</li>
 * <li>ID selector: as in #item1.</li>
 * </ul>
 * <p>
 * Supported from v1.5.1
 * Virtually all of CSS3 is supported, with the exception of pseudo-elements 
 * (like ::first-letter) and some pseudo-classes (like :hover). Some examples of 
 * new selectors that can be used in 1.5.1:
 * <p>
 * <ul>
 * <li>Child selector: selects immediate descendants, as in #a > li.</li>
 * <li>Attribute selectors: all attribute operators are supported, including ~= 
 * (matches part of a space-delimited attribute value, like rel or class); ^= 
 * (matches the beginning of a value); $= (matches the end of a value); and *= 
 * (matches any part of the value).</li>
 * <li>The :not pseudo-class, as in #a *:not(li) (matches all descendants of #a that aren't LIs).</li>
 * <li>All the :nth, :first, and :last pseudo-classes. Examples include 
 * tr:nth-child(even) (all even table rows), li:first-child (the first item in 
 * any list), or p:nth-last-of-type(3) (the third-to-last paragraph on the page).</li>
 * <li>The :empty pseudo-class (for selecting elements without children or text content).</li>
 * <li>The :enabled, :disabled, and :checked pseudo-classes (for use with form controls).</li>
 * </ul>
 * <p>
 * Examples
 * <code>
 * $$('#contents a[rel]');
 * // -> all links inside the element of ID "contents" with a rel attribute
 * $$('a[href="#"]');
 * // -> all links with a href attribute of value "#" (eyeew!)
 * $$('#navbar a', '#sidebar a');
 * // -> all links within the elements of ID "navbar" or "sidebar"
 * </code>
 * <p>
 * With version 1.5.1 and above you can do various types of advanced selectors:
 * <p>
 * <code>
 * $$('a:not([rel~=nofollow])');
 * // -> all links, excluding those whose rel attribute contains the word "nofollow"
 * $$('table tbody > tr:nth-child(even)');
 * // -> all even rows within all table bodies
 * $$('div:empty');
 * // -> all DIVs without content (i.e., whitespace-only)
 */
 //> public
vjo.ftype('org.prototypejs.$$')
.props({
	/**
	 * 
	 */
	//> public Element[] _invoke_(String... cssSelectors)
	_invoke_: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();