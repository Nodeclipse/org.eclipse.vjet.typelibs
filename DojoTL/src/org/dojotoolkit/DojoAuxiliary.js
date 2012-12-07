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
vjo.otype('org.dojotoolkit.DojoAuxiliary') //< public
.defs({
	animArgs : {
		node : null, //<Node
		properties : null, //<Object
		duration : 0, //<Number?
		easing : null, //<(boolean fn(int index))?		
		onEnd : null //<(void fn(Node node))?
		
	},

	xhrArgs : {
		error : null, //<(void error())?		
		handle : null, //<(void handle())?		
		load : null, //<(void load())?		
		content : null, //<Object?
		form : null, //<Node?
		handleAs : null, //<String?
		headers : null, //<Object?
		preventCache : false, //<boolean?
		sync : false, //<boolean?
		timeout : 0, //<int?
		url : null //<String?
	},
	
	fadeArgs : {
		easing: null, //<<(boolean easing(int))?
		duration: 0, //<Number?
		node: null //<{String|Node}
	},
	
	coords : {
		l : 0, //<int?
		t : 0, //<int?
		w : 0, //<int?
		h : 0, //<int?
		x : 0, //<int?
		y : 0 //<int?	
	},
	
	margin : {
		l : 0, //<int?
		t : 0, //<int?
		w : 0, //<int?
		h : 0 //<int?	
	},
	
	position : {
		w : 0, //<int
		h : 0, //<int
		x : 0, //<int
		y : 0  //<int
	},
	
	CSS2Properties : {
		background: null, //<Object?
		'background-attachment': null, //<Object?
		'background-color': null, //<Object?
		'background-image': null, //<Object?
		'background-position': null, //<Object?
		'background-repeat': null, //<{boolean|String}?		
		border: null, //<Object?
		'border-bottom': null, //<Object?
		'border-bottom-color': null, //<Object?
		'border-bottom-style': null, //<Object?
		'border-bottom-width': null, //<Object?		
		'border-collapse': null, //<Object?
		'border-color': null, //<Object?
		'border-left': null, //<Object?
		'border-left-color': null, //<Object?
		'border-left-style': null, //<Object?
		'border-left-width': null, //<Object?
		'border-right': null, //<Object?
		'border-right-color': null, //<Object?
		'border-right-style': null, //<Object?
		'border-right-width': null, //<Object?
		'border-spacing': null, //<Object?
		'border-style': null, //<Object?
		'border-top': null, //<Object?
		'border-top-color': null, //<Object?
		'border-top-style': null, //<Object?
		'border-top-width': null, //<Object?
		'border-width': null, //<Object?
		bottom : null, //<Object?
		'caption-side': null, //<Object?
		clear: null, //<Object?
		clip: null, //<Object?
		color: null, //<Object?
		content: null, //<Object?
		'counter-increment': null, //<Object?
		'counter-reset': null, //<Object?
		cursor: null, //<Object?
		direction: null, //<Object?
		display: null, //<Object?
		'empty-cells': null, //<Object?
		float: null, //<Object?
		font: null, //<Object?
		'font-family': null, //<Object?
		'font-size': null, //<Object?
		'font-size-adjust': null, //<Object?
		'font-stretch': null, //<Object?
		'font-style': null, //<Object?
		'font-variant': null, //<Object?
		'font-weight': null, //<Object?		
		height : 0, //<{int|String}?
		left: null, //<Object?
		'letter-spacing': null, //<Object?
		'line-height': null, //<Object?
		'list-style': null, //<Object?
		'list-style-image': null, //<Object?
		'list-style-position': null, //<Object?
		'list-style-type': null, //<Object?
		margin: null, //<Object?
		'margin-bottom': null, //<Object?
		'margin-left': null, //<Object?
		'margin-right': null, //<Object?
		'margin-top': null, //<Object?
		'marker-offset': null, //<Object?		
		'max-height': null, //<Object?
		'max-width': null, //<Object?
		'min-height': null, //<Object?
		'min-width': null, //<Object?
		outline: null, //<Object?
		'outline-color': null, //<Object?
		'outline-stype': null, //<Object?
		'outline-width': null, //<Object?
		overflow: null, //<Object?
		padding: null, //<Object?
		'padding-bottom': null, //<Object?
		'padding-left': null, //<Object?
		'padding-right': null, //<Object?
		'padding-top': null, //<Object?
		position: null, //<Object?
		quotes: null, //<Object?
		right: null, //<Object?
		'table-layout': null, //<Object?
		'text-align': null, //<Object?
		'text-decoration': null, //<Object?
		'text-indent': null, //<Object?
		'text-shadow': null, //<Object?
		'text-transform': null, //<Object?
		top: null, //<Object?
		'unicode-bidi': null, //<Object?
		'vertical-align': null, //<Object?
		visibility: null, //<Object?
		'white-space': null, //<Object?
		width : 0, //<{int|String}?
		'word-spacing': null, //<Object?
		'z-index': null //<Object?		
	}
})
.endType();
