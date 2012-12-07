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
 * A succession of values.
 * <p>
 * An ObjectRange can model a range of any value that implements a succ method 
 * (which links that value to its "successor").
 * <p>
 * Prototype provides such a method for Number and String, but you are (of course) 
 * welcome to implement useful semantics in your own objects, in order to enable 
 * ranges based on them.
 * <p>
 * ObjectRange mixes in Enumerable, which makes ranges very versatile. It takes 
 * care, however, to override the default code for include, to achieve better 
 * efficiency.
 * <p>
 * While ObjectRange does provide a constructor, the preferred way to obtain a 
 * range is to use the $R utility function, which is strictly equivalent (only 
 * way more concise to use).
 * <p>
 * See $R for more information.
 * <p>
 * 
 */
vjo.ctype('org.prototypejs.ObjectRange') //< public
//> needs(org.prototypejs.Enumerable)
.mixin('org.prototypejs.Enumerable')
.props({
	
})
.protos({
	/**
	 * <code>new(start, end[, exclusive = false])</code>
	 * <p>
	 * Creates a new ObjectRange.
	 * <p>
	 * The exclusive argument specifies whether end itself is a part of the range.
	 * 
	 */
	//> public constructs(Object start, Object end, boolean? inclusive)
	constructs: function() {},
	
	/**
	 * <code>ObjectRange#end ? ?</code>
	 * <p>
	 * The upper bounding value of the range.
	 *
	 */
	//> public Object
	end: null,
	
	/**
	 * <code>ObjectRange#start ? ?</code>
	 * <p>
	 * The lower bounding value of the range.
	 * 
	 */
	//> public Object
	start: null

// MrP - we get this from mixin(Enumerable)
//	/**
//	 * ObjectRange#include(value) ? Boolean
//	 * <p>
//	 * Determines whether the value is included in the range.
//	 * <p>
//	 * This assumes the values in the range have a valid strict weak ordering 
//	 * (have valid semantics for the < operator). While ObjectRange mixes in 
//	 * Enumerable, this method overrides the default version of Enumerable#include, 
//	 * and is much more efficient (it uses a maximum of two comparisons).
//	 * <p>
//	 * Examples
//	 * <p>
//	 * <code>
//	 * $R(1, 10).include(5);<br>
//	 * // -> true<br>
//	 * $R('a', 'h').include('x');<br>
//	 * // -> false<br>
//	 * $R(1, 10).include(10);<br>
//	 * // -> true<br>
//	 * $R(1, 10, true).include(10);<br>
//	 * // -> false<br>
//	 * </code>
//	 *    
//	 */
//	//> public boolean include(Object object)
//	include: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();