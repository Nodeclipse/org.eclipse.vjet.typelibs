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
 * Ajax.InPlaceCollectionEditor
 * <p>
 * Controls > Ajax.InPlaceCollectionEditor
 * <p>
 * Introduction
 * <p>This constructor generates a Flickr-style AJAX-based “on-the-fly” fields 
 * with a select box instead of Ajax.InPlaceEditor text fields.
 * <p>
 * Syntax
 * <code>
 * new Ajax.InPlaceCollectionEditor( element, url, { collection: [array], [moreOptions] } );
 * </code>
 * The constructor takes three parameters. The first is the element that should 
 * support in-place editing. The second is the url to submit the changed value to. 
 * The server should respond with the updated value (the server might have 
 * post-processed it or validation might have prevented it from changing). The 
 * third is a hash of options. Within that hash of options should be a field 
 * called collection that is an array of values to place inside your select box.
 * <p>
 * The server side component gets the new value as the parameter ‘value’ 
 * (POST method), and should send the new value as the body of the response.
 * <p>
 * If the collection parameter (or the result of the loadCollectionURL) is a 
 * one-dimensional array, the option tag’s value attribute will be the same as 
 * the label. For explicit value attributes, use a two dimensional array for the 
 * collection where the second dimension is a key value pair such as 
 * [['key', 'value'], ['key', 'value']].
 * <p>
 * Options
 * <p>
 * The Ajax.InplaceCollectionEditor takes all the options as Ajax.InPlaceEditor plus:
 * <p>
 * Name 	since 	default 	Description
 * <p>
 * collection 	V?? 	none 	Array of static elements to be displayed as 
 * options (in JSON format)
 * <p>
 * loadCollectionURL 	V1.5 	null 	Loads values and tag texts for the <option> tags
 * <p>
 * loadingCollectionText 	V?? 	null 	Text to be displayed while the 
 * collection is loading
 * <p>
 * loadingClassName 	V?? 	null 	Class applied to form while the collection is loading
 * <p>
 * Static Collection
 * <p>
 * The values for the collection of options are specified as an array when you 
 * invoke the Ajax.InPlaceCollectionEditor. Each element in the array will be 
 * rendered as an <option> in a <select> element for the user to choose from.
 * <code>
 * new Ajax.InPlaceCollectionEditor( element_1, '/url_to_validate_and_save_selection/', { 
 *   collection: ['value one', 'value two', 'value three'] 
 * });
 * 
 * new Ajax.InPlaceCollectionEditor( element_2, '/url_to_validate_and_save_selection/', { 
 *   collection: [['key_1', 'value one'], ['key_2', 'value two'], ['key_3', 'value three']] 
 * });
 * </code>
 * Dynamic Collection
 * <p>
 * The collection is loaded in the same format but is loaded as the response from 
 * a URL in the loadCollectionURL parameter. The response from that URL should be 
 * an array in JSON format.
 */
vjo.ctype('org.scriptaculous.Ajax_InPlaceCollectionEditor') //< public
//> needs(org.scriptaculous.Ajax_InPlaceEditor)
.inherits('org.scriptaculous.Ajax_InPlaceEditor')
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
			 * Array of static elements to be displayed as options (in JSON format) 
			 */
			//> public Array
			collection: null,
			
			/**
			 * Loads values and tag texts for the <option> tags 
			 */
			//> public String?
			loadCollectionURL: null,
			
			/**
			 * Text to be displayed while the collection is loading 
			 */
			//> public String?
			loadingCollectionText: null,
			
			/**
			 * Class applied to form while the collection is loading 
			 */
			//> public String?
			loadingClassName: null
		}
	}).endType()
})
.protos({
	/**
	 * 
	 */
//new Ajax.InPlaceCollectionEditor( element, url, { collection: [array], [moreOptions] } );
	//> public constructs({String | Element} element, String url, Object? moreStuff)
	constructs: function() {},
	
	createEditField: vjo.NEEDS_IMPL,
	
	loadCollection: vjo.NEEDS_IMPL,
	
	showLoadingText: vjo.NEEDS_IMPL,
	
	checkForExternalText: vjo.NEEDS_IMPL,
	
	loadExternalText: vjo.NEEDS_IMPL,
	
	buildOptionsList: vjo.NEEDS_IMPL
	
	
	
})
.options({
	metatype: true
})
.endType();