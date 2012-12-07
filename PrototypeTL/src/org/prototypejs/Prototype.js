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
vjo.ctype('org.prototypejs.Prototype') //< public
.globals({
	$: null,	//< org.prototypejs.$
	$$: null,	//< org.prototypejs.$$
	$A: null,	//< org.prototypejs.$A
	$F: null,	//< org.prototypejs.$F
	$H: null,	//< org.prototypejs.$H
	$R: null,	//< org.prototypejs.$R
	$w: null,	//< org.prototypejs.$w
	
	Prototype: null, //< type::org.prototypejs.Prototype
	Ajax: null,		 //< type::org.prototypejs.Ajax
	Form: null,		 //< type::org.prototypejs.Form
	Hash: null,		 //< type::org.prototypejs.Hash
	ObjectRange: null,//< type::org.prototypejs.ObjectRange
	PeriodicalExecuter: null,	//< type::org.prototypejs.PeriodicalExecuter
	Template: null,	//< type::org.prototypejs.Template
	Try: null,		//< type::org.prototypejs.Try
	Class: null		//< type::org.prototypejs.Class
})
.props({
	/**
	 * 
	 */
	Browser: vjo.ctype() 	//< public
	.props({
		IE: null,			//< public boolean
		Opera: null,		//< public boolean
		WebKit: null,		//< public boolean
		MobileSafari: null,	//< public boolean
		Gecko: null			//< public boolean
	})
	.endType(),
	
	/**
	 * A collection of Boolean values indicating the presence of specific
	 * Browser features
	 */
	BrowserFeatures: vjo.ctype() //< public
	.props({
		/**
		 * 
		 */
		//> public boolean SpecificElementExtensions()
		SpecificElementExtensions: vjo.NEEDS_IMPL,
		
	    /**
	     *  Prototype.BrowserFeatures.ElementExtensions -> Boolean
	     *
	     *  Used internally to detect if the browser supports extending html element
	     *  prototypes.
	    **/
		//> public boolean ElementExtensions()
		ElementExtensions: vjo.NEEDS_IMPL,
		
	   /**
	     *  Prototype.BrowserFeatures.SelectorsAPI -> Boolean
	     *
	     *  Used internally to detect if the browser supports the
	     *  [NodeSelector API](http://www.w3.org/TR/selectors-api/#nodeselector).
	    **/
		//> public boolean
		SelectorsAPI: null,
		
	   /**
	     *  Prototype.BrowserFeatures.XPath -> Boolean
	     *
	     *  Used internally to detect if the browser supports
	     *  [DOM Level 3 XPath](http://www.w3.org/TR/DOM-Level-3-XPath/xpath.html).
	    **/
		//> public boolean
		XPath: null
	})
	.endType(),
	
	Selector: vjo.ctype() //< public
	//> needs(org.prototypejs.Enumerable)
	.props({
		/**
		 * 
		 */
		//> public Element extendElement(Element element)
		extendElement: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public Enumerable extendElements(Enumerable elements)
		extendElements: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public Element find(Enumerable elements, String cssSelector, int? index)
		find: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public boolean match(Element element, String cssSelector)
		match: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public Element[] select(String cssSelector, Document root)
		select: vjo.NEEDS_IMPL	
	})
	.protos({
		
	})
	.endType(),
	
	/**
	 * The version of the Prototype library you are using (e.g. "<%= PROTOTYPE_VERSION %>").
	 */
	//> public String
	Version: null,	
	
	/**
	 * Prototype.emptyFunction([argument...]) ? undefined
	 * <p>argument (Object) – Optional arguments
	 * <p>The Prototype.emptyFunction does nothing... and returns nothing!
	 * <p>It is used thoughout the framework to provide a fallback function in 
	 * order to cut down on conditionals. Typically you'll find it as a default 
	 * value for optional callback functions.
	 */
	//> public void emptyFunction(Object... args)
	emptyFunction: vjo.NEEDS_IMPL,
	
	/**
	 * Prototype.K(argument) ? argument
	 * <p>argument (Object) – Optional argument...
	 * <p>Prototype.K is Prototype's very own identity function, i.e. it returns 
	 * its argument untouched.
	 * <p>This is used throughout the framework, most notably in the Enumerable 
	 * module as a default value for iterators.
	 * <p>Examples
	 * <code>
	 * Prototype.K('hello world!');
	 * // -> 'hello world!'
	 * Prototype.K(200);
	 * // -> 200
	 * Prototype.K(Prototype.K);
	 * // -> Prototype.K
	 * </code>
	 */
	//> public Object K(Object k)
	K: vjo.NEEDS_IMPL,
	
	/**
	 * '<script[^>]*>([\\S\\s]*?)<\/script>'
	 */
	//> public String
	ScriptFragment: null,
	
	/**
	 * /^\/\*-secure-([\s\S]*)\*\/\s*$/
	 */
	//> public RegExp
	JSONFilter: null
})
.protos({
	
})
.options({
	metatype: true
})
.endType();