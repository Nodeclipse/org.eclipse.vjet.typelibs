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
vjo.mtype('org.prototypejs.nativeext.NumberExt') //< public

.props({
	
})
.protos({
  /**
   *  Number#abs() -> Number
   *
   *  Returns the absolute value of the number. Convenience method that simply
   *  calls `Math.abs` on this instance and returns the result.
  **/
	//> public Number abs()
	abs: vjo.NEEDS_IMPL,
	
	/**
   *  Number#ceil() -> Number
   *
   *  Returns the smallest integer greater than or equal to the number.
   *  Convenience method that simply calls `Math.ceil` on this instance and
   *  returns the result.
  **/
	//> public Number ceil()
	ceil: vjo.NEEDS_IMPL,
	
	/**
   *  Number#floor() -> Number
   *
   *  Returns the largest integer less than or equal to the number.
   *  Convenience method that simply calls `Math.floor` on this instance and
   *  returns the result.
  **/
	//> public Number floor()
	floor: vjo.NEEDS_IMPL,
	
	/**
   *  Number#round() -> Number
   *
   *  Rounds the number to the nearest integer. Convenience method that simply
   *  calls `Math.round` on this instance and returns the result.
  **/
	//> public Number round()
	round: vjo.NEEDS_IMPL,
	
	/**
   *  Number#succ() -> Number
   *
   *  Returns the successor of the current [[Number]], as defined by current + 1.
   *  Used to make numbers compatible with [[ObjectRange]].
  **/
	//> public Number succ()
	succ: vjo.NEEDS_IMPL,
	
	/**
   *  Number#times(iterator[,context]) -> Number
   *  - iterator (Function): An iterator function to call.
   *  - context (Object): An optional context (`this` value) to use when
   *    calling `iterator`.
   *
   *  Calls `iterator` the specified number of times, passing in a number as
   *  the first parameter. The number will be 0 on first call, 1 on second
   *  call, etc. `times` returns the number instance it was called on.
   *
   *  ##### Example
   *
   *      (3).times(alert);
   *      // -> Alerts "0", then "1", then "2"; returns 3
   *
   *      var obj = {count: 0, total: 0};
   *      function add(addend) {
   *        ++this.count;
   *        this.total += addend;
   *      }
   *      (4).times(add, obj);
   *      // -> 4
   *      obj.count;
   *      // -> 4
   *      obj.total;
   *      // -> 6 (e.g., 0 + 1 + 2 + 3)
  **/
	//> public Number times(Function iterator, Object? context)
	times: vjo.NEEDS_IMPL,
	
	/**
   *  Number#toColorPart() -> String
   *
   *  Produces a 2-digit hexadecimal representation of the number
   *  (which is therefore assumed to be in the \[0..255\] range, inclusive).
   *  Useful for composing CSS color strings.
   *
   *  ##### Example
   *
   *      10.toColorPart()
   *      // -> "0a"
  **/
	//> public String toColorPart()
	toColorPart: vjo.NEEDS_IMPL,
	
	/**
   *  Number#toPaddedString(length[, radix]) -> String
   *  - length (Number): The minimum length for the resulting string.
   *  - radix (Number): An optional radix for the string representation,
   *    defaults to 10 (decimal).
   *
   *  Returns a string representation of the number padded with leading 0s so
   *  that the string's length is at least equal to `length`. Takes an optional
   *  `radix` argument which specifies the base to use for conversion.
   *
   *  ##### Examples
   *
   *      (13).toPaddedString(4);
   *      // -> "0013"
   *
   *      (13).toPaddedString(2);
   *      // -> "13"
   *
   *      (13).toPaddedString(1);
   *      // -> "13"
   *
   *      (13).toPaddedString(4, 16)
   *      // -> "000d"
   *
   *      (13).toPaddedString(4, 2);
   *      // -> "1101"
  **/
	//> public String toPaddedString(Number length, Number? radix)
	toPaddedString: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();