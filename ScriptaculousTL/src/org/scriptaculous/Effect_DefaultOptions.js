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
vjo.otype('org.scriptaculous.Effect_DefaultOptions') //< public
.defs({	
	/**
	 * 
	 */
	//> public
	options: {		
		/**
		 * XXX
		 * <p>
		 * Default is 1.0
		 */
		//> public Number?
		duration: null,
		
		/**
		 * Assume 100 = 66fps max
		 * <p>
		 * Default is 100
		 */
		//> public int?
		fps: null,
		
		/**
		 * Combining is true
		 * <p>
		 * Default is false
		 */
		//> public boolean?
		sync: null,
		
		/**
		 * XXX
		 * <p>
		 * Default is 0.0
		 */
		//> public Number?
		from: null,
		
		/**
		 * XXX
		 * <p>
		 * Default is 1.0
		 */
		//> public Number?
		to: null,
		
		/**
		 * XXX
		 * <p>
		 * Default is 0.0
		 */
		//> public Number?
		delay: null,
		
		/**
		 * XXX
		 * <p>
		 * Default is 'parallel'
		 */
		//> public String?
		queue: null
	}
})
.endType();