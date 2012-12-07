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
 * “Grows” an element into a specific direction (see demo for better understanding).
 * <p>
 * Examples
 * <code>
 * Effect.Grow('id_of_element');
 * </code>
 * Notes
 * <p>Works safely with most Block Elements, except tables.
 * You can define different durations for several div elements, and place them 
 * in a row in order to make them appear one after another.
 */
vjo.ftype('org.scriptaculous.Effect_Grow') //< public
//> needs(org.scriptaculous.Effect_Move)
.props({
	/**
	 * 
	 */
	//> public Effect_Move _invoke_({String | Element} idOrElement, Effect_Grow.option.one? options)
	_invoke_: function() { return null ;},
	
	// This is a singluar otype itself
	/**
	 * 
	 */
	//> public
	option: vjo.otype().defs({  // *** NOTE .def vs. def(s) ***
		/**
		 * 
		 */
		//> public
		one: {
			/**
			 * string, defaults to 'center', can also be: 'top-left', 'top-right', 
			 * 'bottom-left', 'bottom-right', specifying the origin from which 
			 * to “grow” the element 
			 */
			//> public String?
			direction: null,
			
			/**
			 * float value, in seconds, defaults to 1.0
			 */
			//> public Number?
			duration: null
		}
	}).endType()
})
.options({
	metatype: true 
})
.endType();