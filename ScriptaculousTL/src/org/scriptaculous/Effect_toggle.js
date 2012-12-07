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
 * Effect.toggle allows for easily toggling elements with an animation.
 * <p>
 * Syntax
 * <code>
 * Effect.toggle(element, ['appear' | 'slide' | 'blind'], [options] );
 * <p>
 * element can be either a string containing the id of the element, or a 
 * JavaScript DOM element object.
 * <p>
 * The options parameter is used to give any additional customization parameters 
 * to the effect. There are general and effect-specific options. See the 
 * individual effects for more information.
 * <p>
 * Examples
 * <code>
 * Effect.toggle('id_of_element', 'appear');
 * Effect.toggle('id_of_element', 'slide', { delay: 0.5 });
 * Effect.toggle('id_of_element', 'blind', { duration: 2.0 });
 * </code>
 * Notes
 * <p>
 * Keep in mind, like individual Effects, you must include a second DIV element, 
 * wrapping the contents of the outer DIV. So, if you call new Effect.Slide 
 * Down(‘x’), your element must look like this:
 * <code>
 * <div id="x">
 *   <div>
 *     contents
 *   </div>
 * </div>
 * </code>
 */
vjo.ctype('org.scriptaculous.Effect_toggle') //< public

.props({
	/**
	 * 
	 */
	//> public void toggle({String | Element} element, String? choice, Object? options)
	toggle: vjo.NEEDS_IMPL
})
.protos({
	
})
.options({
	metatype: true
})
.endType();