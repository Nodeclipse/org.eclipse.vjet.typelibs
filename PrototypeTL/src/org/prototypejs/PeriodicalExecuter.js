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
 * Oversees the calling of a particular function periodically.
 * <p>
 * PeriodicalExecuter shields you from multiple parallel executions of a 
 * callback function, should it take longer than the given interval to execute.
 * <p>
 * This is especially useful if you use one to interact with the user at given 
 * intervals (e.g. use a prompt or confirm call): this will avoid multiple 
 * message boxes all waiting to be actioned.
 * <p>
 * Example
 * <p>
 * <code>
 * new PeriodicalExecuter(function(pe) {<br>
 * &nbsp;if (!confirm('Want me to annoy you again later?')) {<br>
 * &nbsp;&nbsp;pe.stop();<br>
 * &nbsp;}<br>
 * }, 5);<br>
 * </code>
 * 
 */
vjo.ctype('org.prototypejs.PeriodicalExecuter') //< public
.props({
	
})
.protos({
	/**
	 * <code>new(callback, frequency)</code>
	 * <p>
	 * <ul>
	 * <li>callback (Function) – the function to be executed at each interval.</li>
	 * <li>frequency (Number) – the amount of time, in seconds, to wait in between callbacks.</li>
	 * </ul>
	 * <p>
	 * Creates a PeriodicalExecuter.
	 */
	//> public constructs(Function callback, Number frequency)
	constructs: function() {},
	
	/**
	 * <code>PeriodicalExecuter#stop() ? undefined</code>
	 * Stops the periodical executer (there will be no further triggers).
	 * <p>
	 * Once a PeriodicalExecuter is created, it constitues an infinite loop, 
	 * triggering at the given interval until the page unloads. This method lets 
	 * you stop it any time you want.
	 * <p>
	 * Example
	 * <p>
	 * This will only alert 1, 2 and 3, then the PeriodicalExecuter stops.
	 * <p>
	 * <code>
	 * var count = 0;<br>
	 * new PeriodicalExecuter(function(pe) {<br>
	 * &nbsp;if (++count > 3) {<br>
	 * &nbsp;&nbsp;pe.stop();<br>
	 * &nbsp;} else {<br>
	 * &nbsp;&nbsp;alert(count);<br>
	 * &nbsp;}<br>
	 * }, 1);<br>
	 * </code>
	 *               
	 */
	//> public void stop()
	stop: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();