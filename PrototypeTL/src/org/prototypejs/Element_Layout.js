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
 * new Element.Layout(element[, preCompute = false])
 * <p>
 * element (Element) – The element to be measured.
 * preCompute (Boolean) – Whether to compute all values at once. Default is false.
 * <p>
 * Declare a new layout hash.
 * <p>
 * The preCompute argument determines whether measurements will be lazy-loaded 
 * or not. If you plan to use many different measurements, it's often more 
 * performant to pre-compute, as it minimizes the amount of overhead needed 
 * to measure. If you need only one or two measurements, it's probably not 
 * worth it.
 */
vjo.ctype('org.prototypejs.Element_Layout') //< public
.inherits('org.prototypejs.Hash')
.props({

    /**> public String[] ;
     *  Element.Layout.PROPERTIES = Array
     *  <p>
     *  A list of all measurable properties.
     *  <p>
     *  height width top left right bottom border-left border-right border-top 
     *  border-bottom padding-left padding-right padding-top padding-bottom 
     *  margin-top margin-bottom margin-left margin-right padding-box-width 
     *  padding-box-height border-box-width border-box-height margin-box-width 
     *  margin-box-height
    **/
    PROPERTIES: null,
    
    /**> public String[] ;
     *  Element.Layout.COMPOSITE_PROPERTIES = Array
     *  <p>
     *  A list of all composite properties. Composite properties don't map
     *  directly to CSS properties â€” they're combinations of other
     *  properties.
     *  <p>
     *  padding-box-width padding-box-height margin-box-width margin-box-height 
     *  border-box-width border-box-height
    **/
    COMPOSITE_PROPERTIES: null
})
.protos({	
	/**
     *  new Element.Layout(element[, preCompute = false])
     *  - element (Element): The element to be measured.
     *  - preCompute (Boolean): Whether to compute all values at once. Default
     *    is `false`.
     *  
     *  Declare a new layout hash.
     *  
     *  The `preCompute` argument determines whether measurements will be
     *  lazy-loaded or not. If you plan to use many different measurements,
     *  it's often more performant to pre-compute, as it minimizes the
     *  amount of overhead needed to measure. If you need only one or two
     *  measurements, it's probably not worth it.
    **/
	//> public constructs(Element element, boolean? preCompute)
	constructs: function() {},
	
	/**
	 * Element.Layout#get(property) ? Number
	 * <p>
	 * property (String) – One of the properties defined in 
	 * Element.Layout.PROPERTIES.
	 * <p>
	 * Retrieve the measurement specified by property. Will throw an error 
	 * if the property is invalid.
	 * <p>
	 * Caveats
	 * <p>
	 * Element.Layout can measure the dimensions of an element hidden with 
	 * CSS (display: none), but only if its parent element is visible.
	 */
	//> public Number get(String property)
	get: vjo.NEEDS_IMPL,
	
	/**
     *  Element.Layout#toCSS([keys...]) -> Object
     *  - keys (String): A space-separated list of keys to include.
     *
     *  Converts the layout hash to a plain object of CSS property/value
     *  pairs, optionally including only the given keys.
     *
     *  Keys can be passed into this method as individual arguments _or_
     *  separated by spaces within a string.
     *
     *      // Equivalent statements:
     *      someLayout.toCSS('top', 'bottom', 'left', 'right');
     *      someLayout.toCSS('top bottom left right');
     *  
     *  Useful for passing layout properties to [[Element.setStyle]].
    **/
	//> public Object toCSS(String... keys)
	toCSS: vjo.NEEDS_IMPL,
	
	/**
     *  Element.Layout#toHash([keys...]) -> Hash
     *  - keys (String): A space-separated list of keys to include.
     *  
     *  Converts the layout hash to an ordinary hash of key/value pairs,
     *  optionally including only the given keys.
     * 
     *  Keys can be passed into this method as individual arguments _or_
     *  separated by spaces within a string.
     *
     *      // Equivalent statements:
     *      someLayout.toHash('top', 'bottom', 'left', 'right');
     *      someLayout.toHash('top bottom left right');
    **/
	//> public Hash toHash(String... keys)
	toHash: vjo.NEEDS_IMPL,
	
	/**
     *  Element.Layout#toObject([keys...]) -> Object
     *  - keys (String): A space-separated list of keys to include.
     *  
     *  Converts the layout hash to a plain object of key/value pairs,
     *  optionally including only the given keys.
     * 
     *  Keys can be passed into this method as individual arguments _or_
     *  separated by spaces within a string.
     *  
     *      // Equivalent statements:
     *      someLayout.toObject('top', 'bottom', 'left', 'right');
     *      someLayout.toObject('top bottom left right');
    **/
	//> public Object toObject(String... keys)
	toObject: vjo.NEEDS_IMPL,
	
	//> public Object _set(Object property, Object value) ; from layout.js
	_set: vjo.NEEDS_IMPL,
	
	/**
	 * from layout.js - returns "#<Element.Layout>"
	 */
	//> public String inspect()
	inspect: vjo.NEEDS_IMPL
	
})
.endType()