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
vjo.mtype('org.prototypejs.Form_Methods') //< public

.props({
	/**
   *  Form.serialize(@form[, options]) -> String | Object
   *  - options (Object): A list of options that affect the return value
   *    of the method.
   *
   *  Serializes form data to a string suitable for [[Ajax]] requests (default
   *  behavior) or, if the `hash` option evaluates to `true`, an object hash
   *  where keys are form control names and values are data.
   *  
   *  Depending of whether or not the `hash` option evaluates to `true`, the
   *  result is either an object of the form `{name: "johnny", color: "blue"}`
   *  or a [[String]] of the form `"name=johnny&color=blue"`, suitable for
   *  parameters in an [[Ajax]] request. This method mimics the way browsers
   *  serialize forms natively so that form data can be sent without refreshing
   *  the page.
   *  
   *  See [[Form.serializeElements]] for more details on the options.
   *  
   *  ##### Examples
   *  
   *      $('person-example').serialize()
   *      // -> 'username=sulien&age=22&hobbies=coding&hobbies=hiking'
   *      
   *      $('person-example').serialize(true)
   *      // -> {username: 'sulien', age: '22', hobbies: ['coding', 'hiking']}
   *  
   *  ##### Notes
   *  
   *  Disabled form elements are not serialized (as per W3C HTML recommendation).
   *  Also, file inputs are skipped as they cannot be serialized and sent using
   *  only JavaScript.
  **/
	//> public Object serialize({Element | String} form, Object? options) ; MrP - return should be {String | Object}
	serialize: vjo.NEEDS_IMPL,	
	
	/**
   *  Form.getElements(@form) -> [Element...]
   *
   *  Returns a collection of all controls within a form.
   *  
   *  ##### Note
   *  
   *  OPTION elements are not included in the result; only their parent
   *  SELECT control is.
  **/
	//> public Element[] getElements({String | Element} element)
	getElements: vjo.NEEDS_IMPL,
	
	/**
   *  Form.getInputs(@form [, type [, name]]) -> [Element...]
   *  - type (String): A value for the `type` attribute against which to filter.
   *  - name (String): A value for the `name` attribute against which to filter.
   *
   *  Returns a collection of all INPUT elements in a form.
   *
   *  Use optional `type` and `name` arguments to restrict the search on
   *  these attributes.
   *  
   *  ##### Example
   *  
   *      var form = $('myform');
   *      
   *      form.getInputs();       // -> all INPUT elements
   *      form.getInputs('text'); // -> only text inputs
   *      
   *      var buttons = form.getInputs('radio', 'education');
   *      // -> only radio buttons of name "education"
   *      
   *      // now disable these radio buttons:
   *      buttons.invoke('disable');
   *  
   *  ##### Note
   *  
   *  Elements are returned in the *document* order, not the
   *  [tabindex order](http://www.w3.org/TR/html4/interact/forms.html#h-17.11.1).
  **/
	//> public Element[] getInputs({String | Element} element, String? type, String? name)
	getInputs: vjo.NEEDS_IMPL,
	
	/**
   *  Form.disable(@form) -> Element
   *
   *  Disables the form as a whole. Form controls will be visible but
   *  uneditable.
   *  
   *  Disabling the form is done by iterating over form elements and calling
   *  [[Form.Element.disable]] on them.
   *  
   *  ##### Note
   *  
   *  Keep in mind that *disabled elements are skipped* by serialization
   *  methods! You cannot serialize a disabled form.
  **/
	//> public Element disable({String | Element} element)
	disable: vjo.NEEDS_IMPL,
	
	/**
   *  Form.enable(@form) -> Element
   *
   *  Enables a fully- or partially-disabled form.
   *  
   *  Enabling the form is done by iterating over form elements and calling
   *  [[Form.Element.enable]] on them.
   *  
   *  ##### Note
   *  
   *  This will enable all form controls regardless of how they were disabled
   *  (by scripting or by HTML attributes).
  **/
	//> public Element enable({String | Element} element)
	enable: vjo.NEEDS_IMPL,
		
	/**
   *  Form.findFirstElement(@form) -> Element
   *
   *  Finds the first non-hidden, non-disabled control within the form.
   *  
   *  The returned object is either an INPUT, SELECT or TEXTAREA element. This
   *  method is used by the [[Form.focusFirstElement]] method.
   *  
   *  ##### Note
   *  
   *  The result of this method is the element that comes first in the
   *  *document* order, not the
   *  [tabindex order](http://www.w3.org/TR/html4/interact/forms.html#h-17.11.1).
  **/
	//> public Element findFirstElement({String | Element} element)
	findFirstElement: vjo.NEEDS_IMPL,
	
	/**
   *  Form.focusFirstElement(@form) -> Element
   *
   *  Gives keyboard focus to the first element of the form. Returns the form.
   *  
   *  Uses [[Form.findFirstElement]] to get the first element and calls
   *  [[Form.Element.activate]] on it. This is useful for enhancing usability on
   *  your site by bringing focus on page load to forms such as search forms or
   *  contact forms where a user is ready to start typing right away.
  **/
	//> public Element focusFirstElement({String | Element} element)
	focusFirstElement: vjo.NEEDS_IMPL,
	
	/**
   *  Form.request(@form[, options]) -> Ajax.Request
   *  - options (Object): Options to pass along to the [[Ajax.Request]]
   *    constructor.
   *
   *  A convenience method for serializing and submitting the form via an
   *  [[Ajax.Request]] to the URL of the form's `action` attribute.
   *
   *  The `options` parameter is passed to the [[Ajax.Request]] instance,
   *  allowing one to override the HTTP method and/or specify additional
   *  parameters and callbacks.   
   *  
   *  - If the form has a method attribute, its value is used for the 
   *  [[Ajax.Request]] `method` option. If a method option is passed to 
   *  `request()`, it takes precedence over the form's method attribute. If 
   *  neither is specified, method defaults to "POST".
   *  
   *  - Key-value pairs specified in the `parameters` option (either as a hash 
   *  or a query string) will be merged with (and *take precedence* over) the 
   *  serialized form parameters.
   *  
   *  ##### Example
   *  
   *  Suppose you have this HTML form:
   *  
   *      language: html
   *      <form id="person-example" method="POST" action="/user/info">
   *        <fieldset><legend>User info</legend>
   *          <ul>
   *            <li>
   *              <label for="username">Username:</label>
   *              <input type="text" name="username" id="username" value="" />
   *            </li>
   *            <li>
   *              <label for="age">Age:</label>
   *              <input type="text" name="age" id="age" value="" size="3" />
   *            </li>
   *            <li>
   *              <label for="hobbies">Your hobbies are:</label>
   *              <select name="hobbies[]" id="hobbies" multiple="multiple">
   *                <option>coding</option>
   *                <option>swimming</option>
   *                <option>biking</option>
   *                <option>hiking</option>
   *                <option>drawing</option>
   *              </select>
   *            </li>
   *          </ul>
   *          <input type="submit" value="serialize!" />
   *        </fieldset>
   *      </form>
   *  
   *  You can easily post it with Ajax like this:
   *  
   *      $('person-example').request(); //done - it's posted
   *      
   *      // do the same with a callback:
   *      $('person-example').request({
   *        onComplete: function(){ alert('Form data saved!') }
   *      })
   *  
   *  To override the HTTP method and add some parameters, simply use `method` 
   *  and `parameters` in the options. In this example we set the method to GET 
   *  and set two fixed parameters:
   *  `interests` and `hobbies`. The latter already exists in the form but this 
   *  value will take precedence.
   *  
   *      $('person-example').request({
   *        method: 'get',
   *        parameters: { interests:'JavaScript', 'hobbies[]':['programming', 'music'] },
   *        onComplete: function(){ alert('Form data saved!') }
   *      })
  **/
	//> public org.prototypejs.Ajax.Request request({String | Element} element, Object? options)
	request: vjo.NEEDS_IMPL
})
.protos({
	
})
.endType();