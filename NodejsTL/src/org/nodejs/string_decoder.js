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
//> public ; // Exports: StringDecoder
vjo.ctype('org.nodejs.string_decoder') 
.props({
	// vvvvvvvvvvvvvvvvvvv NESTED TYPES vvvvvvvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public
	StringDecoder: vjo.ctype()
		//> needs(org.nodejs.buffer.Buffer)
		.protos({
			/**
			 * 
			 */
			//> public constructs(String? encoding)
			constructs: function() {},
			
			/**
			 * 
			 */
			//> public String write({String | Buffer} buffer)
			write: vjo.NEEDS_IMPL
		})
	.endType()
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::string_decoder.StringDecoder
	StringDecoder: null 
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
})
.options({
	metatype: true
})
.endType();