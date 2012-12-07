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
 * A set of key/value pairs.
 * <p>
 * Hash can be thought of as an associative array, binding unique keys to values 
 * (which are not necessarily unique), though it can not guarantee consistent order 
 * its elements when iterating. Because of the nature of JavaScript, every object 
 * is in fact a hash; but Hash adds a number of methods that let you enumerate 
 * keys and values, iterate over key/value pairs, merge two hashes together, and 
 * much more.
 * <p>
 * Creating a hash
 * <p>
 * You can create a Hash either via new Hash() or the convenience alias $H(); 
 * there is no difference between them. In either case, you may optionally pass 
 * in an object to seed the Hash. If you pass in a Hash, it will be cloned.
 *  
 */
vjo.ctype('org.prototypejs.Hash') //< public
//> needs(org.prototypejs.Enumerable)
.mixin('org.prototypejs.Enumerable')
.props({
	/**> public type::Hash
	 * 
	 */
	from: null
})
.protos({
	/**
	 * <code>new Hash([object])</code>
	 * <p>
	 * Creates a new Hash. If object is given, the new hash will be populated with 
	 * all the object's properties. See $H.
	 * 
	 */
	//> public constructs(Object? object)
	constructs: function() {},
	
	/**
	 * <code>Hash#clone() ? Hash</code>
	 * <p>
	 * Returns a clone of this Hash.
	 * 
	 */
	//> public Hash clone()
	clone: vjo.NEEDS_IMPL,
	
// MrP - already in Enumerable	each: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#get(key) ? value</code>
	 * <p>
	 * Returns the stored value for the given key.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * var h = new Hash({a: 'apple', b: 'banana', c: 'coconut'});<br>
	 * h.get('a');<br>
	 * // -> 'apple'<br>
	 * </code>
	 * 
	 */
	//> public Object get(String key)
	get: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#index(value) ? String</code>
	 * <p>
	 * Returns the first key in the hash whose value matches value. Returns false 
	 * if there is no such key.
	 * 
	 */
	//> public String index(Object value)
	index: vjo.NEEDS_IMPL,
	
// MrP - already in Enumerable		inspect: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#keys() ? [String…]</code>
	 * <p>
	 * Provides an Array containing the keys for items stored in the hash.
	 * <p>
	 * The order of the keys is not guaranteed.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var h = $H({one: "uno", two: "due", three: "tre"});<br>
	 * h.keys();<br>
	 * // -> ["one", "three", "two"] (these may be in any order)<br>
	 * </code>
	 * 
	 */
	//> public String[] keys()
	keys: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#merge(object) ? Hash</code>
	 * <p>
	 * <ul>
	 * <li>object (Object | Hash) – The object to merge with this hash to 
	 * produce the resulting hash.</li>
	 * </ul>
	 * <p>
	 * Returns a new Hash instance with object's key/value pairs merged in; this 
	 * hash remains unchanged.
	 * <p>
	 * To modify the original hash in place, use Hash#update.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var h = $H({one: "uno", two: "due"});<br>
	 * var h2 = h.merge({three: "tre"});<br>
	 * h.keys();<br>
	 * // -> ["one", "two"] (unchanged)<br>
	 * h2.keys();<br>
	 * // -> ["one", "two", "three"] (has merged contents)<br>
	 * </code>
	 * 
	 */
	//> public Hash merge({Object | Hash}? object)
	merge: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#set(key, value) ? value</code>
	 * <p>
	 * <ul>
	 * <li>key (String) – The key to use for this value.</li>
	 * <li>value (?) – The value to use for this key.</li>
	 * </ul>
	 * <p>
	 * Stores value in the hash using the key key and returns value.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var h = $H();<br>
	 * h.keys();<br>
	 * // -> [] (initially empty)<br>
	 * h.set('a', 'apple');<br>
	 * // -> "apple"<br>
	 * h.keys();<br>
	 * // -> ["a"] (has the new entry)<br>
	 * h.get('a');<br>
	 * // -> "apple"<br>
	 * </code>
	 * 
	 */
	//> public Object set(String key, Object? value)
	set: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#toJSON() ? Object</code>
	 * <p>
	 * Alias of: Hash#toObject
	 * 
	 */
	//> public String toJSON()
	toJSON: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#toObject() ? Object</code>
	 * <p>
	 * Returns a cloned, vanilla object whose properties (and property values) 
	 * match the keys (and values) from the hash.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var h = new Hash({ a: 'apple', b: 'banana', c: 'coconut' });<br>
	 * var obj = h.toObject();<br>
	 * obj.a;<br>
	 * // -> "apple"<br>
	 * </code>
	 * <p>
	 * Aliased as: Hash#toJSON, Hash#toTemplateReplacements
	 * 
	 */
	//> public Object toObject(String... keys)
	toObject: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#toQueryString() ? String</code>
	 * <p>
	 * Returns a URL-encoded string containing the hash's contents as query 
	 * parameters according to the following rules:
	 * <p>
	 * <ul>
	 * <li>An undefined value results a parameter with no value portion at all 
	 * (simply the key name, no equal sign).</li>
     * <li>A null value results a parameter with a blank value (the key followed 
     * by an equal sign and nothing else).</li>
     * <li>A boolean value results a parameter with the value "true" or "false".</li>
     * <li>An Array value results in a parameter for each array element, in array 
     * order, each using the same key.</li>
     * <li>All keys and values are URI-encoded using JavaScript's native 
     * encodeURIComponent function.</li>
     * </ul>
     * <p>
     * The order of pairs in the string is not guaranteed, other than the order of 
     * array values described above.
     * <p>
     * Example
     * <p>
     * <code>
     * $H({action: 'ship',<br>
     * &nbsp;&nbsp;order_id: 123,<br>
     * &nbsp;&nbsp;fees: ['f1', 'f2']<br>
     * }).toQueryString();<br>
     * // -> "action=ship&order_id=123&fees=f1&fees=f2"<br>
     * &nbsp;$H({comment: '',<br>
     * &nbsp;&nbsp;'key with spaces': true,<br>
     * &nbsp;&nbsp;related_order: undefined,<br>
     * &nbsp;&nbsp;contents: null,<br>
     * &nbsp;&nbsp;'label': 'a demo'<br>
     * }).toQueryString();<br>
     * // -> "comment=&key%20with%20spaces=true&related_order&contents=&label=a%20demo"<br>
     * &nbsp;// an empty hash is an empty query string:<br>
     * $H().toQueryString();<br>
     * // -> ""<br>
     * </code>
     *                     
	 */
	//> public String toQueryString()
	toQueryString: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#toTemplateReplacements() ? Object</code>
	 * <p>
	 * Alias of: Hash#toObject
	 * 
	 */
	//> public Object toTemplateReplacements()
	toTemplateReplacements: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#unset(key) ? value</code>
	 * <p>
	 * Deletes the stored pair for the given key from the hash and returns its value.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var h = new Hash({a: 'apple', b: 'banana', c: 'coconut'});<br>
	 * h.keys();<br>
	 * // -> ["a", "b", "c"]<br>
	 * h.unset('a');<br>
	 * // -> 'apple'<br>
	 * h.keys();<br>
	 * // -> ["b", "c"] ("a" is no longer in the hash)<br>
	 * </code>
	 * 
	 */
	//> public Object unset(String key)
	unset: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#update(object) ? Hash</code>
	 * <p>
	 * <ul>
	 * <li>object (Object | Hash) – The object to merge with this hash to produce 
	 * the resulting hash.</li>
	 * </ul>
	 * <p>
	 * Updates a hash in place with the key/value pairs of object, returns the hash.
	 * <p>
	 * Hash#update modifies the hash. To get a new hash instead, use Hash#merge.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var h = $H({one: "uno", two: "due"});<br>
	 * h.update({three: "tre"});<br>
	 * // -> h (a reference to the original hash)<br>
	 * h.keys();<br>
	 * // -> ["one", "two", "three"] (has merged contents)<br>
	 * </code>
	 * 
	 */
	//> public Hash update({Object | Hash}? object)
	update: vjo.NEEDS_IMPL,
	
	/**
	 * <code>Hash#values() ? Array</code>
	 * <p>
	 * Collects the values of the hash and returns them in an array.
	 * <p>
	 * The order of the values is not guaranteed.
	 * <p>
	 * Example
	 * <p>
	 * <code>
	 * var h = $H({one: "uno", two: "due", three: "tre"});<br>
	 * h.values();<br>
	 * // -> ["uno", "tre", "due"] (these may be in any order)<br>
	 * </code>
	 * 
	 */
	//> public Array values()
	values: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();