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
 * Transitions
 * <p>
 * Put simply, a transition in script.aculo.us is a function which transforms an 
 * input value to another value and returns it.
 * <p>
 * Effect.Transitions is a collection of 8 of those functions which can be used 
 * to achieve interesting variations on any effect.
 * <p>
 * Example
 * <p>
 * A transition can be specified by using an effects transition option.
 * <code>
 * new Effect.Move('id_of_element', {
 *   x: 200, y: 0, mode: 'relative',transition: Effect.Transitions.spring
 * });
 * </code>
 */
vjo.ctype('org.scriptaculous.Effect_Transitions') //< public

.props({
	
})
.protos({
	
	/**
	 * 
	 */
	//> public void linear()
	linear: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number sinodial(Number pos)
	sinodial: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number reverse(Number pos)
	reverse: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number flicker(Number pos)
	flicker: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number wobble(Number pos)
	wobble: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number pulse(Number pos, int pulses)
	pulse: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number spring(Number pos)
	spring: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number none()
	none: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number full()
	full: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();