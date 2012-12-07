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
vjo.ctype("org.jquery.jQuery")
.globals({
	$:undefined, //< jQuery:$
	jQuery:undefined //< type::jQuery
})
.protos({
	//> public constructs(String selector)
	//> public constructs(String selector, Node context)
	//> public constructs(String selector, Element context)
   	//> public constructs(String selector, HTMLDocument document)
    //> public constructs(String selector, jQuery context)
	//> public constructs(Array elements)
	//> public constructs(Node element)
	//> public constructs(Element element)
	//> public constructs(HTMLDocument document)
   	//> public constructs(Function callback)   	
    //> public constructs(Window win)  
	constructs : function() {},
	
    /*Category: Core - Object Accessors @ http://docs.jquery.com/Core */

    //> public jQuery each(Function callback)
    each:vjo.NEEDS_IMPL,

    //> public int size()
    size:vjo.NEEDS_IMPL,

    length:0, //<public int
    
    selector:"", //<public String
    
    context:null, //<public Node

    //> public Element get(int index)
    //> public Array get()
    get:vjo.NEEDS_IMPL,
    
    //> public int index(jQuery subject)
    //> public int index(Element elem)
    index:vjo.NEEDS_IMPL,

    /* Category: Core - Data @ http://docs.jquery.com/Core */

    //> public Object data(String name)
    //> public jQuery data(String name, Object value)
    data:vjo.NEEDS_IMPL,

    //> public jQuery removeData(String name)
    removeData:vjo.NEEDS_IMPL,

    //> public Array queue()
    //> public Array queue(String name)
    //> public jQuery queue(Function callback)
    //> public jQuery queue(String name, Function callback)
    //> public jQuery queue(Array queue)
    //> public jQuery queue(String name, Array queue)
    queue:vjo.NEEDS_IMPL,

    //> public jQuery dequeue()
    //> public jQuery dequeue(String name)
    dequeue:vjo.NEEDS_IMPL,

	/*Category: Attributes - Attr @ http://docs.jquery.com/Attributes */	
	
	//> public Object attr(String name)
	//> public jQuery attr(ObjLiteral properties)
	//> public jQuery attr(String key,Object value)
	//> public jQuery attr(String key,Function fn)
	attr:vjo.NEEDS_IMPL,
		
	//>public jQuery removeAttr(String name)
	removeAttr:vjo.NEEDS_IMPL,
	
	//> public jQuery addClass(String clz)
	addClass:vjo.NEEDS_IMPL,
	
	//> public boolean hasClass(String clz)
	hasClass:vjo.NEEDS_IMPL,
	
	//> public jQuery removeClass()
	//> public jQuery removeClass(String clz)
	removeClass:vjo.NEEDS_IMPL,
		
	//> public jQuery toggleClass(String clz)
	//> public jQuery toggleClass(String clz,boolean switchIt)
	toggleClass:vjo.NEEDS_IMPL,
	
	//> public String html()
	//> public jQuery html(String val)
	html:vjo.NEEDS_IMPL,
	
	//> public String text()
	//> public jQuery text(String value)
	text:vjo.NEEDS_IMPL,

	//> public Object val()
	//> public jQuery val(String val)
	//> public jQuery val(Array val)
	val:vjo.NEEDS_IMPL,

	/*Category: Traversing - Filtering @ http://docs.jquery.com/Traversing */

	//> public jQuery add(String expr)
	//> public jQuery add(Element expr)
	//> public jQuery add(Array expr)
	add:vjo.NEEDS_IMPL,
			
	//> public jQuery andSelf()
	andSelf:vjo.NEEDS_IMPL,
	
	//> public jQuery children()
	//> public jQuery children(String expr)
	children:vjo.NEEDS_IMPL,
	
	//> public jQuery closest(String expr)
	closest:vjo.NEEDS_IMPL,
	
	//> public jQuery contents()
	contents:vjo.NEEDS_IMPL,
	
	//> public jQuery end()
	end:vjo.NEEDS_IMPL,
    
    //> public jQuery eq(int position)
    eq:vjo.NEEDS_IMPL,
    
	//> public jQuery filter(String expr)
	//> public jQuery filter(Function func)
	filter:vjo.NEEDS_IMPL,
	
	//> public jQuery find(String expr)
	find:vjo.NEEDS_IMPL,
		
	//> public jQuery first()
	first:vjo.NEEDS_IMPL,
		
	//> public jQuery last()
	last:vjo.NEEDS_IMPL,
		
	//> public jQuery has(Element contained)
	//> public jQuery has(String selector)
	has:vjo.NEEDS_IMPL,
	
	//> public boolean is(String expr)
	is:vjo.NEEDS_IMPL,
	
	//> public jQuery map(Function func)
	map:vjo.NEEDS_IMPL,
	
	//> public jQuery next()
	//> public jQuery next(String expr)
	next:vjo.NEEDS_IMPL,
	
	//> public jQuery nextAll()
	//> public jQuery nextAll(String expr)
	nextAll:vjo.NEEDS_IMPL,
	
	//> public jQuery not(String expr)
	//> public jQuery not(Element expr)
	//> public jQuery not(Array expr)
	not:vjo.NEEDS_IMPL,
	
	//> public jQuery offsetParent()
	offsetParent:vjo.NEEDS_IMPL,
	
	//> public jQuery parent()
	//> public jQuery parent(String expr)
	parent:vjo.NEEDS_IMPL,

	//> public jQuery parents()
	//> public jQuery parents(String expr)
	parents:vjo.NEEDS_IMPL,

	//> public jQuery prev()
	//> public jQuery prev(String expr)
	prev:vjo.NEEDS_IMPL,
	
	//> public jQuery prevAll()
	//> public jQuery prevAll(String expr)
	prevAll:vjo.NEEDS_IMPL,
	
	//> public jQuery siblings()
	//> public jQuery siblings(String expr)
	siblings:vjo.NEEDS_IMPL,
		
	//> public jQuery slice(int start)
	//> public jQuery slice(int start,int end)
	slice:vjo.NEEDS_IMPL,

	
	/*Category: Manipulation - Inserting Inside @ http://docs.jquery.com/Manipulation */
		
	//> public jQuery append(String content)
	//> public jQuery append(Node content)
	//> public jQuery append(jQuery content)
	append:vjo.NEEDS_IMPL,
	
	//> public jQuery appendTo(String selector)
	//> public jQuery appendTo(HTMLElement elem)
	appendTo:vjo.NEEDS_IMPL,
	
	//> public jQuery prepend(String content)
	//> public jQuery prepend(Element content)
	//> public jQuery prepend(jQuery content)
	prepend:vjo.NEEDS_IMPL,
	
	//> public jQuery prependTo(String selector)
	prependTo:vjo.NEEDS_IMPL,

	/*Category: Manipulation - Inserting Outside @ http://docs.jquery.com/Manipulation */	

	//> public jQuery after(String content)
	//> public jQuery after(Element content)
	//> public jQuery after(jQuery content)
	after:vjo.NEEDS_IMPL,
	
	//> public jQuery before(String content)
	//> public jQuery before(Element content)
	//> public jQuery before(jQuery content)
	before:vjo.NEEDS_IMPL,
	
	//> public jQuery insertAfter(String content)
	//> public jQuery insertAfter(Node node)
	insertAfter:vjo.NEEDS_IMPL,
	
	//> public jQuery insertBefore(String content)
	insertBefore:vjo.NEEDS_IMPL,
	
	/*Category: Manipulation - Inserting Around @ http://docs.jquery.com/Manipulation */

	//> public jQuery wrap(String html)
	//> public jQuery wrap(Element elem)
	wrap:vjo.NEEDS_IMPL,
	
	//> public jQuery wrapAll(String html)
	//> public jQuery wrapAll(Element elem)
	wrapAll:vjo.NEEDS_IMPL,
	
	//> public jQuery wrapInner(Element elem)
	//> public jQuery wrapInner(String html)
	wrapInner:vjo.NEEDS_IMPL,
	
	/*Category: Manipulation - Replacing  @ http://docs.jquery.com/Manipulation */
	
	//> public jQuery replaceWith(String content)
	//> public jQuery replaceWith(Element content)
	//> public jQuery replaceWith(jQuery content)
	replaceWith:vjo.NEEDS_IMPL,
	
	//> public jQuery replaceAll(String selector)
	replaceAll:vjo.NEEDS_IMPL,
	
	/*Category: Manipulation - Removing  @ http://docs.jquery.com/Manipulation */

	//> public jQuery empty()
	empty:vjo.NEEDS_IMPL,
	
	//> public jQuery remove()
	//> public jQuery remove(String expr)
	remove:vjo.NEEDS_IMPL,

	/*Category: Manipulation - Copying  @ http://docs.jquery.com/Manipulation */

	//> public jQuery clone()
	//> public jQuery clone(boolean more)
	clone:vjo.NEEDS_IMPL,
	
	/*Category: CSS - CSS @ http://docs.jquery.com/CSS */

	//> public String css(String name)
	//> public jQuery css(ObjLiteral styleDecl)
	//> public jQuery css(String key, Object value)
	css:vjo.NEEDS_IMPL,
	
	/*Category: CSS - Positioning @ http://docs.jquery.com/CSS */	

	//> public ObjLiteral offset() 
	offset:vjo.NEEDS_IMPL,
	
	//> public ObjLiteral position()
	position:vjo.NEEDS_IMPL,

	//> public int scrollTop()
	//> public jQuery scrollTop(int value)
	scrollTop:vjo.NEEDS_IMPL,
	
	//> public int scrollLeft()
	//> public jQuery scrollLeft(int value)
	scrollLeft:vjo.NEEDS_IMPL,

	/*Category: CSS - Height and Width @ http://docs.jquery.com/CSS */

	//> public int height()
	//> public jQuery height(int value)
	//> public jQuery height(String value)
	height:vjo.NEEDS_IMPL,
	
	//> public int width()
	//> public jQuery width(int value)
	//> public jQuery width(String value)
	width:vjo.NEEDS_IMPL,
	
	//> public int innerHeight()
	innerHeight:vjo.NEEDS_IMPL,
	
	//> public int innerWidth()
	innerWidth:vjo.NEEDS_IMPL,
	
	//> public int outerHeight(boolean margin)
	outerHeight:vjo.NEEDS_IMPL,
	
	//> public int outerWidth(boolean margin)
	outerWidth:vjo.NEEDS_IMPL,

	/*Category: Events - Page Load @ http://docs.jquery.com/Events */
	
	//> public jQuery ready((void fn()) callback)
	ready:vjo.NEEDS_IMPL,
	
	/*Category: Events - Event Handling @ http://docs.jquery.com/Events */
		
	//> public jQuery bind(String eventType, Object eventData, (void fn(Object? eventObject)) func)
	//> public jQuery bind(String eventType, (void fn(Object? eventObject)) func)
	//> public jQuery bind(ObjLiteral eventFuncBindingMap)
	bind:vjo.NEEDS_IMPL,
	
	//> public jQuery one(String eventType, Object eventData, (void fn(Object? eventObject)) func)
	//> public jQuery one(String eventType, (void fn(Object? eventObject)) func)
	one:vjo.NEEDS_IMPL,
	
	//> public jQuery trigger(Object type)
	//> public jQuery trigger(Object type, Array data)
	trigger:vjo.NEEDS_IMPL,
	
	//> public Object triggerHandler(Object type)
	//> public Object triggerHandler(Object type, Array data)
	triggerHandler:vjo.NEEDS_IMPL,
	
	//> public jQuery unbind()
	//> public jQuery unbind(Object eventType)
	//> public jQuery unbind(Object eventType, Function func)
	unbind:vjo.NEEDS_IMPL,

	//> public jQuery live(String type, Object eventData, (void fn(Object? eventObject)) func)
	//> public jQuery live(String type, (void fn(Object? eventObject)) func)
	live:vjo.NEEDS_IMPL,
	
	//> public jQuery die()
	//> public jQuery die(Object type)
	//> public jQuery die(Object type,Function data)
	die:vjo.NEEDS_IMPL,
	
		
	/*Category: Events - Interaction Helpers @ http://docs.jquery.com/Events */

	//> public jQuery blur()
	//> public jQuery blur(Function fn)
	blur:vjo.NEEDS_IMPL,
	
	//> public jQuery change()
	//> public jQuery change((void fn(Object? eventObject)) func)
	change:vjo.NEEDS_IMPL,
	
	//> public jQuery click()
	//> public jQuery click((void fn(Object? eventObject)) func)
	click:vjo.NEEDS_IMPL,
	
	//> public jQuery dblclick()
	//> public jQuery dblclick((void fn(Object? eventObject)) func)
	dblclick:vjo.NEEDS_IMPL,
	
	//> public jQuery delegate(String selector, String eventType, Object eventData, (void fn(Object? eventObject)) func)
	//> public jQuery delegate(String selector, String eventType, (void fn(Object? eventObject)) func)
	delegate:vjo.NEEDS_IMPL,
	
	//> public jQuery error()
	//> public jQuery error((void fn()) errHandleFunc)
	error:vjo.NEEDS_IMPL,
	
	//> public jQuery focus()
	//> public jQuery focus((void fn(Object? eventObject)) func)
	focus:vjo.NEEDS_IMPL,
    
	//> public jQuery hover((void fn(Object? eventObject)) over, (void fn(Object? eventObject)) out)
    hover:vjo.NEEDS_IMPL,
    
	//> public jQuery keydown()
	//> public jQuery keydown((void fn(Object? eventObject)) func)
	keydown:vjo.NEEDS_IMPL,
	
	//> public jQuery keypress()
	//> public jQuery keypress((void fn(Object? eventObject)) func)
	keypress:vjo.NEEDS_IMPL,
	
	//> public jQuery keyup()
	//> public jQuery keyup(Function fn)
	keyup:vjo.NEEDS_IMPL,
	
	//combind load method with AJAX's
	//load:vjo.NEEDS_IMPL,
	
	//> public jQuery mousedown(Function fn)
	mousedown:vjo.NEEDS_IMPL,
	
	//> public jQuery mouseenter(Function fn)
	mouseenter:vjo.NEEDS_IMPL,
	
	//> public jQuery mouseleave(Function fn)
	mouseleave:vjo.NEEDS_IMPL,
	
	//> public jQuery mousemove(Function fn)
	mousemove:vjo.NEEDS_IMPL,
	
	//> public jQuery mouseout(Function fn)
	mouseout:vjo.NEEDS_IMPL,
	
	//> public jQuery mouseover(Function fn)
	mouseover:vjo.NEEDS_IMPL,
	
	//> public jQuery mouseup(Function fn)
	mouseup:vjo.NEEDS_IMPL,

	//> public jQuery resize(Function fn)
	resize:vjo.NEEDS_IMPL,
	
	//> public jQuery scroll(Function fn)
	scroll:vjo.NEEDS_IMPL,
	
	//> public jQuery select()
	//> public jQuery select(Function fn)
	select:vjo.NEEDS_IMPL,
	
	//> public jQuery submit()
	//> public jQuery submit(Function fn)
	submit:vjo.NEEDS_IMPL,
	
	// combind toggle menthod
	//toggle:vjo.NEEDS_IMPL,
		
	//> public jQuery unload(Function fn)
	unload:vjo.NEEDS_IMPL,

	/*Category: Effects - Basics @ http://docs.jquery.com/Effects */
	
	//> public jQuery show()
	//> public jQuery show(int speed)
	//> public jQuery show(String speed)
	//> public jQuery show(int speed,Function callback)
	//> public jQuery show(String speed,Function callback)
	show:vjo.NEEDS_IMPL,
	
	//> public jQuery hide()
	//> public jQuery hide(int speed)
	//> public jQuery hide(String speed)
	//> public jQuery hide(int speed, Function callback)
	//> public jQuery hide(String speed,Function callback)
	hide:vjo.NEEDS_IMPL,
	
	/* toggle method for event */
	//> public jQuery toggle(Function... funcs)
	//> public jQuery toggle(boolean flag)
	//> public jQuery toggle(int speed)
	//> public jQuery toggle(String speed)
	//> public jQuery toggle(int speed, Function callback)
	//> public jQuery toggle(String speed, Function callback)
	toggle:vjo.NEEDS_IMPL,

	/*Category: Effects - Sliding  @ http://docs.jquery.com/Effects */
	
	//> public jQuery slideDown(int speed)
	//> public jQuery slideDown(String speed)
	//> public jQuery slideDown(int speed, Function callback)
	//> public jQuery slideDown(String speed, Function callback)
	slideDown:vjo.NEEDS_IMPL,
	
	//> public jQuery slideUp(int speed)
	//> public jQuery slideUp(String speed)
	//> public jQuery slideUp(int speed,Function callback)
	//> public jQuery slideUp(String speed,Function callback)
	slideUp:vjo.NEEDS_IMPL,
	
	//> public jQuery slideToggle(int speed)
	//> public jQuery slideToggle(String speed)
	//> public jQuery slideToggle(int speed,Function callback)
	//> public jQuery slideToggle(String speed,Function callback)
	slideToggle:vjo.NEEDS_IMPL,
	
	/*Category: Effects - Fading  @ http://docs.jquery.com/Effects */
	
	//> public jQuery fadeIn(int speed)
	//> public jQuery fadeIn(String speed)
	//> public jQuery fadeIn(int speed,Function callback)
	//> public jQuery fadeIn(String speed,Function callback)
	fadeIn:vjo.NEEDS_IMPL,
	
	//> public jQuery fadeOut(int speed)
	//> public jQuery fadeOut(String speed)
	//> public jQuery fadeOut(int speed,Function callback)
	//> public jQuery fadeOut(String speed,Function callback)
	fadeOut:vjo.NEEDS_IMPL,
	
	//> public jQuery fadeTo(int speed,double opacity)
	//> public jQuery fadeTo(String speed,double opacity)
	//> public jQuery fadeTo(int speed,double opacity,Function callback)
	//> public jQuery fadeTo(String speed,double opacity,Function callback)
	fadeTo:vjo.NEEDS_IMPL,
	
	/*Category: Effects - Custom  @ http://docs.jquery.com/Effects */
	
	//>public jQuery animate(ObjLiteral params)
	//>public jQuery animate(ObjLiteral params, int duration)
	//>public jQuery animate(ObjLiteral params, String duration)
	//>public jQuery animate(ObjLiteral params, int duration, Function callback)
	//>public jQuery animate(ObjLiteral params, String duration, Function callback)
	//>public jQuery animate(ObjLiteral params, int duration, String easing)
	//>public jQuery animate(ObjLiteral params, String duration, String easing)
	//>public jQuery animate(ObjLiteral params, int duration, String easing,Function callback)
	//>public jQuery animate(ObjLiteral params, String duration, String easing,Function callback)	
	//>public jQuery animate(ObjLiteral params, ObjLiteral options)
	animate:vjo.NEEDS_IMPL,
		
	//> public jQuery stop()
	//> public jQuery stop(boolean clearQueue)
	//> public jQuery stop(boolean clearQueue,boolean gotoEnd)
	stop:vjo.NEEDS_IMPL,
	
	/*Category: Ajax - Ajax Requests @ http://docs.jquery.com/Ajax */
	/* following load is from core category */
	//> public jQuery load((void fn(Object? eventObject)) onLoadFunc)
	//> public jQuery load(String url)
	//> public jQuery load(String url, ObjLiteral data)
	//> public jQuery load(String url, String data)
	//> public jQuery load(String url, ObjLiteral data, Function callback)
	//> public jQuery load(String url, String data, Function callback)
	load:vjo.NEEDS_IMPL,
	
	/*Category: Ajax - Ajax Events  @ http://docs.jquery.com/Ajax */
	
	//> public jQuery ajaxComplete(Function callback)
	ajaxComplete:vjo.NEEDS_IMPL,
		
	//> public jQuery ajaxError(Function callback)
	ajaxError:vjo.NEEDS_IMPL,
	
	//> public jQuery ajaxSend(Function callback)
	ajaxSend:vjo.NEEDS_IMPL,
	
	//> public jQuery ajaxStart(Function callback)
	ajaxStart:vjo.NEEDS_IMPL,
	
	//> public jQuery ajaxStop(Function callback)
	ajaxStop:vjo.NEEDS_IMPL,
	
	//> public jQuery ajaxSuccess(Function callback)
	ajaxSuccess:vjo.NEEDS_IMPL,
	
	/*Category: Ajax - Misc  @ http://docs.jquery.com/Ajax */

	//> public String serialize()
	serialize:vjo.NEEDS_IMPL,
	
	//> public Array serializeArray()
	serializeArray:vjo.NEEDS_IMPL

})
.props({

    /*Category: Core - jQuery @ http://docs.jquery.com/Core */
	    
	//> public jQuery $(String selector)
	//> public jQuery $(String selector, Node context)
	//> public jQuery $(String selector, Element context)
   	//> public jQuery $(String selector, HTMLDocument document)
    //> public jQuery $(String selector, jQuery context)
	//> public jQuery $(Array elements)
	//> public jQuery $(Node element)
	//> public jQuery $(Element element)
	//> public jQuery $(HTMLDocument document)
   	//> public jQuery $(Function callback)   	
    //> public jQuery $(Window win)   	
	$:function(selector) {
		var instance; //<jQuery
    	if (arguments.length > 1) {
    		instance = $(selector, arguments[1]);
    	} else {
    		instance = $(selector);
    	}
    	return instance;
	},

	/*Category: Core - Plugins @ http://docs.jquery.com/Core*/
	
    //represents jQuery.fn
    fn: vjo.ctype() //< public
    .props({
    	//>public jQuery extend( Object object )
	    extend:vjo.NEEDS_IMPL
    })
    .endType(),
    
	//combind extend methods
	//extend:vjo.NEEDS_IMPL,
	
    /*Category: Core - Interoperability @ http://docs.jquery.com/Core */	

	//> public jQuery noConflict()
	//> public jQuery noConflict(boolean extreme)
	noConflict:vjo.NEEDS_IMPL,
	
	 /*Category: Effects - Settomgs @ http://docs.jquery.com/Effects */
	
	 fx:vjo.ctype()//<public
	 .props({
		 off:false //< public boolean
	 })
	 .endType(),
	 
	/*Category: Ajax - Ajax Requests @ http://docs.jquery.com/Ajax */
	
	
	//> public XMLHttpRequest ajax(ObjLiteral options)
	ajax:vjo.NEEDS_IMPL,

	//> public XMLHttpRequest get(String url)
	//> public XMLHttpRequest get(String url, ObjLiteral data)
	//> public XMLHttpRequest get(String url, ObjLiteral data, Function callback)
	//> public XMLHttpRequest get(String url, ObjLiteral data, Function callback, String type)
	get:vjo.NEEDS_IMPL,
	
	//> public XMLHttpRequest getJSON(String url)
	//> public XMLHttpRequest getJSON(String url, ObjLiteral data)
	//> public XMLHttpRequest getJSON(String url, ObjLiteral data, Function callback)
	getJSON:vjo.NEEDS_IMPL,
	
	//> public XMLHttpRequest getScript(String url)
	//> public XMLHttpRequest getScript(String url, Function callback)
	getScript:vjo.NEEDS_IMPL,
	
	//> public XMLHttpRequest post(String url)
	//> public XMLHttpRequest post(String url, ObjLiteral data)
	//> public XMLHttpRequest post(String url, ObjLiteral data, Function callback)
	post:vjo.NEEDS_IMPL,
		
	/*Category: Ajax - Misc  @ http://docs.jquery.com/Ajax */
	
	//> public void ajaxSetup(ObjLiteral options)
	ajaxSetup:vjo.NEEDS_IMPL,
	
	/*Category: Utilities - Browser and Feature Detection  @ http://docs.jquery.com/Utilities */
	
	support: {}, //< public final ObjLiteral	
	browser: {}, //< public final ObjLiteral
	//boxModel:false,     //< public final boolean
	
	/*Category: Utilities - Array and Object operations  @ http://docs.jquery.com/Utilities */
	
	//> public Object each(Object object, Function callback)
	each:vjo.NEEDS_IMPL,
	
	/* extend method for plugin */
	//> public jQuery extend( Object object )

	//> public Object extend(boolean deep, Object target, Object object1, Object... objectN)
	//> public Object extend(Object target, Object object1, Object... objectN)
	extend:vjo.NEEDS_IMPL,

	//> public Array grep(Array array,Function callback)
	//> public Array grep(Array array,Function callback,boolean invert)
	grep:vjo.NEEDS_IMPL,
	
	//> public Array makeArray(Object object)
	makeArray:vjo.NEEDS_IMPL,
	
	//> public Array map(Array array,Function callback)
	map:vjo.NEEDS_IMPL,
	
	//> public int inArray(Object value,Array array)
	inArray:vjo.NEEDS_IMPL,
	
	//> public Array merge(Array a1,Array a2)
	merge:vjo.NEEDS_IMPL,
	
	//> public Array unique(Array array)
	unique:vjo.NEEDS_IMPL,

	/*Category: Utilities - Test operations  @ http://docs.jquery.com/Utilities */
	
	//> public boolean isArray(Object object)
	isArray:vjo.NEEDS_IMPL,
	
	//> public boolean isFunction(Object oject)
	isFunction:vjo.NEEDS_IMPL,
	
	/*Category: Utilities - String operations  @ http://docs.jquery.com/Utilities */
	
	//> public String trim(String str)
	trim:vjo.NEEDS_IMPL,
	
	/*Category: Utilities - URLs  @ http://docs.jquery.com/Utilities */
	
	//> public String param(Object obj)
	param:vjo.NEEDS_IMPL,
	
	/*Category: Internals - Data Cache @ http://docs.jquery.com/Internals */
	
	//> public int data(Element elem)
	//> public Object data(Element elem,String name)
	//> public Object data(Element elem,String name,Object value)
	data:vjo.NEEDS_IMPL,
	
	//> public void removeData(Element elem)
	//> public void removeData(Element elem,String name)
	removeData:vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();
