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
vjo.ctype('org.w3c.CanvasPixelArray') //< public
/**
 * interface CanvasPixelArray {
  readonly attribute unsigned long length;
  getter octet (in unsigned long index);
  setter void (in unsigned long index, in octet value);
};
 */
.protos({
	length:undefined, //< long length;
	// TODO octet?
	//>Object (long index)
	getter:vjo.NEEDS_IMPL,
	//>  void (long index, Object value)
	setter:vjo.NEEDS_IMPL
	
	
})
.options({
	metatype:true
})
.endType();