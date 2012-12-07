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
 * Makes an element fade away and takes it out of the document flow when the 
 * effect is complete by setting the CSS display property to none. Opposite of 
 * Effect.Appear.
 * <p>
 * Examples
 * <code>
 * Effect.Fade('id_of_element');
 * Effect.Fade('id_of_element', { duration: 3.0 });
 * </code>
 * There’s also a shortcut method offered which you can call on the element 
 * itself. Note, that this will only work on Prototype-extended elements 
 * (elements you extended at least once via calling $(element)).
 * <code>
 * $('id_of_element').fade();
 * $('id_of_element').fade({ duration: 3.0, from: 0, to: 1 });
 * </code>
 * Notes
 * <p>
 * Can take an options parameter, to control the underlying Effect.Opacity effect.
 * Works safely with most HTML elements, except table rows, table bodies and 
 * table heads.
 * <p>
 * On Microsoft Internet Explorer, this effect may display a bold/ghosting 
 * artifact on elements that don’t have a defined background. It’s unclear if 
 * this is a feature or a bug.
 * <p>Microsoft Internet Explorer can only set opacity on elements that have a 
 * ‘layout’. To let an element have a layout, you must set some CSS positional 
 * properties, like width or height. See Giving Elements Layout. (Note: This is 
 * fixed in V1.5_rc1.
 */
vjo.ftype('org.scriptaculous.Effect_Fade') //< public
//> needs(org.scriptaculous.Effect_Opacity)
.props({
	/**
	 * 
	 */
	//> public Effect_Opacity _invoke_({String | Element} idOrElement, Effect_Fade.option.one? options)
	_invoke_: function() { return null ; },
	
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
			 * float value, in seconds, defaults to 1.0
			 */
			//> public Number?
			duration: null,
			
			/**
			 * float value, defaults to 1.0, percent of opacity to start 
			 */
			//> public Number?
			from: null,
			
			/**
			 * loat value, defaults to 0.0, percent of opacity to end 
			 */
			//> public Number?
			to: null		
		}
	}).endType()
})
.options({
	metatype: true
})
.endType();