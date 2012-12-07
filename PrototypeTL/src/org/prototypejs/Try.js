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
vjo.ctype('org.prototypejs.Try') //< public

.props({
	/**
	 * 
	 * <p>
	 * <code>Try.these(function...) ? ?</code>
	 * <p>
	 * function (Function) – A function that may throw an exception.
	 * <p>
	 * Accepts an arbitrary number of functions and returns the result of the 
	 * first one that doesn't throw an error.
	 * <p>
	 * <b>This method is deprecated.</b>
	 * <p>
	 * More information
	 * <p>
	 * Try.these provides a simple idiom for trying out blocks of code in 
	 * sequence. Such a sequence of attempts usually represents a downgrading 
	 * approach to obtaining a given feature.
	 * <p>
	 * In this example from Prototype's Ajax internals, we want to get an 
	 * XMLHttpRequest object. Internet Explorer 6 and earlier, however, does 
	 * not provide it as a vanilla JavaScript object, and will throw an error 
	 * if we attempt a simple instantiation. Also, over time, its proprietary 
	 * way evolved, changing COM interface names.
	 * <p>
	 * Try.these will try several ways in sequence, from the best (and, 
	 * theoretically, most widespread) one to the oldest and rarest way, 
	 * returning the result of the first successful function.
	 * <p>
	 * If none of the blocks succeeded, Try.these will return undefined, 
	 * which will cause the Ajax.getTransport method in the example below to 
	 * return false, provided as a fallback result value.
	 * <p>
	 * <code>
	 * var Ajax = {<br>
	 * &nbsp;getTransport: function() {<br>
	 * &nbsp;&nbsp;return Try.these(<br>
	 * &nbsp;&nbsp;&nbsp;&nbsp;function() 
	 * 	{ return new XMLHttpRequest() },<br>
	 * &nbsp;&nbsp;&nbsp;&nbsp;function() 
	 * { return new ActiveXObject('Msxml2.XMLHTTP') },<br>
	 * &nbsp;&nbsp;&nbsp;&nbsp;function() 
	 * { return new ActiveXObject('Microsoft.XMLHTTP') }<br>
	 * &nbsp;&nbsp;) || false;<br>
	 * &nbsp;}<br>
	 * };<br>
	 * </code>
	 * <p>
	 */
	//> public Object these(Function... funcs)
	these: vjo.NEEDS_IMPL
})
.protos({
	
})
.options({
	metatype: true
})
.endType();