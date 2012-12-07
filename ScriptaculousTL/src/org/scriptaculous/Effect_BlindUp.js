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
 * This effect simulates a window blind, where the contents of the affected 
 * elements stay in place.
 * <p>
 * Examples
 * <code>
 * Effect.BlindUp('id_of_element');
 * Effect.BlindUp('id_of_element', { duration: 3.0 });
 * </code>
 * Notes
 * <p>
 * Works safely with most Block Elements, except table rows, table bodies and 
 * table heads.
 * <p>
 * The opposite of Effect.BlindUp is Effect.BlindDown.
 */
vjo.ftype('org.scriptaculous.Effect_BlindUp') //< public
//> needs(org.scriptaculous.Effect_Scale)
.props({
	/**
	 * 
	 */
	//> public Effect_Scale _invoke_({String | Element} element, Effect_BlindUp.option.one? options)
	_invoke_: function() {return null},
	
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
			 * boolean, defaults to false
			 */
			//> public boolean?
			scaleX: null,
			
			/**
			 * boolean, defaults to true
			 */
			//> public boolean?
			scaleY: null,
			
			/**
			 * boolean, defaults to true
			 */
			//> public boolean?
			scaleContent: null,
			
			/**
			 * boolean, defaults to false
			 */
			//> public boolean
			scaleFromCenter: null,
			
			/**
			 * string, defaults to ‘box', can also be ‘contents‘
			 */
			//> public String?
			scaleMode: null,
			
			/**
			 * integer value, percentage (0%–100%), defaults to 100
			 */
			//> public int?
			scaleFrom: null,
			
			/**
			 * integer value, percentage (0%–100%), defaults to 0
			 */
			//> public int?
			scaleTo: null,
			
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