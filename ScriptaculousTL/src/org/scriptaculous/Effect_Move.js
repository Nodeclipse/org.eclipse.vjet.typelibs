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
 * Core Effects > Effect.Move
 * <P>
 * This effect moves an element by modifying its position attributes
 * <p>
 * Syntax
 * This will move the object to the top left corner of the window (x=0; y=0):
 * <code>
 * new Effect.Move('object', { x: 0, y: 0, mode: 'absolute' });
 * </code>
 * This will move the object 30px up and 20px to the right relative to its 
 * current position:
 * <code>
 * new Effect.Move('object', { x: 20, y: -30, mode: 'relative' });
 * </code>
 */
vjo.ctype('org.scriptaculous.Effect_Move') //< public
//> needs(org.scriptaculous.Effect_Base)
.inherits('org.scriptaculous.Effect_Base')
.props({
	/**
	 * 
	 */
	//> public constructs({String | Element} idOrElement, Effect_Move.option.one? options)
	constructs: function() {},
	
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
			 * integer value, either the new absolute target of the effect 
			 * elements left value or the modifier of its current left value, 
			 * depending on the mode option  
			 */
			//> public int?
			x: null,
			
			/**
			 * integer value, either the new absolute target of the effect 
			 * elements top value or the modifier of its current top value, 
			 * depending on the mode option 
			 */
			//> public int?
			y: null,
			
			/**
			 * string, defaults to 'relative', can also be 'absolute', specifies 
			 * if the element is moved absolutely or relative to its own position.  
			 */
			//> public String?
			mode: null
		}
	}).endType()
})
.protos({
	/**
	 * 
	 */
	//> public void setup() 
	setup: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void update(Number position)
	update: vjo.NEEDS_IMPL
})
.options({
	metatype: true 
})
.endType();