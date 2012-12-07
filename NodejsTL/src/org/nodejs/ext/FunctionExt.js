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
vjo.mtype('org.nodejs.ext.FunctionExt')

.props({

})
.protos({
	/**
	 * Sets the value of ‘this’ inside the function to always be the value of 
	 * thisArg when the function is called. Optionally, function arguments can 
	 * be specified (arg1, arg2, etc) that will automatically be prepended to 
	 * the argument list whenever this function is called.
	 */
	//> public void bind(Object thisArg, Object... otherArgs)
	bind: vjo.NEEDS_IMPL
})
.endType();