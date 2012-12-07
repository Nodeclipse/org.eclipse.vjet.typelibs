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
 * These are extensions to Element that come from the source file dom/layout.js
 */
vjo.mtype('org.prototypejs.Layout_ElementExt') //< public

.props({
	/**
	 * Element.absolutize(element) ? Element
	 * <p>Turns element into an absolutely-positioned element without changing 
	 * its position in the page layout.
	 */
	//> public Element absolutize({String | Element} idOrElement)
	absolutize: vjo.NEEDS_IMPL,	
	
	/**
	 * Element.cumulativeOffset(element) ? Element.Offset
	 * <p>
	 * Returns the offsets of element from the top left corner of the document.
	 */
	//> public Element.Offset cumulativeOffset(Element element)
	cumulativeOffset: vjo.NEEDS_IMPL,
	
	/**
	 * Element.cumulativeScrollOffset(element) ? Element.Offset
	 * <p>
	 * Calculates the cumulative scroll offset of an element in nested scrolling 
	 * containers.
	 */
	//> public Element.Offset cumulativeScroll(Element element)
	cumulativeScrollOffset: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object getDimensions({String | Element} idOrElement)
	getDimensions: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element.Layout getLayout({String | Element} idOrElement, boolean? preCompute)
	getLayout: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element getOffsetParent({String | Element} idOrElement)
	getOffsetParent: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number measure({String | Element} idOrElement, String property)
	measure: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element.Offset positionedOffset({String | Element} idOrElement)
	positionedOffset: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element relativize({String | Element} idOrElement)
	relativize: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element.Offset viewportOffset({String | Element} idOrElement)
	viewportOffset: vjo.NEEDS_IMPL
})
.protos({
	/**
	 * 
	 */
	//> public Element absolutize()
	absolutize: vjo.NEEDS_IMPL,	
		
	/**
	 * 
	 */
	//> public Element cumulativeOffset()
	cumulativeOffset: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element cumulativeScrollOffset()
	cumulativeScrollOffset: vjo.NEEDS_IMPL,
		
	/**
	 * 
	 */
	//> public Object getDimensions()
	getDimensions: vjo.NEEDS_IMPL,	
		
	/**
	 * 
	 */
	//> public Element.Layout getLayout(boolean? preCompute)
	getLayout: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element getOffsetParent()
	getOffsetParent: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number measure(String property)
	measure: vjo.NEEDS_IMPL,
		
	/**
	 * 
	 */
	//> public Element.Offset positionedOffset()
	positionedOffset: vjo.NEEDS_IMPL,
			
	/**
	 * 
	 */
	//> public Element relativize()
	relativize: vjo.NEEDS_IMPL,
		
	/**
	 * 
	 */
	//> public Element.Offset viewportOffset()
	viewportOffset: vjo.NEEDS_IMPL
		
})
.endType();