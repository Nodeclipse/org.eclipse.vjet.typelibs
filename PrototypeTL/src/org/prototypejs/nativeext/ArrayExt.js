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
 * 
 */
vjo.mtype('org.prototypejs.nativeext.ArrayExt') //< public

.props({
	/**
	 * 
	 */
	//> public Array from(Object iterable)
	from: vjo.NEEDS_IMPL
})
.protos({

	
	/**
	 *  Array#clear() -> Array
	 *
	 *  Clears the array (makes it empty) and returns the array reference.
	 *
	 *  ##### Example
	 *
	 *      var guys = ['Sam', 'Justin', 'Andrew', 'Dan'];
	 *      guys.clear();
	 *      // -> []
	 *      guys
	 *      // -> []
	**/
	//> public Array clear()
	clear: vjo.NEEDS_IMPL,
	
	/**
   *  Array#clone() -> Array
   *
   *  Returns a duplicate of the array, leaving the original array intact.
  **/
	//> public Array clone()
	clone: vjo.NEEDS_IMPL,
	
	/**
	   *  Array#compact() -> Array
	   *
	   *  Returns a **copy** of the array without any `null` or `undefined` values.
	   *
	   *  ##### Example
	   *
	   *      var orig = [undefined, 'A', undefined, 'B', null, 'C'];
	   *      var copy = orig.compact();
	   *      // orig -> [undefined, 'A', undefined, 'B', null, 'C'];
	   *      // copy -> ['A', 'B', 'C'];
	  **/
	//> public Array compact()
	compact: vjo.NEEDS_IMPL,
	
	/**
	 * Returns the array's first item (e.g., `array[0]`).
	 */
	//> public Object first()
	first: vjo.NEEDS_IMPL,
	
  /**
   *  Array#flatten() -> Array
   *
   *  Returns a flattened (one-dimensional) copy of the array, leaving
   *  the original array unchanged.
   *
   *  Nested arrays are recursively injected inline. This can prove very
   *  useful when handling the results of a recursive collection algorithm,
   *  for instance.
   *
   *  ##### Example
   *
   *      var a = ['frank', ['bob', 'lisa'], ['jill', ['tom', 'sally']]];
   *      var b = a.flatten();
   *      // a -> ['frank', ['bob', 'lisa'], ['jill', ['tom', 'sally']]]
   *      // b -> ['frank', 'bob', 'lisa', 'jill', 'tom', 'sally']
  **/
	//> public Array flatten()
	flatten: vjo.NEEDS_IMPL,
	
	/**
   *  Array#indexOf(item[, offset = 0]) -> Number
   *  - item (?): A value that may or may not be in the array.
   *  - offset (Number): The number of initial items to skip before beginning
   *      the search.
   *
   *  Returns the index of the first occurrence of `item` within the array,
   *  or `-1` if `item` doesn't exist in the array. `Array#indexOf` compares
   *  items using *strict equality* (`===`).
   *
   *  ##### Examples
   *
   *      [3, 5, 6, 1, 20].indexOf(1)
   *      // -> 3
   *
   *      [3, 5, 6, 1, 20].indexOf(90)
   *      // -> -1 (not found)
   *
   *      ['1', '2', '3'].indexOf(1);
   *      // -> -1 (not found, 1 !== '1')
  **/
	//> public Number indexOf(Object item, int? offset)
	indexOf: vjo.NEEDS_IMPL,
	
	/**
   *  Array#intersect(array) -> Array
   *  - array (Array): A collection of values.
   *
   *  Returns an array containing every item that is shared between the two
   *  given arrays.
  **/
	//> public String inspect()
	inspect: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Array intersect(Array array)
	intersect: vjo.NEEDS_IMPL,
	
	/**
	 * Returns the array's last item (e.g., `array[array.length - 1]`).
	 */
	//> public Object last()
	last: vjo.NEEDS_IMPL,
	
	/** related to: Array#indexOf
   *  Array#lastIndexOf(item[, offset]) -> Number
   *  - item (?): A value that may or may not be in the array.
   *  - offset (Number): The number of items at the end to skip before beginning
   *      the search.
   *
   *  Returns the position of the last occurrence of `item` within the array &mdash; or
   *  `-1` if `item` doesn't exist in the array.
  **/
	//> public Number lastIndexOf(Object item, int? offset)
	lastIndexOf: vjo.NEEDS_IMPL,
	
	/**
   *  Array#reverse([inline = true]) -> Array
   *  - inline (Boolean): Whether to modify the array in place. Defaults to `true`.
   *      Clones the original array when `false`.
   *
   *  Reverses the array's contents, optionally cloning it first.
   *
   *  ##### Examples
   *
   *      // Making a copy
   *      var nums = [3, 5, 6, 1, 20];
   *      var rev = nums.reverse(false);
   *      // nums -> [3, 5, 6, 1, 20]
   *      // rev -> [20, 1, 6, 5, 3]
   *
   *      // Working inline
   *      var nums = [3, 5, 6, 1, 20];
   *      nums.reverse();
   *      // nums -> [20, 1, 6, 5, 3]
  **/
	//> public Array reverse(boolean? inline)
	reverse: vjo.NEEDS_IMPL,
	
	/** related to: Enumerable#size
   *  Array#size() -> Number
   *
   *  Returns the size of the array (e.g., `array.length`).
   *
   *  This is just a local optimization of the mixed-in [[Enumerable#size]]
   *  which avoids array cloning and uses the array's native length property.
  **/
	//> public Number size()
	size: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Array toArray()
	toArray: vjo.NEEDS_IMPL,
	
	/**
   *  Array#uniq([sorted = false]) -> Array
   *  - sorted (Boolean): Whether the array has already been sorted. If `true`,
   *    a less-costly algorithm will be used.
   *
   *  Produces a duplicate-free version of an array. If no duplicates are
   *  found, the original array is returned.
   *
   *  On large arrays when `sorted` is `false`, this method has a potentially
   *  large performance cost.
   *
   *  ##### Examples
   *
   *      [1, 3, 2, 1].uniq();
   *      // -> [1, 2, 3]
   *
   *      ['A', 'a'].uniq();
   *      // -> ['A', 'a'] (because String comparison is case-sensitive)
  **/
	//> public Array uniq(boolean? sorted)
	uniq: vjo.NEEDS_IMPL,
	
	/**
     *  Array#without(value[, value...]) -> Array
     *  - value (?): A value to exclude.
     *
     *  Produces a new version of the array that does not contain any of the
     *  specified values, leaving the original array unchanged.
     *
     *  ##### Examples
     *
     *      [3, 5, 6].without(3)
     *      // -> [5, 6]
     *
     *      [3, 5, 6, 20].without(20, 6)
     *      // -> [3, 5]
    **/
	//> public Array without(Object value, Object... otherValues)
	without: vjo.NEEDS_IMPL
	
})
.options({
	metatype: true
})
.endType();