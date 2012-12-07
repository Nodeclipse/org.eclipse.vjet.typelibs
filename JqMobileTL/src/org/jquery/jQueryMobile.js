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
vjo.ctype("org.jquery.jQueryMobile")
//<needs(org.jquery.jQuery)
.globals({
	mobile: undefined //<type::jQueryMobile
}, $)
.props({
	
	//PROPERTY
	activePage: null, //<Object
	path: null, //<Object
	
	//METHODS
	
	/**
	 * Programmatically change from one page to another. This method is used internally for transitions
	 * that occur as a result of clicking a link or submitting a form, when those features are enabled.
	 * 
	 * @Arguments
	 * to
	 *  - String, url to transition to ("about/us.html")
	 *  - jQuery object ($("#about"))
	 *  - Array specifying two page references [from,to] for transitioning from a known page.
	 *    From is otherwise assumed to be the current page in view (or $.mobile.activePage ).
	 *  - Object for sending form data. ({url: url, data: serialized form data, type: "get" or "post"}
	 * transition (examples: "pop", "slide"," "slideup", "slidedown", "fade", "flip", "none")
	 * reverse (default: false). True will cause a reverse-direction transition.
	 * changeHash (default: true). Update the hash to the to page's URL when page change is complete.
	 */
	 //> public void changePage({String|jQuery|Array|jQueryMobile._argtypes::data} to, String transition, boolean? reverse, boolean? changeHash)
	changePage:vjo.NEEDS_IMPL,
	
	/**
	 * When working with jQuery Mobile, jqmData should be used in place of jQuery core's data method.
	 */
	//> public int jqmData(Element elem)
	//> public Object jqmData(Element elem, String name)
	//> public Object jqmData(Element elem, String name,Object value)
	jqmData: vjo.NEEDS_IMPL,

	/**
	 * When working with jQuery Mobile, jqmRemoveData should be used in place of jQuery core's removeData method.
	 */
	//> public void jqmRemoveData(Element elem)
	//> public void jqmRemoveData(Element elem, String name)
	jqmRemoveData: vjo.NEEDS_IMPL,
	
	/**
	 * Test whether a particular CSS Media Query applies.
	 * If the browser supports that type or query, and it currently applies, the function will return true.
	 * If not, it'll return false.
	 */
	//> public boolean media(String query)
	media: vjo.NEEDS_IMPL,
	
	/**
	 * Show or hide the page loading message, which is configurable via $.mobile.loadingMessage.
	 * Argument done defaults to false, meaning loading has started. True will hide the loading message.
	 */
	//> public void pageLoading(boolean? done)
	pageLoading: vjo.NEEDS_IMPL,
	
	/**
	 * Scroll to a particular Y position without triggering scroll event listeners.
	 */
	//> public void silentScroll(int yPos)
	silentScroll: vjo.NEEDS_IMPL,
	
	/**
	 * Add width breakpoints to the min/max width classes that are added to the HTML element.
	 */
	//> public void addResolutionBreakpoints({int|int[]} values)
	addResolutionBreakpoints: vjo.NEEDS_IMPL,
	
	//utility type
	_argtypes: vjo.otype().defs({
		data: {
			url: null, //<String
			data: null, //<Object
			type: null //<String
		}
	}).endType()
})
.options({
	metatype: true
})
.endType();
