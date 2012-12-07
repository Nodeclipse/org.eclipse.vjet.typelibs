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
vjo.mtype('org.prototypejs.Event_Methods') //< public

.props({
	/**
   *  Event.isLeftClick(@event) -> Boolean
   *
   *  Determines whether a button-related mouse event involved the left
   *  mouse button.
   *
   *  Keep in mind that the "left" mouse button is actually the "primary" mouse
   *  button. When a mouse is in left-handed mode, the browser will report
   *  clicks of the _right_ button as "left-clicks."
  **/
	//> public boolean isLeftClick(Event event)
	isLeftClick: vjo.NEEDS_IMPL,
	
	/**
   *  Event.isMiddleClick(@event) -> Boolean
   *
   *  Determines whether a button-related mouse event involved the middle
   *  mouse button.
  **/
	//> public boolean isMiddleClick(Event event)
	isMiddleClick: vjo.NEEDS_IMPL,
	
	/**
   *  Event.isRightClick(@event) -> Boolean
   *
   *  Determines whether a button-related mouse event involved the right
   *  mouse button.
   *
   *  Keep in mind that the "left" mouse button is actually the "secondary"
   *  mouse button. When a mouse is in left-handed mode, the browser will
   *  report clicks of the _left_ button as "left-clicks."
  **/
	//> public boolean isRightClick(Event event)
	isRightClick: vjo.NEEDS_IMPL,	
	
	/**
	 * 
	 */
	//> public Element element(Event event)
	element: vjo.NEEDS_IMPL,
	
	/**
   *  Event.findElement(@event[, expression]) -> Element
   *  - event (Event): An Event object
   *  - expression (String): An optional CSS selector
   *
   *  Returns the first DOM element that matches a given CSS selector &mdash;
   *  starting with the element on which the event occurred, then moving up
   *  its ancestor chain. If `expression` is not given, the element which fired
   *  the event is returned.
   *  
   *  *If no matching element is found, the document itself (`HTMLDocument` node)
   *  is returned.*
   *  
   *  ##### Example
   *  
   *  Here's a simple code that lets you click everywhere on the page and hides
   *  the closest-fitting paragraph around your click (if any).
   *  
   *      document.observe('click', function(event) {
   *        var element = Event.findElement(event, 'p');
   *        if (element != document)
   *          $(element).hide();
   *      });
  **/
	//> public Element findElement(Event event, String? cssSelector)
	findElement: vjo.NEEDS_IMPL,
	
	/**
   *  Event.pointer(@event) -> Object
   *
   *  Returns the absolute position of the pointer for a mouse event.
   *
   *  Returns an object in the form `{ x: Number, y: Number}`.
   *
   *  Note that this position is absolute on the _page_, not on the
   *  _viewport_.
  **/
	//> public Object pointer()
	pointer: vjo.NEEDS_IMPL,
	
	/**
   *  Event.pointerX(@event) -> Number
   *
   *  Returns the absolute horizontal position of the pointer for a mouse
   *  event.
   *
   *  Note that this position is absolute on the `<body>`, not on the
   *  viewport: scrolling right increases the returned value for events on
   *  the same viewport location.
  **/
	//> public Number pointerX()
	pointerX: vjo.NEEDS_IMPL,
	
	/**
   *  Event.pointerY(@event) -> Number
   *
   *  Returns the absolute vertical position of the pointer for a mouse
   *  event.
   *
   *  Note that this position is absolute on the `<body>`, not on the
   *  viewport: scrolling down increases the returned value for events on
   *  the same viewport location.
  **/
	//> public Number pointerY()
	pointerY: vjo.NEEDS_IMPL,
	
	/**
   *  Event.stop(@event) -> undefined
   *
   *  Stops the event's propagation and prevents its eventual default action
   *  from being triggered.
   *
   *  Stopping an event also sets a `stopped` property on that event for
   *  future inspection.
   *  
   *  There are two aspects to how your browser handles an event once it fires up:
   *  
   *  1. The browser usually triggers event handlers on the actual element the 
   *  event occurred on, then on its parent element, and so on and so forth, 
   *  until the document's root element is reached. This is called 
   *  *event bubbling*, and is the most common form of event propagation. You 
   *  may very well want to stop this propagation when you just handled an event, 
   *  and don't want it to keep bubbling up (or see no need for it).
   *  
   *  2. Once your code had a chance to process the event, the browser handles 
   *  it as well, if that event has a *default behavior*. For instance, clicking 
   *  on links navigates to them; submitting forms sends them over to the server 
   *  side; hitting the Return key in a single-line form field submits it; etc. 
   *  You may very well want to prevent this default behavior if you do your own 
   *  handling.
   *  
   *  Because stopping one of those aspects means, in 99.9% of the cases, 
   *  preventing the other one as well, Prototype bundles both in this `stop` 
   *  function. Calling it on an event object, stops propagation *and* prevents 
   *  the default behavior.
   *  
   *  ##### Example
   *  
   *  Here's a simple script that prevents a form from being sent to the server 
   *  side if certain field is empty.
   *  
   *      Event.observe('signinForm', 'submit', function(event) {
   *        var login = $F('login').strip();
   *        if ('' == login) {
   *          Event.stop(event);
   *          // Display the issue one way or another
   *        }
   *      });
  **/ 
	//> public void stop()
	stop: vjo.NEEDS_IMPL
})
.protos({
	
})
.endType();