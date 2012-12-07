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
vjo.ctype('org.w3c.CanvasGradient') //< public
/**
 * interface CanvasGradient {
  // opaque object 
  void addColorStop(in float offset, in DOMString color);
};
 */
.protos({
	addColorStop:vjo.NEEDS_IMPL //< public void addColorStop(float offset, String color);
})
.options({
	metatype:true
})
.endType();