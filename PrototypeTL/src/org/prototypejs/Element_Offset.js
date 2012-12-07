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
 * A representation of the top- and left-offsets of an element relative to another.
 * <p>
 * All methods that compute offsets return an instance of Element.Offset.
 */
vjo.ctype('org.prototypejs.Element_Offset') //< public
.props({
	
})
.protos({
	/**
	 * <code>
	 * new Element.Offset(left, top)
	 * </code>
	 * Instantiates an Element.Offset. You shouldn't need to call this 
	 * directly.
	 */
	//> public constructs(Number left, Number top)
	constructs: function() {},
	
	/**
     *  Element.Offset#inspect() -> String
     *  
     *  Returns a debug-friendly representation of the offset.
    **/
	//> public String inspect()
	inspect: vjo.NEEDS_IMPL,
	
	/**
     *  Element.Offset#relativeTo(offset) -> Element.Offset
     *  - offset (Element.Offset): Another offset to compare to.
     *  
     *  Returns a new [[Element.Offset]] with its origin at the given
     *  `offset`. Useful for determining an element's distance from another
     *  arbitrary element.
    **/
	//> public Element_Offset relativeTo(Element_Offset offset)
	relativeTo: vjo.NEEDS_IMPL,
	
	/**
     *  Element.Offset#toArray() -> Array
     *  
     *  Returns an array representation fo the offset in [x, y] format.
    **/
	//> public Array toArray()
	toArray: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String toString()
	toString: vjo.NEEDS_IMPL
})	
.endType()