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
 * section: DOM
 * Form
 *
 *  Utilities for dealing with forms in the DOM.
 *
 *  [[Form]] is a namespace for all things form-related, packed with form
 *  manipulation and serialization goodness. While it holds methods dealing
 *  with forms as a whole, its submodule [[Form.Element]] deals with specific
 *  form controls.
 *
 *  Many of these methods are also available directly on `form` elements.
**/
vjo.ctype('org.prototypejs.Form') //< public
//> needs(org.prototypejs.Abstract.EventObserver)
//> needs(org.prototypejs.Abstract.TimedObserver)
.props({
	// vvvvvvvvvvvvvvvv START OF NESTED TYPES vvvvvvvvvvvvvvvvvvv
	
	/**
	 *  class Form.Observer < Abstract.TimedObserver
	 *
	 *  An [[Abstract.TimedObserver]] subclass that watches for changes to a form.
	 *  The callback is triggered when the form changes&nbsp;&mdash; e.g., when any 
	 *  of its fields' values changes, when fields are added/removed, etc.; anything
	 *  that affects the serialized form of the form (see [[Form#serialize]]).
	 * 
	 *  ##### Example
	 *  
	 *  In this example an `observer` is used to change the appearance of the form 
	 *  if any of the values had been changed. It returns to its initial state when 
	 *  the data is submitted (saved).
	 *  
	 *      language: html
	 *      <form id="example" action="#">
	 *        <fieldset>
	 *          <legend>Login Preferences</legend>
	 *          <p id="msg" class="message">Current settings:</p>
	 *          <p>
	 *            <label for="greeting">Greeting message</label>
	 *            <input id="greeting" type="text" name="greeting" value="Hello world!" />
	 *          </p>
	 *          <h4>Login options</h4>
	 *          <p>
	 *              <input id="login-visible" type="checkbox" name="login-visible" checked="checked" />
	 *              <label for="login-visible">allow others to see my last login date</label>
	 *          </p>
	 *          <p>
	 *              <input id="land-recent" type="checkbox" name="land-recent" />
	 *              <label for="land-recent">land on recent changes overview instead of the Dashboard</label>
	 *          </p>
	 *          <input type="submit" value="save" />
	 *        </fieldset>
	 *      </form>
	 *    
	 *      <script type="text/javascript">
	 *        new Form.Observer('example', 0.3, function(form, value){
	 *          $('msg').update('Your preferences have changed. Resubmit to save').style.color = 'red'
	 *          form.down().setStyle({ background:'lemonchiffon', borderColor:'red' })
	 *        })
	 *      
	 *        $('example').onsubmit = function() {
	 *          $('msg').update('Preferences saved!').style.color = 'green'
	 *          this.down().setStyle({ background:null, borderColor:null })
	 *          return false
	 *        }
	 *      </script>
	**/
	//> public 
	Observer: vjo.ctype()
	.inherits('org.prototypejs.Abstract.TimedObserver')
	.props({
		
	})
	.protos({
		
		/**
	   *  new Form.Observer(element, frequency, callback)
	   *  - element (String | Element): The element of the form to watch. Can be an element
	   *    instance or an ID.
	   *  - frequency (Number): The frequency, in seconds -- e.g., 0.33 to check for changes every
	   *    third of a second.
	   *  - callback (Function): The callback to trigger when the form changes.
	   *
	   *  Creates a [[Form.Observer]].
	  **/
		//> public constructs({String | Element} element, Function callback)
		//> public constructs({String | Element} element, Number frequency, Function? callback)
		constructs: function() {},
		
		//> public Object getValue()
		getValue: vjo.NEEDS_IMPL
	})
	.endType(), // End of Form.Observer
	
	/**
	 * 
	 */
	//> public
	EventObserver: vjo.ctype()
	.inherits('org.prototypejs.Abstract.EventObserver')
	.props({
		
	})
	.protos({
		
	})
	.endType(), // End of Form.EventObserver
	
	/**
	 * 
	 */
	//> 
	Element: null,	//< public type::org.prototypejs.Form_Element
		
	// ^^^^^^^^^^^^^^ END OF NESTED TYPES ^^^^^^^^^^^^^^^^^^^
	
	/**
   *  Form.reset(@form) -> Element
   *
   *  Resets a form to its default values.
   *  
   *  Example usage:
   *  
   *      Form.reset('contact')
   *      
   *      // equivalent:
   *      $('contact').reset()
   *      
   *      // both have the same effect as pressing the reset button
   *  
   *  This method allows you to programatically reset a form. It is a wrapper 
   *  for the `reset()` method native to `HTMLFormElement`.
  **/
	//> public Element reset({String | Element} element, Object? value)
	reset: vjo.NEEDS_IMPL,
	
	/**
   *  Form.serializeElements(elements[, options]) -> String | Object
   *  - elements (Array): A collection of elements to include in the
   *    serialization.
   *  - options (Object): _(Optional)_ A set of options that affect the return
   *    value of the method.
   *
   *  Serialize an array of form elements to an object or string suitable
   *  for [[Ajax]] requests.
   *
   *  As per the HTML spec, disabled fields are not included.
   *
   *  If multiple elements have the same name and we're returning an object,
   *  the value for that key in the object will be an array of the field values
   *  in the order they appeared on the array of elements.
   *
   *  The preferred method to serialize a form is [[Form.serialize]]. Refer to
   *  it for further information and examples on the `hash` option. However,
   *  with [[Form.serializeElements]] you can serialize *specific* input
   *  elements of your choice, allowing you to specify a subset of form elements
   *  that you want to serialize data from.
   *
   *  ##### The Options
   *
   *  The options allow you to control two things: What kind of return
   *  value you get (an object or a string), and whether and which `submit`
   *  fields are included in that object or string.
   *
   *  If you do not supply an `options` object _at all_, the options
   *  `{ hash: false }` are used.
   *
   *  If you supply an `options` object, it may have the following options:
   *  
   *  * `hash` ([[Boolean]]): `true` to return a plain object with keys and
   *    values (not a [[Hash]]; see below), `false` to return a String in query
   *    string format. If you supply an `options` object with no `hash` member,
   *    `hash` defaults to `true`. Note that this is __not__ the same as leaving
   *    off the `options` object entirely (see above).
   *  
   *  * `submit` ([[Boolean]] | [[String]]): In essence: If you omit this option
   *    the first submit button in the form is included; if you supply `false`,
   *    no submit buttons are included; if you supply the name of a submit
   *    button, the first button with that name is included. Note that the
   *    `false` value __must__ really be `false`, not _falsey_;
   *    falsey-but-not-false is like omitting the option.
   *
   *  _(Deprecated)_ If you pass in a [[Boolean]] instead of an object for
   *  `options`, it is used as the `hash` option and all other options are
   *  defaulted.
   *
   *  ##### A _hash_, not a [[Hash]]
   *
   *  If you opt to receive an object, it is a plain JavaScript object with keys
   *  and values, __not__ a [[Hash]]. All JavaScript objects are hashes in the
   *  lower-case sense of the word, which is why the option has that
   *  somewhat-confusing name.
   *
   *  ##### Examples
   *  
   *  To serialize all input elements of type "text":
   *  
   *      Form.serializeElements( $('myform').getInputs('text') )
   *      // -> serialized data
  **/
	//> public Object serializeElements(Array elements, Object? options) ; MrP - return should be {String | Object}
	serializeElements: vjo.NEEDS_IMPL
})
.protos({
	
	/**
	 * 
	 */
	//> public Element disable()
	disable: vjo.NEEDS_IMPL,

	/**
	 * 
	 */
	//> public Element enable()
	enable: vjo.NEEDS_IMPL,

	/**
	 * 
	 */
	//> public Element findFirstElement()
	findFirstElement: vjo.NEEDS_IMPL,
	
	
	/**
	 * 
	 */
	//> public Element focusFirstElement()
	focusFirstElement: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] getElements()
	getElements: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element[] getInputs(String type, String? name)
	getInputs: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public org.prototypejs.Ajax.Request request(Object? options)
	request: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element reset()
	reset: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Object serialize(Object? options) ; MrP - return should be {String | Object}
	serialize: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();