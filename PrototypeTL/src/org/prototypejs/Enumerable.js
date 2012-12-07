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
 * Enumerable provides a large set of useful methods for enumerations — objects 
 * that act as collections of values. It is a cornerstone of Prototype.
 * <p>
 * Enumerable is a mixin: a set of methods intended not for standaone use, but 
 * for incorporation into other objects.
 * <p>
 * Prototype mixes Enumerable into several classes. The most visible cases are 
 * Array and Hash, but you'll find it in less obvious spots as well, such as in 
 * ObjectRange and various DOM- or Ajax-related objects.
 * <p>
 * The context parameter
 * <p>
 * Every method of Enumerable that takes an iterator also takes the "context object" 
 * as the next (optional) parameter. The context object is what the iterator will 
 * be bound to — what the keyword this will refer to inside the iterator.
 * <p>
 * <code>
 * var myObject = {};<br>
 * &nbsp;['foo', 'bar', 'baz'].each(function(name, index) {<br>
 * &nbsp;&nbsp;this[name] = index;<br>
 * }, myObject); // we have specified the context<br>
 * &nbsp;myObject;<br>
 * // -> { foo: 0, bar: 1, baz: 2}<br>
 * </code>
 * <p>
 * If there is no context argument, the iterator function will execute in the 
 * scope from which the Enumerable method itself was called.
 * <p>
 * Mixing Enumerable into your own objects
 * So, let's say you've created your very own collection-like object (say, some 
 * sort of Set, or perhaps something that dynamically fetches data ranges from 
 * the server side, lazy-loading style). You want to be able to mix Enumerable 
 * in (and we commend you for it). How do you go about this?
 * <p>
 * The Enumerable module basically makes only one requirement on your object: 
 * it must provide a method named _each (note the leading underscore) that will 
 * accept a function as its unique argument, and will contain the actual 
 * "raw iteration" algorithm, invoking its argument with each element in turn.
 * <p>
 * As detailed in the documentation for Enumerable#each, Enumerable provides all 
 * the extra layers (handling iteration short-circuits, passing numeric indices, 
 * etc.). You just need to implement the actual iteration, as fits your internal 
 * structure.
 * <p>
 * If you're still confused, just have a look at the Prototype source code for 
 * Array, Hash, or ObjectRange. They all begin with their own _each method, which 
 * should help you grasp the idea.
 * <p>
 * Once you're done with this, you just need to mix Enumerable in, which you'll 
 * usually do before defining your methods, so as to make sure whatever overrides 
 * you provide for Enumerable methods will indeed prevail. In short, your code 
 * will probably end up looking like this:
 * <p>
 * <code>
 * var YourObject = Class.create(Enumerable, {<br>
 * &nbsp;initialize: function() { // with whatever constructor arguments 
 * you need<br>
 * &nbsp;&nbsp;// Your construction code<br>
 * &nbsp;},<br>
 * &nbsp;&nbsp;_each: function(iterator) {<br>
 * &nbsp;&nbsp;&nbsp;// Your iteration code, invoking iterator at every turn<br>
 * &nbsp;},<br>
 * &nbsp;&nbsp;// Your other methods here, including Enumerable overrides<br>
 * });<br>
 * </code>
 * <p>
 * Then, obviously, your object can be used like this:
 * <p>
 * <code>
 * var obj = new YourObject();<br>
 * // Populate the collection somehow<br>
 * obj.pluck('somePropName');<br>
 * obj.invoke('someMethodName');<br>
 * obj.size();<br>
 * // etc.
 * </code>
 * 
 */
vjo.mtype('org.prototypejs.Enumerable') //< public
// MrP - It looks like Enumerable is extended by Ajax.Responders in responders.js
// How do we model this.  Ajax.Responders is interacted with concretely and Enumerable
// is a mixin.  This is one of those cases where allowing us to mixin another type
// which is not mixin.  Also, mixin itself can't be mixed into anyways...
.props({
	
})
.protos({
	/**
	 * <code>Enumerable#all([iterator = Prototype.K[, context]]) ? Boolean</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – An optional function to use to evaluate each element 
	 * in the enumeration; the function should return the value to test. If this 
	 * is not provided, the element itself is tested.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Determines whether all the elements are "truthy" (boolean-equivalent to 
	 * true), either directly or through computation by the provided iterator. 
	 * Stops on the first falsy element found (e.g., the first element that is 
	 * boolean-equivalent to false, such as undefined, 0, or indeed false);
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * [].all();<br>
	 * // -> true (empty arrays have no elements that could be falsy)<br>
	 * &nbsp;$R(1, 5).all();<br>
	 * // -> true (all values in [1..5] are truthy)<br>
	 * &nbsp;[0, 1, 2].all();<br>
	 * // -> false (with only one loop cycle: 0 is falsy)<br>
	 * &nbsp;[9, 10, 15].all(function(n) { return n >= 10; });<br>
	 * // -> false (the iterator returns false on 9)
	 * </code>
	 * <p>
	 * Aliased as: Enumerable#every
	 *    
	 */
	//> public boolean all(Function? iterator, Object? context)
	all: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#any([iterator = Prototype.K[, context]]) ? Boolean</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – An optional function to use to evaluate each 
	 * element in the enumeration; the function should return the value to test. 
	 * If this is not provided, the element itself is tested.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
     * </ul>
     * <p>
     * Determines whether at least one element is truthy (boolean-equivalent to 
     * true), either directly or through computation by the provided iterator.
     * <p>
     * Examples
     * <p>
     * <code>
     * [].any();<br>
     * // -> false (empty arrays have no elements that could be truthy)<br>
     * &nbsp;$R(0, 2).any();<br>
     * // -> true (on the second loop, 1 is truthy)<br>
     * &nbsp;[2, 4, 6, 8, 10].any(function(n) { return n > 5; });<br>
     * // -> true (the iterator will return true on 6)<br>
     * </code>
     * <p>
     * Aliased as: Enumerable#some
     *   
	 */
	//> public boolean any(Function? iterator, Object? context)
	any: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#collect([iterator = Prototype.K[, context]]) ? Array</code>
	 * <p>
	 * <ul>
     * <li>iterator (Function) – The iterator function to apply to each element 
     * in the enumeration.</li>
     * <li>context (Object) – An optional object to use as this within calls to 
     * the iterator.</li>
     * </ul>
     * <p>
     * Returns the result of applying iterator to each element. If no iterator 
     * is provided, the elements are simply copied to the returned array.
     * <p>
     * Examples
     * <p>
     * <code>
     * ['Hitch', "Hiker's", 'Guide', 'to', 'the', 'Galaxy'].collect(function(s) {<br>
     * &nbsp;return s.charAt(0).toUpperCase();<br>
     * });<br>
     * // -> ['H', 'H', 'G', 'T', 'T', 'G']<br>
     * &nbsp;$R(1,5).collect(function(n) {<br>
     * &nbsp;&nbsp;return n * n;<br>
     * });<br>
     * // -> [1, 4, 9, 16, 25]
     * </code>
     * <p>
     * Aliased as: Enumerable#map
     * 
	 */
	//> public Array collect(Function? iterator, Object? context)
	collect: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#detect(iterator[, context]) ? firstElement | undefined</code>
	 * <p>
	 * <ul>
     * <li>iterator (Function) – The iterator function to apply to each element 
     * in the enumeration.</li>
     * <li>context (Object) – An optional object to use as this within calls to 
     * the iterator.</li>
     * </ul>
     * <p>
     * Returns the first element for which the iterator returns a truthy value. 
     * Aliased by the Enumerable#find method.
     * <p>
     * Example
     * <p>
     * <code>
     * [1, 7, -2, -4, 5].detect(function(n) { return n < 0; });<br>
     * // -> -2<br>
     * </code>
     * <p>
     * Aliased as: Enumerable#find
     * 
	 */
	//> public Element detect(Function iterator, Object? context)
	detect: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#each(iterator[, context]) ? Enumerable</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – A Function that expects an item in the collection 
	 * as the first argument and a numerical index as the second.</li>
	 * <li>context (Object) – The scope in which to call iterator. Affects what 
	 * the keyword this means inside iterator.
	 * </ul>
	 * <p>
	 * Calls iterator for each item in the collection.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * ['one', 'two', 'three'].each(alert);<br>
	 * // Alerts "one", then alerts "two", then alerts "three"<br>
	 * </code>
	 * <p>
	 * Built-In Variants
	 * <p>
	 * Most of the common use cases for each are already available pre-coded as 
	 * other methods on Enumerable. Whether you want to find the first matching 
	 * item in an enumeration, or transform it, or determine whether it has any 
	 * (or all) values matching a particular condition, Enumerable has a method 
	 * to do that for you.
	 * 
	 */
	//> public Enumerable each(Function iterator, Object context)
	each: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#eachSlice(number[, iterator = Prototype.K[, context]]) ? Enumerable</code>
	 * <p>
	 * <ul>
	 * <li>number (Number) – The number of items to include in each slice.</li>
	 * <li>iterator (Function) – An optional function to use to transform each 
	 * element before it's included in the slice; if this is not provided, the 
	 * element itself is included.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Groups items into chunks of the given size. The final "slice" may have 
	 * fewer than number items; it won't "pad" the last group with empty values. 
	 * For that behavior, use Enumerable#inGroupsOf.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var students = [<br>
	 * &nbsp;{ name: 'Sunny', age: 20 },<br>
	 * &nbsp;{ name: 'Audrey', age: 21 },<br>
	 * &nbsp;{ name: 'Matt', age: 20 },<br>
	 * &nbsp;{ name: 'Amelie', age: 26 },<br>
	 * &nbsp;{ name: 'Will', age: 21 }<br>
	 * &nbsp;];<br>
	 * &nbsp;students.eachSlice(3, function(student) {<br>
	 * &nbsp;&nbsp;return student.name;<br>
	 * });<br>
	 * // -> [['Sunny', 'Audrey', 'Matt'], ['Amelie', 'Will']]
	 * </code>
	 *              
	 */
	//> public Enumerable eachSlice(Number slice, Function? iterator, Object? context)
	eachSlice: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#entries() ? Array</code>
	 * <p>
	 * Alias of: Enumerable#toArray
	 * 
	 */
	//> public Array entries()
	entries: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#every([iterator = Prototype.K[, context]]) ? Boolean</code>
	 * <p>
	 * Alias of: Enumerable#all
	 * 
	 */
	//> public boolean every(Function? iterator, Object? context)
	every: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#filter(iterator[, context]) ? Array</code>
	 * <p>
	 * Alias of: Enumerable#findAll
	 * 
	 */
	//> public Array filter(Function iterator, Object? context)
	filter: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#find(iterator[, context]) ? firstElement | undefined</code>
	 * <p>
	 * Alias of: Enumerable#detect
	 * 
	 */
	//> public Element find(Function iterator, Object? context)
	find: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#findAll(iterator[, context]) ? Array</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – An iterator function to use to test the elements.</li>
	 * <li>context (Object) – An optional object to use as this within calls to the iterator.</li>
	 * </ul>
	 * <p>
	 * Returns all the elements for which the iterator returned a truthy value. 
	 * For the opposite operation, see Enumerable#reject.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * [1, 'two', 3, 'four', 5].findAll(Object.isString);<br>
	 * // -> ['two', 'four']<br>
	 * </code>
	 * <p>
	 * Aliased as: Enumerable#select, Enumerable#filter
	 * 
	 */
	//> public Array findAll(Function iterator, Object? context)
	findAll: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#grep(filter[, iterator = Prototype.K[, context]]) ? Array</code>
	 * <p>
	 * <ul>
	 * <li>filter (RegExp | String | Object) – The filter to apply to elements. 
	 * This can be a RegExp instance, a regular expression String, or any object 
	 * with a match function.</li>
	 * <li>iterator (Function) – An optional function to apply to selected elements 
	 * before including them in the result.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Returns an array containing all of the elements for which the given filter 
	 * returns true (or a truthy value). If an iterator is provided, it is used 
	 * to produce the returned value for each selected element; this is done after 
	 * the element has been selected by the filter.
	 * <p>
	 * If the given filter is a String, it is converted into a RegExp object. To 
	 * select elements, each element is passed into the filter's match function, 
	 * which should return a truthy value to select the element or a falsy value 
	 * not to. Note that the RegExp match function will convert elements to Strings 
	 * to perform matching.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * // Get all strings containing a repeated letter<br>
	 * ['hello', 'world', 'this', 'is', 'cool'].grep(/(.)\1/);<br>
	 * // -> ['hello', 'cool']<br>
	 * &nbsp;// Get all numbers ending with 0 or 5 and subtract 1 from them<br>
	 * $R(1, 30).grep(/[05]$/, function(n) { return n - 1; });<br>
	 * // -> [4, 9, 14, 19, 24, 29]
	 * </code>
	 *   
	 */
	//> public Array grep({String | RegExp} filter, Function? iterator, Object? context)
	grep: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#include(object) ? Boolean</code>
	 * <p>
	 * <ul>
	 * <li>object (?) – The object to look for.</li>
	 * </ul>
	 * <p>
	 * Determines whether a given object is in the enumerable or not, based on 
	 * the == comparison operator (equality with implicit type conversion).
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * $R(1, 15).include(10);<br>
	 * // -> true<br>
	 * &nbsp;['hello', 'world'].include('HELLO');<br>
	 * // -> false ('hello' != 'HELLO')<br>
	 * &nbsp;[1, 2, '3', '4', '5'].include(3);<br>
	 * &nbsp;// -> true ('3' == 3)
	 * </code>
	 * <p>
	 * Aliased as: Enumerable#member
	 *  
	 */
	//> public boolean include(Object object)
	include: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#inGroupsOf(number[, fillWith = null]) ? [group…]</code>
	 * <p>
	 * <ul>
	 * <li>number (Number) – The number of items to include in each group.</li>
	 * <li>fillWith (Object) – An optional filler to use if the last group needs 
	 * any; defaults to null.</li>
	 * </ul>
	 * <p>
	 * Like Enumerable#eachSlice, but pads out the last chunk with the specified 
	 * value if necessary and doesn't support the iterator function.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * var students = [<br>
	 * &nbsp;&nbsp;{ name: 'Sunny',  age: 20 },<br>
	 * &nbsp;&nbsp;{ name: 'Audrey', age: 21 },<br>
	 * &nbsp;&nbsp;{ name: 'Matt',   age: 20 },<br>
	 * &nbsp;&nbsp;{ name: 'Amelie', age: 26 },<br>
	 * &nbsp;&nbsp;{ name: 'Will',   age: 21 }<br>
	 * ];<br>
	 * &nbsp;students.inGroupsOf(2, { name: '', age: 0 });<br>
	 * // -> [<br>
	 * //      [{ name: 'Sunny', age: 20 }, { name: 'Audrey', age: 21 }],<br>
	 * //      [{ name: 'Matt', age: 20 },  { name: 'Amelie', age: 26 }],<br>
	 * //      [{ name: 'Will', age: 21 },  { name: '', age: 0 }]<br>
	 * //    ]
	 * </code>
	 * 
	 */
	//> public Object inGroupsOf(Number numOfItemsToIncludeInEachGroup, Object? fillWith)
	inGroupsOf: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#inject(accumulator, iterator[, context]) ? accumulatedValue</code>
	 * <p>
	 * <ul>
	 * <li>accumulator (?) – The initial value to which the iterator adds.</li>
	 * <li>iterator (Function) – An iterator function used to build the accumulated 
	 * result.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Incrementally builds a result value based on the successive results of the 
	 * iterator. This can be used for array construction, numerical sums/averages, etc.
	 * <p>
	 * The iterator function is called once for each element in the enumeration, 
	 * receiving the current value of the accumulator as its first argument, the 
	 * element as its second argument, and the element's index as its third. It 
	 * returns the new value for the accumulator.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * $R(1,10).inject(0, function(acc, n) { return acc + n; });<br>
	 * // -> 55 (sum of 1 to 10)<br>
	 * &nbsp;['a', 'b', 'c', 'd', 'e'].inject([], function(string, value, index) {<br>
	 * &nbsp;&nbsp;if (index % 2 === 0) { // even numbers<br>
	 * &nbsp;&nbsp;&nbsp;string += value;<br>
	 * &nbsp;&nbsp;}<br>
	 * &nbsp;&nbsp;return string;<br>
	 * });<br>
	 * // -> 'ace'
	 * </code>
	 *            
	 */
	//> public Object inject(Object accumlator, Function iterator, Object? context)
	inject: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#inspect() ? String</code>
	 * <p>
	 * Returns the debug-oriented string representation of the object.
	 * 
	 */
	//> public String inspect()
	inspect: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#invoke(methodName[, arg...]) ? Array</code>
	 * <p>
	 * <ul>
	 * <li>methodName (String) – The name of the method to invoke.</li>
	 * <li>args (?) – Optional arguments to pass to the method.</li>
	 * </ul>
	 * <p>
	 * Invokes the same method, with the same arguments, for all items in a 
	 * collection. Returns an array of the results of the method calls.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * ['hello', 'world'].invoke('toUpperCase');<br>
	 * // -> ['HELLO', 'WORLD']<br>
	 * &nbsp;['hello', 'world'].invoke('substring', 0, 3);<br>
	 * // -> ['hel', 'wor']<br>
	 * &nbsp;$$('input').invoke('stopObserving', 'change');<br>
	 * // -> Stops observing the 'change' event on all input elements,<br>
	 * // returns an array of the element references.
	 * </code>
	 *   
	 */
	//> public Array invoke(String methodName, Object... args)
	invoke: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#map([iterator = Prototype.K[, context]]) ? Array</code>
	 * <p>
	 * Alias of: Enumerable#collect
	 */
	//> public Array map(Function? iterator, Object? context)
	map: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#max([iterator = Prototype.K[, context]]) ? maxValue</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – An optional function to use to evaluate each 
	 * element in the enumeration; the function should return the value to test. 
	 * If this is not provided, the element itself is tested.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Returns the maximum element (or element-based iterator result), or 
	 * undefined if the enumeration is empty. Elements are either compared directly, 
	 * or by first calling iterator and comparing returned values. If multiple 
	 * "max" elements (or results) are equivalent, the one closest to the end of 
	 * the enumeration is returned.
	 * <p>
	 * If provided, iterator is called with two arguments: The element being 
	 * evaluated, and its index in the enumeration; it should return the value 
	 * max should consider (and potentially return).
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * ['c', 'b', 'a'].max();<br>
	 * // -> 'c'<br>
	 * &nbsp;[1, 3, '3', 2].max();<br>
	 * // -> '3' (because both 3 and '3' are "max", and '3' was later)<br>
	 * &nbsp;['zero', 'one', 'two'].max(function(item) { return item.length; });<br>
	 * // -> 4
	 * </code>
	 *   
	 */
	//> public Object max(Function? iterator, Object? context)
	max: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#member(object) ? Boolean</code>
	 * <p>
	 * Alias of: Enumerable#include
	 * 
	 */
	//> public boolean member(Object object)
	member: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#min([iterator = Prototype.K[, context]]) ? minValue</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – An optional function to use to evaluate each 
	 * element in the enumeration; the function should return the value to test. 
	 * If this is not provided, the element itself is tested.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Returns the minimum element (or element-based iterator result), or 
	 * undefined if the enumeration is empty. Elements are either compared 
	 * directly, or by first calling iterator and comparing returned values. If 
	 * multiple "min" elements (or results) are equivalent, the one closest to 
	 * the beginning of the enumeration is returned.
	 * <p>
	 * If provided, iterator is called with two arguments: The element being 
	 * evaluated, and its index in the enumeration; it should return the value 
	 * min should consider (and potentially return).
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * ['c', 'b', 'a'].min();<br>
	 * // -> 'a'<br>
	 * &nbsp;[3, 1, '1', 2].min();<br>
	 * // -> 1 (because both 1 and '1' are "min", and 1 was earlier)<br>
	 * &nbsp;['un', 'deux', 'trois'].min(function(item) { return item.length; });<br>
	 * // -> 2
	 * </code>
	 *   
	 */
	//> public Object min(Function? iterator, Object? context)
	min: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#partition([iterator = Prototype.K[, context]]) ? [TrueArray, FalseArray]</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – An optional function to use to evaluate each 
	 * element in the enumeration; the function should return the value to test. 
	 * If this is not provided, the element itself is tested. </li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Partitions the elements in two groups: those regarded as true, and those 
	 * considered false. By default, regular JavaScript boolean equivalence 
	 * (e.g., truthiness vs. falsiness) is used, but an iterator can be provided 
	 * that computes a boolean representation of the elements.
	 * <p>
	 * Using partition is more efficient than using Enumerable#findAll and then 
	 * using Enumerable#reject because the enumeration is only processed once.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * ['hello', null, 42, false, true, , 17].partition();<br>
	 * // -> [['hello', 42, true, 17], [null, false, undefined]]<br>
	 * &nbsp;$R(1, 10).partition(function(n) {<br>
	 * &nbsp;&nbsp;return 0 == n % 2;<br>
	 * });<br>
	 * // -> [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
	 * </code>
	 *    
	 */
	//> public Array partition(Function? iterator, Object? Context)
	partition: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#pluck(property) ? Array</code>
	 * <p>
	 * <ul>
	 * <li>property (String) – The name of the property to fetch.</li>
	 * </ul>
	 * <p>
	 * Pre-baked implementation for a common use-case of Enumerable#collect and 
	 * Enumerable#each: fetching the same property for all of the elements. 
	 * Returns an array of the property values.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * ['hello', 'world', 'this', 'is', 'nice'].pluck('length');<br>
	 * // -> [5, 5, 4, 2, 4]
	 * </code>
     *
	 */
	//> public Array pluck(String property)
	pluck: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#reject(iterator[, context]) ? Array</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – An iterator function to use to test the elements.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Returns all the elements for which the iterator returns a falsy value. 
	 * For the opposite operation, see Enumerable#findAll.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * [1, "two", 3, "four", 5].reject(Object.isString);<br>
	 * // -> [1, 3, 5]
	 * </code>
     *
	 */
	//> public Array reject(Function iterator, Object? context)
	reject: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#select(iterator[, context]) ? Array</code>
	 * <p>
	 * Alias of: Enumerable#findAll
     *
	 */
	//> public Array select(Function iterator, Object? context)
	select: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#size() ? Number</code>
	 * <p>
	 * Returns the size of the enumeration.
     *
	 */
	//> public Number size()
	size: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#some([iterator = Prototype.K[, context]]) ? Boolean</code>
	 * <p>
	 * Alias of: Enumerable#any
     *
	 */
	//> public boolean some(Function? iterator, Object? context)
	some: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#sortBy(iterator[, context]) ? Array</code>
	 * <p>
	 * <ul>
	 * <li>iterator (Function) – The function to use to compute the criterion 
	 * for each element in the enumeration.</li>
	 * <li>context (Object) – An optional object to use as this within calls to 
	 * the iterator.</li>
	 * </ul>
	 * <p>
	 * Creates a custom-sorted array of the elements based on the criteria 
	 * computed, for each element, by the iterator. Computed criteria must have 
	 * well-defined ordering semantics (i.e. the < operator must exist between 
	 * any two criteria).
	 * <p>
	 * Enumerable#sortBy does not guarantee a stable sort; adjacent equivalent 
	 * elements may be swapped.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * ['hello', 'world', 'this', 'is', 'nice'].sortBy(function(s) {<br>
	 * return s.length;<br>
	 * });<br>
	 * // -> ['is', 'nice', 'this', 'world', 'hello']
	 * </code>
	 *   
	 */
	//> public Array sortBy(Function iterator, Object? context)
	sortBy: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#toArray() ? Array</code>
	 * <p>
	 * Returns an Array containing the elements of the enumeration.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * $R(1, 5).toArray();<br>
	 * // -> [1, 2, 3, 4, 5]<br>
	 * $H({ name: 'Sunny', age: 20 }).toArray();<br>
	 * // -> [['name', 'Sunny'], ['age', 20]]<br>
	 * </code>
	 * <p>
	 * Aliased as: Enumerable#entries
     *
	 */
	//> public Array toArray()
	toArray: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Enumerable#zip(sequence...[, iterator = Prototype.K]) ? Array</code>
	 * <p>
	 * <ul>
	 * <li>sequence (Object) – A sequence to zip with this enumerable (there 
	 * can be several of these if desired).</li>
	 * <li>iterator (Function) – Optional function to use to transform the 
	 * tuples once generated; this is always the last argument provided.</li>
	 * </ul>
	 * <p>
	 * Zips together (think of the zipper on a pair of trousers) 2+ sequences, 
	 * returning a new array of tuples. Each tuple is an array containing one 
	 * value per original sequence. Tuples can be transformed to something else 
	 * by applying the optional iterator on them.
	 * <p>
	 * If supplied, iterator is called with each tuple as its only argument and 
	 * should return the value to use in place of that tuple.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * var firstNames = ['Jane', 'Nitin', 'Guy'];<br>
	 * var lastNames  = ['Doe',  'Patel', 'Forcier'];<br>
	 * var ages       = [23,     41,      17];<br>
	 * &nbsp;firstNames.zip(lastNames);<br>
	 * // -> [['Jane', 'Doe'], ['Nitin', 'Patel'], ['Guy', 'Forcier']]<br>
	 * &nbsp;firstNames.zip(lastNames, ages);<br>
	 * // -> [['Jane', 'Doe', 23], ['Nitin', 'Patel', 41], ['Guy', 'Forcier', 17]]<br>
	 * &nbsp;firstNames.zip(lastNames, ages, function(tuple) {<br>
	 * &nbsp;&nbsp;return tuple[0] + ' ' + tuple[1] + ' is ' + tuple[2];<br>
	 * });<br>
	 * // -> ['Jane Doe is 23', 'Nitin Patel is 41', 'Guy Forcier is 17']
	 * </code>
	 *      
	 */
	//> public Array zip(Object sequence, Function? iterator)
	//> public Array zip(Object sequence1, Object sequence2, Function? iterator)
	//> public Array zip(Object sequence1, Object sequence2, Object sequence3, Function? iterator)
	//> public Array zip(Object sequence1, Object sequence2, Object sequence3, Object sequence4, Function? iterator)
	zip: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();