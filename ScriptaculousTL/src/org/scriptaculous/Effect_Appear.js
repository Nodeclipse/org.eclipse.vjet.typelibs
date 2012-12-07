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
 * Make an element appear. If the element was previously set to display:none 
 * inside the style attribute of the element, the effect will automatically show 
 * the element. This means that display must be set within the style attribute 
 * of an object, and not in the CSS in the head of the document or a linked file. 
 * In other words, this Effect will not work if display:none is set within style 
 * tag or linked CSS file. Alternatively, display:none can be set using a 
 * document.getElementById script even if no style is set in the style attribute.
 * <p>
 * Examples
 * <code>
 * Effect.Appear('id_of_element');
 * Effect.Appear('id_of_element', { duration: 3.0 });
 * </code>
 * There’s also a shortcut method offered which you can call on the element 
 * itself. Note, that this will only work on Prototype-extended elements (elements 
 * you extended at least once via calling $(element)).
 * <code>
 * $('id_of_element').appear();
 * $('id_of_element').appear({ duration: 3.0 });
 * </code>
 */
vjo.ftype('org.scriptaculous.Effect_Appear') //< public
//> needs(org.scriptaculous.Effect_Opacity)
.props({
	/**
	 * Can take an options parameter, to control the underlying Effect.Opacity effect.
	 * <p>
	 * Works safely with most HTML elements, except table rows, table bodies and 
	 * table heads.
	 * <p>
	 * On Microsoft Internet Explorer, this effect may display a bold/ghosting 
	 * artifact on elements that don’t have a defined background. It’s unclear 
	 * if this is a feature or a bug.
	 * <p>
	 * Microsoft Internet Explorer can only set opacity on elements that have a 
	 * ‘layout’. To let an element have a layout, you must set some CSS positional 
	 * properties, like width or height. See Giving Elements Layout. (Note: 
	 * This is fixed in V1.5_rc1.)
	 * <p>
	 * The opposite of Effect.Appear is Effect.Fade.
	 */
	//> public Effect_Opacity _invoke_({String | Element} idOrElement, Effect_Appear.option.one? options)
	_invoke_: function() {return null ;},
	
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
			 * float value, in seconds, defaults to 1.0
			 */
			//> public Number
			duration: null,
			
			/**
			 * float value, defaults to 0.0, percent of opacity to start 
			 */
			//> public Number
			from: null,
			
			/**
			 * float value, defaults to 1.0, percent of opacity to end 
			 */
			//> public Number
			to: null
		}
	}).endType(),
	
	/**
	 * 
	 */
	//> public XXX afterFinishInternal()
	afterFinishInternal: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Effect_Opacity beforeSetup({String | Element} idOrElement)
	beforeSetup: vjo.NEEDS_IMPL
})
.options({
	metatype: true 
})
.endType();