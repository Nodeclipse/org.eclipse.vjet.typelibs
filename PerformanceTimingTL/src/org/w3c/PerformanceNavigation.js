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
 * interface PerformanceNavigation {
  const unsigned short TYPE_NAVIGATE = 0;
  const unsigned short TYPE_RELOAD = 1;
  const unsigned short TYPE_BACK_FORWARD = 2;
  const unsigned short TYPE_RESERVED = 255;
  readonly attribute unsigned short type;
  readonly attribute unsigned short redirectCount;
};
 */

vjo.ctype('org.w3c.PerformanceNavigation') //< public
.protos({           
	/**
	 * Navigation started by clicking on a link, or entering the URL in the user agent's address bar, or form submission, or initializing through a script operation other than the ones used by TYPE_RELOAD and TYPE_BACK_FORWARD as listed below.
	 */
	TYPE_NAVIGATE : 0,       //<public short
	/**
	 * Navigation through the reload operation or the location.reload() method.
	 */
	TYPE_RELOAD :1,          //<public short
	/**
	 * Navigation through a history traversal operation.
	 */
	TYPE_BACK_FORWARD : 2,   //<public short
	/**
	 * Any navigation types not defined by values above.
	 */
	TYPE_RESERVED : 255,     //<public short
	/**
	 * This attribute must return the type of the last non-redirect navigation in the current browsing context. It must have one of the following navigation type values.
	 */
	type:null,               //<public short
	/**
	 * This attribute must return the number of redirects since the last non-redirect navigation under the current browsing context. If there is no redirect or there is any redirect that is not from the same origin as the destination document, this attribute must return zero.
	 */
	redirectCount:null       //<public short                 
	
})
.options({
	metatype:true
})
.endType();