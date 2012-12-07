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
vjo.ctype('org.prototypejs.Element_Methods_Simulated') //< public

.props({
  /**
   *  Element.hasAttribute(@element, attribute) -> Boolean
   *  
   *  Simulates the standard compliant DOM method
   *  [`hasAttribute`](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttr)
   *  for browsers missing it (Internet Explorer 6 and 7).
   *  
   *  ##### Example
   *  
   *      language: html
   *      <a id="link" href="http://prototypejs.org">Prototype</a>
   *
   *  Then:
   *
   *      $('link').hasAttribute('href');
   *      // -> true
  **/ 
	//> public boolean hasAttribute({String | Element} idOrElement, String attribute)
  hasAttribute: vjo.NEEDS_IMPL
	
})
.protos({
	
})
.endType();