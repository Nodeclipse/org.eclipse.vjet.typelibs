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
/** from dom/dom.js
 * 
 *  mixin Element.Methods
 *
 *  [[Element.Methods]] is a mixin for DOM elements. The methods of this object 
 *  are accessed through the [[$]] utility or through the [[Element]] object and
 *  shouldn't be accessed directly.
 *  
 *  ##### Examples
 *  
 *  Hide the element 
 *  
 *      $(element).hide(); 
 *      
 *  Return an [[Enumerable]] of all descendant nodes of the element with the id
 *  "article"
 *  
 *      $('articles').descendants();
**/
vjo.mtype('org.prototypejs.Element_Methods') //< public

.props({
	// vvvvvvvvvvvvvvvv added from first cut of Element.js vvvvvvvvvvvv
	/**
	 * Element.addMethods(methods) ? undefined
	 * Element.addMethods(tagName, methods) ? undefined
	 * <p>
	 * tagName (String) – (Optional) The name of the HTML tag for which the 
	 * methods should be available; if not given, all HTML elements will have 
	 * the new methods.
	 * <p>
	 * methods (Object) – A hash of methods to add.
	 * <p>
	 * Element.addMethods makes it possible to mix your own methods into the 
	 * Element object and extended element instances (all of them, or only ones 
	 * with the given HTML tag if you specify tagName).
	 * <p>
	 * You define the methods in a hash that you provide to Element.addMethods. 
	 * Here's an example adding two methods:
	 * <code>
	 * Element.addMethods({
	 * // myOwnMethod: Do something cool with the element
	 * myOwnMethod: function(element) {
	 * if (!(element = $(element))) return;
	 *     // ...do smething with 'element'...
	 *     return element;
	 * },
	 * // wrap: Wrap the element in a new element using the given tag
	 * wrap: function(element, tagName) {
	 * var wrapper;
	 * if (!(element = $(element))) return;
	 * wrapper = new Element(tagName);
	 * element.parentNode.replaceChild(wrapper, element);
	 * wrapper.appendChild(element);
	 *  return wrapper;
	 *  }
	 *});
	 *</code>

Once added, those can be used either via Element:

// Wrap the element with the ID 'foo' in a div
Element.wrap('foo', 'div');

...or as instance methods of extended elements:

// Wrap the element with the ID 'foo' in a div
$('foo').wrap('div');

Note the following requirements and conventions for methods added to Element:

    * The first argument is always an element or ID, by convention this argument is called element.
    * The method passes the element argument through $ and typically returns if the result is undefined.
    * Barring a good reason to return something else, the method returns the extended element to enable chaining.

Our myOwnMethod method above returns the element because it doesn't have a good reason to return anything else. Our wrap method returns the wrapper, because that makes more sense for that method.
Extending only specific elements

If you call Element.addMethods with two arguments, it will apply the methods only to elements with the given HTML tag:

Element.addMethods('DIV', my_div_methods);
// the given methods are now available on DIV elements, but not others

You can also pass an Array of tag names as the first argument:

Element.addMethods(['DIV', 'SPAN'], my_additional_methods);
// DIV and SPAN now both have the given methods

(Tag names in the first argument are not case sensitive.)

Note: Element.addMethods has built-in security which prevents you from overriding native element methods or properties (like getAttribute or innerHTML), but nothing prevents you from overriding one of Prototype's methods. Prototype uses a lot of its methods internally; overriding its methods is best avoided or at least done only with great care.
Example 1

Our wrap method earlier was a complete example. For instance, given this paragraph:

<p id="first">Some content...</p>

...we might wrap it in a div:

$('first').wrap('div');

...or perhaps wrap it and apply some style to the div as well:

$('first').wrap('div').setStyle({
  backgroundImage: 'url(images/rounded-corner-top-left.png) top left'
});

Example 2

We can add a method to elements that makes it a bit easier to update them via Ajax.Updater:

Element.addMethods({
  ajaxUpdate: function(element, url, options) {
    if (!(element = $(element))) return;
    element.update('<img src="/images/spinner.gif" alt="Loading...">');
    options = options || {};
    options.onFailure = options.onFailure || defaultFailureHandler.curry(element);
    new Ajax.Updater(element, url, options);
    return element;
  }
});

Now we can update an element via an Ajax call much more concisely than before:

$('foo').ajaxUpdate('/new/content');

That will use Ajax.Updater to load new content into the 'foo' element, showing a spinner while the call is in progress. It even applies a default failure handler (since we didn't supply one).
	 */
	//> public void addMethods(Object? methods)
	//> public void addMethods(String tagName, Object methods)
	addMethods: vjo.NEEDS_IMPL,
	
	/**
	 * Element.childElements(element) ? [Element…]
	 * <p>
	 * Collects all of the element's children and returns them as an array of 
	 * Element.extended elements, in document order. The first entry in the array 
	 * is the topmost child of element, the next is the child after that, etc.
	 * <p>
	 * Like all of Prototype's DOM traversal methods, Element.childElements 
	 * ignores text nodes and returns element nodes only.
	 * <p>
	 * Example
	 * Assuming:
	 * <code>
	 * <div id="australopithecus">
	 *   Some text in a text node
	 *   <div id="homo-erectus">
	 *     <div id="homo-neanderthalensis"></div>
	 *     <div id="homo-sapiens"></div>
	 *   </div>
	 * </div>
	 * </code>
	 * <p>Then:
	 * <code>
	 * $('australopithecus').childElements();
	 * // -> [div#homo-erectus]
	 * $('homo-erectus').childElements();
	 * // -> [div#homo-neanderthalensis, div#homo-sapiens]
	 * $('homo-sapiens').childElements();
	 * // -> []
	 */
	//> public Element[] childElements(Element element)
	childElements: vjo.NEEDS_IMPL,
	
	/**
	 *  Element.extend(element) -> Element
	 *
	 *  Extends the given element instance with all of the Prototype goodness and
	 *  syntactic sugar, as well as any extensions added via [[Element.addMethods]].
	 *  (If the element instance was already extended, this is a no-op.)
	 *
	 *  You only need to use [[Element.extend]] on element instances you've acquired
	 *  directly from the DOM; **all** Prototype methods that return element
	 *  instances (such as [[$]], [[Element.down]], etc.) will pre-extend the
	 *  element before returning it.
	 *
	 *  Check out ["How Prototype extends the
	 *  DOM"](http://prototypejs.org/learn/extensions) for more about element
	 *  extensions.
	 *
	 *  ##### Details
	 *
	 *  Specifically, [[Element.extend]] extends the given instance with the methods
	 *  contained in [[Element.Methods]] and `Element.Methods.Simulated`. If `element`
	 *  is an `input`, `textarea`, or `select` element, it will also be extended
	 *  with the methods from `Form.Element.Methods`. If it is a `form` element, it
	 *  will also be extended with the methods from `Form.Methods`.
	**/
	//> public Element extend({String | Element} idOrElement)
	extend: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] getElementsBySelector({String | Element} idOrElement, String selector)
	getElementsBySelector: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean hasAttribute({String | Element} idOrElement, String attribute)
	hasAttribute: vjo.NEEDS_IMPL,
	
	// ^^^^^^^^^^^^^^ End added from first cut of Element.js ^^^^^^^^^^
	/**
	   *  Element.visible(@element) -> Boolean
	   *
	   *  Tells whether `element` is visible (i.e., whether its inline `display`
	   *  CSS property is set to `none`.
	   *  
	   *  ##### Examples
	   *  
	   *      language: html
	   *      <div id="visible"></div>
	   *      <div id="hidden" style="display: none;"></div>
	   *
	   *  And the associated JavaScript:
	   *
	   *      $('visible').visible();
	   *      // -> true
	   *      
	   *      $('hidden').visible();
	   *      // -> false
	   *  
	   *  ##### Notes
	   *  
	   *  Styles applied via a CSS stylesheet are _not_ taken into consideration.
	   *  Note that this is not a Prototype limitation, it is a CSS limitation.
	   *  
	   *      language: html
	   *      <style>
	   *        #hidden-by-css {
	   *          display: none;
	   *        }
	   *      </style>
	   *      
	   *      [...]
	   *      
	   *      <div id="hidden-by-css"></div>
	   *
	   *  And the associated JavaScript:
	   *
	   *      $('hidden-by-css').visible();
	   *      // -> true
	  **/
	//> public boolean visible({String | Element} idOrElement)
	visible: vjo.NEEDS_IMPL,
	
	/**
	   *  Element.toggle(@element) -> Element
	   *
	   *  Toggles the visibility of `element`. Returns `element`.
	   *  
	   *  ##### Examples
	   *  
	   *      <div id="welcome-message"></div>
	   *      <div id="error-message" style="display:none;"></div>
	   *  
	   *      $('welcome-message').toggle();
	   *      // -> Element (and hides div#welcome-message)
	   *      
	   *      $('error-message').toggle();
	   *      // -> Element (and displays div#error-message)
	   *  
	   *  Toggle multiple elements using [[Enumerable#each]]:
	   *  
	   *      ['error-message', 'welcome-message'].each(Element.toggle);
	   *      // -> ['error-message', 'welcome-message'] 
	   *  
	   *  Toggle multiple elements using [[Enumerable#invoke]]:
	   *  
	   *      $('error-message', 'welcome-message').invoke('toggle');
	   *      // -> [Element, Element]
	   *
	   *  ##### Notes
	   *  
	   *  [[Element.toggle]] _cannot_ display elements hidden via CSS stylesheets.
	   *  Note that this is not a Prototype limitation but a consequence of how the
	   *  CSS `display` property works.
	   *  
	   *      <style>
	   *        #hidden-by-css {
	   *          display: none;
	   *        }
	   *      </style>
	   *      
	   *      [...]
	   *      
	   *      <div id="hidden-by-css"></div>
	   *  
	   *      $('hidden-by-css').toggle(); // WONT' WORK!
	   *      // -> Element (div#hidden-by-css is still hidden!)
	  **/
	//> public Element toggle({String | Element} idOrElement)
	toggle: vjo.NEEDS_IMPL,
	
	/**
	   *  Element.hide(@element) -> Element
	   *
	   *  Sets `display: none` on `element`. Returns `element`.
	   *  
	   *  ##### Examples
	   *
	   *  Hide a single element:
	   *  
	   *      <div id="error-message"></div>
	   *  
	   *      $('error-message').hide();
	   *      // -> Element (and hides div#error-message)
	   *
	   *  Hide multiple elements using [[Enumerable#each]]:
	   *  
	   *      ['content', 'navigation', 'footer'].each(Element.hide);
	   *      // -> ['content', 'navigation', 'footer'] 
	   *  
	   *  Hide multiple elements using [[Enumerable#invoke]]:
	   *  
	   *      $('content', 'navigation', 'footer').invoke('hide');
	   *      // -> [Element, Element, Element]
	  **/
	//> public Element hide({String | Element} idOrElement)
	hide: vjo.NEEDS_IMPL,
	
	/**
   *  Element.show(@element) -> Element
   *
   *  Removes `display: none` on `element`. Returns `element`.
   *  
   *  ##### Examples
   *
   *  Show a single element:
   *  
   *      <div id="error-message" style="display:none;"></div>
   *  
   *      $('error-message').show();
   *      // -> Element (and displays div#error-message)
   *  
   *  Show multiple elements using [[Enumerable#each]]:
   *  
   *      ['content', 'navigation', 'footer'].each(Element.show);
   *      // -> ['content', 'navigation', 'footer'] 
   *  
   *  Show multiple elements using [[Enumerable#invoke]]:
   *  
   *      $('content', 'navigation', 'footer').invoke('show');
   *      // -> [Element, Element, Element]
   *  
   *  ##### Notes
   *  
   *  [[Element.show]] _cannot_ display elements hidden via CSS stylesheets.
   *  Note that this is not a Prototype limitation but a consequence of how the
   *  CSS `display` property works.
   *  
   *      <style>
   *        #hidden-by-css {
   *          display: none;
   *        }
   *      </style>
   *      
   *      [...]
   *      
   *      <div id="hidden-by-css"></div>
   *  
   *      $('hidden-by-css').show(); // DOES NOT WORK!
   *      // -> Element (div#error-message is still hidden!)
  **/
	//> public Element show({String | Element} idOrElement)
	show: vjo.NEEDS_IMPL,
	
	/**
   *  Element.remove(@element) -> Element
   *
   *  Completely removes `element` from the document and returns it.
   *
   *  If you would rather just hide the element and keep it around for further
   *  use, try [[Element.hide]] instead.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      // Before:
   *      <ul>
   *        <li id="golden-delicious">Golden Delicious</li>
   *        <li id="mutsu">Mutsu</li>
   *        <li id="mcintosh">McIntosh</li>
   *        <li id="ida-red">Ida Red</li>
   *      </ul>
   *
   *  And the associated JavaScript:
   *
   *      $('mutsu').remove();
   *      // -> Element (and removes li#mutsu)
   *  
   *  The resulting HTML:
   *
   *      language: html
   *      <ul>
   *        <li id="golden-delicious">Golden Delicious</li>
   *        <li id="mcintosh">McIntosh</li>
   *        <li id="ida-red">Ida Red</li>
   *      </ul>
  **/
	//> public Element remove({String | Element} idOrElement)
	remove: vjo.NEEDS_IMPL,	
	
	/**
   *  Element.update(@element[, newContent]) -> Element
   *
   *  Replaces _the content_ of `element` with the `newContent` argument and
   *  returns `element`.
   *
   *  `newContent` may be in any of these forms:
   *  - [[String]]: A string of HTML to be parsed and rendered
   *  - [[Element]]: An Element instance to insert
   *  - ...any object with a `toElement` method: The method is called and the resulting element used
   *  - ...any object with a `toHTML` method: The method is called and the resulting HTML string
   *    is parsed and rendered
   *
   *  If `newContent` is omitted, the element's content is blanked out (i.e.,
   *  replaced with an empty string).
   *
   *  If `newContent` is a string and contains one or more inline `<script>` 
   *  tags, the scripts are scheduled to be evaluated after a very brief pause
   *  (using [[Function#defer]]) to allow the browser to finish updating the 
   *  DOM. Note that the scripts are evaluated in the scope of 
   *  [[String#evalScripts]], not in the global scope, which has important
   *  ramifications for your `var`s and `function`s.
   *  See [[String#evalScripts]] for details.
   *
   *  Note that this method allows seamless content update of table related 
   *  elements in Internet Explorer 6 and beyond.
   *  
   *  Any nodes replaced with `Element.update` will first have event
   *  listeners unregistered and storage keys removed. This frees up memory
   *  and prevents leaks in certain versions of Internet Explorer. (See
   *  [[Element.purge]]).
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <div id="fruits">carrot, eggplant and cucumber</div>
   *  
   *  Passing a regular string:
   *  
   *      $('fruits').update('kiwi, banana and apple');
   *      // -> Element
   *      $('fruits').innerHTML;
   *      // -> 'kiwi, banana and apple'
   *  
   *  Clearing the element's content:
   *  
   *      $('fruits').update();
   *      // -> Element
   *      $('fruits').innerHTML;
   *      // -> '' (an empty string)
   *  
   *  And now inserting an HTML snippet:
   *  
   *      $('fruits').update('<p>Kiwi, banana <em>and</em> apple.</p>');
   *      // -> Element
   *      $('fruits').innerHTML;
   *      // -> '<p>Kiwi, banana <em>and</em> apple.</p>'
   *  
   *  ... with a `<script>` tag thrown in:
   *  
   *      $('fruits').update('<p>Kiwi, banana <em>and</em> apple.</p><script>alert("updated!")</script>');
   *      // -> Element (and prints "updated!" in an alert dialog).
   *      $('fruits').innerHTML;
   *      // -> '<p>Kiwi, banana <em>and</em> apple.</p>'
   *  
   *  Relying on the `toString()` method:
   *  
   *      $('fruits').update(123);
   *      // -> Element
   *      $('fruits').innerHTML;
   *      // -> '123'
   *  
   *  Finally, you can do some pretty funky stuff by defining your own
   *  `toString()` method on your custom objects:
   *  
   *      var Fruit = Class.create({
   *        initialize: function(fruit){
   *          this.fruit = fruit;
   *        },
   *        toString: function(){
   *          return 'I am a fruit and my name is "' + this.fruit + '".'; 
   *        }
   *      });
   *      var apple = new Fruit('apple');
   *      
   *      $('fruits').update(apple);
   *      $('fruits').innerHTML;
   *      // -> 'I am a fruit and my name is "apple".'
  **/
	//> public Element update({String | Element} idOrElement, {Object | String | Element}? content)
	update: vjo.NEEDS_IMPL,
	
	/**
   *  Element.replace(@element[, newContent]) -> Element
   *
   *  Replaces `element` _itself_ with `newContent` and returns `element`.
   *
   *  Keep in mind that this method returns the element that has just been
   *  removed &mdash; not the element that took its place.
   *
   *  `newContent` can be either plain text, an HTML snippet or any JavaScript
   *  object which has a `toString()` method.
   *  
   *  If `newContent` contains any `<script>` tags, these will be evaluated
   *  after `element` has been replaced ([[Element.replace]] internally calls
   *  [[String#evalScripts]]).
   *  
   *  Note that if no argument is provided, [[Element.replace]] will simply
   *  clear `element` of its content. However, using [[Element.remove]] to do so
   *  is both faster and more standard compliant.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <div id="food">
   *        <div id="fruits">
   *          <p id="first">Kiwi, banana <em>and</em> apple.</p>
   *        </div>
   *      </div>
   *  
   *  Passing an HTML snippet:
   *  
   *      $('first').replace('<ul id="favorite"><li>kiwi</li><li>banana</li><li>apple</li></ul>');
   *      // -> Element (p#first)
   *      
   *      $('fruits').innerHTML;
   *      // -> '<ul id="favorite"><li>kiwi</li><li>banana</li><li>apple</li></ul>'
   *  
   *  Again, with a `<script>` tag thrown in:
   *  
   *      $('favorite').replace('<p id="still-first">Melon, oranges <em>and</em> grapes.</p><script>alert("removed!")</script>');
   *      // -> Element (ul#favorite) and prints "removed!" in an alert dialog.
   *      
   *      $('fruits').innerHTML;
   *      // -> '<p id="still-first">Melon, oranges <em>and</em> grapes.</p>'
   *  
   *  With plain text:
   *  
   *      $('still-first').replace('Melon, oranges and grapes.');
   *      // -> Element (p#still-first)
   *
   *      $('fruits').innerHTML;
   *      // -> 'Melon, oranges and grapes.'
   *  
   *  Finally, relying on the `toString()` method:
   *  
   *      $('fruits').replace(123);
   *      // -> Element
   *      
   *      $('food').innerHTML;
   *      // -> '123'
   *
   *  ##### Warning
   *
   *  Using [[Element.replace]] as an instance method (e.g.,
   *  `$('foo').replace('<p>Bar</p>')`) causes errors in Opera 9 when used on
   *  `input` elements. The `replace` property is reserved on `input` elements
   *  as part of [Web Forms 2](http://www.whatwg.org/specs/web-forms/current-work/).
   *  As a workaround, use the generic version instead
   *  (`Element.replace('foo', '<p>Bar</p>')`).
   *  
  **/
	//> public Element replace({String | Element} idOrElement, {Object | String | Element}content)
	replace: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element insert({String | Element} idOrElement, {Object | String | Element} content)
	insert: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element wrap(Object? attributes)
	//> public Element wrap({String | Element} idOrElement, Object? attributes)
	wrap: vjo.NEEDS_IMPL,
	
	/**
   *  Element.insert(@element, content) -> Element
   *  - content (String | Element | Object): The content to insert.
   *
   *  Inserts content `above`, `below`, at the `top`, and/or at the `bottom` of
   *  the given element, depending on the option(s) given.
   *
   *  `insert` accepts content in any of these forms:
   *  - [[String]]: A string of HTML to be parsed and rendered
   *  - [[Element]]: An Element instance to insert
   *  - ...any object with a `toElement` method: The method is called and the resulting element used
   *  - ...any object with a `toHTML` method: The method is called and the resulting HTML string
   *    is parsed and rendered
   *
   *  The `content` argument can be the content to insert, in which case the
   *  implied insertion point is `bottom`, or an object that specifies one or
   *  more insertion points (e.g., `{ bottom: "foo", top: "bar" }`).
   *
   *  Accepted insertion points are:
   *  - `before` (as `element`'s previous sibling)
   *  - `after` (as `element's` next sibling)
   *  - `top` (as `element`'s first child)
   *  - `bottom` (as `element`'s last child)
   *
   *  Note that if the inserted HTML contains any `<script>` tag, these will be
   *  automatically evaluated after the insertion (`insert` internally calls
   *  [[String.evalScripts]] when inserting HTML).
   *
   *  <h5>Examples</h5>
   *
   *  Insert the given HTML at the bottom of the element (using the default):
   *
   *      $('myelement').insert("<p>HTML to append</p>");
   *
   *      $('myelement').insert({
   *        top: new Element('img', {src: 'logo.png'})
   *      });
   *
   *  Put `hr`s `before` and `after` the element:
   *
   *      $('myelement').insert({
   *        before: "<hr>",
   *        after: "<hr>"
   *      });
  **/
	//> public String inspect({String | Element} idOrElement)
	inspect: vjo.NEEDS_IMPL,
	
	/**
   *  Element.recursivelyCollect(@element, property) -> [Element...]
   *
   *  Recursively collects elements whose relationship to `element` is
   *  specified by `property`. `property` has to be a _property_ (a method
   *  won't do!) of `element` that points to a single DOM node (e.g.,
   *  `nextSibling` or `parentNode`).
   *
   *  ##### More information
   *
   *  This method is used internally by [[Element.ancestors]],
   *  [[Element.descendants]], [[Element.nextSiblings]],
   *  [[Element.previousSiblings]] and [[Element.siblings]] which offer really
   *  convenient way to grab elements, so directly accessing
   *  [[Element.recursivelyCollect]] should seldom be needed. However, if you
   *  are after something out of the ordinary, it is the way to go.
   *  
   *  Note that all of Prototype's DOM traversal methods ignore text nodes and
   *  return element nodes only.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <ul id="fruits">
   *        <li id="apples">
   *          <ul id="list-of-apples">
   *            <li id="golden-delicious"><p>Golden Delicious</p></li>
   *            <li id="mutsu">Mutsu</li>
   *            <li id="mcintosh">McIntosh</li>
   *            <li id="ida-red">Ida Red</li>
   *          </ul>
   *        </li>
   *      </ul>
   *
   *  And the associated JavaScript:
   *
   *      $('fruits').recursivelyCollect('firstChild');
   *      // -> [li#apples, ul#list-of-apples, li#golden-delicious, p]
  **/
	//> public Element[] recursivelyCollect({String | Element} idOrElement, String property)
	recursivelyCollect: vjo.NEEDS_IMPL,
	
  /**
   *  Element.ancestors(@element) -> [Element...]
   *
   *  Collects all of `element`'s ancestor elements and returns them as an
   *  array of extended elements.
   *
   *  The returned array's first element is `element`'s direct ancestor (its
   *  `parentNode`), the second one is its grandparent, and so on until the
   *  `<html>` element is reached. `<html>` will always be the last member of
   *  the array. Calling `ancestors` on the `<html>` element will return an
   *  empty array.
   *
   *  ##### Example
   *
   *  Assuming:
   *
   *      language: html
   *      <html>
   *      [...]
   *        <body>
   *          <div id="father">
   *            <div id="kid">
   *            </div>
   *          </div>
   *        </body>
   *      </html>
   *
   *  Then:
   *
   *      $('kid').ancestors();
   *      // -> [div#father, body, html]
  **/
	//> public Element[] ancestors(String... ids)
	//> public Element[] ancestors(Element... ids)
	ancestors: vjo.NEEDS_IMPL,
	
	/**
	 * Element.descendants(element) ? [Element…]
	 * <p>
	 * Collects all of the element's descendants (its children, their children, 
	 * etc.) and returns them as an array of extended elements. As with all of 
	 * Prototype's DOM traversal methods, only Elements are returned, other nodes 
	 * (text nodes, etc.) are skipped.
	 */
	//> public Element[] descendants({String | Element} idOrElement)
	descendants: vjo.NEEDS_IMPL,
	
	/**
   *  Element.firstDescendant(@element) -> Element
   *
   *  Returns the first child that is an element.
   *
   *  This is opposed to the `firstChild` DOM property, which will return
   *  any node, including text nodes and comment nodes.
   *
   *  ##### Examples
   *  
   *      language: html
   *      <div id="australopithecus">
   *        <div id="homo-erectus"><!-- Latin is super -->
   *          <div id="homo-neanderthalensis"></div>
   *          <div id="homo-sapiens"></div>
   *        </div>
   *      </div>
   *
   *  Then:
   *
   *      $('australopithecus').firstDescendant();
   *      // -> div#homo-herectus
   *      
   *      // the DOM property returns any first node
   *      $('homo-herectus').firstChild;
   *      // -> comment node "Latin is super"
   *      
   *      // this is what we want!
   *      $('homo-herectus').firstDescendant();
   *      // -> div#homo-neanderthalensis
  **/
	//> public Element firstDescendant({String | Element} idOrElement)
	firstDescendant: vjo.NEEDS_IMPL,
	
	/** deprecated, alias of: Element.childElements
   *  Element.immediateDescendants(@element) -> [Element...]
   *
   *  **This method is deprecated, please see [[Element.childElements]]**.
  **/
	//> public Element[] immediateDescendants({String | Element} idOrElement)
	immediateDescendants: vjo.NEEDS_IMPL,
	
	/**
   *  Element.previousSiblings(@element) -> [Element...]
   *
   *  Collects all of `element`'s previous siblings and returns them as an
   *  [[Array]] of elements.
   *  
   *  Two elements are siblings if they have the same parent. So for example,
   *  the `<head>` and `<body>` elements are siblings (their parent is the
   *  `<html>` element). Previous-siblings are simply the ones which precede
   *  `element` in the document.
   *  
   *  The returned [[Array]] reflects the siblings _inversed_ order in the
   *  document (e.g. an index of 0 refers to the lowest sibling i.e., the one
   *  closest to `element`).
   *  
   *  Note that all of Prototype's DOM traversal methods ignore text nodes and
   *  return element nodes only.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <ul>
   *        <li id="golden-delicious">Golden Delicious</li>
   *        <li id="mutsu">Mutsu</li>
   *        <li id="mcintosh">McIntosh</li>
   *        <li id="ida-red">Ida Red</li>
   *      </ul>
   *
   *  Then:
   *
   *      $('mcintosh').previousSiblings();
   *      // -> [li#mutsu, li#golden-delicious]
   *      
   *      $('golden-delicious').previousSiblings();
   *      // -> []
  **/
	//> public Element previous({String | Element} idOrElement, int? index)
	//> public Element previous({String | Element} idOrElement, String cssSelector, int? index)
	previousSiblings: vjo.NEEDS_IMPL,
	
	/**
   *  Element.nextSiblings(@element) -> [Element...]
   *
   *  Collects all of `element`'s next siblings and returns them as an [[Array]]
   *  of elements.
   *  
   *  Two elements are siblings if they have the same parent. So for example,
   *  the `head` and `body` elements are siblings (their parent is the `html`
   *  element). Next-siblings are simply the ones which follow `element` in the
   *  document.
   *  
   *  The returned [[Array]] reflects the siblings order in the document
   *  (e.g. an index of 0 refers to the sibling right below `element`).
   *  
   *  Note that all of Prototype's DOM traversal methods ignore text nodes and
   *  return element nodes only.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <ul>
   *        <li id="golden-delicious">Golden Delicious</li>
   *        <li id="mutsu">Mutsu</li>
   *        <li id="mcintosh">McIntosh</li>
   *        <li id="ida-red">Ida Red</li>
   *      </ul>
   *
   *  Then:
   *
   *      $('mutsu').nextSiblings();
   *      // -> [li#mcintosh, li#ida-red]
   *      
   *      $('ida-red').nextSiblings();
   *      // -> []
  **/
	//> public Element[] nextSiblings({String | Element} idOrElement)
	nextSiblings: vjo.NEEDS_IMPL,
	
	/**
   *  Element.siblings(@element) -> [Element...]
   *  Collects all of element's siblings and returns them as an [[Array]] of
   *  elements.
   *
   *  Two elements are siblings if they have the same parent. So for example,
   *  the `head` and `body` elements are siblings (their parent is the `html`
   *  element).
   *  
   *  The returned [[Array]] reflects the siblings' order in the document (e.g.
   *  an index of 0 refers to `element`'s topmost sibling).
   *  
   *  Note that all of Prototype's DOM traversal methods ignore text nodes and
   *  return element nodes only.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <ul>
   *        <li id="golden-delicious">Golden Delicious</li>
   *        <li id="mutsu">Mutsu</li>
   *        <li id="mcintosh">McIntosh</li>
   *        <li id="ida-red">Ida Red</li>
   *      </ul>
   *
   *  Then:
   *
   *      $('mutsu').siblings();
   *      // -> [li#golden-delicious, li#mcintosh, li#ida-red]
  **/
	//> public Element[] siblings({String | Element} idOrElement)
	siblings: vjo.NEEDS_IMPL,
	
	/**
   *  Element.match(@element, selector) -> boolean
   *  - selector (String): A CSS selector.
   *
   *  Checks if `element` matches the given CSS selector.
   *
   *  ##### Examples
   *  
   *      language: html
   *      <ul id="fruits">
   *        <li id="apples">
   *          <ul>
   *            <li id="golden-delicious">Golden Delicious</li>
   *            <li id="mutsu" class="yummy">Mutsu</li>
   *            <li id="mcintosh" class="yummy">McIntosh</li>
   *            <li id="ida-red">Ida Red</li>
   *          </ul>
   *        </li>
   *      </ul>
   *
   *  Then:
   *
   *      $('fruits').match('ul');
   *      // -> true
   *      
   *      $('mcintosh').match('li#mcintosh.yummy');
   *      // -> true
   *      
   *      $('fruits').match('p');
   *      // -> false
  **/
	//> public boolean match({String | Element} idOrElement, String selector)
	match: vjo.NEEDS_IMPL,
	
	/**
   *  Element.up(@element[, expression[, index = 0]]) -> Element
   *  Element.up(@element[, index = 0]) -> Element
   *  - expression (String): A CSS selector.
   *
   *  Returns `element`'s first ancestor (or the Nth ancestor, if `index`
   *  is specified) that matches `expression`. If no `expression` is
   *  provided, all ancestors are considered. If no ancestor matches these
   *  criteria, `undefined` is returned.
   *
   *  ##### More information
   *
   *  The [[Element.up]] method is part of Prototype's ultimate DOM traversal
   *  toolkit (check out [[Element.down]], [[Element.next]] and
   *  [[Element.previous]] for some more Prototypish niceness). It allows 
   *  precise index-based and/or CSS rule-based selection of any of `element`'s
   *  **ancestors**.
   *  
   *  As it totally ignores text nodes (it only returns elements), you don't
   *  have to worry about whitespace nodes.
   *  
   *  And as an added bonus, all elements returned are already extended
   *  (see [[Element.extended]]) allowing chaining:
   *  
   *      $(element).up(1).next('li', 2).hide();
   *  
   *  Walking the DOM has never been that easy!
   *  
   *  ##### Arguments
   *  
   *  If no arguments are passed, `element`'s first ancestor is returned (this
   *  is similar to calling `parentNode` except [[Element.up]] returns an already
   *  extended element.
   *  
   *  If `index` is defined, `element`'s corresponding ancestor is returned.
   *  (This is equivalent to selecting an element from the array of elements
   *  returned by the method [[Element.ancestors]]). Note that the first element
   *  has an index of 0.
   *  
   *  If `expression` is defined, [[Element.up]] will return the first ancestor
   *  that matches it.
   *  
   *  If both `expression` and `index` are defined, [[Element.up]] will collect
   *  all the ancestors matching the given CSS expression and will return the
   *  one at the specified index.
   *  
   *  **In all of the above cases, if no descendant is found,** `undefined`
   *  **will be returned.**
   *  
   *  ### Examples
   *  
   *      language: html
   *      <html>
   *        [...]
   *        <body>
   *          <ul id="fruits">
   *            <li id="apples" class="keeps-the-doctor-away">
   *              <ul>
   *                <li id="golden-delicious">Golden Delicious</li>
   *                <li id="mutsu" class="yummy">Mutsu</li>
   *                <li id="mcintosh" class="yummy">McIntosh</li>
   *                <li id="ida-red">Ida Red</li>
   *              </ul>
   *            </li>
   *          </ul>
   *        </body>
   *      </html>
   *
   *  Get the first ancestor of "#fruites":
   *
   *      $('fruits').up();
   *      // or:
   *      $('fruits').up(0);
   *      // -> body
   *
   *  Get the third ancestor of "#mutsu":
   *      
   *      $('mutsu').up(2);
   *      // -> ul#fruits
   *
   *  Get the first ancestor of "#mutsu" with the node name "li":
   *      
   *      $('mutsu').up('li');
   *      // -> li#apples
   *
   *  Get the first ancestor of "#mutsu" with the class name
   *  "keeps-the-doctor-away":
   *
   *      $('mutsu').up('.keeps-the-doctor-away');
   *      // -> li#apples
   *
   *  Get the second ancestor of "#mutsu" with the node name "ul":
   *      
   *      $('mutsu').up('ul', 1);
   *      // -> ul#fruits
   *
   *  Try to get the first ancestor of "#mutsu" with the node name "div":
   *      
   *      $('mutsu').up('div');
   *      // -> undefined
  **/
	//> public Element({String | Element} idOrElement, String expression, int? index)
	//> public Element({String | Element} idOrElement, int? index)
	up: vjo.NEEDS_IMPL,
	
	/**
	 * Element.down(element[, expression[, index = 0]]) ? Element
	 * <p>
	 * Element.down(element[, index = 0]) ? Element
	 * <p>
	 * expression (String) – A CSS selector.
	 * <p>
	 * Returns element's first descendant (or the Nth descendant, if index is 
	 * specified) that matches expression. If no expression is provided, all 
	 * descendants are considered. If no descendant matches these criteria, 
	 * undefined is returned.
	 * <p>
	 * More information
	 * The Element.down method is part of Prototype's ultimate DOM traversal 
	 * toolkit (check out Element.up, Element.next and Element.previous for some 
	 * more Prototypish niceness). It allows precise index-based and/or CSS 
	 * rule-based selection of any of the element's descendants.
	 * <p>
	 * As it totally ignores text nodes (it only returns elements), you don't 
	 * have to worry about whitespace nodes.
	 * <p>
	 * And as an added bonus, all elements returned are already extended 
	 * (see Element.extend) allowing chaining:
	 * <code>
	 * $(element).down(1).next('li', 2).hide();
	 * </code>
	 * Walking the DOM has never been that easy!
	 * Arguments
	 * <p>
	 * If no arguments are passed, element's first descendant is returned 
	 * (this is similar to calling firstChild except Element.down returns an 
	 * extended element.
	 * <p>
	 * If index is defined, element's corresponding descendant is returned. 
	 * (This is equivalent to selecting an element from the array of elements 
	 * returned by the method Element.descendants.) Note that the first element 
	 * has an index of 0.
	 * <p>
	 * If expression is defined, Element.down will return the first descendant 
	 * that matches it. This is a great way to grab the first item in a list for 
	 * <p>
	 * example (just pass in 'li' as the method's first argument).
	 * If both expression and index are defined, Element.down will collect all 
	 * the descendants matching the given CSS expression and will return the one 
	 * at the specified index.
	 * <p>
	 * In all of the above cases, if no descendant is found, undefined will be 
	 * returned.
	 * <p>
	 * Examples
	 * <code>
	 * <ul id="fruits">
	 *   <li id="apples">
	 *     <ul>
	 *       <li id="golden-delicious">Golden Delicious</li>
	 *       <li id="mutsu" class="yummy">Mutsu</li>
	 *       <li id="mcintosh" class="yummy">McIntosh</li>
	 *       <li id="ida-red">Ida Red</li>
	 *     </ul>
	 *   </li>
	 * </ul>
	 * </code>
	 * <p>
	 * Get the first descendant of "#fruites":
	 * <code>
	 * $('fruits').down();
	 * // or:
	 * $('fruits').down(0);
	 * // -> li#apples
	 * </code>
	 * Get the third descendant of "#fruits":
	 * <code>
	 * $('fruits').down(3);
	 * // -> li#golden-delicious
	 * </code>
	 * Get the first descendant of "#apples" with the node name "li":
	 * <code>
	 * $('apples').down('li');
	 * // -> li#golden-delicious
	 * </code>
	 * Get the first descendant of "#apples" with the node name "li" and the 
	 * class name "yummy":
	 * <code>
	 * $('apples').down('li.yummy');
	 * // -> li#mutsu
	 * </code>
	 * Get the second descendant of "#fruits" with the class name "yummy":
	 * <code>
	 * $('fruits').down('.yummy', 1);
	 * // -> li#mcintosh
	 * </code>
	 * Try to get the ninety-ninth descendant of "#fruits":
	 * <code>
	 * $('fruits').down(99);
	 * // -> undefined
	 * </code>
	 */
	//> public Element down({String | Element} idOrElement, String? expr, int? index)
	//> public Element down({String | Element} idOrElement, int index)
	down: vjo.NEEDS_IMPL,
	
	/**
   *  Element.previous(@element[, expression[, index = 0]]) -> Element
   *  Element.previous(@element[, index = 0]) -> Element
   *  - expression (String): A CSS selector.
   *
   *  Returns `element`'s first previous sibling (or the Nth, if `index`
   *  is specified) that matches `expression`. If no `expression` is
   *  provided, all previous siblings are considered. If none matches these
   *  criteria, `undefined` is returned.
   *
   *  ##### More information
   *
   *  The [[Element.previous]] method is part of Prototype's ultimate DOM
   *  traversal toolkit (check out [[Element.up]], [[Element.down]] and
   *  [[Element.next]] for some more Prototypish niceness). It allows precise
   *  index-based and/or CSS expression-based selection of any of `element`'s
   *  **previous siblings**. (Note that two elements are considered siblings if
   *  they have the same parent, so for example, the `head` and `body` elements
   *  are siblings&#8212;their parent is the `html` element.)
   *  
   *  As it totally ignores text nodes (it only returns elements), you don't
   *  have to worry about whitespace nodes.
   *  
   *  And as an added bonus, all elements returned are already extended (see 
   *  [[Element.extend]]) allowing chaining:
   *  
   *      $(element).down('p').previous('ul', 2).hide();
   *  
   *  Walking the DOM has never been that easy!
   *  
   *  ##### Arguments
   *  
   *  If no arguments are passed, `element`'s previous sibling is returned
   *  (this is similar as calling `previousSibling` except [[Element.previous]]
   *  returns an already extended element).
   *  
   *  If `index` is defined, `element`'s corresponding previous sibling is
   *  returned. (This is equivalent to selecting an element from the array of
   *  elements returned by the method [[Element.previousSiblings]]). Note that
   *  the sibling _right above_ `element` has an index of 0.
   *  
   *  If `expression` is defined, [[Element.previous]] will return the `element`
   *  first previous sibling that matches it.
   *  
   *  If both `expression` and `index` are defined, [[Element.previous]] will
   *  collect all of `element`'s previous siblings matching the given CSS
   *  expression and will return the one at the specified index.
   *  
   *  **In all of the above cases, if no previous sibling is found,**
   *  `undefined` **will be returned.**
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <ul id="fruits">
   *        <li id="apples">
   *          <h3>Apples</h3>
   *          <ul id="list-of-apples">
   *            <li id="golden-delicious" class="yummy">Golden Delicious</li>
   *            <li id="mutsu" class="yummy">Mutsu</li>
   *            <li id="mcintosh">McIntosh</li>
   *            <li id="ida-red">Ida Red</li>
   *          </ul>
   *          <p id="saying">An apple a day keeps the doctor away.</p>  
   *        </li>
   *      </ul>
   *  
   *  Get the first previous sibling of "#saying":
   *  
   *      $('saying').previous();
   *      // or:
   *      $('saying').previous(0);
   *      // -> ul#list-of-apples
   *
   *  Get the second previous sibling of "#saying":
   *
   *      $('saying').previous(1);
   *      // -> h3
   *
   *  Get the first previous sibling of "#saying" with node name "h3":
   *
   *      $('saying').previous('h3');
   *      // -> h3
   *
   *  Get the first previous sibling of "#ida-red" with class name "yummy":
   *
   *      $('ida-red').previous('.yummy');
   *      // -> li#mutsu
   *
   *  Get the second previous sibling of "#ida-red" with class name "yummy":
   *
   *      $('ida-red').previous('.yummy', 1);
   *      // -> li#golden-delicious
   *
   *  Try to get the sixth previous sibling of "#ida-red":
   *      
   *      $('ida-red').previous(5);
   *      // -> undefined
  **/
	//> public Element previous({String | Element} idOrElement, int? index)
	//> public Element previous({String | Element} idOrElement, String cssSelector, int? index)
	previous: vjo.NEEDS_IMPL,
	
	/**
   *  Element.next(@element[, expression[, index = 0]]) -> Element
   *  Element.next(@element[, index = 0]) -> Element
   *  - expression (String): A CSS selector.
   *
   *  Returns `element`'s first following sibling (or the Nth, if `index`
   *  is specified) that matches `expression`. If no `expression` is
   *  provided, all following siblings are considered. If none matches these
   *  criteria, `undefined` is returned.
   *
   *  ##### More information
   *
   *  The [[Element.next]] method is part of Prototype's ultimate DOM traversal
   *  toolkit (check out [[Element.up]], [[Element.down]] and
   *  [[Element.previous]] for some more Prototypish niceness). It allows
   *  precise index-based and/or CSS expression-based selection of any of
   *  `element`'s **following siblings**. (Note that two elements are considered
   *  siblings if they have the same parent, so for example, the `head` and
   *  `body` elements are siblings&#8212;their parent is the `html` element.)
   *  
   *  As it totally ignores text nodes (it only returns elements), you don't
   *  have to worry about whitespace nodes.
   *  
   *  And as an added bonus, all elements returned are already extended (see 
   *  [[Element.extend]]) allowing chaining:
   *  
   *      $(element).down(1).next('li', 2).hide();
   *  
   *  Walking the DOM has never been that easy!
   *  
   *  ##### Arguments
   *  
   *  If no arguments are passed, `element`'s following sibling is returned
   *  (this is similar as calling `nextSibling` except [[Element.next]] returns an
   *  already extended element).
   *  
   *  If `index` is defined, `element`'s corresponding following sibling is
   *  returned. (This is equivalent to selecting an element from the array of
   *  elements returned by the method [[Element.nextSiblings]]). Note that the
   *  sibling _right below_ `element` has an index of 0.
   *  
   *  If `expression` is defined, [[Element.next]] will return the `element` first
   *  following sibling that matches it.
   *  
   *  If both `expression` and `index` are defined, [[Element.next]] will collect
   *  all of `element`'s following siblings matching the given CSS expression
   *  and will return the one at the specified index.
   *  
   *  **In all of the above cases, if no following sibling is found,**
   *  `undefined` **will be returned.**
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <ul id="fruits">
   *        <li id="apples">
   *          <h3 id="title">Apples</h3>
   *          <ul id="list-of-apples">
   *            <li id="golden-delicious">Golden Delicious</li>
   *            <li id="mutsu">Mutsu</li>
   *            <li id="mcintosh" class="yummy">McIntosh</li>
   *            <li id="ida-red" class="yummy">Ida Red</li>
   *          </ul>
   *          <p id="saying">An apple a day keeps the doctor away.</p>  
   *        </li>
   *      </ul>
   *
   *  Get the first sibling after "#title":
   *  
   *      $('title').next();
   *      // or:
   *      $('title').next(0);
   *      // -> ul#list-of-apples
   *
   *  Get the second sibling after "#title":
   *
   *      $('title').next(1);
   *      // -> p#saying
   *
   *  Get the first sibling after "#title" with node name "p":
   *
   *      $('title').next('p');
   *      // -> p#sayings
   *
   *  Get the first sibling after "#golden-delicious" with class name "yummy":
   *      
   *      $('golden-delicious').next('.yummy');
   *      // -> li#mcintosh
   *
   *  Get the second sibling after "#golden-delicious" with class name "yummy":
   *
   *      $('golden-delicious').next('.yummy', 1);
   *      // -> li#ida-red
   *
   *  Try to get the first sibling after "#ida-red":
   *
   *      $('ida-red').next();
   *      // -> undefined   
  **/
	//> public Element next({String | Element} idOrElement, String expression)
	//> public Element next({String | Element} idOrElement, String expression, int index)
	//> public Element next({String | Element} idOrElement, int? index)
	next: vjo.NEEDS_IMPL,
	
	/**
   *  Element.select(@element, expression...) -> [Element...]
   *  - expression (String): A CSS selector.
   *
   *  Takes an arbitrary number of CSS selectors and returns an array of
   *  descendants of `element` that match any of them.
   *
   *  This method is very similar to [[$$]] but can be used within the context 
   *  of one element, rather than the whole document. The supported CSS syntax 
   *  is identical, so please refer to the [[$$]] docs for details.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <ul id="fruits">
   *        <li id="apples">
   *          <h3 title="yummy!">Apples</h3>
   *          <ul id="list-of-apples">
   *            <li id="golden-delicious" title="yummy!" >Golden Delicious</li>
   *            <li id="mutsu" title="yummy!">Mutsu</li>
   *            <li id="mcintosh">McIntosh</li>
   *            <li id="ida-red">Ida Red</li>
   *          </ul>
   *          <p id="saying">An apple a day keeps the doctor away.</p>  
   *        </li>
   *      </ul>
   *
   *  Then:
   *
   *      $('apples').select('[title="yummy!"]');
   *      // -> [h3, li#golden-delicious, li#mutsu]
   *      
   *      $('apples').select( 'p#saying', 'li[title="yummy!"]');
   *      // -> [li#golden-delicious, li#mutsu,  p#saying]
   *      
   *      $('apples').select('[title="disgusting!"]');
   *      // -> []
   *  
   *  ##### Tip
   *
   *  [[Element.select]] can be used as a pleasant alternative to the native
   *  method `getElementsByTagName`:
   *  
   *      var nodes  = $A(someUL.getElementsByTagName('li')).map(Element.extend);
   *      var nodes2 = someUL.select('li');
   *  
   *  In the first example, you must explicitly convert the result set to an
   *  [[Array]] (so that Prototype's [[Enumerable]] methods can be used) and
   *  must manually call [[Element.extend]] on each node (so that custom 
   *  instance methods can be used on the nodes). [[Element.select]] takes care 
   *  of both concerns on its own.
   *  
   *  If you're using 1.6 or above (and the performance optimizations therein), 
   *  the speed difference between these two examples is negligible.
  **/
	//> public Element[] select({String | Element} idOrElement, String... cssSelectors)
	select: vjo.NEEDS_IMPL,
	
	/**
	 * Element.adjacent(element, selector...) ? [Element…]
	 * <p>
	 * selector (String) – A CSS selector.
	 * <p>
	 * Finds all siblings of the current element that match the given selector(s). 
	 * If you provide multiple selectors, siblings matching any of the selectors 
	 * are included. If a sibling matches multiple selectors, it is only included 
	 * once. The order of the returned array is not defined.
	 * <p>Example
	 * Assuming this list:
	 * <code>
	 * <ul id="cities">
	 *   <li class="us" id="nyc">New York</li>
	 *   <li class="uk" id="lon">London</li>
	 *   <li class="us" id="chi">Chicago</li>
	 *   <li class="jp" id="tok">Tokyo</li>
	 *   <li class="us" id="la">Los Angeles</li>
	 *   <li class="us" id="aus">Austin</li>
	 * </ul>
	 * </code>
	 * <p>
	 * Then:
	 * <code>
	 * $('nyc').adjacent('li.us');
	 * // -> [li#chi, li#la, li#aus]
	 * $('nyc').adjacent('li.uk', 'li.jp');
	 * // -> [li#lon, li#tok]
	 * </code>
	 */
	//> public Element[] adjacent({String | Element} idOrElement, String... cssSelector)
	adjacent: vjo.NEEDS_IMPL,
	
	/**
   *  Element.identify(@element) -> String
   *
   *  Returns `element`'s ID. If `element` does not have an ID, one is
   *  generated, assigned to `element`, and returned.
   *  
   *  ##### Examples
   *  
   *  Original HTML:
   *  
   *        <ul>
   *          <li id="apple">apple</li>
   *          <li>orange</li>
   *        </ul>
   *  
   *  JavaScript:
   *  
   *        $('apple').identify();
   *        // -> 'apple'
   *      
   *        $('apple').next().identify();
   *        // -> 'anonymous_element_1'
   *  
   *  Resulting HTML:
   *  
   *        <ul>
   *          <li id="apple">apple</li>
   *          <li id="anonymous_element_1">orange</li>
   *        </ul>
  **/
	//> public String identify({String | Element} idOrElement)
	identify: vjo.NEEDS_IMPL,
	
	/**
   *  Element.readAttribute(@element, attributeName) -> String | null
   *
   *  Returns the value of `element`'s `attribute` or `null` if `attribute` has
   *  not been specified.
   *  
   *  This method serves two purposes. First it acts as a simple wrapper around
   *  `getAttribute` which isn't a "real" function in Safari and Internet
   *  Explorer (it doesn't have `.apply` or `.call` for instance). Secondly, it
   *  cleans up the horrible mess Internet Explorer makes when handling
   *  attributes.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <a id="tag" href="/tags/prototype" rel="tag" title="view related bookmarks." my_widget="some info.">Prototype</a>
   *
   *  Then:
   *
   *      $('tag').readAttribute('href');
   *      // -> '/tags/prototype'
   *      
   *      $('tag').readAttribute('title');
   *      // -> 'view related bookmarks.'
   *      
   *      $('tag').readAttribute('my_widget');
   *      // -> 'some info.'
  **/
	//> public String readAttribute({String | Element} idOrElement, String attributeName)
	readAttribute: vjo.NEEDS_IMPL,
	
  /**
   *  Element.writeAttribute(@element, attribute[, value = true]) -> Element
   *  Element.writeAttribute(@element, attributes) -> Element
   *
   *  Adds, specifies or removes attributes passed as either a hash or a
   *  name/value pair.
  **/
	//> public Element writeAttribute({String | Element} idOrElement, Object attributes, boolean? value)
	writeAttribute: vjo.NEEDS_IMPL,
	
	/**
   *  Element.getHeight(@element) -> Number
   *
   *  Returns the height of `element`.
   *  
   *  This method returns correct values on elements whose display is set to
   *  `none` either in an inline style rule or in an CSS stylesheet.
   *  
   *  For performance reasons, if you need to query both width _and_ height of
   *  `element`, you should consider using [[Element.getDimensions]] instead.
   *  
   *  Note that the value returned is a _number only_ although it is
   *  _expressed in pixels_.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"></div>
   *
   *  Then:
   *
   *      $('rectangle').getHeight();
   *      // -> 100
  **/
	//> public Number getHeight({String | Element} idOrElement)
	getHeight: vjo.NEEDS_IMPL,
	
	/**
   *  Element.getWidth(@element) -> Number
   *
   *  Returns the width of `element`.
   *  
   *  This method returns correct values on elements whose display is set to
   *  `none` either in an inline style rule or in an CSS stylesheet.
   *  
   *  For performance reasons, if you need to query both width _and_ height of
   *  `element`, you should consider using [[Element.getDimensions]] instead.
   *  
   *  Note that the value returned is a _number only_ although it is
   *  _expressed in pixels_.
   *  
   *  ##### Examples
   *  
   *      language: html
   *      <div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"></div>
   *
   *  Then:
   *
   *      $('rectangle').getWidth();
   *      // -> 200
  **/
	//> public Number getWidth({String | Element} idOrElement)
	getWidth: vjo.NEEDS_IMPL,
	
	/**
	 * @deprecated
	 * Element.classNames(element) ? [String…]
	 * <p>
	 * Returns a new instance of Element.ClassNames, an Enumerable object used 
	 * to read and write CSS class names of element.
	 * <p>
	 * Deprecated, please see Element.addClassName, Element.removeClassName, and 
	 * Element.hasClassName. If you want an array of classnames, you can use 
	 * $w(element.className).
	 */
	//> public String[] classNames({String | Element} idOrElement)
	classNames: vjo.NEEDS_IMPL,
	
	/**
   *  Element.hasClassName(@element, className) -> Boolean
   *
   *  Checks for the presence of CSS class `className` on `element`.
   *
   *  ##### Examples
   *  
   *      language: html
   *      <div id="mutsu" class="apple fruit food"></div>
   *
   *  Then:
   *
   *      $('mutsu').hasClassName('fruit');
   *      // -> true
   *      
   *      $('mutsu').hasClassName('vegetable');
   *      // -> false
  **/
	//> public boolean hasClassName({String | Element} idOrElement, String className)
	hasClassName: vjo.NEEDS_IMPL,
	
	/**
	 * Element.addClassName(element, className) ? Element
	 * <p>className (String) – The class name to add.
	 * Adds the given CSS class to element.
	 * <p>Example
	 * Assuming this HTML:
	 * <code>
	 * <div id="mutsu" class="apple fruit"></div>
	 * </code>
	 * <p>Then:
	 * <code>
	 * $('mutsu').className;
	 * // -> 'apple fruit'
	 * $('mutsu').addClassName('food');
	 * $('mutsu').className;
	 * // -> 'apple fruit food'
	 * </code>
	 */
	//> public Element addClassName({String | Element} idOrElement, String className)
	addClassName: vjo.NEEDS_IMPL,
	
	/**
   *  Element.removeClassName(@element, className) -> Element
   *
   *  Removes CSS class `className` from `element`.
   *
   *  ##### Examples
   *
   *  Assuming this HTML:
   *
   *      language: html
   *      <div id="mutsu" class="apple fruit food"></div>
   *  
   *  Then:
   *
   *      $('mutsu').removeClassName('food');
   *      // -> Element
   *      
   *      $('mutsu').classNames;
   *      // -> 'apple fruit'
  **/
	//> public Element removeClassName({String | Element} idOrElement, String className)
	removeClassName: vjo.NEEDS_IMPL,
	
	/**
   *  Element.toggleClassName(@element, className) -> Element
   *
   *  Toggles the presence of CSS class `className` on `element`.
   *
   *  ##### Examples
   *  
   *      language: html
   *      <div id="mutsu" class="apple"></div>
   *
   *  Then:
   *
   *      $('mutsu').hasClassName('fruit');
   *      // -> false
   *      
   *      $('mutsu').toggleClassName('fruit');
   *      // -> element
   *      
   *      $('mutsu').hasClassName('fruit');
   *      // -> true
  **/
	//> public Element toggleClassName({String | Element} idOrElement, String className)
	toggleClassName: vjo.NEEDS_IMPL,
	
	/**
	 * Element.cleanWhitespace(element) ? Element
	 * <p>
	 * Removes all of element's child text nodes that contain only whitespace. 
	 * Returns element.
	 * <p>
	 * This can be very useful when using standard properties like nextSibling, 
	 * previousSibling, firstChild or lastChild to walk the DOM. Usually you'd 
	 * only do that if you are interested in all of the DOM nodes, not just 
	 * Elements (since if you just need to traverse the Elements in the DOM tree, 
	 * you can use Element.up, Element.down, Element.next, and Element.previous 
	 * instead).
	 * <p>
	 * Example
	 * Consider the following HTML snippet:
	 * <code>
	 * <ul id="apples">
	 *   <li>Mutsu</li>
	 *   <li>McIntosh</li>
	 *   <li>Ida Red</li>
	 * </ul>
	 * </code>
	 * <p>Let's grab what we think is the first list item using the raw DOM method:
	 * <code>
	 * var element = $('apples');
	 * element.firstChild.innerHTML;
	 * // -> undefined
	 * </code>
	 * It's undefined because the firstChild of the apples element is a text node 
	 * containing the whitespace after the end of the ul and before the first li.
	 * <p>
	 * If we remove the useless whitespace, then firstChild works as expected:
	 * <code>
	 * var element = $('apples');
	 * element.cleanWhitespace();
	 * element.firstChild.innerHTML;
	 * // -> 'Mutsu'
	 * </code>
	 */
	//> public Element cleanWhitespace({String | Element} idOrElement)
	cleanWhitespace: vjo.NEEDS_IMPL,
	
	/**
	 * Element.empty(element) ? Element
	 * <p>
	 * Tests whether element is empty (i.e., contains only whitespace).
	 * <p>
	 * Examples
	 * <code>
	 * <div id="wallet">     </div>
	 * <div id="cart">full!</div>
	 * $('wallet').empty();
	 * // -> true
	 * $('cart').empty();
	 * // -> false
	 * </code>
	 */
	//> public Element empty({String | Element} idOrElement)
	empty: vjo.NEEDS_IMPL,
	
	/**
	 * Element.descendantOf(element, ancestor) ? Boolean
	 * <p>
	 * ancestor (Element | String) – The element to check against (or its ID).
	 * <p>
	 * Checks if element is a descendant of ancestor
	 * Example Assuming:
	 * <code>
	 * <div id="australopithecus">
	 *   <div id="homo-erectus">
	 *     <div id="homo-sapiens"></div>
	 *   </div>
	 * </div>
	 * </code>
	 * Then:
	 * <code>
	 * $('homo-sapiens').descendantOf('australopithecus');
	 * // -> true
	 * $('homo-erectus').descendantOf('homo-sapiens');
	 * // -> false
	 * </code>
	 */
	//> public boolean descendantOf(Element element, {Element | String} ancestor)
	descendantOf: vjo.NEEDS_IMPL,
	
	/**> public boolean childOf(Element element, {Element | String} ancestor) ;
	 * @deprecated - use descendantOf(...)
	 */
	childOf: vjo.NEEDS_IMPL,
	
	/**
   *  Element.scrollTo(@element) -> Element
   *
   *  Scrolls the window so that `element` appears at the top of the viewport.
   *  
   *  This has a similar effect than what would be achieved using
   *  [HTML anchors](http://www.w3.org/TR/html401/struct/links.html#h-12.2.3)
   *  (except the browser's history is not modified).
   *  
   *  ##### Example
   *  
   *      $(element).scrollTo();
   *      // -> Element
  **/
	//> public Element scrollTo({String | Element} idOrElement)
	scrollTo: vjo.NEEDS_IMPL,
	
	/**
   *  Element.getStyle(@element, style) -> String | null
   *  - style (String): The property name to be retrieved.
   *
   *  Returns the given CSS property value of `element`. The property can be
   *  specified in either its CSS form (`font-size`) or its camelized form
   *  (`fontSize`).
   *
   *  This method looks up the CSS property of an element whether it was
   *  applied inline or in a stylesheet. It works around browser inconsistencies
   *  regarding `float`, `opacity`, which returns a value between `0`
   *  (fully transparent) and `1` (fully opaque), position properties
   *  (`left`, `top`, `right` and `bottom`) and when getting the dimensions
   *  (`width` or `height`) of hidden elements.
   *  
   *  ##### Examples
   *  
   *      $(element).getStyle('font-size');
   *      // equivalent:
   *      
   *      $(element).getStyle('fontSize');
   *      // -> '12px'
   *  
   *  ##### Notes
   *  
   *  Internet Explorer returns literal values while other browsers return
   *  computed values.
   *
   *  Consider the following HTML snippet:
   *  
   *      language: html
   *      <style>
   *        #test {
   *          font-size: 12px;
   *          margin-left: 1em;
   *        }
   *      </style>
   *      <div id="test"></div>
   *
   *  Then:
   *
   *      $('test').getStyle('margin-left');
   *      // -> '1em' in Internet Explorer,
   *      // -> '12px' elsewhere.
   *  
   *  Safari returns `null` for *any* non-inline property if the element is
   *  hidden (has `display` set to `'none'`).
   *  
   *  Not all CSS shorthand properties are supported. You may only use the CSS
   *  properties described in the
   *  [Document Object Model (DOM) Level 2 Style Specification](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle).
   **/
	//> public String getStyle({String | Element} idOrElement, String style)
	getStyle: vjo.NEEDS_IMPL,
	
	/**
   *  Element.getOpacity(@element) -> String | null
   *
   *  Returns the opacity of the element.
  **/
	//> public String getOpacity({String | Element} idOrElement)
	getOpacity: vjo.NEEDS_IMPL,
	
	/** 
   *  Element.setStyle(@element, styles) -> Element
   *  
   *  Modifies `element`'s CSS style properties. Styles are passed as a hash of
   *  property-value pairs in which the properties are specified in their
   *  camelized form.
   *  
   *  ##### Examples
   *  
   *      $(element).setStyle({
   *        backgroundColor: '#900',
   *        fontSize: '12px'
   *      });
   *      // -> Element
   *  
   *  ##### Notes
   *  
   *  The method transparently deals with browser inconsistencies for `float`
   *  (however, as `float` is a reserved keyword, you must either escape it or
   *  use `cssFloat` instead) and `opacity` (which accepts values between `0`
   *  -fully transparent- and `1` -fully opaque-). You can safely use either of
   *  the following across all browsers:
   *  
   *      $(element).setStyle({
   *        cssFloat: 'left',
   *        opacity: 0.5
   *      });
   *      // -> Element
   *      
   *      $(element).setStyle({
   *        'float': 'left', // notice how float is surrounded by single quotes
   *        opacity: 0.5
   *      });
   *      // -> Element
   *  
   *  Not all CSS shorthand properties are supported. You may only use the CSS
   *  properties described in the
   *  [Document Object Model (DOM) Level 2 Style Specification](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle).
  **/
	//> public Element setStyle({String | Element} idOrElement, Object styles)
	setStyle: vjo.NEEDS_IMPL,
	
	/** 
   *  Element.setOpacity(@element, opacity) -> [Element...]
   *  
   *  Sets the visual opacity of an element while working around inconsistencies
   *  in various browsers. The `opacity` argument should be a floating point
   *  number, where the value of `0` is fully transparent and `1` is fully opaque.
   *  
   *  [[Element.setStyle]] method uses [[Element.setOpacity]] internally when needed.
   *  
   *  ##### Examples
   *  
   *      var element = $('myelement');
   *      // set to 50% transparency
   *      element.setOpacity(0.5);
   *      
   *      // these are equivalent, but allow for setting more than
   *      // one CSS property at once:
   *      element.setStyle({ opacity: 0.5 });
   *      element.setStyle("opacity: 0.5");
  **/
	//> public Element[] setOpacity({String | Element} idOrElement, Number opacity)
	setOpacity: vjo.NEEDS_IMPL,
	
	/**
   *  Element.makePositioned(@element) -> Element
   *
   *  Allows for the easy creation of a CSS containing block by setting
   *  `element`'s CSS `position` to `relative` if its initial position is
   *  either `static` or `undefined`.
   *  
   *  To revert back to `element`'s original CSS position, use
   *  [[Element.undoPositioned]].
  **/
	//> public Element makePositioned({String | Element} idOrElement)
	makePositioned: vjo.NEEDS_IMPL,
	
	/**
	   *  Element.undoPositioned(@element) -> Element
	   *
	   *  Sets `element` back to the state it was in _before_
	   *  [[Element.makePositioned]] was applied to it.
	   *  
	   *  `element`'s absolutely positioned children will now have their positions
	   *  set relatively to `element`'s nearest ancestor with a CSS `position` of
	   *  `'absolute'`, `'relative'` or `'fixed'`.
	  **/
	//> public Element undoPositioned({String | Element} idOrElement)
	undoPositioned: vjo.NEEDS_IMPL,

  /**
   *  Element.makeClipping(@element) -> Element
   *
   *  Simulates the poorly-supported CSS `clip` property by setting `element`'s
   *  `overflow` value to `hidden`.
   *
   *  To undo clipping, use [[Element.undoClipping]].
   *  
   *  The visible area is determined by `element`'s width and height.
   *  
   *  ##### Example
   *  
   *      language:html
   *      <div id="framer">
   *        <img src="/assets/2007/1/14/chairs.jpg" alt="example" />
   *      </div>
   *  
   *  Then:
   *
   *      $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
   *      // -> Element
   *  
   *  Another example:
   *
   *      language: html
   *      <a id="clipper" href="#">Click me to try it out.</a>
   *  
   *      <div id="framer">
   *        <img src="/assets/2007/2/24/chairs.jpg" alt="example" />
   *      </div>
   *  
   *      <script type="text/javascript" charset="utf-8">
   *        var Example = {
   *          clip: function(){
   *            $('clipper').update('undo clipping!');
   *            $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
   *          },
   *          unClip: function(){
   *            $('clipper').update('clip!');
   *            $('framer').undoClipping();
   *          },
   *          toggleClip: function(event){
   *            if($('clipper').innerHTML == 'undo clipping!') Example.unClip();
   *            else Example.clip();
   *            Event.stop(event);
   *          }
   *        };
   *        Event.observe('clipper', 'click', Example.toggleClip);
   *      </script>
  **/
	//> public Element makeClipping({String | Element} idOrElement)
	makeClipping: vjo.NEEDS_IMPL,

  /**
   *  Element.undoClipping(@element) -> Element
   *
   *  Sets `element`'s CSS `overflow` property back to the value it had
   *  _before_ [[Element.makeClipping]] was applied.
   *
   *  ##### Example
   *  
   *      language: html
   *      <div id="framer">
   *        <img src="/assets/2007/1/14/chairs.jpg" alt="example" />
   *      </div>
   *
   *  Then:
   *
   *      $('framer').undoClipping();
   *      // -> Element (and sets the CSS overflow property to its original value).
   *  
   *  Another example:
   *
   *      language: html
   *      <a id="clipper" href="#">Click me to try it out.</a>
   *
   *      <div id="framer">
   *        <img src="/assets/2007/2/24/chairs_1.jpg" alt="example" />
   *      </div>
   *  
   *      <script type="text/javascript" charset="utf-8">
   *        var Example = {
   *          clip: function(){
   *            $('clipper').update('undo clipping!');
   *            $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
   *          },
   *          unClip: function(){
   *            $('clipper').update('clip!');
   *            $('framer').undoClipping();
   *          },
   *          toggleClip: function(event){
   *            if($('clipper').innerHTML == 'clip!') Example.clip();
   *            else Example.unClip();
   *            Event.stop(event);
   *          }
   *        };
   *        $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
   *        Event.observe('clipper', 'click', Example.toggleClip);
   *      </script>
  **/
	//> public Element undoClipping({String | Element} idOrElement)
	undoClipping: vjo.NEEDS_IMPL
	
//	/**
//	 * Element.clonePosition(element, source[, options]) ? Element
//	 * <p>
//	 * source (Element | String) – The source element (or its ID).
//	 * <p>
//	 * options (Object) – The position fields to clone.
//	 * <p>
//	 * Clones the position and/or dimensions of source onto the element as 
//	 * defined by options, with an optional offset for the left and top properties.
//	 * <p>
//	 * Note that the element will be positioned exactly like source whether or 
//	 * not it is part of the same CSS containing block.
//	 * <p>
//	 * Options
//	 * Name 	Default 	Description
//	 * setLeft 	true 	Clones source's left CSS property onto element.
//	 * setTop 	true 	Clones source's top CSS property onto element.
//	 * setWidth 	true 	Clones source's width onto element.
//	 * setHeight 	true 	Clones source's width onto element.
//	 * offsetLeft 	0 	Number by which to offset element's left CSS property.
//	 * offsetTop 	0 	Number by which to offset element's top CSS property.
//	 */
//	//> public Element clonePosition(Element element, Object options)
//	//> public Element clonePosition(String sourceId, Object options)
//	clonePosition: vjo.NEEDS_IMPL,
	
//	// Extensions on Element.Methods in dom.js
//	/**
//	 * 
//	 */
//	//> public Element[] getElementsBySelector({String | Element} idOrElement, String selector)
//	getElementsBySelector: vjo.NEEDS_IMPL,
//	
//	/**
//	   *  Element.childElements(@element) -> [Element...]
//	   *
//	   *  Collects all of the element's children and returns them as an array of
//	   *  [[Element.extended extended]] elements, in document order. The first
//	   *  entry in the array is the topmost child of `element`, the next is the
//	   *  child after that, etc.
//	   *
//	   *  Like all of Prototype's DOM traversal methods, [[Element.childElements]]
//	   *  ignores text nodes and returns element nodes only.
//	   *
//	   *  ##### Example
//	   *
//	   *  Assuming:
//	   *
//	   *      language: html
//	   *      <div id="australopithecus">
//	   *        Some text in a text node
//	   *        <div id="homo-erectus">
//	   *          <div id="homo-neanderthalensis"></div>
//	   *          <div id="homo-sapiens"></div>
//	   *        </div>
//	   *      </div>
//	   *
//	   *  Then:
//	   *
//	   *      $('australopithecus').childElements();
//	   *      // -> [div#homo-erectus]
//	   *
//	   *      $('homo-erectus').childElements();
//	   *      // -> [div#homo-neanderthalensis, div#homo-sapiens]
//	   *
//	   *      $('homo-sapiens').childElements();
//	   *      // -> []
//	  **/	
//	childElements: vjo.NEEDS_IMPL
	
})
.protos({
//	/**
//	 * new Element(tagName[, attributes])
//	 * <p>
//	 * tagName (String) – The name of the HTML element to create.
//	 * <p>
//	 * attributes (Object) – An optional group of attribute/value pairs to set 
//	 * on the element.
//	 * <p>
//	 * Creates an HTML element with tagName as the tag name, optionally with the 
//	 * given attributes. This can be markedly more concise than working directly 
//	 * with the DOM methods, and takes advantage of Prototype's workarounds for 
//	 * various browser issues with certain attributes
//	 * <p>
//	 * Example
//	 * <code>
//	 * // The old way:
//	 * var a = document.createElement('a');
//	 * a.setAttribute('class', 'foo');
//	 * a.setAttribute('href', '/foo.html');
//	 * a.appendChild(document.createTextNode("Next page"));
//	 * // The new way:
//	 * var a = new Element('a', {'class': 'foo', href: '/foo.html'}).update("Next page");
//	 * </code>
//	 */
//	//> public constructs(String tagName, Object? attributes)
//	constructs: function() {},
	
	/**
	 * 
	 */
	//> public Element addClassName(String className)
	addClassName: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] adjacent(String... selectors)
	adjacent: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] ancestors()
	ancestors: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] childElements()
	childElements: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String[] classNames()
	classNames: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element cleanWhitespace()
	cleanWhiteSpace: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element clonePosition({Object | String | Element} source, Object? options)
	clonePosition: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean descendantOf({Object | String | Element} ancestor)
	descendantOf: vjo.NEEDS_IMPL,
	/**> public boolean childOf({Object | String | Element} ancestor) ;
	 * @deprecated - use descendantOf(...)
	 */
	childOf: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] descendants()
	descendants: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element down(String? cssSelector, int? index)
	//> public Element down(int index)
	down: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element empty()
	empty: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Event fire(String eventName, Object? memo, boolean? bubble)
	fire: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element firstDescendant()
	firstDescendant: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] getElementsBySelector(String selector)
	getElementsBySelector: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number getHeight()
	getHeight: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String getOpacity()
	getOpacity: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String getStyle(String style)
	getStyle: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Number getWidth()
	getWidth: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean hasAttribute(String attribute)
	hasAttribute: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean hasClassName(String className)
	hasClassName: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element hide()
	hide: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String identify()
	identify: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] immediateDescendants()
	immediateDescendants: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element insert({Object | String | Element} content)
	insert: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String inspect()
	inspect: vjo.NEEDS_IMPL,
	
	/**
   *  Element.makeClipping(@element) -> Element
   *
   *  Simulates the poorly-supported CSS `clip` property by setting `element`'s
   *  `overflow` value to `hidden`.
   *
   *  To undo clipping, use [[Element.undoClipping]].
   *  
   *  The visible area is determined by `element`'s width and height.
   *  
   *  ##### Example
   *  
   *      language:html
   *      <div id="framer">
   *        <img src="/assets/2007/1/14/chairs.jpg" alt="example" />
   *      </div>
   *  
   *  Then:
   *
   *      $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
   *      // -> Element
   *  
   *  Another example:
   *
   *      language: html
   *      <a id="clipper" href="#">Click me to try it out.</a>
   *  
   *      <div id="framer">
   *        <img src="/assets/2007/2/24/chairs.jpg" alt="example" />
   *      </div>
   *  
   *      <script type="text/javascript" charset="utf-8">
   *        var Example = {
   *          clip: function(){
   *            $('clipper').update('undo clipping!');
   *            $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
   *          },
   *          unClip: function(){
   *            $('clipper').update('clip!');
   *            $('framer').undoClipping();
   *          },
   *          toggleClip: function(event){
   *            if($('clipper').innerHTML == 'undo clipping!') Example.unClip();
   *            else Example.clip();
   *            Event.stop(event);
   *          }
   *        };
   *        Event.observe('clipper', 'click', Example.toggleClip);
   *      </script>
  **/
	//> public Element makeClipping()
	makeClipping: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element makePositioned()
	makePositioned: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean match(String cssSelector)
	match: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element next(String cssSelector, int? index)
	//> public Element next(int? index)
	next: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] nextSiblings()
	nextSiblings: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element observe(String eventName, Function handler)
	observe: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element on(String eventName, String? cssSelector, Function? callback)
	on: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element previous(String cssSelector, int? index)
	//> public Element previous(int? index)
	previous: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] previousSiblings()
	previousSiblings: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String readAttribute(String attributeName)
	readAttribute: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] recursivelyCollect(String property)
	recursivelyCollect: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element remove()
	remove: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element removeClassName(String className)
	removeClassName: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element replace({String | Object | Element} newContent)
	replace: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element scrollTo()
	scrollTo: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] select(String... cssSelectors)
	select: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element setOpacity(Number opacity)
	setOpacity: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element setStyle(Object styles)
	setStyle: vjo.NEEDS_IMPL,
	
	
	/**
	 * 
	 */
	//> public Element show()
	show: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] siblings()
	siblings: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element stopObserving(String eventName, Function? handler)
	stopObserving: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element toggle()
	toggle: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element toggleClassName(String className)
	toggleClassName: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element undoClipping()
	undoClipping: vjo.NEEDS_IMPL,
	
	/**
   *  Element.undoPositioned(@element) -> Element
   *
   *  Sets `element` back to the state it was in _before_
   *  [[Element.makePositioned]] was applied to it.
   *  
   *  `element`'s absolutely positioned children will now have their positions
   *  set relatively to `element`'s nearest ancestor with a CSS `position` of
   *  `'absolute'`, `'relative'` or `'fixed'`.
  **/
	//> public Element undoPositioned()
	undoPositioned: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element up(int? index)
	//> public Element up(String cssSelector, int? index)
	up: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element update({String | Element | Object}? newContent)
	update: vjo.NEEDS_IMPL,

	//> public boolean visible()
	visible: vjo.NEEDS_IMPL,
	
	/**
   *  Element.wrap(@element, wrapper[, attributes]) -> Element
   *  - wrapper (Element | String): An element to wrap `element` inside, or
   *    else a string representing the tag name of an element to be created.
   *  - attributes (Object): A set of attributes to apply to the wrapper
   *    element. Refer to the [[Element]] constructor for usage.
   *
   *  Wraps an element inside another, then returns the wrapper.
   *  
   *  If the given element exists on the page, [[Element.wrap]] will wrap it in
   *  place â€”Â its position will remain the same.
   *  
   *  The `wrapper` argument can be _either_ an existing [[Element]] _or_ a
   *  string representing the tag name of an element to be created. The optional
   *  `attributes` argument can contain a list of attribute/value pairs that
   *  will be set on the wrapper using [[Element.writeAttribute]].
   *  
   *  ##### Examples
   *  
   *  Original HTML:
   *  
   *      language: html
   *      <table id="data">
   *        <tr>
   *          <th>Foo</th>
   *          <th>Bar</th>
   *        </tr>
   *        <tr>
   *          <td>1</td>
   *          <td>2</td>
   *        </tr>
   *      </table>
   *  
   *  JavaScript:
   *  
   *      // approach 1:
   *      var div = new Element('div', { 'class': 'table-wrapper' });
   *      $('data').wrap(div);
   *      
   *      // approach 2:
   *      $('data').wrap('div', { 'class': 'table-wrapper' });
   *      
   *      // Both examples are equivalent &mdash; they return the DIV.
   *  
   *  Resulting HTML:
   *  
   *      language: html
   *      <div class="table-wrapper">
   *        <table id="data">
   *          <tr>
   *            <th>Foo</th>
   *            <th>Bar</th>
   *          </tr>
   *          <tr>
   *            <td>1</td>
   *            <td>2</td>
   *          </tr>
   *        </table>
   *      </div> 
   *  
   *  ##### Warning
   *
   *  Using [[Element.wrap]] as an instance method (e.g., `$('foo').wrap('p')`)
   *  causes errors in Internet Explorer when used on `textarea` elements. The
   *  `wrap` property is reserved on `textarea`'s as a proprietary extension to
   *  HTML. As a workaround, use the generic version instead
   *  (`Element.wrap('foo', 'p')`).
  **/
	//> public Element wrap({String | Element} wrapper, Object? attributes)
	wrap: vjo.NEEDS_IMPL,
	
	/**
   *  Element.writeAttribute(@element, attribute[, value = true]) -> Element
   *  Element.writeAttribute(@element, attributes) -> Element
   *
   *  Adds, specifies or removes attributes passed as either a hash or a
   *  name/value pair.
  **/
	//> public Element writeAttribute(String attribute, Object? value)
	//> public Element writeAttribute(Object attributes)
	writeAttribute: vjo.NEEDS_IMPL	
})
.endType();