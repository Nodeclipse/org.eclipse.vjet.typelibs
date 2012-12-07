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
 * Introduction
 * <p>
 * Ajax.Autocompleter allows for server-powered autocompleting text fields.
 * <p>
 * Syntax
 * <code>
 * new Ajax.Autocompleter(id_of_text_field, id_of_div_to_populate, url, options);
 * </code>
 * <p>
 * Options (Inherited from Autocompleter.Base, as well as all options for 
 * Prototype’s Ajax.Request )
 * <p>
 * Option 	Default Value 	Description
 * <p>
 * paramName 	the ‘name’ of the element 	Name of the parameter for the string 
 * typed by the user on the autocompletion field
 * <p>
 * tokens 	[] 	Tokenized incremental autocompletion is enabled automatically 
 * when an autocompleter is instantiated with the ‘tokens’ option in the options 
 * parameter: See Also Autocompleter.Base
 * <p>
 * frequency 	0.4 	How frequently (in seconds) the input field should be 
 * polled for changes before firing an Ajax request.
 * <p>
 * minChars 	1 	The minimum number of characters that must be entered in the 
 * input field before an Ajax request is made.
 * <p>
 * select 	null 	The class name of the element that contains the text to be 
 * placed into the input box. By default all text will be used.
 * <p>
 * indicator 	null 	The HTML id of an element to display (using Element.show) 
 * while the Ajax request is in progress. This element will be hidden with 
 * Element.hide when the request is completed. This is useful for displaying an 
 * animated spinner during processing. See Ajaxload for some image examples.
 * <p>
 * updateElement 	null 	Hook for a custom function to replace the built-in 
 * function that adds the list item text to the input field. The custom function 
 * is called after the element has been updated (i.e. when the user has selected 
 * an entry). The function receives one parameter only: the selected item (the 
 * <li> item selected)
 * <p>
 * afterUpdateElement 	null 	Hook for a custom function that’s called following 
 * the execution of the built-in function that adds the list item text to the 
 * input field, which happens after a user has selected an entry. (The difference 
 * between updateElement and afterUpdateElement is that updateElement replaces 
 * the built-in Autocompleter function; afterUpdateElement supplements that built-in 
 * function.) The function receives two parameters, the input field specified for 
 * autocompletion, and the selected item (the <li> item selected)
 * <p>
 * callback 	null 	This function is called just before the Request is actually 
 * made, allowing you to modify the querystring that is sent to the server. The 
 * function receives the completer’s input field and the default querystring 
 * (‘value=XXX’) as parameters. You should return the querystring you want used, 
 * including the default part.
 * <p>
 * parameters 	null 	To send additional parameters to the server, add them 
 * here in the format: 'field=value&another=value'. Errata/bug: The hash format 
 * {field: 'value',another: 'value'} was noted in this wiki to work, but it does 
 * not, as the Ruby on Rails project has separately documented and fixed in their
 * codebase.
 * <p>
 * Example
 * <p>
 * HTML
 * <code>
 * <input type="text" id="autocomplete" name="autocomplete_parameter"/>
 * <div id="autocomplete_choices" class="autocomplete"></div>
 * </code>
 * Javascript
 * <code>
 * new Ajax.Autocompleter("autocomplete", "autocomplete_choices", "/url/on/server", {});
 * </code>
 * <p>
 * HTML with indicator
 * <code>
 * <input type="text" id="autocomplete" name="autocomplete_parameter"/>
 * <span id="indicator1" style="display: none">
 *   <img src="/images/spinner.gif" alt="Working..." />
 * </span>
 * <div id="autocomplete_choices" class="autocomplete"></div>
 * </code>
 * <p>
 * (As with any element destined to work with Prototype’s Element.toggle/show/hide, 
 * your indicator element should use an inline style attribute with a display 
 * property, here initially set to none. If you need to assign it CSS rules, put 
 * the class attribute before the style attribute to avoid override.)
 * <p>
 * Javascript with options
 * <code>
 * new Ajax.Autocompleter("autocomplete", "autocomplete_choices", "/url/on/server", {
 *   paramName: "value", 
 *   minChars: 2, 
 *   indicator: 'indicator1'
 * });
 * </code>
 * <p>
 * CSS
 * <p>
 * The styling of the div and the returned UL are important.
 * <p>
 * Applying a visual cue that an item is selected allows the user to take advantage 
 * of the keyboard navigation of the dropdown and adding background colors, 
 * borders, positioning, etc to the div (as the demo does) allows the UI element 
 * to stand out. The CSS from the demo applied to the examples would be:
 * <code>
 * div.autocomplete {
 *   position:absolute;
 *   width:250px;
 *   background-color:white;
 *   border:1px solid #888;
 *   margin:0;
 *   padding:0;
 * }
 * div.autocomplete ul {
 *   list-style-type:none;
 *   margin:0;
 *   padding:0;
 * }
 * div.autocomplete ul li.selected { background-color: #ffb;}
 * div.autocomplete ul li {
 *   list-style-type:none;
 *   display:block;
 *   margin:0;
 *   padding:2px;
 *   height:32px;
 *   cursor:pointer;
 * }
 * </code>
 * <p>
 * Tokenized autocompletion
 * <p>
 * Tokenized incremental autocompletion is enabled automatically when an 
 * autocompleter is instantiated with the ‘tokens’ option in the options parameter:
 * <code>
 * new Ajax.Autocompleter('id','upd', 'url', { tokens: ',' });
 * </code>
 * will incrementally autocomplete with a comma as the token.
 * <p>
 * Additionally, ’,’ in the above example can be replaced with a token array, 
 * e.g. tokens: [',', '\n'] which enables autocompletion on multiple tokens. This 
 * is most useful when one of the tokens is \n (a newline), as it allows smart 
 * autocompletion after linebreaks.
 * <p>
 * Server Return
 * <p>
 * Look through your POST environment variable for the current entry in the text-box.
 * <p>
 * The server-side will receive the typed string as a parameter with the same 
 * name as the name of the text field element of the autocompletion (its name 
 * attribute). You can override it by setting the option paramName.
 * <p>
 * The server must return an unordered list.
 * <p>
 * For instance, this list might be returned after the user typed the letter “y”
 * <code>
 * <ul>
 *   <li>your mom</li>
 *   <li>yodel</li>
 * </ul>
 * </code>
 * If your search returns no results, it is critical that your server immediately 
 * return an empty list, rather than nothing. You will only notice this need if 
 * you use an indicator to show server activity — the indicator will never go 
 * away if your server doesn’t return an empty list.
 * <p>
 * If you wish to display additional information in the autocomplete dropdown 
 * that you don’t want inserted into the field when you choose an item, surround 
 * it in a <span> (could work with others but not tested) with the class of “informal”.
 * <p>
 * For instance, the following shows a list of companies and their addresses, but 
 * only the company name will get inserted:
 * <code>
 * <ul>
 *   <li>ACME Inc <span class="informal"> 5012 East 5th Street</span></li>
 *   <li>Scriptaculous <span class="informal"> 1066 West Redlands Parkway</span></li>
 * </ul>
 * </code>
 * Another way to get additional information is to encode an ID into each list 
 * item, and redefine the afterUpdate Element to handle that ID:
 * <code>
 * <ul>
 *   <li id="1">your mom</li>
 *   <li id="2">yodel</li>
 * </ul>
 * new Ajax.Autocompleter("autocomplete", "autocomplete_choices", "/url/on/server", {
 *   afterUpdateElement : getSelectionId
 * });
 * function getSelectionId(text, li) {
 *   alert (li.id);
 * }
 * </code>
 * <p>
 * Notes
 * <p>
 * When a choice is highlighted, the Autocompleter applies a class of “selected” 
 * to the li element. This allows the use of CSS to style the selected element.
 */
vjo.ctype('org.scriptaculous.Ajax_Autocompleter') //< public
//> needs(org.scriptaculous.Autocompleter_Base)
.inherits('org.scriptaculous.Autocompleter_Base')
.props({
	
})
.protos({
	/**
	 * 
	 */
	//> public
	options: vjo.otype().defs({
		/**
		 * 
		 */
		//> public 
		one: {
			/**
			 * The name of the parameter for the string typed by the user on the
			 * autocompletion field
			 */
			//> public String?
			paramName: null,
			
			/**
			 * Tokenized incremental autocompletion is enabled automatically when 
			 * an autocompleter is instantiated with the ‘tokens’ option in the 
			 * options parameter: See Also Autocompleter.Base
			 */
			//> public Array?
			tokens: null,
			
			/**
			 * How frequently (in seconds) the input field should be polled for 
			 * changes before firing an Ajax request.
			 */
			//> public Number?
			frequency: null,
			
			/**
			 * The minimum number of characters that must be entered in the input 
			 * field before an Ajax request is made.
			 */
			//> public Number?
			minChars: null,
			
			/**
			 * The class name of the element that contains the text to be placed 
			 * into the input box. By default all text will be used.
			 */
			//> public String?
			select: null,
			
			/**
			 * The HTML id of an element to display (using Element.show) while 
			 * the Ajax request is in progress. This element will be hidden with 
			 * Element.hide when the request is completed. This is useful for 
			 * displaying an animated spinner during processing. See Ajaxload 
			 * for some image examples.
			 */
			//> public String?
			indicator: null,
			
			/**
			 * Hook for a custom function to replace the built-in function that 
			 * adds the list item text to the input field. The custom function 
			 * is called after the element has been updated (i.e. when the user 
			 * has selected an entry). The function receives one parameter only: 
			 * the selected item (the <li> item selected)
			 */
			//> public Function?
			updateElement: null,
			
			/**
			 * Hook for a custom function that’s called following the execution 
			 * of the built-in function that adds the list item text to the input 
			 * field, which happens after a user has selected an entry. (The 
			 * difference between updateElement and afterUpdateElement is that 
			 * updateElement replaces the built-in Autocompleter function; 
			 * afterUpdateElement supplements that built-in function.) The 
			 * function receives two parameters, the input field specified for 
			 * autocompletion, and the selected item (the <li> item selected)
			 */
			//> public Function?
			afterUnpdateElement: null,
			
			/**
			 * This function is called just before the Request is actually made, 
			 * allowing you to modify the querystring that is sent to the server. 
			 * The function receives the completer’s input field and the default 
			 * querystring (‘value=XXX’) as parameters. You should return the 
			 * querystring you want used, including the default part.
			 */
			//> public Function?
			callback: null,
			
			/**
			 * To send additional parameters to the server, add them here in the 
			 * format: 'field=value&another=value'. Errata/bug: The hash format 
			 * {field: 'value',another: 'value'} was noted in this wiki to work, 
			 * but it does not, as the Ruby on Rails project has separately 
			 * documented and fixed in their codebase.
			 */
			//> public String?
			parameters: null
			
		}
	}).endType(),
	
	/**
	 * 
	 */
	//> public constructs({String | Element} idOrElement, boolean update, String url, Object options)
	constructs: function() {},
	
	/**
	 * 
	 */
	//> public void getUpdatedChoices()
	getUpdatedChoices: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void onComplete(Object o)
	onComplete: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();