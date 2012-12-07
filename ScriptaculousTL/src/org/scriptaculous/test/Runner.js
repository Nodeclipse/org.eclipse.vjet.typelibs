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
 * Test.Unit.Runner
 * <p>
 * Unit Testing > Test.Unit.Runner
 * <p>
 * Introduction
 * Test.Unit.Runner is a utility class for writing unit test cases with an easy 
 * to use syntax. Syntax
 * <code>
 * new Test.Unit.Runner(functions [, options] );
 * <p>
 * The functions and options parameters are both {key: value} collections.
 * <p>
 * Examples
 * <p>
 * Using Test.Unit.Runner requires you to use a specific XHTML page template, 
 * that looks as follows:
 * <code>
 * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
 *       "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 * <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
 * <head>
 *   <title>Page title</title>
 *   <script src="path/to/prototype.js" type="text/javascript"></script>
 *   <script src="path/to/util.js" type="text/javascript"></script>
 *   <script src="path/to/unittest.js" type="text/javascript"></script>
 *   <!-- other JavaScript includes -->
 *   <link rel="stylesheet" href="path/to/test.css" type="text/css" />
 * </head>
 * <body>
 * <!-- Log output -->
 * <div id="testlog"> </div>
 * <!-- here go any elements you do the testing on -->
 * <!-- Tests -->
 * <script type="text/javascript" language="javascript">
 *  // <![CDATA[
 *  new Test.Unit.Runner({
 *  // optional setup function, run before each individual test case
 *  setup: function() { with(this) {
 *      // code
 *  }},
 *  // optional teardown function, run after each individual test case
 *  teardown: function() { with(this) {
 *     // code
 *  }},
 *  // test cases follow, each method which starts 
 *  // with "test" is considered a test case
 *  testATest: function() { with(this) {
 *     // code
 *  }},
 *  testAnotherTest: function() { with(this) {
 *    // code
 *  }}
 * }, { options });
 * // ]]>
 * </script>
 * </body>
 * </html>
 * </code>
 * Notice how the with(this) { ... } syntax allows for easily calling on methods 
 * of the Test.Unit.Testcase class, which includes the assertions, as defined in 
 * Test.Unit.Assertions.
 */
vjo.ctype('org.scriptaculous.test.Runner') //< public
.protos({
	/**
	 * 
	 */
	//> public org.scriptaculous.test.TestCase[]
	tests: null,		
	
	/**
	 * 
	//> public Number
	currentTest: null, 	
	
	/**
	 * 
	 */
	//> public org.scriptaculous.test.Logger
	logger: null,		
	
	/**
	 * 
	 */
	//> public constructs(Object testCases, Object... moreTestCasesEndingWithOptions)
	constructs: function() {return null},
	
	/**
	 * 
	 */
	//> public String parseResultsURLQueryParameter()
	parseResultsURLQueryParameter: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Array parseTestsQueryParameter()
	parseTestsQueryParameter: vjo.NEEDS_IMPL,
	
	/**
	 * Returns:
	 * "ERROR" if there was an error
	 * "FAILURE" if there was a failure
	 * "SUCCESS" if there was neither
	 */
	//> public String getResult()
	getResult: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Ajax.Request postResults()
	postResults: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void runTests()
	runTests: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String summary()
	summary: vjo.NEEDS_IMPL
})
.endType();