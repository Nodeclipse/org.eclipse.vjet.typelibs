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
 * Autocompleter.Local
 * <p>
 * Controls > Autocompleter.Local
 * <p>
 * Introduction
 * <p>
 * The local array autocompleter. Used when you’d prefer to inject an array of 
 * autocompletion options into the page, rather than sending out Ajax queries.
 * <p>
 * Syntax
 * <code>
 * new Autocompleter.Local(id_of_text_field, id_of_div_to_populate, array_of_strings, options);
 * </code>
 * <p>
 * The constructor takes four parameters. The first two are, as usual, the id of 
 * the monitored textbox, and id of the autocompletion menu. The third is an 
 * array of strings that you want to autocomplete from, and the fourth is the 
 * options block.
 * <p>
 * Extra local autocompletion options
 * <p>
 * Option 	Default Value 	Description
 * <p>
 * choices 	10 	How many autocompletion choices to offer
 * <p>
 * partialSearch 	true 	If false, the autocompleter will match entered text 
 * only at the beginning of strings in the autocomplete array. Defaults to true, 
 * which will match text at the beginning of any word in the strings in the 
 * autocomplete array. If you want to search anywhere in the string, additionally 
 * set the option fullSearch to true
 * <p>
 * fullSearch 	false 	Search anywhere in autocomplete array strings.
 * <p>
 * partialChars 	2 	How many characters to enter before triggering a partial 
 * match (unlike minChars, which defines how many characters are required to do 
 * any match at all).;
 * <p>
 * ignoreCase 	true 	Whether to ignore case when autocompleting
 * <p>
 * It’s possible to pass in a custom function as the ‘selector’ option, if you 
 * prefer to write your own autocompletion logic. In that case, the other options 
 * above will not apply unless you support them.
 */
vjo.ctype('org.scriptaculous.Autocompleter_Local') //< public
//> needs(org.scriptaculous.Autocompleter_Base)
.inherits('org.scriptaculous.Autocompleter_Base')
.props({
	/**
	 * 
	 */
	//> public
	options: vjo.otype().defs({	
		/**
		 * public
		 */
		one: {					
			/**
			 * How many autocompletion choices to offer. Default is 10.
			 */
			//> public int?
			choices: null,
			
			/**
			 * If false, the autocompleter will match entered text only at the 
			 * beginning of strings in the autocomplete array. Defaults to true, 
			 * which will match text at the beginning of any word in the strings 
			 * in the autocomplete array. If you want to search anywhere in the 
			 * string, additionally set the option fullSearch to true
			 */
			//> public boolean?
			partialSearch: null,
			
			/**
			 * Search anywhere in autocomplete array strings. Default is false.
			 */
			//> public boolean?
			fullSearch: null,
			
			/**
			 * How many characters to enter before triggering a partial match 
			 * (unlike minChars, which defines how many characters are required 
			 * to do any match at all).  Default is 2.
			 */
			//> public int?
			partialChars: null,
			
			/**
			 * Whether to ignore case when autocompleting. Default is true.
			 */
			//> public boolean?
			ignoreCase: null		
		}
	}).endType()
})
.protos({
	/**
	 * 
	 */
	//> public constructs({String | Element} element, String id_of_div_to_populate, String[], Autocompleter_Local.options.one? options)
	constructs: function() {},
	
	/**
	 * 
	 */
	//> public XXX getUpdateChoices()
	getUpdatedChoices: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public XXX setOptions()
	setOptions: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();