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
 * $R(start, end[, exclusive = false]) ? ObjectRange
 * <p>
 * Creates a new ObjectRange object. This method is a convenience wrapper around 
 * the ObjectRange constructor, but $R is the preferred alias.
 * <p>
 * ObjectRange instances represent a range of consecutive values, be they 
 * numerical, textual, or of another type that semantically supports value ranges. 
 * See the type's documentation for further details, and to discover how your 
 * own objects can support value ranges.
 * <p>
 * The $R function takes exactly the same arguments as the original constructor: 
 * the lower and upper bounds (value of the same, proper type), and whether the 
 * upper bound is exclusive or not. By default, the upper bound is inclusive.
 * <p>
 * Examples
 * <p>
 * <code>
 * $R(0, 10).include(10)
 * // -> true
 * $A($R(0, 5)).join(', ')
 * // -> '0, 1, 2, 3, 4, 5'
 * $A($R('aa', 'ah')).join(', ')
 * // -> 'aa, ab, ac, ad, ae, af, ag, ah'
 * $R(0, 10, true).include(10)
 * // -> false
 * $R(0, 10, true).each(function(value) {
 * // invoked 10 times for value = 0 to 9
 * });
 * </code>
 * <p>
 * Note that ObjectRange mixes in the Enumerable module: this makes it easy to 
 * convert a range to an Array (Enumerable provides the Enumerable#toArray method, 
 * which makes the $A conversion straightforward), or to iterate through values. 
 * (Note, however, that getting the bounds back will be more efficiently done 
 * using the ObjectRange#start and ObjectRange#end properties than calling the 
 * Enumerable#min and Enumerable#max methods).
 * <p>
 * Warning
 * <p>
 * Be careful with String ranges: as described in its String#succ method, it 
 * does not use alphabetical boundaries, but goes all the way through the 
 * character table:
 * <p>
 * <code>
 * $A($R('a', 'e'))
 * // -> ['a', 'b', 'c', 'd', 'e'], no surprise there
 * $A($R('ax', 'ba'))
 * // -> Ouch! Humongous array, starting as ['ax', 'ay', 'az', 'a{', 'a|', 'a}', 'a~'...]
 * <p>
 * See ObjectRange for more information.
 */
//> public
vjo.ftype('org.prototypejs.$R') 
//> needs(org.prototypejs.ObjectRange)
.props({
	/**
	 * 
	 */
	//> public ObjectRange _invoke_(Object start, Object end, boolean? exclusive)
	_invoke_: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();