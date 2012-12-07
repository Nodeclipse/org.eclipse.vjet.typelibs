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
 * Form.Element
 *
 *  Utilities for dealing with form controls in the DOM.
 *
 *  This is a collection of methods that assist in dealing with form controls.
 *  They provide ways to [[Form.Element.focus focus]], [[Form.Element.serialize 
 *  serialize]], [[Form.Element.disable disable]]/[[Form.Element.enable enable]]
 *  or extract current value from a specific control.
 *
 *  Note that nearly all these methods are available directly on `input`,
 *  `select`, and `textarea` elements. Therefore, these are equivalent:
 *
 *      Form.Element.activate('myfield');
 *      $('myfield').activate();
 *
 *  Naturally, you should always prefer the shortest form suitable in a
 *  situation. Most of these methods also return the element itself (as
 *  indicated by the return type) for chainability. 
**/
vjo.ctype('org.prototypejs.Form_element') //< public
//> needs(org.prototypejs.Abstract.EventObserver)
//> needs(org.prototypejs.Abstract.TimedObserver)
.props({
	/**
   *  Form.Element.activate(@element) -> Element
   *
   *  Gives focus to a form control and selects its contents if it is a text
   *  input.
   *  
   *  This method is just a shortcut for focusing and selecting; therefore, 
   *  these are equivalent (aside from the fact that the former one will __not__
   *  return the field) :
   *  
   *      Form.Element.focus('myelement').select()
   *      $('myelement').activate()
   *  
   *  Guess which call is the nicest? ;)
  **/
	//> public Element activate({Element | String} idOrElement)
	activate: vjo.NEEDS_IMPL,
	
	/**
   *  Form.Element.clear(@element) -> Element
   *
   *  Clears the contents of a text input. Returns the element.
   *  
   *  ##### Example
   *  
   *  This code sets up a text field in a way that it clears its contents the
   *  first time it receives focus:
   *  
   *        $('some_field').onfocus = function() {
   *          // if already cleared, do nothing
   *          if (this._cleared) return
   *        
   *          // when this code is executed, "this" keyword will in fact be the field itself
   *          this.clear()
   *          this._cleared = true
   *        }
  **/
	//> public Element clear({Element | String} idOrElement)
	clear: vjo.NEEDS_IMPL,
	
	/**
   *  Form.Element.disable(@element) -> Element
   *
   *  Disables a form control, effectively preventing its value from changing
   *  until it is enabled again.
   *  
   *  This method sets the native `disabled` property of an element to `true`.
   *  You can use this property to check the state of a control.
   *  
   *  ##### Notes
   *  
   *  Disabled form controls are never serialized.
   *  
   *  Never disable a form control as a security measure without having 
   *  validation for it server-side. A user with minimal experience of
   *  JavaScript can enable these fields on your site easily using any browser.
   *  Instead, use disabling as a usability enhancement - with it you can
   *  indicate that a specific value should not be changed at the time being.
  **/
	//> public Element disable({Element | String} idOrElement)
	disable: vjo.NEEDS_IMPL,
	
	/**
	   *  Form.Element.enable(@element) -> Element
	   *
	   *  Enables a previously disabled form control.
	  **/
	//> public Element enable({Element | String} idOrElement)
	enable: vjo.NEEDS_IMPL,
	
	/**
   *  Form.Element.focus(element) -> Element
   *
   *  Gives keyboard focus to an element. Returns the element.
   *  
   *  ##### Example
   *  
   *      Form.Element.focus('searchbox')
   *      
   *      // Almost equivalent, but does NOT return the form element (uses the native focus() method):
   *      $('searchbox').focus()
  **/
	//> public Element focus({Element | String} idOrElement)
	focus: vjo.NEEDS_IMPL,
	
	/** alias of: $F
   *  Form.Element.getValue(@element) -> String | Array
   *
   *  Returns the current value of a form control.
   *
   *  A string is returned for most controls; only multiple `select` boxes
   *  return an array of values.
   *
   *  The global shortcut for this method is [[$F]].
   *  
   *  ##### How to reference form controls by their _name_
   *  
   *  This method is consistent with other DOM extensions in that it requires an 
   *  element **ID** as the string argument, not the name of the 
   *  form control (as some might think). If you want to reference controls by 
   *  their names, first find the control the regular JavaScript way and use the 
   *  node itself instead of an ID as the argument.
   *  
   *  For example, if you have an `input` named "company" in a `form` with an 
   *  ID "contact":
   *  
   *      var form = $('contact');
   *      var input = form['company'];
   *      
   *      Form.Element.getValue(input);
   *      
   *      // but, the preferred call is:
   *      $(input).getValue(); // we used the $() method so the node gets extended
   *      
   *      // you can also use the shortcut
   *      $F(input);
   *  
   *  ##### Note
   *  
   *  An error is thrown ("element has no properties") if the `element` argument 
   *  is an unknown ID.   
  **/
	//> public Object getValue({Element | String} idOrElement) ; MrP should return {String | Array}
	getValue: vjo.NEEDS_IMPL,
	
	/**
   *  Form.Element.present(@element) -> Element
   *
   *  Returns `true` if a text input has contents, `false` otherwise.
   *  
   *  ##### Example
   *  
   *  This method is very handy in a generic form validation routine. 
   *  On the following form's submit event, the presence of each text input is 
   *  checked and lets the user know if they left a text input blank. 
   *  
   *      language: html
   *      <form id="example" class="example" action="#">
   *        <fieldset>
   *          <legend>User Details</legend>
   *          <p id="msg" class="message">Please fill out the following fields:</p>
   *          <p>
   *            <label for="username">Username</label>
   *            <input id="username" type="text" name="username" />
   *          </p>
   *          <p>
   *            <label for="email">Email Address</label>
   *            <input id="email" type="text" name="email" />
   *          </p>
   *          <input type="submit" value="submit" />
   *        </fieldset>
   *      </form>
   *
   *      <script type="text/javascript">
   *        $('example').onsubmit = function(){
   *          var valid, msg = $('msg')
   *
   *          // are both fields present?
   *          valid = $(this.username).present() && $(this.email).present()
   *        
   *          if (valid) {
   *            // in the real world we would return true here to allow the form to be submitted
   *            // return true
   *            msg.update('Passed validation!').style.color = 'green'
   *          } else {
   *            msg.update('Please fill out <em>all</em> the fields.').style.color = 'red'
   *          }
   *          return false
   *        }
   *      </script>      
  **/
	//> public Element present({Element | String} idOrElement)
	present: vjo.NEEDS_IMPL,
	
	/**
   *  Form.Element.select(element) -> Element
   *
   *  Selects the current text in a text input. Returns the element.
   *  
   *  ##### Example
   *  
   *  Some search boxes are set up so that they auto-select their content when they receive focus.
   *  
   *        $('searchbox').onfocus = function() {
   *          Form.Element.select(this)
   *          
   *          // You can also rely on the native method, but this will NOT return the element!
   *          this.select()
   *        }
   *  
   *  ##### Focusing + selecting: use [[Form.Element.activate]]!
   *  
   *  The [[Form.Element.activate]] method is a nifty way to both focus a form
   *  field and select its current text, all in one portable JavaScript call.
  **/
	//> public Element select({Element | String} idOrELement)
	select: vjo.NEEDS_IMPL,
	
	/**
   *  Form.Element.serialize(@element) -> String
   *
   *  Returns a URL-encoded string representation of a form control in the
   *  `name=value` format.
   *
   *  The result of this method is a string suitable for Ajax requests. However,
   *  it serializes only a single element - if you need to serialize the whole
   *  form use [[Form.serialize]] instead.
   *  
   *  ##### Notes
   *  
   *  Serializing a disabled control or a one without a name will always result
   *  in an empty string.
   *  
   *  If you simply need an element's value for reasons other than Ajax
   *  requests, use [[Form.Element.getValue]] instead.
  **/
	//> public String serialize({Element | String} idOrELement)
	serialize: vjo.NEEDS_IMPL,
	
	/**
   *  Form.Element.setValue(@element, value) -> Element
   *
   *  Sets `value` to be the value of the form control. Returns the element.
  **/
	//> public Element setValue({Element | String} idOrELement, Object? value)
	setValue: vjo.NEEDS_IMPL,
			
	EventObserver: vjo.ctype() //< public
	.inherits('org.prototypejs.Abstract.EventObserver')
	.props({
		
	})
	.protos({
	
	})
	.endType(), // End of Form.Element.EventObserver
	
	Observer: vjo.ctype() //< public
	.inherits('org.prototypejs.Abstract.TimedObserver')
	.props({	

	})
	.protos({
		/**
		 * 
		 */
		//> public constructs({String | Element} element, Function callback)
		//> public constructs({String | Element} element, Number frequency, Function? callback)
		constructs: function() {}
	})
	.endType() // End of Form.Element.Observer
})
.protos({

	/**
	 * 
	 */
	//> public Element activate()
	activate: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element clear()
	clear: vjo.NEEDS_IMPL,

	/**
	 * 
	 */
	//> public Element disable({HTMLFormElement | String} form)
	disable: vjo.NEEDS_IMPL,

	/**
	 * 
	 */
	//> public Element enable({HTMLFormElement | String} form)
	enable: vjo.NEEDS_IMPL,

	/**
	 * 
	 */
	//> public Object getValue() ; MrP return should be {String | Array}
	getValue: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element present()
	present: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public String serialize()
	serialize: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element setValue(Object? value)
	setValue: vjo.NEEDS_IMPL
})
.endType()