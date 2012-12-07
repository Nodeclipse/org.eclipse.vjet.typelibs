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
 * InPlaceEditor
 * <p>
 * Controls > Ajax.InPlaceEditor
 * <p>
 * Introduction
 * <p>
 * The in-place “text edit” testing allows for Flickr-style AJAX-backed “on-the-fly” 
 * textfields. See the documentation on Ajax.InPlaceEditor and Ajax.InPlaceCollectionEditor
 * <p>
 * Syntax
 * <code>
 * new Ajax.InPlaceEditor( element, url, {options});
 * </code>
 * The constructor takes three parameters. The first is the element that should 
 * support in-place editing. The second is the url to submit the changed value to. 
 * The server should respond with the updated value (the server might have 
 * post-processed it or validation might have prevented it from changing). The 
 * third is a hash of options.
 * <p>
 * The server side component gets the new value as the parameter ‘value’ 
 * (POST method), and should send the new value as the body of the response.
 * <p>
 * Options
 * <p>
 * Name 	since 	default 	Description
 * <p>
 * okControl 	V?? 	“button” 	What type of ok button to use in edit mode, 
 * or none at all (button, link, false)
 * <p>cancelControl 	V?? 	“link” 	What type of cancel button to use in edit 
 * mode, or none at all (button, link, false)
 * <p>
 * okText 	V1.5 	“ok” 	The text of the submit button that submits the 
 * changed value to the server
 * <p>
 * cancelText 	V1.5 	“cancel” 	The text of the link that cancels editing
 * <p>
 * savingText 	V1.5 	“Saving…” 	The text shown while the text is sent to 
 * the server
 * <p>
 * clickToEditText 	V1.6 	“Click to edit” 	The text shown during mouseover 
 * the editable text
 * <p>
 * formId 	V1.5 	id of the element to edit plus ‘InPlaceForm’ 	The id given 
 * to the element
 * <p>
 * externalControl 	V1.5 	null 	ID of an element that acts as an external 
 * control used to enter edit mode. The external control will be hidden when 
 * entering edit mode and shown again when leaving edit mode.
 * <p>
 * externalControlOnly 	V1.5 	false 	Whether or not to disable onclick editing 
 * so that only an external control can activate editable mode
 * <p>
 * rows 	V1.5 	1 	The row height of the input field (anything greater than 
 * 1 uses a multiline textarea for input)
 * <p>
 * onComplete 	V1.6 	“function(transport, element) {new Effect.Highlight(element, 
 * {startcolor: this.options.highlightColor});}” 	Code run if update successful 
 * with server. Also if user cancels the form. See bug.
 * <p>
 * onFailure 	V1.6 	“function(transport) {alert(“Error communicating with 
 * the server: ” + transport.responseText.stripTags());}” 	Code run if update 
 * failed with server
 * <p>
 * cols 	V1.5 	none 	The number of columns the text area should span 
 * (works for both single line or multi line)
 * <p>
 * size 	V1.5 	none 	Synonym for ‘cols’ when using single-line (rows=1) input
 * <p>
 * highlightColor 	? 	Ajax.InPlaceEditor.defaultHighlightColor 	The highlight 
 * color. Must be six hex digits, not 3.
 * <p>
 * highlightEndColor 	? 	”#FFFFFF” 	The color which the highlight fades to. 
 * Must be six hex digits, not 3.
 * <p>
 * savingClassName 	V1.5 	“inplaceeditor-saving” 	CSS class added to the 
 * element while displaying “Saving…” (removed when server responds)
 * <p>
 * formClassName 	V1.5 	“inplaceeditor-form” 	CSS class used for the in 
 * place edit form
 * <p>
 * hoverClassName 	? 	? 	?
 * <p>
 * loadTextURL 	V1.5 	null 	Will cause the text to be loaded from the server 
 * (useful if your text is actually textile and formatted on the server)
 * <p>
 * loadingText 	V1.5 	“Loading…” 	If the loadText URL option is specified then 
 * this text is displayed while the text is being loaded from the server
 * <p>
 * callback 	V1.5 	function(form) {Form.serialize(form)} 	A function that 
 * will get executed just before the request is sent to the server, should return 
 * the parameters to be sent in the URL. Will get two parameters, the entire form 
 * and the value of the text control.
 * <p>
 * submitOnBlur 	V1.6 	“false” 	This option if true will submit the 
 * in_place_edit form when the input tag loses focus.'
 * <p>
 * ajaxOptions 	V1.5 	{} 	Options specified to all AJAX calls (loading and saving 
 * text), these options are passed through to the prototype AJAX classes.
 * <p>
 * The server side component gets the new value as the parameter ‘value’ 
 * (POST method), and should send the new value as the body of the response.
 * <p>
 * Character encoding
 * <p>
 * The form data is sent encoded in UTF-8 regardless of the page encoding. This 
 * is as of the prototype function Form.serialize. More info on here.
 * <p>
 * Removing the behavior
 * <p>
 * To disable the InPlaceEditor behavior later on, store it in a variable like:
 * <code>
 * var editor = new Ajax.InPlaceEditor('product_1',...);
 * (... do stuff ..)
 * editor.dispose();
 * </code>
 * This way, you can enable and disable " In Place Editing 
 * ":http://madrobby.github.com/scriptaculous/in-place-editing at will.
 * <p>
 * You can also arbitrarily force it into edit mode like so:
 * <code>
 * editor.enterEditMode('click');
 * </code>
 */
vjo.ctype('org.scriptaculous.Ajax_InPlaceEditor') //< public

.props({
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
			 * What type of ok button to use in edit mode, or none at all 
			 * (button, link, false).  Default is 'button'.
			 */
			//> public String?
			okControl: null,
			
			/**
			 * What type of cancel button to use in edit mode, or none at all 
			 * (button, link, false).  Default is 'link'.
			 */
			//> public String?
			cancelControl: null,
			
			/**
			 * The text of the submit button that submits the changed value to the 
			 * server.  Default is 'ok'.
			 */
			//> public String?
			okText: null,
			
			/**
			 * The text of the link that cancels editing.  Default is 'cancel'.
			 */
			//> public String?
			cancelText: null,
			
			/**
			 * The text shown while the text is sent to the server.  Default is 'Saving...'.
			 */
			//> public String?
			savingText: null,
			
			/**
			 * The text shown during mouseover the editable text.  Default is 'Click to edit'.
			 */
			//> public String?
			clickToEdit: null,
			
			/**
			 * The id given to the element
			 */
			//> public String?
			formId: null,
			
			/**
			 * ID of an element that acts as an external control used to enter 
			 * edit mode. The external control will be hidden when entering edit 
			 * mode and shown again when leaving edit mode.
			 */
			//> public String?
			externalControl: null,
			
			/**
			 * Whether or not to disable onclick editing so that only an external 
			 * control can activate editable mode.  Default is false.
			 */
			//> public boolean?
			externalControlOnly: null,
			
			/**
			 * The row height of the input field (anything greater than 1 uses a 
			 * multiline textarea for input).  Default is 1.
			 */
			//> public int?
			rows: null,
			
			/**
			 * Code run if update successful with server. Also if user cancels the 
			 * form. See bug. 
			 */
			//> public (void f())?
			onComplete: vjo.NEEDS_IMPL,
			
			/**
			 * Code run if update failed with server.
			 */
			//> public (void f())?
			onFailure: vjo.NEEDS_IMPL,
			
			/**
			 * The number of columns the text area should span (works for both 
			 * single line or multi line) 
			 */
			//> public int?
			cols: null,
			
			/**
			 * Synonym for ‘cols’ when using single-line (rows=1) input 
			 */
			//> public int?
			size: null,
			
			/**
			 * The highlight color. Must be six hex digits, not 3. 
			 * Default is: Ajax.InPlaceEditor.defaultHighlightColor 
			 */
			//> public String?
			hightlightColor: null,
			
			/**
			 * The color which the highlight fades to. Must be six hex digits, 
			 * not 3. Default is: ”#FFFFFF” 
			 */
			//> public String?
			highlighEndColor: null,
			
			/**
			 * CSS class added to the element while displaying “Saving…” (
			 * removed when server responds).  Default is “inplaceeditor-saving”.
			 */
			//> public String?
			savingClassName: null,
			
			/**
			 * CSS class used for the in place edit form. Default is “inplaceeditor-form”.
			 */
			//> public String?
			formClassName: null,
			
			/**
			 * 
			 */
			//> public String?
			hoverClassName: null,
			
			/**
			 * Will cause the text to be loaded from the server (useful if your 
			 * text is actually textile and formatted on the server). Default is null.
			 */
			//> public String?
			loadTextURL: null,
			
			/**
			 * If the loadText URL option is specified then this text is displayed 
			 * while the text is being loaded from the server.  Default is 'Loading...'.
			 */
			//> public String?
			loadingText: null,
			
			/**
			 * A function that will get executed just before the request is sent 
			 * to the server, should return the parameters to be sent in the URL. 
			 * Will get two parameters, the entire form and the value of the text 
			 * control. 
			 */
			//> public (void f(Object? entireForm, String? valueOfTextControl))?
			callback: vjo.NEEDS_IMPL,
			
			/**
			 * This option if true will submit the in_place_edit form when the 
			 * input tag loses focus. Default is false.
			 */
			//> public boolean?
			submitOnBlur: null,
			
			/**
			 * Options specified to all AJAX calls (loading and saving text), 
			 * these options are passed through to the prototype AJAX classes. 
			 */
			//> public Object?
			ajaxOptions: null
			
		}
	}).endType()
})
.protos({
	/**
	 * 
	 */
	//> public constructs({String | Element} idOrElement, String url, Ajax_InPlaceEditor.options.one? options)
	constructs: function() {},
	
	//> public void checkForEscapeOrReturn(Event event)
	checkForEscapeOrReturn: vjo.NEEDS_IMPL,
	
	//> public Object createControl(Object mode, Function handler, Object extraClasses)
	createControl: vjo.NEEDS_IMPL,
	
	//> public void createEditField()
	createEditField: vjo.NEEDS_IMPL,
	
	//> public void createForm()
	createForm: vjo.NEEDS_IMPL,
	
	//> public void destroy()
	destroy: vjo.NEEDS_IMPL,
	
	//> public void enterEditMode(Event event)
	enterEditMode: vjo.NEEDS_IMPL,
	
	//> public void enterHover(Event event)
	enterHover: vjo.NEEDS_IMPL,
	
	//> public String getText()
	getText: vjo.NEEDS_IMPL,
	
	//> public void handleFormCancellation(Event event)
	handleFormCancellation: vjo.NEEDS_IMPL,
	
	//> public void handleFormSubmission(Event event)
	handleFormSubmission: vjo.NEEDS_IMPL,
	
	//> public void leaveEditMode()
	leaveEditMode: vjo.NEEDS_IMPL,
	
	//> public void leaveHover(Event event)
	leaveHover: vjo.NEEDS_IMPL,
	
	//> public void loadExternalText()
	loadExternalText: vjo.NEEDS_IMPL,
	
	//> public void postProcessEditField()
	postProcessEditField: vjo.NEEDS_IMPL,
	
	//> public void prepareOptions()
	prepareOptions: vjo.NEEDS_IMPL,
	
	//> public void prepareSubmission()
	prepareSubmission: vjo.NEEDS_IMPL,
	
	//> public void registerListeners()
	registerListeners: vjo.NEEDS_IMPL,
	
	//> public void removeForm()
	removeForm: vjo.NEEDS_IMPL,
	
	//> public void showSaving()
	showSaving: vjo.NEEDS_IMPL,
	
	//> public void triggerCallback(String cbName, Object... arg)
	triggerCallback: vjo.NEEDS_IMPL,
	
	//> public void unregisterListeners()
	unregisterListeners: vjo.NEEDS_IMPL,
	
	//> public void wrapUp(Object transport)
	wrapUp: vjo.NEEDS_IMPL,
	
	//> public void dispose()
	dispose: vjo.NEEDS_IMPL
	
})
.options({
	metatype: true
})
.endType();