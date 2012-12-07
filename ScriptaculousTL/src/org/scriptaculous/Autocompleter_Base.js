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
vjo.ctype('org.scriptaculous.Autocompleter_Base') //< public

.props({
	//> public void show()
	show: vjo.NEEDS_IMPL,
	
	//> public void fixIEOverlapping()
	fixIEOverlapping: vjo.NEEDS_IMPL,
	
	//> public void hide()
	hide: vjo.NEEDS_IMPL,
	
	//> public void startIndicator()
	startIndicator: vjo.NEEDS_IMPL,
	
	//> public void stopIndicator()
	stopIndicator: vjo.NEEDS_IMPL,
	
	//> public void onKeyPress(Event event)
	onKeyPress: vjo.NEEDS_IMPL,
	
	//> public void activate()
	activate: vjo.NEEDS_IMPL,
	
	//> public void onHover(Event event)
	onHover: vjo.NEEDS_IMPL,
	
	//> public void onClick(Event event)
	onClick: vjo.NEEDS_IMPL,
	
	//> public void onBlur(Event event)
	onBlur: vjo.NEEDS_IMPL,
	
	//> public void render()
	render: vjo.NEEDS_IMPL,
	
	//> public void markPrevious()
	markPrevious: vjo.NEEDS_IMPL,
	
	//> public void markNext()
	markNext: vjo.NEEDS_IMPL,
	
	//> public Object getEntry(int index)
	getEntry: vjo.NEEDS_IMPL,
	
	//> public Object getCurrentEntry()
	getCurrentEntry: vjo.NEEDS_IMPL,
	
	//> public void selectEntry()
	selectEntry: vjo.NEEDS_IMPL,
	
	//> public void updateElement({String | Element} idOrElement)
	updateElement: vjo.NEEDS_IMPL,
	
	//> public void updateChoices(Object choices) ; MrP (String?)
	updateChoices: vjo.NEEDS_IMPL,
	
	//> public void addObservers(Element element)
	addObservers: vjo.NEEDS_IMPL,
	
	//> public void onObserverEvent()
	onObserverEvent: vjo.NEEDS_IMPL,
	
	//> public Object getToken()
	getToken: vjo.NEEDS_IMPL,
	
	//> public Object getTokenBounds()
	getTokenBounds: vjo.NEEDS_IMPL
})
.protos({
	/*
	 * 
	 */
	//> public constructs({String | Element} idOrElement, boolean update, Object options)
	constructs: function() {},

	getTokenBounds: vjo.NEEDS_IMPL	// MrP ???
	
})
.options({
	metatype: true
})
.endType();