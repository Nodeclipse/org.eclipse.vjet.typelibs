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
vjo.ctype('org.prototypejs.Form_Element_Serializers') //< public

.props({
	
	/*
	 * 
	 */
	//> public boolean input(Element element, Object value)
	input: vjo.NEEDS_IMPL,
	
	/*
	 * 
	 */
	//> public boolean inputSelector(Element element, Object value)
	inputSelector: vjo.NEEDS_IMPL,
	
	/*
	 * 
	 */
	//> public boolean valueSelector(Element element, Object value)
	valueSelector: vjo.NEEDS_IMPL,
	
	/*
	 * 
	 */
	//> public boolean select(Element element)
	select: vjo.NEEDS_IMPL,
	
	/*
	 * 
	 */
	//> public boolean selectOne(Element element)
	selectOne: vjo.NEEDS_IMPL,
	
	/*
	 * 
	 */
	//> public String optionValue(String opt)
	optionValue: vjo.NEEDS_IMPL
	
	
})
.protos({
	
})
.endType();