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
 *  document.viewport
 *
 *  The `document.viewport` namespace contains methods that return information
 *  about the viewport &mdash; the rectangle that represents the portion of a web
 *  page within view. In other words, it's the browser window minus all chrome.
**/
vjo.ctype('org.prototypejs.nativeext.document_viewport') //< public final

.props({
  /**
   *  document.viewport.getDimensions() -> Object
   *
   *  Returns an object containing viewport dimensions in the form
   *  `{ width: Number, height: Number }`.
   *
   *  The _viewport_ is the subset of the browser window that a page occupies
   *  &mdash; the "usable" space in a browser window.
   *  
   *  ##### Example
   *  
   *      document.viewport.getDimensions();
   *      //-> { width: 776, height: 580 }
  **/
	//> public Object getDimensions()
	getDimensions: vjo.NEEDS_IMPL,

	/**
   *  document.viewport.getScrollOffsets() -> Array
   *
   *  Returns the viewport's horizontal and vertical scroll offsets.
   *
   *  Returns an array in the form of `[leftValue, topValue]`. Also accessible
   *  as properties: `{ left: leftValue, top: topValue }`.
   *
   *  ##### Examples
   *  
   *      document.viewport.getScrollOffsets();
   *      //-> { left: 0, top: 0 }
   *      
   *      window.scrollTo(0, 120);
   *      document.viewport.getScrollOffsets();
   *      //-> { left: 0, top: 120 }
  **/
	//> public Array getScrollOffsets()
	getScrollOffsets: vjo.NEEDS_IMPL,
	
	 /**
	   *  document.viewport.getWidth() -> Number
	   *
	   *  Returns the width of the viewport.
	   *
	   *  Equivalent to calling `document.viewport.getDimensions().width`.
	  **/
	//> public Number getWidth()
	getWidth: vjo.NEEDS_IMPL,
	
  /**
   *  document.viewport.getHeight() -> Number
   *
   *  Returns the height of the viewport.
   *
   *  Equivalent to `document.viewport.getDimensions().height`.
  **/
	//> public Number getHeight() 
	getHeight: vjo.NEEDS_IMPL
})
.protos({
	
})
.options({
	metatype: true
})
.endType();