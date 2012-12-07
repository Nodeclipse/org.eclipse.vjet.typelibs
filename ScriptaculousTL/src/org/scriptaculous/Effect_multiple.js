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
 * Effect multiple takes an array of elements and performs a given effect for 
 * each element. If one specific element is passed instead of an array of 
 * elements, the specific elements child nodes will be used for the effect. 
 * <p>
 * Each subsequent effect will start by default with a slight delay depending on 
 * the speed option.
 * <p>
 * Syntax
 * <code>
 * Effect.multiple([element1, element2, element3, …], Effect); // takes an array of elements
 * Effect.multiple(element, Effect); // also takes a specific element and will use its childNodes
 * </code>
 */
vjo.ftype('org.scriptaculous.Effect_multiple') //< public

.props({
	/**
	 * 
	 */
	//> public void _invoke_(String id_of_element, Effect_multiple.option.one? options)
	_invoke_: function() {},
	
	/**
	 * 
	 */
	//> public
	option: vjo.otype().defs({  
		/**
		 * 
		 */
		//> public
		one: {
			/**
			 * float value, defaults to 0.1, a delay offset for each subsequent effect  
			 */
			//> public Number?
			speed: null,
			
			/**
			 * 	float value, defaults to 0.0, the effects start delay 
			 */
			//> public Number?
			delay: null
		}
	}).endType()
})
.options({
	metatype: true 
})
.endType();