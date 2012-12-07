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
 * 
 */
vjo.mtype('org.prototypejs.nativeext.RegExpExt') //< public

.props({
	/**
	 *  RegExp.escape(str) -> String
	 *  - str (String): A string intended to be used in a `RegExp` constructor.
	 *
	 *  Escapes any characters in the string that have special meaning in a
	 *  regular expression.
	 *
	 *  Use before passing a string into the `RegExp` constructor.
	**/
	//> public String escape({String | Object}? value)
	escape: vjo.NEEDS_IMPL
})
.protos({
   /**
	 *  RegExp#match(str) -> Boolean
	 *  - str (String): a string against witch to match the regular expression.
	 *
	 *  Alias of the native `RegExp#test` method. Returns `true`
	 *  if `str` matches the regular expression, `false` otherwise.
	 **/
	//> public boolean match(String string)
	match: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();