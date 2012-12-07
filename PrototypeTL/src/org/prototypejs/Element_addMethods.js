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
/** Element extensions from /dom/dom.js via Element.addMethods({ ... })
 *  <p>
 *  Element.addMethods(methods) -> undefined<br>
 *  Element.addMethods(tagName, methods) -> undefined<br>
 *  <p>
 *  <ul>
 *  <li>tagName (String): (Optional) The name of the HTML tag for which the
 *    methods should be available; if not given, all HTML elements will have
 *    the new methods.</li>
 *  <li>methods (Object): A hash of methods to add.</li>
 *  </ul>
 *  <p>
 *  [[Element.addMethods]] makes it possible to mix your *own* methods into the
 *  [[Element]] object and extended element instances (all of them, or only ones
 *  with the given HTML tag if you specify `tagName`).
 *	<p>
 *  You define the methods in a hash that you provide to [[Element.addMethods]].
 *  Here's an example adding two methods:
 *  <p>
 *	<code>
 *      Element.addMethods({
 *
 *        // myOwnMethod: Do something cool with the element
 *        myOwnMethod: function(element) {
 *          if (!(element = $(element))) return;
 *          // ...do smething with 'element'...
 *          return element;
 *        },
 *
 *        // wrap: Wrap the element in a new element using the given tag
 *        wrap: function(element, tagName) {
 *          var wrapper;
 *          if (!(element = $(element))) return;
 *          wrapper = new Element(tagName);
 *          element.parentNode.replaceChild(wrapper, element);
 *          wrapper.appendChild(element);
 *          return wrapper;
 *        }
 *
 *      });
 *	</code>
 *	<p>
 *  Once added, those can be used either via [[Element]]:
 *  <p>
 *	<code>
 *      // Wrap the element with the ID 'foo' in a div
 *      Element.wrap('foo', 'div');
 *	</code>
 *	<p>
 *  ...or as instance methods of extended elements:
 *  <p>
 *	<code>
 *      // Wrap the element with the ID 'foo' in a div
 *      $('foo').wrap('div');
 *	</code>
 *	<p>
 *  Note the following requirements and conventions for methods added to
 *  [[Element]]:
 *	<p>
 *	<ul>
 *  <li>The first argument is *always* an element or ID, by convention this
 *    argument is called `element`.</li>
 *  <li>The method passes the `element` argument through [[$]] and typically
 *    returns if the result is undefined.</li>
 *  <li>Barring a good reason to return something else, the method returns the
 *    extended element to enable chaining.</li>
 *  </ul>
 *	<p>
 *  Our `myOwnMethod` method above returns the element because it doesn't have
 *  a good reason to return anything else. Our `wrap` method returns the
 *  wrapper, because that makes more sense for that method.
 *	<p>
 *  ##### Extending only specific elements
 *	<p>
 *  If you call [[Element.addMethods]] with *two* arguments, it will apply the
 *  methods only to elements with the given HTML tag:
 *  <p>
 *	<code>
 *      Element.addMethods('DIV', my_div_methods);
 *      // the given methods are now available on DIV elements, but not others
 *	</code>
 *	<p>
 *  You can also pass an *[[Array]]* of tag names as the first argument:
 *  <p>
 *	<code>
 *      Element.addMethods(['DIV', 'SPAN'], my_additional_methods);
 *      // DIV and SPAN now both have the given methods
 *	</code>
 *	<p>
 *  (Tag names in the first argument are not case sensitive.)
 *	<p>
 *  Note: [[Element.addMethods]] has built-in security which prevents you from
 *  overriding native element methods or properties (like `getAttribute` or
 *  `innerHTML`), but nothing prevents you from overriding one of Prototype's
 *  methods. Prototype uses a lot of its methods internally; overriding its
 *  methods is best avoided or at least done only with great care.
 *	<p>
 *  ##### Example 1
 *	<p>
 *  Our `wrap` method earlier was a complete example. For instance, given this
 *  paragraph:
 *  <p>
 *	<code>
 *      <p id="first">Some content...</p>
 *	</code>
 *	<p>
 *  ...we might wrap it in a `div`:
 *	<p>
 *	<code>
 *      $('first').wrap('div');
 *	</code>
 *	<p>
 *  ...or perhaps wrap it and apply some style to the `div` as well:
 * 	<p>
 *	<code>
 *      $('first').wrap('div').setStyle({
 *        backgroundImage: 'url(images/rounded-corner-top-left.png) top left'
 *      });
 *	</code>
 *	<p>
 *  ##### Example 2
 *	<p>
 *  We can add a method to elements that makes it a bit easier to update them
 *  via [[Ajax.Updater]]:
 *	<p>
 * <code>
 *      Element.addMethods({
 *        ajaxUpdate: function(element, url, options) {
 *          if (!(element = $(element))) return;
 *          element.update('<img src="/images/spinner.gif" alt="Loading...">');
 *          options = options || {};
 *          options.onFailure = options.onFailure || defaultFailureHandler.curry(element);
 *          new Ajax.Updater(element, url, options);
 *          return element;
 *        }
 *      });
 *	</code>
 *	<p>
 *  Now we can update an element via an Ajax call much more concisely than
 *  before:
 *	<p>
 *	<code>
 *      $('foo').ajaxUpdate('/new/content');
 *	</code>
 *	<p>
 *  That will use [[Ajax.Updater]] to load new content into the 'foo' element,
 *  showing a spinner while the call is in progress. It even applies a default
 *  failure handler (since we didn't supply one).
**/
//> public
vjo.mtype('org.prototypejs.Element_addMethods') 
//> needs(org.prototypejs.Hash)
.props({

	/**
	 *  Element.getStorage(@element) -> Hash
	 *	<p>
	 *  Returns the [[Hash]] object that stores custom metadata for this element.
	 */
	//> public Hash getStorage({String | Element} idOrElement)
	getStorage: vjo.NEEDS_IMPL,
	
	/**
	 *  Element.store(@element, key, value) -> Element
	 *	<p>
	 *  Stores a key/value pair of custom metadata on the element.
	 *	<p>
	 *  The metadata can later be retrieved with [[Element.retrieve]].
	 */
	//> public Element store({String | Element} idOrElement, String key, Object value)
	store: vjo.NEEDS_IMPL,
	
	/**
	   *  Element.replace(@element[, newContent]) -> Element
	   *  <p>
	   *  Replaces `element` _itself_ with `newContent` and returns `element`.
	   *  <p>
	   *  Keep in mind that this method returns the element that has just been
	   *  removed &mdash; not the element that took its place.
	   *  <p>
	   *  `newContent` can be either plain text, an HTML snippet or any JavaScript
	   *  object which has a `toString()` method.
	   *  <p>
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
		
		
	/**
	 *  Element.retrieve(@element, key[, defaultValue]) -> ?
     *	<p>
     *  Retrieves custom metadata set on `element` with [[Element.store]].
     *	<p>
     *  If the value is `undefined` and `defaultValue` is given, it will be
     *  stored on the element as its new value for that key, then returned.
     */

	//> public Object retrieve({String | Element} idOrElement, String key, Object? defaultValue)
	retrieve: vjo.NEEDS_IMPL,
			
	/**
	 * Element.clone(element, deep) ? Element
	 * <p>
	 * deep (Boolean) – Whether to clone element's descendants as well.
	 * <p>
	 * Returns a duplicate of element.
	 * A wrapper around DOM Level 2 Node#cloneNode, Element.clone cleans up any 
	 * expando properties defined by Prototype.
	 */
	//>  public Element clone(Element element, boolean? deep)
	clone: vjo.NEEDS_IMPL,
	
	/**
	 *  Element.purge(@element) -> null
	 *  <p>
	 *  Removes all event listeners and storage keys from an element.
	 *  <p>
	 *  To be used just before removing an element from the page.
	 */
	//> public void purge({String | Element} idOrElement)
	purge: vjo.NEEDS_IMPL
})
.protos({
	/**
	 * 
	 */
	//> public Hash getStorage()
	getStorage: vjo.NEEDS_IMPL,	
		
	/**
	 * 
	 */
	//> public Element store(String key, Object? value)
	store: vjo.NEEDS_IMPL,
		
	/**
	 * 
	 */
	//> public Object retrieve(String key, Object? defaultValue)
	retrieve: vjo.NEEDS_IMPL,	
		
	/**
	 * 
	 */
	//> public Element clone(boolean? deep)
	clone: vjo.NEEDS_IMPL,
		
	/**
	 * 
	 */
	//> public void purge()
	purge: vjo.NEEDS_IMPL
})
.endType();