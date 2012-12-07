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
vjo.ctype('org.dojotoolkit.ext.Cldr') //< public
.globals({
	cldr: undefined //<type::Cldr
}, dojo)
.props({	
	monetary : vjo.ctype().props({ //< public
		//>public Object getData(String code)
		getData : vjo.NEEDS_IMPL
	}).endType(),
	
	supplemental : vjo.ctype().props({ //< public
		//>public int getFirstDayOfWeek(String? locale)
		getFirstDayOfWeek : vjo.NEEDS_IMPL,

		//>public int getWeekend(String? locale)
		getWeekend : vjo.NEEDS_IMPL
	}).endType()
	
})
.options({
	metatype:true
})
.endType();