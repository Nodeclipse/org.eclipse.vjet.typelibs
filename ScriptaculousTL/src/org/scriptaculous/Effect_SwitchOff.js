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
 * Effect.SwitchOff
 * <p>
 * Combination Effects > Effect.SwitchOff
 * <p>
 * Gives the illusion of a TV-style switch off.
 * <p>
 * Examples
 * <code>
 * Effect.SwitchOff('id_of_element');
 * </code>
 * Notes
 * <p>
 * Works safely with most Block Elements, except tables.
 */
vjo.ftype('org.scriptaculous.Effect_SwitchOff') //< public
//> needs(org.scriptaculous.Effect_Appear)
.props({
	/**
	 * 
	 */
	//> public Effect_Appear _invoke_({String | Element} idOrElement)
	_invoke_: function() { return null }
})
.options({
	metatype: true
})
.endType();