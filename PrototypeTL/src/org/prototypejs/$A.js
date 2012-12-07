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
 * $A(iterable) ? Array
 * <p>
 * Accepts an array-like collection (anything with numeric indices) and returns 
 * its equivalent as an actual Array object. This method is a convenience alias 
 * of Array.from, but is the preferred way of casting to an Array.
 * <p>
 * The primary use of $A is to obtain an actual Array object based on anything 
 * that could pass as an array (e.g. the NodeList or HTMLCollection objects 
 * returned by numerous DOM methods, or the predefined arguments reference within 
 * your functions).
 * <p>
 * The reason you would want an actual Array is simple: Prototype extends Array 
 * to equip it with numerous extra methods, and also mixes in the Enumerable 
 * module, which brings in another boatload of nifty methods. Therefore, in 
 * Prototype, actual Arrays trump any other collection type you might otherwise get.
 * <p>
 * The conversion performed is rather simple: null, undefined and false become 
 * an empty array; any object featuring an explicit toArray method (as many 
 * Prototype objects do) has it invoked; otherwise, we assume the argument 
 * "looks like an array" (e.g. features a length property and the [] operator), 
 * and iterate over its components in the usual way.
 * <p>
 * When passed an array, $A makes a copy of that array and returns it.
 * <p>
 * Examples
 * The well-known DOM method document.getElementsByTagName() doesn't return an 
 * Array, but a NodeList object that implements the basic array "interface." 
 * Internet Explorer does not allow us to extend Enumerable onto NodeList.prototype, 
 * so instead we cast the returned NodeList to an Array:
 * <code>
 * var paras = $A(document.getElementsByTagName('p'));
 * paras.each(Element.hide);
 * $(paras.last()).show();
 * </code>
 * <p>
 * Notice we had to use each and Element.hide because $A doesn't perform DOM 
 * extensions, since the array could contain anything (not just DOM elements). 
 * To use the Element#hide instance method we first must make sure all the target 
 * elements are extended:
 * <code>
 * $A(document.getElementsByTagName('p')).map(Element.extend).invoke('hide');
 * <p>
 * Want to display your arguments easily? Array features a join method, but the 
 * arguments value that exists in all functions does not inherit from Array. So, 
 * the tough way, or the easy way?
 * <code>
 * // The hard way...
 * function showArgs() {
 *   alert(Array.prototype.join.call(arguments, ', '));
 * }
 * // The easy way...
 * function showArgs() {
 *   alert($A(arguments).join(', '));
 * }
 * </code>     
 */
//> public
vjo.ftype('org.prototypejs.$A') 
.props({
	/**
	 * 
	 */
	//> public Array _invoke_(Object? iterable)
	_invoke_: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();