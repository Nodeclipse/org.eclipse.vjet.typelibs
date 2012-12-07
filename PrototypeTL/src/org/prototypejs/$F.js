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
 * $F(element) ? String | Array
 * <p>
 * Returns the value of a form control. This is a convenience alias of 
 * Form.Element.getValue. Refer to it for full details.
 */
//> public
vjo.ftype('org.prototypejs.$F') 
.props({
	/**
	 * 
	 */
	//> public Object _invoke_({String | Element} idOrElement) ; MrP should return {String | Array}
	_invoke_: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();