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
//> public
vjo.ctype('org.nodejs.stream<T>') 
.props({
	/**
	 * 
	 */
	//> public
	Stream: vjo.ctype('<T>')
		//> needs(org.nodejs.events.EventEmitter)
		.inherits('org.nodejs.events.EventEmitter<T>')
		.protos({
			/**
			 * 
			 */
			//> public void pipe(Stream dest, Object? options)
			pipe: vjo.NEEDS_IMPL
		})
	.endType()
})
.protos({
	// vvvvvvvvvvvvvv  Exported Types  vvvvvvvvvvvvvvv
	/**
	 * 
	 */
	//> public type::stream.Stream
	Stream: null	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	
})
.options({
	metatype: true
})
.endType();