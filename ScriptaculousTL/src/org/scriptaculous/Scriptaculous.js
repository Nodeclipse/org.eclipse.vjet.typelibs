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
vjo.ctype('org.scriptaculous.Scriptaculous') //< public

.props({
	// from effects.js
	data: vjo.otype().defs({	//< public 
		Queues: {				//< public
			/**
			 * 
			 */
			//> 
			instances: null,
			
			/**
			 * 
			 */
			//> 
			get: vjo.NEEDS_IMPL
		}
	}).endType()
})
.protos({
	
})
.options({
	metatype: true
})
.endType();