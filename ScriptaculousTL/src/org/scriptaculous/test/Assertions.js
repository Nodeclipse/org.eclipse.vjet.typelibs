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
vjo.ctype('org.scriptaculous.test.Assertions') //< public

.props({
	
})
.protos({
	/**
	 * 
	 */
	assertions: null,	//< public Number
	
	/**
	 * 
	 */
	failures: null,		//< public Number
	
	/**
	 * 
	 */
	errors: null,		//< public Number
	
	/**
	 * 
	 */
	messages: null,		//< public String[]
	
	/**
	 * 
	 */
	//> public constructs()
	constructs: function() {},
	
	/**
	 * Returns a concatenated string which represents the assertions, errors, 
	 * failures, and messages properties.
	 */ 
	//> public String summary()
	summary: vjo.NEEDS_IMPL,
	
	/**
	 * This code increases the number of assertions without risking a failure or error
	 */
	//> public void pass()
	pass: vjo.NEEDS_IMPL,
	
	/**
	 * Adds a failure message to messages property and increments failures property
	 */
	//> public void fail(String? message)
	fail: vjo.NEEDS_IMPL,
	
	/**
	 * Adds an info message to messages property
	 */
	//> public void info(Object msg)
	info: vjo.NEEDS_IMPL,
	
	/**
	 * increments error count
	 * adds passed in error message to messages
	 */
	//> public void error(Error err)
	error: vjo.NEEDS_IMPL,
	
	/**
	 * if this.failures > 0 return 'failed'
	 * if this.errors > 0 return 'error'
	 * return 'passed'
	 */
	//> public String status()
	status: vjo.NEEDS_IMPL,
	
	/**
	 * Do all objects in the arguments array match the first item in that array? 
	 * ie: Does assertElementsMatch([‘a’,‘b’,‘c’], ‘a’, ‘b’, ‘c’ ) should be true?
	 */
	//> public void assertElementMatches(Object element, Object expression)
	assertElementsMatches: vjo.NEEDS_IMPL,
	
	//> public boolean(Object...)
	assertElementsMatch: vjo.NEEDS_IMPL,
	
	/**
	 * Calls operation iteration number of times and returns how long it took to 
	 * call all of them.
	 */
	//> public Number benchmark(Function operation, Number? iterations)
	benchmark: vjo.NEEDS_IMPL,
	
	//
	// -----------------------------
	//
	
	/**
	 * 
	 */
	//> public void assert(Object expression, String? message)
	assert: vjo.NEEDS_IMPL,
	
	//> public void assertInspect(Object expected, Object actual, String? message)
	assertInspect: vjo.NEEDS_IMPL,
	
	//> public void assertEnumEqual(Object expected, Object actual, String? message)
	assertEnumEqual: vjo.NEEDS_IMPL,
	
	//> public void assertRespondsTo(String method, Object obj, String? message)
	assertRespondsTo: vjo.NEEDS_IMPL,
	
	//> public void assertRaise(String exceptionName, String methodName, String? message)
	assertRaise: vjo.NEEDS_IMPL,
	
	//> public void assertHidden(Object element, String? message)
	assertHidden: vjo.NEEDS_IMPL,
	
	//> public void assertMatch(Object expected, Object actual, String? message)
	assertMatch: vjo.NEEDS_IMPL,
	
	//
	// ----------------------------
	//
	/**
	 * 
	 */
	//> public void assertEqual(Object expected, Object actual, String? message)
	assertEqual: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void assertInspect(Object expected, Object actual, String? message)
	assertNotEqual: vjo.NEEDS_IMPL,
	
	//> public void assertIdentical(Object expected, Object actual, String? message)
	assertIdentical: vjo.NEEDS_IMPL,
	
	//> public void assertNotIdentical(Object expected, Object actual, String? message)
	assertNotIdentical: vjo.NEEDS_IMPL,
	
	//> public void assertNull(Object obj, String? message)
	assertNull: vjo.NEEDS_IMPL,
	
	//> public void assertNotNull(Object obj, String? message)
	assertNotNull: vjo.NEEDS_IMPL,
	
	//> public void assertType(Object expected, Object actual, String? message)
	assertType: vjo.NEEDS_IMPL,
	
	//> public void assertNotOfType(Object expected, Object actual, String? message)
	assertNotOfType: vjo.NEEDS_IMPL,
	
	//> public void assertInstanceOf(Object expected, Object actual, String? message)
	assertInstanceOf: vjo.NEEDS_IMPL,
	
	//> public void assertNotInstanceOf(Object expected, Object actual, String? message)
	assertNotInstanceOf: vjo.NEEDS_IMPL,
	
	//> public void assertReturnsTrue(String method, Object obj, String? message)
	assertReturnsTrue: vjo.NEEDS_IMPL,
	
	//> public void assertReturnsFalse(String method, Object obj, String? message)
	assertReturnsFalse: vjo.NEEDS_IMPL,
	
	//> public void assertVisible(Object element, String? message)
	assertVisible: vjo.NEEDS_IMPL,
	
	//> public void assertNotVisible(Object element, String? message)
	assertNotVisible: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();