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
 * This effect flashes a color as the background of an element. It is mostly 
 * used to draw attention to a part of the page that has been updated via 
 * JavaScript or AJAX, when the update would not otherwise be obvious.
 * <p>
 * Syntax
 * <code>
 * new Effect.Highlight('id_of_element', [options]);
 * new Effect.Highlight(element, [options]);
 * </code>
 * Notes
 * <p>If the restorecolor option is not given, Effect.Highlight tries to find 
 * out the current background color of the element, which will only work 
 * reliably across browsers if the color is given with a CSS rgb triplet, like 
 * rgb(0, 255, 0).
 * <p>
 * Be aware of the syntax: this effect strictly requires a new in front, 
 * otherwise you will get a javascript error.
 * <p>
 * If you specify the startcolor or endcolor using short-form notation, as in 
 * #ccf, the effect will fail silently. Use the long-form, as in #ccccff.
 * <p>
 * Also be aware that applying an effect (without setting a restorecolor), to an 
 * element that already has an highlight effect in progress, will cause the 
 * restorecolor to be set to the elements background-color at the time of the 
 * new effect, and not the original background-color.
 */
vjo.ctype('org.scriptaculous.Effect_Highlight') //< public
//> needs(org.scriptaculous.Effect_Base)
.inherits('org.scriptaculous.Effect_Base')
.protos({
	/**
	 * 
	 */
	//> public constructs({String | Element} idOrElement, Effect_Highlight.option.one? options)
	constructs: function() {},
	
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
			 * Sets the color of first frame of the highlight. Defaults to 
			 * ”#ffff99” (a light yellow). 
			 */
			//> public String?
			startcolor: null,
			
			/**
			 * Sets the color of the last frame of the highlight. This is best 
			 * set to the background color of the highlighted element. Defaults 
			 * to ”#ffffff” (white). 
			 */
			//> public String?
			endcolor: null,
			
			/**
			 * Sets the background-color of the element after the highlight has 
			 * finished. Defaults to the current background-color of the 
			 * highlighted element (see Note). 
			 */
			//> public String?
			restorecolor: null,
			
			/**
			 * 
			 */
			//> public boolean?
			keepBackgroundImage: null
		}
	}).endType(),
	
	/**
	 * 
	 */
	//> public void setup()
	setup: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void update(Number position)
	update: vjo.NEEDS_IMPL,
	
	/**
	 *
	 */
	//> public void finish()
	finish: vjo.NEEDS_IMPL
})
.options({
	metatype: true 
})
.endType();