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
/** section: DOM
   * class Event
   *
   *  The namespace for Prototype's event system.
   *
   *  ##### Events: a fine mess
   *
   *  Event management is one of the really sore spots of cross-browser
   *  scripting.
   *
   *  True, the prevalent issue is: everybody does it the W3C way, and MSIE
   *  does it another way altogether. But there are quite a few subtler,
   *  sneakier issues here and there waiting to bite your ankle &mdash; such as the
   *  `keypress`/`keydown` issue with KHTML-based browsers (Konqueror and
   *  Safari). Also, MSIE has a tendency to leak memory when it comes to
   *  discarding event handlers.
   *
   *  ##### Prototype to the rescue
   *
   *  Of course, Prototype smooths it over so well you'll forget these
   *  troubles even exist. Enter the [[Event]] namespace. It is replete with
   *  methods that help to normalize the information reported by events across
   *  browsers.
   *
   *  [[Event]] also provides a standardized list of key codes you can use with
   *  keyboard-related events, including `KEY_BACKSPACE`, `KEY_TAB`,
   *  `KEY_RETURN`, `KEY_ESC`, `KEY_LEFT`, `KEY_UP`, `KEY_RIGHT`, `KEY_DOWN`,
   *  `KEY_DELETE`, `KEY_HOME`, `KEY_END`, `KEY_PAGEUP`, `KEY_PAGEDOWN` and
   *  `KEY_INSERT`.
   *
   *  The functions you're most likely to use a lot are [[Event.observe]],
   *  [[Event.element]] and [[Event.stop]]. If your web app uses custom events,
   *  you'll also get a lot of mileage out of [[Event.fire]].
   *  
   *  ##### Instance methods on event objects
   *  As of Prototype 1.6, all methods on the `Event` object are now also 
   *  available as instance methods on the event object itself:
   *  
   *  **Before**
   *  
   *      $('foo').observe('click', respondToClick);
   *      
   *      function respondToClick(event) {
   *        var element = Event.element(event);
   *        element.addClassName('active');
   *      }
   *  
   *  **After**
   *  
   *      $('foo').observe('click', respondToClick);
   *      
   *      function respondToClick(event) {
   *        var element = event.element();
   *        element.addClassName('active');
   *      }
   *  
   *  These methods are added to the event object through [[Event.extend]],
   *  in the same way that `Element` methods are added to DOM nodes through 
   *  [[Element.extend]]. Events are extended automatically when handlers are 
   *  registered with Prototype's [[Event.observe]] method; if you're using a 
   *  different method of event registration, for whatever reason,you'll need to
   *  extend these events manually with [[Event.extend]].
  **/
vjo.ctype('org.prototypejs.Event') //< public
.props({
	/** 8 */
    KEY_BACKSPACE: null,	//< public int 
    /** 9 */
    KEY_TAB:       null,	//< public int 
    /** 13 */
    KEY_RETURN:   null,	//< public int 
    /** 27 */
    KEY_ESC:      null,	//< public int 
    /** 37 */
    KEY_LEFT:     null,	//< public int 
    /** 38 */
    KEY_UP:       null,	//< public int 
    /** 39 */
    KEY_RIGHT:    null,	//< public int 
    /** 40 */
    KEY_DOWN:     null,	//< public int 
    /** 46 */
    KEY_DELETE:   null,	//< public int 
    /** 36 */
    KEY_HOME:     null,	//< public int 
    /** 35 */
    KEY_END:      null,	//< public int 
    /** 33 */
    KEY_PAGEUP:   null,	//< public int 
    /** 34 */
    KEY_PAGEDOWN: null,	//< public int 
    /** 45 */
    KEY_INSERT:   null,	//< public int 

    /**
     * 
     */
    cache: null, //< public Object
	/**
   *  class Event.Handler
   *  
   *  Creates an observer on an element that listens for a particular event on
   *  that element's descendants, optionally filtering by a CSS selector.
   *  
   *  This class simplifies the common "event delegation" pattern, in which one
   *  avoids adding an observer to a number of individual elements and instead
   *  listens on a _common ancestor_ element.
   *  
   *  For more information on usage, see [[Event.on]].
  **/
	//> public
	Handler: vjo.ctype()
	.props({
		
	})
	.protos({
		/**
	     *  Event.Handler#start -> Event.Handler
	     *  
	     *  Starts listening for events. Returns itself.
	    **/
		//> public Event.Handler
		start: null,
		
		/**
		 *  Event.Handler#stop -> Event.Handler
		 *  
		 *  Stops listening for events. Returns itself.
		**/
		//> public Event.Handler
		stop: null,
		
		/**
     *  new Event.Handler(element, eventName[, selector], callback)
     *  - element (Element): The element to listen on.
     *  - eventName (String): An event to listen for. Can be a standard browser
     *    event or a custom event.
     *  - selector (String): A CSS selector. If specified, will call `callback`
     *    _only_ when it can find an element that matches `selector` somewhere
     *    in the ancestor chain between the event's target element and the
     *    given `element`.
     *  - callback (Function): The event handler function. Should expect two
     *    arguments: the event object _and_ the element that received the
     *    event. (If `selector` was given, this element will be the one that
     *    satisfies the criteria described just above; if not, it will be the
     *    one specified in the `element` argument).
     *  
     *  Instantiates an `Event.Handler`. **Will not** begin observing until
     *  [[Event.Handler#start]] is called.
    **/
		//> public constructs(Element element, String eventName, Function callback)
		//> public constructs(Element element, String eventName, String? cssSelector, Function? callback)
		constructs: function() {}
	})
	.endType(),
	
	/**
     *  Event.extend(@event) -> Event
     *  
     *  Extends `event` with all of the methods contained in `Event.Methods`.
     *  
     *  Note that all events inside handlers that were registered using 
     *  [[Event.observe]] or [[Element.observe]] will be extended automatically.
     *  
     *  You need only call `Event.extend` manually if you register a handler a 
     *  different way (e.g., the `onclick` attribute). We really can't encourage
     *  that sort of thing, though.
    **/
	//> public Event extend(Event event)
	extend: vjo.NEEDS_IMPL
})
.protos({
	
	/**
	 * @deprecated
	 */
	//> public Element element()
	element: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Event extend()
	extend: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element findElement(String? cssSelector)
	findElement: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean isLeftClick()
	isLeftClick: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean isMiddleClick()
	isMiddleClick: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean isRightClick()
	isRightClick: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object pointer()
	pointer: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number pointerX()
	pointerX: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number pointerY()
	pointerY: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void stop()
	stop: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();