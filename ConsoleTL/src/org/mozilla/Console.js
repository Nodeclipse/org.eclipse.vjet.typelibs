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
vjo.ctype('org.mozilla.Console') //< public
.globals({
	console: null //< org.mozilla.Console
})
.protos({
	/**
	 * Writes a message to the console. You may pass as many arguments as you'd like, and they will be joined together in a space-delimited line. 
	 * 
	 * The first argument to log may be a string containing printf-like string substitution patterns. For example:
	 * {code}
	 * console.log("The %s jumped over %d tall buildings", animal, count);
	 * {code}
	 * 
	 * The example above can be re-written without string substitution to achieve the same result:
	 * {code}
	 * console.log("The", animal, "jumped over", count, "tall buildings");
	 * {code}
	 * 
	 * These two techniques can be combined. If you use string substitution but provide more arguments than there are substitution patterns, the remaining arguments will be appended in a space-delimited line, like so: 
	 * {code}
	 * console.log("I am %s and I have:", myName, thing1, thing2, thing3);
	 * {code}
	 * 
	 * If objects are logged, they will be written not as static text, but as interactive hyperlinks that can be clicked to inspect the object in Firebug's HTML, CSS, Script, or DOM tabs. You may also use the %o pattern to substitute a hyperlink in a string.
	 * You may also use the %c pattern to use the second argument as a style formatting parameter. For example: 
	 * {code}
	 * console.log('%cThis is red text on a green background', 'color:red; background-color:green');
	 * {code}
	 * 
	 * <pre>
	 * Here is the complete set of patterns that you may use for string substitution:
	 * Pattern 	Type
	 * %s 	String
	 * %d, %i 	Integer (numeric formatting is not yet supported)
	 * %f 	Floating point number (numeric formatting is not yet supported)
	 * %o 	Object hyperlink
	 * %c 	Style formatting 
	 * </pre>
	 */
	//>public void log(Object, Object...) 
	log : vjo.NEEDS_IMPL,
	/**
	 * Writes a message to the console with the visual "info" icon and color coding and a hyperlink to the line where it was called. 
	 */
	//>public void info(Object, Object...) 
	info : vjo.NEEDS_IMPL,
	/**
	 * Writes a message to the console, including a hyperlink to the line where it was called. 
	 */
	//>public void debug(Object, Object...) 
	debug : vjo.NEEDS_IMPL,
	/**
	 * Writes a message to the console with the visual "warning" icon and color coding and a hyperlink to the line where it was called. 
	 */
	//>public void warn(Object, Object...) 
	warn : vjo.NEEDS_IMPL,
	/**
	 * Writes a message to the console with the visual "error" icon and color coding and a hyperlink to the line where it was called. 
	 */
	//>public void error(Object, Object...) 
	error : vjo.NEEDS_IMPL,
	
	/**
	 * Tests that an expression is true. If not, it will write a message to the console and throw an exception. 
	 */
	//>public void assert(boolean, Object...) 
	assert :vjo.NEEDS_IMPL,
	
	/**
	 * Clears the console. 
	 */
	//>public void clear() 
	clear : vjo.NEEDS_IMPL,
	/**
	 * Prints an interactive listing of all properties of the object. This looks identical to the view that you would see in the DOM tab. 
	 */
	//>public void dir(Object) 
	dir : vjo.NEEDS_IMPL,
	/**
	 * Prints the XML source tree of an HTML or XML element. This looks identical to the view that you would see in the HTML tab. You can click on any node to inspect it in the HTML tab. 
	 */
	//>public void dirxml(Element node) 
	dirxml : vjo.NEEDS_IMPL,
	
	/**
	 * Prints an interactive stack trace of JavaScript execution at the point where it is called.
	 * <br>
	 * The stack trace details the functions on the stack, as well as the values that were passed as arguments to each function. You can click each function to take you to its source in the Script tab, and click each argument value to inspect it in the DOM or HTML tabs. 
	 */
	//>public void trace() 
	trace : vjo.NEEDS_IMPL,
	
	/**
	 * Writes a message to the console and opens a nested block to indent all future messages sent to the console. Call console.groupEnd() to close the block. 
	 */
	//>public void group(Object object, Object ... ) 
	group : vjo.NEEDS_IMPL,
	
	/**
	 * Like console.group(), but the block is initially collapsed. 
	 */
	//>public void groupCollapsed() 
	groupCollapsed : vjo.NEEDS_IMPL,
	
	/**
	 * Closes the most recently opened block created by a call to console.group() or console.groupCollapsed()
	 */
	//>public void groupEnd() 
	groupEnd : vjo.NEEDS_IMPL,
	
	/**
	 * Creates a new timer under the given name. Call console.timeEnd(name) with the 
	 * same name to stop the timer and print the time elapsed.. 
	 */
	//>public void time(String name) 
	time : vjo.NEEDS_IMPL,
	
	/**
	 * Stops a timer created by a call to console.time(name) and writes the time elapsed. 
	 */
	//>public void timeEnd(String name) 
	timeEnd : vjo.NEEDS_IMPL,
	
	/**
	 * Turns on the JavaScript profiler. The optional argument title would contain the 
	 * text to be printed in the header of the profile report. 
	 */
	//>public void profile(String? title) 
	profile : vjo.NEEDS_IMPL,
	
	/**
	 * Turns off the JavaScript profiler and prints its report. 
	 */
	//>public void profileEnd() 
	profileEnd : vjo.NEEDS_IMPL,
	
	/**
	 * Writes the number of times that the line of code where count was called was executed. 
	 * The optional argument title will print a message in addition to the number of the count. 
	 */
	//>public void count(String? title) 
	count : vjo.NEEDS_IMPL,
	
	/**
	 * Prints an error message together with an interactive stack trace of JavaScript
	 * execution at the point where the exception occurred. 
	 */
	//>public void exception(Error errorobject, Object ...) 
	exception : vjo.NEEDS_IMPL,
	
	/**
	 * Allows to log provided data using tabular layout. 
	 * The method takes one required parameter that represents table like data (array of arrays or list of objects). 
	 * The other optional parameter can be used to specify columns and/or properties to be logged (see more here).
	 */
	//>public void table(Object[], String[]? columns) 
	//>public void table(Array[], String[]? columns) 
	table : vjo.NEEDS_IMPL
	
	

})

.options({
	metatype: true
})
.endType();