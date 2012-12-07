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
vjo.ctype('org.dojotoolkit.Dojo') //< public
//<needs(org.dojotoolkit.DojoAuxiliary)
.globals({
	dojo : undefined //<<type::Dojo
})
.props({
	baseUrl : null, //<public String
	boxModel : null, //<public String
	global : null, //<public Object
	isAir : null, //<public Number
	isBrowser : false, //<public boolean
	isChrome : null, //<public Number
	isFF : null, //<public Number
	isIE : null, //<public Number
	isKhtml : null, //<public Number
	isMoz : null, //<public Object
	isMozilla : null, //<public Number
	isOpera : null, //<public Number
	isQuirks : null, //<public boolean
	isRhino : null, //<public Object
	isSafari : null, //<public Number
	isSpidermonkey : null, //<public Object
	isWebKit : null, //<public Number
	jaxer : null, //<public Object
	locale : null, //<public Object
	NodeListFx : null, //<public Object
	NodeListHtml : null, //<public Object
	nonDebugProvide : null, //<public Object
	parser : null, //<public Object
	requireAfterIf : null, //<public Object
	robot : null, //<public Object
	robotx : null, //<public Object
	tests : null, //<public Object
	toJsonIndentStr : null, //<public String
	
	//CONSTRUCTS
	
	//FUNCTIONS
	
	/**
	 * Adds the specified classes to the end of the class list on the passed node.
	 * Will not re-apply duplicate classes
	 */
	//>public void addClass({Node|String} node, {String|Array} class)
	addClass : vjo.NEEDS_IMPL,
	
	/**
	 * Registers a function to be triggered after the DOM has finished loading and dojo.require modules have loaded.
	 * Widgets declared in markup have been instantiated if djConfig.parseOnLoad is true when this fires.
	 * Images and CSS files may or may not have finished downloading when the specified function is called.
	 * (Note that widgets' CSS and HTML code is guaranteed to be downloaded before said widgets are instantiated,
	 * though including css resouces BEFORE any script elements is highly recommended).
	 */
	//>public void addOnLoad(Object obj, {Function|String} func)
	//>public void addOnLoad(Function func)
	addOnLoad : vjo.NEEDS_IMPL,
	
	//>public void addOnUnload(Object obj, {Function|String} func)
	//>public void addOnUnload(Function func)
	addOnUnload : vjo.NEEDS_IMPL,
	
	/**
	 * registers a function to be triggered when window.onunload fires.
	 * Be careful trying to modify the DOM or access JavaScript properties during this phase of page unloading:
	 * they may not always be available. Consider dojo.addOnUnload() if you need to modify the DOM or do heavy JavaScript work.
	 */
	//>public void addOnWindowUnload(Object obj, {Function|String} func)
	//>public void addOnWindowUnload(Function func)
	addOnWindowUnload : vjo.NEEDS_IMPL,
	
	/**
	 * dojo.anim is a simpler (but somewhat less powerful) version of dojo.animateProperty.
	 * It uses defaults for many basic properties and allows for positional parameters to be used
	 * in place of the packed "property bag" which is used for other Dojo animation methods.
	 * The dojo.Animation object returned from dojo.anim will be already playing when it is returned
	 * from this function, so calling play() on it again is (usually) a no-op.
	 */
	//>public void anim({String|Node} node, Object properties, int? duration, (boolean fn(int index))? easing, (void onEnd(Node node))? onEnd, int? delay)
	anim : vjo.NEEDS_IMPL,
	
	/**
	 * The standard animation doesn't know what to do with something like rect(...).
	 * This class identifies complex properties by they being a string and having parenthesis.
	 * If so, that property is made into a dojox.fx._Complex object and the getValue() is obtained from there.
	 */
	//>public Dojo.Animation animateProperty(DojoAuxiliary::animArgs args)
	animateProperty : vjo.NEEDS_IMPL,	

	/**
	 * Handles normalized getting and setting of attributes on DOM Nodes.
	 * If 2 arguments are passed, and a the second argumnt is a string, acts as a getter.
	 * If a third argument is passed, or if the second argument is a map of attributes, acts as a setter.
	 * When passing functions as values, note that they will not be directly assigned to slots on the node,
	 * but rather the default behavior will be removed and the new behavior will be added using dojo.connect(),
	 * meaning that event handler properties will be normalized and that some caveats with regards to
	 * non-standard behaviors for onsubmit apply. Namely that you should cancel form submission using
	 * dojo.stopEvent() on the passed event object instead of returning a boolean value from the handler itself.
	 */
	//>public Object attr({Element|String} node, String name)
	//>public Element attr({Element|String} node, String name, String value)
	attr : vjo.NEEDS_IMPL,
	
	/**
	 * Blend colors end and start with weight from 0 to 1, 0.5 being a 50/50 blend,
	 * can reuse a previously allocated dojo.Color object for the result
	 */
	//>public Dojo.Color blendColors(Dojo.Color start, Dojo.Color end, Number weight, Dojo.Color? obj)
	blendColors : vjo.NEEDS_IMPL,
	
	/**
	 * Return the body element of the document return the body object associated with dojo.doc
	 */
	//>public HTMLElement body()
	body : vjo.NEEDS_IMPL,
	
	/**
	 * Returns DOM node with matching id attribute or null if not found. If id is a DomNode, this function is a no-op
	 */
	//>public HTMLElement byId({String|Node} id, Document? doc)
	byId : vjo.NEEDS_IMPL,
	
	/**
	 * Clones objects (including DOM nodes) and all children. Warning: do not clone cyclic structures.
	 */
	//>public Object clone(Object o)
	clone : vjo.NEEDS_IMPL,
	
	/**
	 * Builds a dojo.Color from a 3 or 4 element array, mapping each element in sequence to the rgb(a) values of the color.
	 * If obj is passed, it will be the return value.
	 */
	//>public Dojo.Color colorFromArray(Array a, Dojo.Color? obj)
	colorFromArray : vjo.NEEDS_IMPL,
	
	/**
	 * Converts a hex string with a '#' prefix to a color object. Supports 12-bit #rgb shorthand.
	 * Optionally accepts a dojo.Color object to update with the parsed value.
	 * If obj is passed, it will be the return value.
	 */
	//>public Dojo.Color colorFromHex(String color, Dojo.Color? obj)
	colorFromHex : vjo.NEEDS_IMPL,

	/**
	 * This function can handle all 4 CSS3 Color Module formats: rgb, rgba, hsl, hsla,
	 * including rgb(a) with percentage values.
	 * If obj is passed, it will be the return value.
	 */
	//>public Dojo.Color colorFromRgb(String color, Dojo.Color? obj)
	colorFromRgb : vjo.NEEDS_IMPL,
	
	/**
	 * Acceptable input values for str may include arrays of any form accepted by dojo.colorFromArray,
	 * hex strings such as "#aaaaaa", or rgb or rgba strings such as "rgb(133, 200, 16)" or "rgba(10, 10, 10, 50)"
	 * If obj is passed, it will be the return value.
	 */
	//>public Dojo.Color colorFromString(String color, Dojo.Color? obj)
	colorFromString : vjo.NEEDS_IMPL,
	
	/**
	 * Connects listeners to actions, so that after event fires, a listener is called with the same arguments
	 * passed to the original function. Since dojo.connect allows the source of events to be either a "regular"
	 * JavaScript function or a DOM event, it provides a uniform interface for listening to all the types of events
	 * that an application is likely to deal with though a single, unified interface. DOM programmers may want
	 * to think of it as "addEventListener for everything and anything". When setting up a connection,
	 * the event parameter must be a string that is the name of the method/event to be listened for.
	 * If obj is null, dojo.global is assumed, meaning that connections to global methods are supported
	 * but also that you may inadvertently connect to a global by passing an incorrect object name or invalid reference.
	 * dojo.connect generally is forgiving. If you pass the name of a function or method that does not yet exist on obj,
	 * connect will not fail, but will instead set up a stub method. Similarly, null arguments may simply be omitted
	 * such that fewer than 4 arguments may be required to set up a connection See the examples for details.
	 * The return value is a handle that is needed to remove this connection with dojo.disconnect.
	 */
	//>public Dojo.Handle connect(Object obj, String event, Object context, {Function|String} method, boolean? dontFix)
	//>public Dojo.Handle connect(Object obj, String event, {Function|String} method, boolean? dontFix)
	//>public Dojo.Handle connect(String event, Object context, {Function|String} method, boolean? dontFix)
	//>public Dojo.Handle connect(String event, {Function|String} method, boolean? dontFix)
	connect : vjo.NEEDS_IMPL,
	
	/**
	 * Ensure that every time obj.event() is called, a message is published on the topic.
	 * Returns a handle which can be passed to dojo.disconnect() to disable subsequent automatic publication on the topic.
	 */
	//>public Dojo.Handle connectPublisher(String topic, Object obj, String event)
	//>public Dojo.Handle connectPublisher(String topic, String event)
	connectPublisher : vjo.NEEDS_IMPL,
	
	/**
	 * Returns an object in the expected format of box (regardless if box is passed).
	 * The object might look like: { l: 50, t: 200, w: 300: h: 150 } for a node offset from its parent
	 * 50px to the left, 200px from the top with a content width of 300px and a content-height of 150px.
	 * Note that the content box may have a much larger border or margin box,
	 * depending on the box model currently in use and CSS values set/inherited for node.
	 * While the getter will return top and left values, the setter only accepts setting the width and height.
	 */
	//>public Object contentBox({Node|String} node)
	//>public void contentBox({Node|String} node, Object box)
	contentBox : vjo.NEEDS_IMPL,
	
	/**
	 * Returns an object that measures margin-box (w)idth/(h)eight and absolute position x/y of the border-box.
	 * Also returned is computed (l)eft and (t)op values in pixels from the node's offsetParent as returned from marginBox().
	 * Return value will be in the form: { l: 50, t: 200, w: 300: h: 150, x: 100, y: 300 } Does not act as a setter.
	 * If includeScroll is passed, the x and y params are affected as one would expect in dojo.position().
	 */
	//>public DojoAuxiliary::coords coords({Node|String} node, boolean? includeScroll)
	coords : vjo.NEEDS_IMPL,
	
	/**
	 * A DOM Element creation function. A shorthand method for creating a node or a fragment,
	 * and allowing for a convenient optional attribute setting step, as well as an optional DOM placement reference.
	 * Attributes are set by passing the optional object through dojo.attr.
	 * See dojo.attr for noted caveats and nuances, and API if applicable.
	 * Placement is done via dojo.place, assuming the new node to be the action node,
	 * passing along the optional reference node and position.
	 */
	//>public HTMLElement create(String tag, Object? attrs, HTMLElement? refNode, String? pos)
	//>public HTMLElement create(Node node, Object attrs, HTMLElement? refNode, String? pos)
	create : vjo.NEEDS_IMPL,
	
	/**
	 * Create a constructor using a compact notation for inheritance and prototype extension.
	 * Mixin ancestors provide a type of multiple inheritance. Prototypes of mixin ancestors are copied to the new class:
	 * changes to mixin prototypes will not affect classes to which they have been mixed in. Ancestors can be
	 * compound classes created by this version of dojo.declare. In complex cases all base classes are going to
	 * be linearized according to C3 MRO algorithm (see http://www.python.org/download/releases/2.3/mro/ for more details).
	 * "className" is cached in "declaredClass" property of the new class, if it was supplied. The immediate super class
	 * will be cached in "superclass" property of the new class. Methods in "props" will be copied and modified: "nom" property
	 * (the declared name of the method) will be added to all copied functions to help identify them for the internal machinery.
	 * Be very careful, while reusing methods: if you use the same function under different names, it can produce errors in some cases.
	 * It is possible to use constructors created "manually" (without dojo.declare) as bases. They will be called as usual during
	 * the creation of an instance, their methods will be chained, and even called by "this.inherited()". Special property "-chains-"
	 * governs how to chain methods. It is a dictionary, which uses method names as keys, and hint strings as values. If a hint string
	 * is "after", this method will be called after methods of its base classes. If a hint string is "before", this method will be
	 * called before methods of its base classes. If "constructor" is not mentioned in "-chains-" property, it will be chained using
	 * the legacy mode: using "after" chaining, calling preamble() method before each constructor, if available, and calling postscript()
	 * after all constructors were executed. If the hint is "after", it is chained as a regular method, but postscript() will be called
	 * after the chain of constructors. "constructor" cannot be chained "before", but it allows a special hint string: "manual",
	 * which means that constructors are not going to be chained in any way, and programmer will call them manually using this.inherited().
	 * In the latter case postscript() will be called after the construction. All chaining hints are "inherited" from base classes and
	 * potentially can be overridden. Be very careful when overriding hints! Make sure that all chained methods can work in a proposed
	 * manner of chaining. Once a method was chained, it is impossible to unchain it. The only exception is "constructor".
	 * You don't need to define a method in order to supply a chaining hint. If a method is chained, it cannot use this.inherited()
	 * because all other methods in the hierarchy will be called automatically. Usually constructors and initializers of any kind are
	 * chained using "after" and destructors of any kind are chained as "before". Note that chaining assumes that chained methods do not
	 * return any value: any returned value will be discarded.
	 */
	//>public Function declare({Function|Function[]} superclass, Object props)
	//>public Function declare(String className, {Function|Function[]} superclass, Object props)
	declare : vjo.NEEDS_IMPL,
	
	/**
	 * This is a small implementaton of the Boodman/Crockford delegation pattern in JavaScript.
	 * An intermediate object constructor mediates the prototype chain for the returned object,
	 * using it to delegate down to obj for property lookup when object-local lookup fails.
	 * This can be thought of similarly to ES4's "wrap", save that it does not act on types
	 * but rather on pure objects.
	 * 
	 * Note: delegate is different from instance mixin
	 */
	//>public Object delegate(Object obj, Object props)
	delegate : vjo.NEEDS_IMPL,	
	
	/**
	 * Log a debug message to indicate that a behavior has been deprecated.
	 */
	//>public void deprecated(String behaviour, String? extra, String? removal)
	deprecated : vjo.NEEDS_IMPL,
	
	/**
	 * Removes a node from its parent, clobbering it and all of its children.
	 * Function only works with DomNodes, and returns nothing.
	 */
	//>public void destroy({Node|String} node)
	destroy : vjo.NEEDS_IMPL,
	
	/**
	 * Removes the connection between event and the method referenced by handle.
	 */
	//>public void disconnect(Dojo.Handle handle)
	disconnect : vjo.NEEDS_IMPL,
	
	/**
	 * Safely removes all children of the node.
	 */
	//>public void empty({Element|String} node)
	empty : vjo.NEEDS_IMPL,
	
	//>public Object eval(String scriptFragment)
	eval : vjo.NEEDS_IMPL,
	
	/**
	 * This function corresponds to the JavaScript 1.6 Array.every() method,
	 * with one difference: when run over sparse arrays, this implemenation passes
	 * the "holes" in the sparse array to the callback function with a value of undefined.
	 * JavaScript 1.6's every skips the holes in the sparse array. For more details,
	 * see: https://developer.mozilla.org/en/CoreJavaScript1.5_Reference/Objects/Array/every
	 */
	//>public void every({Array|String} arr, {Function|String} callback, Object thisObject)
	every : vjo.NEEDS_IMPL,
	
	//>public boolean exists(String name, Object? obj)
	exists : vjo.NEEDS_IMPL,
	
	//>public void exit(String exitcode)
	exit : vjo.NEEDS_IMPL,
	
	/**
	 * This can be used to mark a function, file, or module as experimental.
	 * Experimental code is not ready to be used, and the APIs are subject to change without notice.
	 * Experimental code may be completed deleted without going through the normal deprecation process.
	 */
	//>public void experiment(String moduleName, String? extra)
	experiment : vjo.NEEDS_IMPL,

	/**
	 * Adds all properties and methods of props to constructor's prototype,
	 * making them available to all instances created with constructor.
	 */
	//>public Object extend(Object constructor, Object... props)
	extend : vjo.NEEDS_IMPL,	
	
	/**
	 * Returns an animation that will fade node defined in 'args' from its current opacity to fully opaque.
	 */
	//>public Dojo.Animation fadeIn(DojoAuxiliary::fadeArgs args)
	fadeIn : vjo.NEEDS_IMPL,
	
	/**
	 * Returns an animation that will fade node defined in 'args' from its current opacity to fully transparent.
	 */
	//>public Dojo.Animation fadeOut(DojoAuxiliary::fadeArgs args)
	fadeOut : vjo.NEEDS_IMPL,
	
	/**
	 * Returns the value encoded in a form field as as a string or an array of strings.
	 * Disabled form elements and unchecked radio and checkboxes are skipped.
	 * Multi-select elements are returned as an array of string values.
	 */
	//>public {String|String[]} fieldToObject({Node|String} inputNode)
	fieldToObject : vjo.NEEDS_IMPL,
	
	/**
	 * This function corresponds to the JavaScript 1.6 Array.filter() method, with one difference:
	 * when run over sparse arrays, this implemenation passes the "holes" in the sparse array to
	 * the callback function with a value of undefined. JavaScript 1.6's filter skips the holes in the sparse array.
	 * For more details, see: https://developer.mozilla.org/en/CoreJavaScript1.5_Reference/Objects/Array/filter
	 */
	//>public Array filter(Array arr, {(boolean fn(Object item))|String} callback, Object? thisObject)
	filter : vjo.NEEDS_IMPL,
	
	/**
	 * Normalizes properties on the event object including event bubbling methods,
	 * keystroke normalization, and x/y positions
	 */
	//>public void fixEvent(Event evt, HTMLElement sender)
	fixEvent : vjo.NEEDS_IMPL,
	
	/**
	 * This function corresponds to the JavaScript 1.6 Array.forEach() method,
	 * with one difference: when run over sparse arrays, this implemenation passes the "holes"
	 * in the sparse array to the callback function with a value of undefined.
	 * JavaScript 1.6's forEach skips the holes in the sparse array. For more details,
	 * see: https://developer.mozilla.org/en/CoreJavaScript1.5_Reference/Objects/Array/forEach
	 */
	//>public void forEach({Array|String} arr, {Function|String} callback, Object? thisObject)
	forEach : vjo.NEEDS_IMPL,
	
	/**
	 * Create a serialized JSON string from a form node or string ID identifying the form to serialize
	 */
	//>public String formToJson({Node|String} formNode, boolean? prettyPrint)
	formToJson : vjo.NEEDS_IMPL,
	
	/**
	 * Returns the values encoded in an HTML form as string properties in an object which it then returns.
	 * Disabled form elements, buttons, and other non-value form elements are skipped.
	 * Multi-select elements are returned as an array of string values.
	 */
	//>public Object formToObject({Node|String} formNode)
	formToObject : vjo.NEEDS_IMPL,
	
	/**
	 * Returns a URL-encoded string representing the form passed as either a node
	 * or string ID identifying the form to serialize
	 */
	//>public String formToQuery({Node|String} formNode)
	formToQuery : vjo.NEEDS_IMPL,
	
	/**
	 * Throws for invalid JSON strings, but it does not use a strict JSON parser. It delegates to eval().
	 * The content passed to this method must therefore come from a trusted source.
	 */
	//>public Object fromJson(String json)
	fromJson : vjo.NEEDS_IMPL,
	
	/**
	 * Gets a "computed style" object which can be used to gather information about the current state of
	 * the rendered node. Note that this may behave differently on different browsers.
	 * Values may have different formats and value encodings across browsers.
	 * Note also that this method is expensive. Wherever possible, reuse the returned object.
	 * Use the dojo.style() method for more consistent (pixelized) return values.
	 */
	//>public DojoAuxiliary::CSS2Properties getComputedStyle(Node node)
	getComputedStyle : vjo.NEEDS_IMPL,
	
	/**
	 * Returns an effective value of a property or an attribute.
	 */
	//>public Object getNodeProp({Node|String} node, String name)
	getNodeProp: vjo.NEEDS_IMPL,
	
	//>public Object getObject(String name, boolean? create, Object? context)
	getObject : vjo.NEEDS_IMPL,
	
	/**
	 * Returns true if the requested attribute is specified on the given element, and false otherwise.
	 */
	//>public boolean hasAttr({Node|String} node, String name)
	hasAttr : vjo.NEEDS_IMPL,
	
	/**
	 * Returns whether or not the specified classes are a portion of the class list currently applied to the node.
	 */
	//>public boolean hasClass({Node|String} node, String classStr)
	hasClass : vjo.NEEDS_IMPL,
	
	/**
	 * Handles getting and setting of location.hash.
	 * - If no arguments are passed, acts as a getter. - If a string is passed, acts as a setter.
	 */
	//>public String hash()
	//>public void hash(String hash, boolean? replace)
	hash : vjo.NEEDS_IMPL,
	
	/**
	 * Returns a function that will only ever execute in the a given scope.
	 * This allows for easy use of object member functions in callbacks and other places in which
	 * the "this" keyword may otherwise not reference the expected scope.
	 * Any number of default positional arguments may be passed as parameters beyond "method".
	 * Each of these values will be used to "placehold" (similar to curry) for the hitched function.
	 */
	//>public Function hitch(Object scope, {Function|String} method)
	hitch : vjo.NEEDS_IMPL,
	
	/**
	 * This method corresponds to the JavaScript 1.6 Array.indexOf method, with one difference:
	 * when run over sparse arrays, the Dojo function invokes the callback for every index whereas
	 * JavaScript 1.6's indexOf skips the holes in the sparse array. For details on this method,
	 * see: https://developer.mozilla.org/en/CoreJavaScript1.5_Reference/Objects/Array/indexOf
	 */
	//>public int indexOf(Array array, Object value, int? fromIndex, boolean? findLast)
	indexOf : vjo.NEEDS_IMPL,

	/**
	 * Returns true if it is a built-in function or some other kind of oddball that *should* report
	 * as a function but doesn't
	 */
	//>public boolean isAlien(Object it)
	isAlien : vjo.NEEDS_IMPL,

	/**
	 * Return true if it is an Array. Does not work on Arrays created in other windows.
	 */
	//>public boolean isArray(Object it)
	isArray : vjo.NEEDS_IMPL,

	/**
	 * Doesn't strongly test for "arrayness". Instead, settles for "isn't a string or number and
	 * has a length property". Arguments objects and DOM collections will return true when passed
	 * to dojo.isArrayLike(), but will return false when passed to dojo.isArray().
	 */
	//>public boolean isArrayLike(Object it)
	isArrayLike : vjo.NEEDS_IMPL,
	
	/**
	 * Checks an event for the copy key (meta on Mac, and ctrl anywhere else)
	 */
	//>public boolean isCopyKey(Event e)
	isCopyKey : vjo.NEEDS_IMPL,

	/**
	 * Returns true if node is a descendant of ancestor
	 */
	//>public boolean isDescendant({Node|String} node, {Node|String} ancestor)
	isDescendant : vjo.NEEDS_IMPL,

	/**
	 * Return true if it is a Function
	 */
	//>public boolean isFunction(Object it)
	isFunction : vjo.NEEDS_IMPL,

	/**
	 * Returns true if it is a JavaScript object (or an Array, a Function or null)
	 */
	//>public boolean isObject(Object it)
	isObject : vjo.NEEDS_IMPL,

	/**
	 * Return true if it is a String
	 */
	//>public boolean isString(Object it)
	isString : vjo.NEEDS_IMPL,
	
	/**
	 * This method corresponds to the JavaScript 1.6 Array.lastIndexOf method, with one difference:
	 * when run over sparse arrays, the Dojo function invokes the callback for every index whereas
	 * JavaScript 1.6's lastIndexOf skips the holes in the sparse array. For details on this method,
	 * see: https://developer.mozilla.org/en/CoreJavaScript1.5_Reference/Objects/Array/lastIndexOf
	 */
	//>public int lastIndexOf(Array array, Object value, int? fromIndex)
	lastIndexOf : vjo.NEEDS_IMPL,

	/**
	 * This function is mainly a marker for the xdomain loader to know parts of code that needs be
	 * executed outside the function wrappper that is placed around modules. The init function could be
	 * executed more than once, and it should make no assumptions on what is loaded, or what modules are available.
	 * Only the functionality in Dojo Base is allowed to be used. Avoid using this method.
	 * For a valid use case, see the source for dojox.gfx.
	 */
	//>public void loadInit(Function init)
	loadInit : vjo.NEEDS_IMPL,

	/**
	 * This function corresponds to the JavaScript 1.6 Array.map() method, with one difference:
	 * when run over sparse arrays, this implemenation passes the "holes" in the sparse array
	 * to the callback function with a value of undefined.
	 * JavaScript 1.6's map skips the holes in the sparse array. For more details,
	 * see: https://developer.mozilla.org/en/CoreJavaScript1.5_Reference/Objects/Array/map
	 */
	//>public Array map({Array|String} arr, {Function|String} callback, Object? thisObject)
	map : vjo.NEEDS_IMPL,

	/**
	 * Getter/setter for the margin-box of node. Returns an object in the expected format of box
	 * (regardless if box is passed). The object might look like: { l: 50, t: 200, w: 300: h: 150 }
	 * for a node offset from its parent 50px to the left, 200px from the top with a margin width
	 * of 300px and a margin-height of 150px.
	 */
	//>public DojoAuxiliary::margin marginBox({Node|String} node)
	//>public void marginBox({Node|String} node, DojoAuxiliary::margin box)
	marginBox : vjo.NEEDS_IMPL,

	//>public Object mixin(Object obj, Object... props)
	mixin : vjo.NEEDS_IMPL,

	/**
	 * Returns a dojo._Url object relative to a module.
	 */
	//>public Dojo._Url moduleUrl(String module, {Dojo._Url|String} url)
	moduleUrl : vjo.NEEDS_IMPL,

	/**
	 * Takes a name/value mapping object and returns a string representing a URL-encoded version of that object.
	 */
	//>public String objectToQuery(Object map)
	objectToQuery : vjo.NEEDS_IMPL,

	/**
	 * Calling dojo.partial is the functional equivalent of calling: dojo.hitch(null, funcName, ...);
	 */
	//>public Function partial({Function|String} method)
	partial : vjo.NEEDS_IMPL,

	/**
	 * Attempt to insert node into the DOM, choosing from various positioning options.
	 * Returns the first argument resolved to a DOM node.
	 */
	//>public boolean place({Node|String} node, {Node|String} refNode, {int|String}? position)
	place : vjo.NEEDS_IMPL,

	/**
	 * This method takes a "map" of arrays which one can use to optionally load dojo modules.
	 * The map is indexed by the possible dojo.name_ values, with two additional values:
	 * "default" and "common". The items in the "default" array will be loaded if none of the
	 * other items have been choosen based on dojo.name_, set by your host environment.
	 * The items in the "common" array will always be loaded, regardless of which list is chosen.
	 */
	//>public void platformRequire(Object modMap)
	platformRequire : vjo.NEEDS_IMPL,

	/**
	 * If the context stack contains elements, ensure that subsequent code executes in the *previous*
	 * context to the current context. The current context set ([global, document]) is returned.
	 */
	//>public void popContext()
	popContext : vjo.NEEDS_IMPL,

	/**
	 * Returns an object of the form: { x: 100, y: 300, w: 20, h: 15 }
	 * If includeScroll==true, the x and y values will include any document offsets that may affect the position
	 * relative to the viewport. Uses the border-box model (inclusive of border and padding but not margin).
	 * Does not act as a setter.
	 */
	//>public DojoAuxiliary::position position(Node node, boolean? includeScroll)
	position : vjo.NEEDS_IMPL,
	
	/**
	 * Each javascript source file is called a resource. When a resource is loaded by the browser,
	 * dojo.provide() registers that it has been loaded. Each javascript source file must have at least
	 * one dojo.provide() call at the top of the file, corresponding to the file name.
	 * For example, js/dojo/foo.js must have dojo.provide("dojo.foo"); before any calls to dojo.require() are made.
	 * For backwards compatibility reasons, in addition to registering the resource, dojo.provide() also ensures
	 * that the javascript object for the module exists. For example, dojo.provide("dojox.data.FlickrStore"),
	 * in addition to registering that FlickrStore.js is a resource for the dojox.data module, will ensure that
	 * the dojox.data javascript object exists, so that calls like dojo.data.foo = function(){ ... } don't fail.
	 * In the case of a build where multiple javascript source files are combined into one bigger file
	 * (similar to a .lib or .jar file), that file may contain multiple dojo.provide() calls, to note that
	 * it includes multiple resources.
	 */
	//>public Object provide(String resourceName)
	provide : vjo.NEEDS_IMPL,

	//>public void publish(String topic, Array args)
	publish : vjo.NEEDS_IMPL,

	/**
	 * dojo.pushContext treats contexts as a stack. The auto-detected contexts which are initially provided using
	 * dojo.setContext() require authors to keep state in order to "return" to a previous context, whereas the
	 * dojo.pushContext and dojo.popContext methods provide a more natural way to augment blocks of code to ensure
	 * that they execute in a different window or frame without issue. If called without any arguments,
	 * the default context (the context when Dojo is first loaded) is instead pushed into the stack.
	 * If only a single string is passed, a node in the intitial context's document is looked up and its
	 * contextWindow and contextDocument properties are used as the context to push. This means that iframes
	 * can be given an ID and code can be executed in the scope of the iframe's document in subsequent calls easily.
	 */
	//>public Array pushContext(Object? g, Document? d)
	//>public Array pushContext(String frameId)
	pushContext : vjo.NEEDS_IMPL,

	//>public NodeList query(String selector, {Node|String}? root, Function? listCtor)
	query : vjo.NEEDS_IMPL,

	/**
	 * Create an object representing a de-serialized query section of a URL.
	 * Query keys with multiple values are returned in an array.
	 */
	//>public Object queryToObject(String str)
	queryToObject : vjo.NEEDS_IMPL,

	//>public void rawXhrPost()
	rawXhrPost : vjo.NEEDS_IMPL,

	//>public void rawXhrPut()
	rawXhrPut : vjo.NEEDS_IMPL,

	/**
	 * An unregistered module is given the default path of ../[module], relative to Dojo root.
	 * For example, module acme is mapped to ../acme. If you want to use a different module name,
	 * use dojo.registerModulePath.
	 */
	//>public void registerModulePath(String module, String prefix)
	registerModulePath : vjo.NEEDS_IMPL,

	/*
	 * Removes an attribute from an HTML element.
	 */
	//>public void removeAttr({Node|String} node, String name)
	removeAttr : vjo.NEEDS_IMPL,

	/**
	 * Removes the specified classes from node. No dojo.hasClass  check is required.
	 */
	//>public void removeClass({Node|String} node, String classStr)
	removeClass : vjo.NEEDS_IMPL,

	/**
	 * Performs parameterized substitutions on a string. Throws an exception if any parameter is unmatched.
	 */
	//>public void replace(String tmpl, {Object|Function} map, RegExp? pattern)
	replace : vjo.NEEDS_IMPL,
	
	/**
	 * Replaces one or more classes on a node if not present.
	 * Operates more quickly than calling dojo.removeClass and dojo.addClass
	 */
	//>public void replaceClass({Node|String} node, {String|Array} addClassStr, {String|Array}? removeClassStr)
	replaceClass : vjo.NEEDS_IMPL,	
	
	/**
	 * Modules are loaded via dojo.require by using one of two loaders: the normal loader and the xdomain loader.
	 * The xdomain loader is used when dojo was built with a custom build that specified loader=xdomain and
	 * the module lives on a modulePath that is a whole URL, with protocol and a domain. The versions of Dojo
	 * that are on the Google and AOL CDNs use the xdomain loader. If the module is loaded via the xdomain loader,
	 * it is an asynchronous load, since the module is added via a dynamically created script tag.
	 * This means that dojo.require() can return before the module has loaded. However, this should only happen
	 * in the case where you do dojo.require calls in the top-level HTML page, or if you purposely avoid the loader
	 * checking for dojo.require dependencies in your module by using a syntax like dojo["require"] to load the module.
	 * Sometimes it is useful to not have the loader detect the dojo.require calls in the module so that you can
	 * dynamically load the modules as a result of an action on the page, instead of right at module load time.
	 * Also, for script blocks in an HTML page, the loader does not pre-process them, so it does not know to download
	 * the modules before the dojo.require calls occur. So, in those two cases, when you want on-the-fly module
	 * loading or for script blocks in the HTML page, special care must be taken if the dojo.required code is loaded
	 * asynchronously. To make sure you can execute code that depends on the dojo.required modules, be sure to add
	 * the code that depends on the modules in a dojo.addOnLoad() callback. dojo.addOnLoad waits for all outstanding
	 * modules to finish loading before executing. This type of syntax works with both xdomain and normal loaders,
	 * so it is good practice to always use this idiom for on-the-fly code loading and in HTML script blocks.
	 * If at some point you change loaders and where the code is loaded from, it will all still work. More on how
	 * dojo.require dojo.require("A.B") first checks to see if symbol A.B is defined. If it is, it is simply returned
	 * (nothing to do). If it is not defined, it will look for A/B.js in the script root directory. dojo.require
	 * throws an exception if it cannot find a file to load, or if the symbol A.B is not defined after loading.
	 * It returns the object A.B, but note the caveats above about on-the-fly loading and HTML script blocks
	 * when the xdomain loader is loading a module. dojo.require() does nothing about importing symbols into the
	 * current namespace. It is presumed that the caller will take care of that.
	 */
	//>public Object require(String moduleName, boolean? omitModuleCheck) 
	require : vjo.NEEDS_IMPL,
	
	/**
	 * If the condition is true then call dojo.require() for the specified resource
	 */
	//>public void requireIf(boolean condition, String resource)
	requireIf : vjo.NEEDS_IMPL,

	/**
	 * Load translated resource bundles provided underneath the "nls" directory within a package.
	 * Translated resources may be located in different packages throughout the source tree.
	 * Each directory is named for a locale as specified by RFC 3066, (http://www.ietf.org/rfc/rfc3066.txt),
	 * normalized in lowercase. Note that the two bundles in the example do not define all the same variants.
	 * For a given locale, bundles will be loaded for that locale and all more general locales above it,
	 * including a fallback at the root directory. For example, a declaration for the "de-at" locale will first
	 * load nls/de-at/bundleone.js, then nls/de/bundleone.js and finally nls/bundleone.js. The data will be
	 * flattened into a single Object so that lookups will follow this cascading pattern. An optional build step
	 * can preload the bundles to avoid data redundancy and the multiple network hits normally required to
	 * load these resources.
	 */
	//>public void requireLocalization(String moduleName, String bundleName, String? locale, String? availableFlatLocales)
	requireLocalization : vjo.NEEDS_IMPL,

	/**
	 * This function is used to mix in properties like dojo._mixin does, but it skips a constructor property and
	 * decorates functions like dojo.declare does. It is meant to be used with classes and objects produced with
	 * dojo.declare. Functions mixed in with dojo.safeMixin can use this.inherited() like normal methods.
	 * This function is used to implement extend() method of a constructor produced with dojo.declare().
	 */
	//>public void safeMixin(Object target, Object source)
	safeMixin : vjo.NEEDS_IMPL,
	
	/**
	 * Changes the behavior of many core Dojo functions that deal with namespace and DOM lookup,
	 * changing them to work in a new global context (e.g., an iframe). The varibles dojo.global and dojo.doc are
	 * modified as a result of calling this function and the result of dojo.body() likewise differs.
	 */
	//>public void setContext(Object globalObject, Document globalDocument)
	setContext : vjo.NEEDS_IMPL,

	//>public Object setObject(String name, Object value, Object? context)
	setObject : vjo.NEEDS_IMPL,

	/**
	 * Enable or disable selection on a node
	 */
	//>public void setSelectable({Node|String} node, boolean selectable)
	setSelectable : vjo.NEEDS_IMPL,

	/**
	 * This function corresponds to the JavaScript 1.6 Array.some() method, with one difference: when run over sparse arrays,
	 * this implemenation passes the "holes" in the sparse array to the callback function with a value of undefined.
	 * JavaScript 1.6's some skips the holes in the sparse array. For more details,
	 * see: https://developer.mozilla.org/en/CoreJavaScript1.5_Reference/Objects/Array/some
	 */
	//>public boolean some({Array|String} arr, {Function|String} callback, Object? thisObject)
	some : vjo.NEEDS_IMPL,

	/**
	 * Prevents propagation and clobbers the default action of the passed event
	 */
	//>public void stopEvent(Event evt)
	stopEvent : vjo.NEEDS_IMPL,

	/**
	 * Getting the style value uses the computed style for the node, so the value will be a calculated value,
	 * not just the immediate node.style value. Also when getting values, use specific style names,
	 * like "borderBottomWidth" instead of "border" since compound values like "border" are not necessarily reflected as expected.
	 * If you want to get node dimensions, use dojo.marginBox(), dojo.contentBox() or dojo.position().
	 */
	//>public ObjLiteral style({String|HTMLElement} node)
	//>public Object style({String|HTMLElement} node, String style)
	//>public void style({String|HTMLElement} node, String style, String value)
	//>public void style({String|HTMLElement} node, ObjLiteral styles)
	style : vjo.NEEDS_IMPL,

	//>public Dojo.Handle subscribe(String topic, Object context, {Function|String} method)
	subscribe : vjo.NEEDS_IMPL,

	/**
	 * Adds a class to node if not present, or removes if present. Pass a boolean condition if you want to explicitly add or remove.
	 */
	//>public void toggleClass({HTMLElement|String} node, String classStr, boolean? condition)
	toggleClass : vjo.NEEDS_IMPL,

	/**
	 * Returns a JSON serialization of an object. Note that this doesn't check for infinite recursion, so don't do that!
	 */
	//>public String toJson(Object it, boolean? prettyPrint, String? _indentStr)
	toJson : vjo.NEEDS_IMPL,

	/**
	 * This version of trim() was selected for inclusion into the base due to its compact size and relatively good performance
	 * (see Steven Levithan's blog Uses String.prototype.trim instead, if available. The fastest but longest version of this function
	 * is located at dojo.string.trim()
	 */
	//>public String trim(String str)
	trim : vjo.NEEDS_IMPL,

	/**
	 * signal fired by impending environment destruction. You should use dojo.addOnUnload() instead of doing a direct dojo.connect()
	 * to this method to perform page/application cleanup methods. See dojo.addOnUnload for more info.
	 */
	//>public void unloaded()
	unloaded : vjo.NEEDS_IMPL,

	//>public void unsubscribe(Dojo.Handle handle)
	unsubscribe : vjo.NEEDS_IMPL,
	
	/**
	 * This provides normalization between normal synchronous values and asynchronous promises, so you can interact with them in a common way
	 */
	//>public void when(Object promiseOrValue, (void fn(Object))? callback, (void fn(Object))? errback, Function? progressHandler)
	when : vjo.NEEDS_IMPL,

	/**
	 * Invoke callback with documentObject as dojo.doc. If provided, callback will be executed in the context of object thisObject
	 * When callback() returns or throws an error, the dojo.doc will be restored to its previous state.
	 */
	//>public void withDoc(Document documentObject, Function callback, Object? thisObject, Array? cbArguments)
	withDoc : vjo.NEEDS_IMPL,

	/**
	 * Invoke callback with globalObject as dojo.global and globalObject.document as dojo.doc. If provided, globalObject will be
	 * executed in the context of object thisObject When callback() returns or throws an error, the dojo.global and dojo.doc will be
	 * restored to its previous state.
	 */
	//>public void withGlobal(Object globalObject, Function callback, Object? thisObject, Array? cbArguments)
	withGlobal : vjo.NEEDS_IMPL,

	//TODO
	//public void xdRequiredLocalization

	/**
	 * Sends an HTTP request with the given method. See also dojo.xhrGet(), xhrPost(), xhrPut() and dojo.xhrDelete()
	 * for shortcuts for those HTTP methods. There are also methods for "raw" PUT and POST methods via dojo.rawXhrPut()
	 * and dojo.rawXhrPost() respectively.
	 */
	//>public Dojo.Deferred xhr(String method, DojoAuxiliary::xhrArgs args, boolean? hasBody)
	xhr : vjo.NEEDS_IMPL,

	/**
	 * Sends an HTTP DELETE request to the server.
	 */
	//>public Dojo.Deferred xhrDelete(DojoAuxiliary::xhrArgs args)
	xhrDelete : vjo.NEEDS_IMPL,

	/**
	 * Sends an HTTP GET request to the server.
	 */
	//>public Dojo.Deferred xhrGet(DojoAuxiliary::xhrArgs args)
	xhrGet : vjo.NEEDS_IMPL,

	/**
	 * Sends an HTTP POST request to the server. In addtion to the properties listed for the dojo.__XhrArgs type,
	 * the following property is allowed: postData: String. Send raw data in the body of the POST request.
	 */
	//>public Dojo.Deferred xhrPost(DojoAuxiliary::xhrArgs args)
	xhrPost : vjo.NEEDS_IMPL,

	/**
	 * Sends an HTTP PUT request to the server. In addtion to the properties listed for the dojo.__XhrArgs type,
	 * the following property is allowed: putData: String. Send raw data in the body of the PUT request.
	 */
	//>public Dojo.Deferred xhrPut(DojoAuxiliary::xhrArgs args)
	xhrPut : vjo.NEEDS_IMPL,
	
	
	//INNER TYPES
	AdapterRegistry : vjo.ctype().protos({ //<public
		//>public constructs(boolean? returnWrappers)
		constructs : vjo.NEEDS_IMPL,

		//>public void match(Object... args)
		match : vjo.NEEDS_IMPL,

		//>public void register(String name, Function check, Function wrap, boolean? directReturn, boolean? override)
		register : vjo.NEEDS_IMPL,
	
		//>public void unregister(String name)
		unregister : vjo.NEEDS_IMPL,
		
		pairs : null, //<public Array
		returnWrappers : false //<public boolean
		
	}).endType(),
	
	behavior : vjo.ctype().protos({ //<public

		//>public void add(ObjLiteral behaviorObj)
		add : vjo.NEEDS_IMPL,

		//>public void apply()
		apply : vjo.NEEDS_IMPL
		
	}).endType(),
	
	config: vjo.ctype().props({ //<public
		addOnLoad : null, //<public Object
		consoleLogFuncs : null, //<public Array
		debugContainerId : null, //<public String
		debugHeight : null, //<public Number
		dojoBlankHtmlUrl : null, //<public Object
		extraLocale : null, //<public String[]
		forceGfxRenderer : null, //<public String
		hashPollFrequency : null, //<public Number
		ieForceActiveXXhr : null, //<public Object
		ioPublish : null, //<public Object
		modulePaths : null, //<public Object
		timezoneFileBasePath : null, //<public Object
		timezoneLoadingScheme : null, //<public String
		useXDomain : null //<public Object
	}).endType(),
		
	Color : vjo.ctype().protos({ //<public
		
		//>public constructs(Array rgbOrRgbaValues)
		//>public constructs(String colorNameOrHex)
		//>public constructs(Object rgbaProperty)
		constructs : vjo.NEEDS_IMPL,

		//>public Color sanitize()
		sanitize : vjo.NEEDS_IMPL,
		
		//>public Color setColor(Array rgbOrRgbaValues)
		//>public Color setColor(String colorNameOrHex)
		//>public Color setColor(Object rgbaProperty)
		setColor : vjo.NEEDS_IMPL,

		//>public String toCss(boolean? includeAlpha)
		toCss : vjo.NEEDS_IMPL,
		
		//>public String toHex()
		toHex : vjo.NEEDS_IMPL,
		
		//>public String toRgb()
		toRgb : vjo.NEEDS_IMPL,
		
		//>public String toRgba()
		toRgba : vjo.NEEDS_IMPL,
	
		//>public String toString()
		toString : vjo.NEEDS_IMPL,
		
		a : 0, //<public int
		b : 0, //<public int
		g : 0, //<public int
		r : 0 //<public int
	}).endType(),

	Deferred : vjo.ctype().protos({ //<public
		
		//>public Deferred addBoth(Function cb)
		//>public Deferred addBoth(Object obj, String cbfn)
		addBoth : vjo.NEEDS_IMPL,
		
		//>public Deferred addCallback(Function cb)
		//>public Deferred addCallback(Object obj, String cbfn)
		addCallback : vjo.NEEDS_IMPL,
						
		//>public Deferred addCallbacks(Function cb, Function eb)
		addCallbacks : vjo.NEEDS_IMPL,
				
		//>public Deferred addErrback(Function eb)
		//>public Deferred addErrback(Object obj, String ebfn)
		addErrback : vjo.NEEDS_IMPL,
		
		//>public void callback(Object res)
		callback : vjo.NEEDS_IMPL,
		
		//>public void errback(Error res)
		errback : vjo.NEEDS_IMPL,
		
		canceller : null, //<public Object
		chain : null, //<public Array
		fired : null, //<public Number
		id : null, //<public Object
		paused : null, //<public Number
		results : null, //<public Array
		silentlyCancelled : null //<public boolean
		
	}).endType(),
	
	_Url : vjo.ctype().protos({ //<public
		//>public String toString()
		toString : vjo.NEEDS_IMPL,
		
		authority : null, //<public Object		
		fragment : null, //<public Object		
		host : null, //<public Object		
		password : null, //<public Object		
		path : null, //<public Object		
		port : null, //<public Object		
		query : null, //<public Object
		scheme : null, //<public Object
		uri : null, //<public Object
		user : null //<public Object
	}).endType(),
	
	Animation : vjo.ctype().protos({ //<public
		//>public void easing()
		easing : vjo.NEEDS_IMPL,
		
		//>public Animation gotoPercent(float percent, boolean? andPlay)
		gotoPercent : vjo.NEEDS_IMPL,
		
		//>public Animation pause()
		pause : vjo.NEEDS_IMPL,
		
		//>public Animation play(int? delay, boolean? gotoStart)
		play : vjo.NEEDS_IMPL,

		//>public String status()
		status : vjo.NEEDS_IMPL,
		
		//>public Animation stop(boolean? gotoEnd)
		stop : vjo.NEEDS_IMPL
	
	}).endType(),
	
	Handle : vjo.ctype().endType() //<public
})
.options({
	metatype:true
})
.endType();
