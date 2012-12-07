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
 * Subset from Event.js.  These are functions NOT in the Event.Methods grouping
 */
vjo.mtype('org.prototypejs.Event_Ext2') //< public

.props({
	/**
   *  Event.fire(element, eventName[, memo[, bubble = true]]) -> Event
   *  - memo (?): Metadata for the event. Will be accessible to event
   *    handlers through the event's `memo` property.
   *  - bubble (Boolean): Whether the event should bubble.
   *
   *  Fires a custom event of name `eventName` with `element` as its target.
   *
   *  Custom events **must** include a colon (`:`) in their names.
  **/
	//> public Event fire(Element element, String eventName, Object? memo, boolean? bubble)
	fire: vjo.NEEDS_IMPL,
	
	/**
   *  Event.observe(element, eventName, handler) -> Element
   *  - element (Element | String): The DOM element to observe, or its ID.
   *  - eventName (String): The name of the event, in all lower case, without
   *    the "on" prefix&nbsp;&mdash; e.g., "click" (not "onclick").
   *  - handler (Function): The function to call when the event occurs.
   *
   *  Registers an event handler on a DOM element. Aliased as [[Element#observe]].
   *
   *  [[Event.observe]] smooths out a variety of differences between browsers
   *  and provides some handy additional features as well. Key features in brief:
   *  * Several handlers can be registered for the same event on the same element.
   *  * Prototype figures out whether to use `addEventListener` (W3C standard) or
   *    `attachEvent` (MSIE); you don't have to worry about it.
   *  * The handler is passed an _extended_ [[Event]] object (even on MSIE).
   *  * The handler's context (`this` value) is set to the extended element
   *    being observed (even if the event actually occurred on a descendent
   *    element and bubbled up).
   *  * Prototype handles cleaning up the handler when leaving the page
   *    (important for MSIE memory leak prevention).
   *  * [[Event.observe]] makes it possible to stop observing the event easily
   *    via [[Event.stopObserving]].
   *  * Adds support for `mouseenter` / `mouseleave` events in all browsers.
   *
   *  Although you can use [[Event.observe]] directly and there are times when
   *  that's the most convenient or direct way, it's more common to use its
   *  alias [[Element#observe]]. These two statements have the same effect:
   *
   *      Event.observe('foo', 'click', myHandler);
   *      $('foo').observe('click', myHandler);
   *
   *  The examples in this documentation use the [[Element#observe]] form.
   *
   *  ##### The Handler
   *
   *  Signature:
   *
   *      function handler(event) {
   *        // `this` = the element being observed
   *      }
   *
   *  So for example, this will turn the background of the element 'foo' blue
   *  when it's clicked:
   *
   *      $('foo').observe('click', function(event) {
   *        this.setStyle({backgroundColor: 'blue'});
   *      });
   *
   *  Note that we used `this` to refer to the element, and that we received the
   *  `event` object as a parameter (even on MSIE).
   *
   *  ##### It's All About Timing
   *
   *  One of the most common errors trying to observe events is trying to do it
   *  before the element exists in the DOM. Don't try to observe elements until
   *  after the [[document.observe dom:loaded]] event or `window` `load` event
   *  has been fired.
   *
   *  ##### Preventing the Default Event Action and Bubbling
   *
   *  If we want to stop the event (e.g., prevent its default action and stop it
   *  bubbling), we can do so with the extended event object's [[Event#stop]]
   *  method:
   *
   *      $('foo').observe('click', function(event) {
   *        event.stop();
   *      });
   *
   *  ##### Finding the Element Where the Event Occurred
   *
   *  Since most events bubble from descendant elements up through the hierarchy
   *  until they're handled, we can observe an event on a container rather than
   *  individual elements within the container. This is sometimes called "event
   *  delegation". It's particularly handy for tables:
   *
   *      language: html
   *      <table id='records'>
   *        <thead>
   *          <tr><th colspan='2'>No record clicked</th></tr>
   *        </thead>
   *        <tbody>
   *          <tr data-recnum='1'><td>1</td><td>First record</td></tr>
   *          <tr data-recnum='2'><td>2</td><td>Second record</td></tr>
   *          <tr data-recnum='3'><td>3</td><td>Third record</td></tr>
   *        </tbody>
   *      </table>
   *
   *  Instead of observing each cell or row, we can simply observe the table:
   *
   *      $('records').observe('click', function(event) {
   *        var clickedRow = event.findElement('tr');
   *        if (clickedRow) {
   *          this.down('th').update("You clicked record #" + clickedRow.readAttribute("data-recnum"));
   *        }
   *      });
   *
   *  When any row in the table is clicked, we update the table's first header
   *  cell saying which record was clicked. [[Event#findElement]] finds the row
   *  that was clicked, and `this` refers to the table we were observing.
   *
   *  ##### Stopping Observing the Event
   *
   *  If we don't need to observe the event anymore, we can stop observing it
   *  with [[Event.stopObserving]] or its [[Element#stopObserving]] alias.
   *
   *  ##### Using an Instance Method as a Handler
   *
   *  If we want to use an instance method as a handler, we will probably want
   *  to use [[Function#bind]] to set the handler's context; otherwise, the
   *  context will be lost and `this` won't mean what we expect it to mean
   *  within the handler function. E.g.:
   *
   *      var MyClass = Class.create({
   *        initialize: function(name, element) {
   *          this.name = name;
   *          element = $(element);
   *          if (element) {
   *            element.observe(this.handleClick.bind(this));
   *          }
   *        },
   *        handleClick: function(event) {
   *          alert("My name is " + this.name);
   *        },
   *      });
   *
   *  Without the [[Function#bind]], when `handleClick` was triggered by the
   *  event, `this` wouldn't refer to the instance and so the alert wouldn't
   *  show the name. Because we used [[Function#bind]], it works correctly. See
   *  [[Function#bind]] for details. There's also [[Function#bindAsEventListener]],
   *  which is handy for certain very specific situations. (Normally,
   *  [[Function#bind]] is all you need.)
   *
   *  ##### Side Notes
   *
   *  Although Prototype smooths out most of the differences between browsers,
   *  the fundamental behavior of a browser implementation isn't changed. For
   *  example, the timing of the `change` or `blur` events varies a bit from
   *  browser to browser.
   *
   *  ##### Changes in 1.6.x
   *
   *  Prior to Prototype 1.6, [[Event.observe]] supported a fourth argument
   *  (`useCapture`), a boolean that indicated whether to use the browser's
   *  capturing phase or its bubbling phase. Since MSIE does not support the
   *  capturing phase, we removed this argument from 1.6, lest it give users the
   *  false impression that they can use the capturing phase in all browsers.
   *
   *  1.6 also introduced setting the `this` context to the element being
   *  observed, automatically extending the [[Event]] object, and the
   *  [[Event#findElement]] method.
  **/
	//> public Element observe(Element element, String eventName, Function handler)
	observe: vjo.NEEDS_IMPL,	
	
	/**
   *  Event.on(element, eventName[, selector], callback) -> Event.Handler
   *  - element (Element | String): The DOM element to observe, or its ID.
   *  - eventName (String): The name of the event, in all lower case, without
   *    the "on" prefix&nbsp;&mdash; e.g., "click" (not "onclick").
   *  - selector (String): A CSS selector. If specified, will call `callback`
   *    _only_ when it can find an element that matches `selector` somewhere
   *    in the ancestor chain between the event's target element and the
   *    given `element`.
   *  - callback (Function): The event handler function. Should expect two
   *    arguments: the event object _and_ the element that received the
   *    event. (If `selector` was given, this element will be the one that
   *    satisfies the criteria described just above; if not, it will be the
   *    one specified in the `element` argument). This function is **always**
   *    bound to `element`.
   *  
   *  Listens for events on an element's descendants, optionally filtering
   *  to match a given CSS selector.
   *  
   *  Creates an instance of [[Event.Handler]], calls [[Event.Handler#start]],
   *  then returns that instance. Keep a reference to this returned instance if
   *  you later want to unregister the observer.
   *  
   *  ##### Usage
   *  
   *  `Event.on` can be used to set up event handlers with or without event
   *  delegation. In its simplest form, it works just like [[Event.observe]]:
   *  
   *      $("messages").on("click", function(event) {
   *        // ...
   *      });
   *  
   *  An optional second argument lets you specify a CSS selector for event
   *  delegation. This encapsulates the pattern of using [[Event#findElement]]
   *  to retrieve the first ancestor element matching a specific selector.
   *  
   *      $("messages").on("click", "a.comment", function(event, element) {
   *         // ...
   *      });
   *  
   *  Note the second argument in the handler above: it references the
   *  element matched by the selector (in this case, an `a` tag with a class
   *  of `comment`). This argument is important to use because within the
   *  callback, the `this` keyword **will always refer to the original
   *  element** (in this case, the element with the id of `messages`).
   *  
   *  `Event.on` differs from `Event.observe` in one other important way:
   *  its return value is an instance of [[Event.Handler]]. This instance
   *  has a `stop` method that will remove the event handler when invoked
   *  (and a `start` method that will attach the event handler again after
   *  it's been removed).
   *  
   *      // Register the handler:
   *      var handler = $("messages").on("click", "a.comment",
   *       this.click.bind(this));
   *  
   *      // Unregister the handler:
   *      handler.stop();
   *  
   *      // Re-register the handler:
   *      handler.start();
   *  
   *  This means that, unlike `Event.stopObserving`, there's no need to
   *  retain a reference to the handler function.
  **/
	//> public Event.Handler on(Element element, String eventName, String cssSelector, Function? callback)
	//> public Event.Handler on(Element element, String eventName, Function? callback)
	on: vjo.NEEDS_IMPL,
	
	/**
   *  Event.stopObserving(element[, eventName[, handler]]) -> Element
   *  - element (Element | String): The element to stop observing, or its ID.
   *  - eventName (String): _(Optional)_ The name of the event to stop
   *    observing, in all lower case, without the "on"&nbsp;&mdash; e.g.,
   *    "click" (not "onclick").
   *  - handler (Function): _(Optional)_ The handler to remove; must be the
   *    _exact same_ reference that was passed to [[Event.observe]].
   *
   *  Unregisters one or more event handlers.
   *
   *  If `handler` is omitted, unregisters all event handlers on `element`
   *  for that `eventName`. If `eventName` is also omitted, unregisters _all_
   *  event handlers on `element`. (In each case, only affects handlers
   *  registered via Prototype.)
   *
   *  ##### Examples
   *
   *  Assuming:
   *
   *      $('foo').observe('click', myHandler);
   *
   *  ...we can stop observing using that handler like so:
   *
   *      $('foo').stopObserving('click', myHandler);
   *
   *  If we want to remove _all_ 'click' handlers from 'foo', we leave off the
   *  handler argument:
   *
   *      $('foo').stopObserving('click');
   *
   *  If we want to remove _all_ handlers for _all_ events from 'foo' (perhaps
   *  we're about to remove it from the DOM), we simply omit both the handler
   *  and the event name:
   *
   *      $('foo').stopObserving();
   *
   *  ##### A Common Error
   *
   *  When using instance methods as observers, it's common to use
   *  [[Function#bind]] on them, e.g.:
   *
   *      $('foo').observe('click', this.handlerMethod.bind(this));
   *
   *  If you do that, __this will not work__ to unregister the handler:
   *
   *      $('foo').stopObserving('click', this.handlerMethod.bind(this)); // <== WRONG
   *
   *  [[Function#bind]] returns a _new_ function every time it's called, and so
   *  if you don't retain the reference you used when observing, you can't
   *  unhook that function specifically. (You can still unhook __all__ handlers
   *  for an event, or all handlers on the element entirely.)
   *
   *  To do this, you need to keep a reference to the bound function:
   *
   *      this.boundHandlerMethod = this.handlerMethod.bind(this);
   *      $('foo').observe('click', this.boundHandlerMethod);
   *
   *  ...and then to remove:
   *
   *      $('foo').stopObserving('click', this.boundHandlerMethod); // <== Right
  **/
	//> public Element stopObserving(Element element, String? event, Function? handler)
	stopObserving: vjo.NEEDS_IMPL	
})
.protos({
	
})
.endType();