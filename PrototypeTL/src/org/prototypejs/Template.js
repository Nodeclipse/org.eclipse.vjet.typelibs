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
 * A class for sophisticated string interpolation.
 * <p>
 * Any time you have a group of similar objects and you need to produce 
 * formatted output for these objects, maybe inside a loop, you typically 
 * resort to concatenating string literals with the object's fields:
 * <p>
 * <code>"The TV show " + title + " was created by " + author + ".";</code>
 * <p>
 * There's nothing wrong with this approach, except that it is hard to 
 * visualize the output immediately just by glancing at the concatenation 
 * expression. The Template class provides a much nicer and clearer way of 
 * achieving this formatting.
 * <p>
 * Straightforward templates
 * <p>
 * The Template class uses a basic formatting syntax, similar to what is 
 * used in Ruby. The templates are created from strings that have embedded 
 * symbols in the form (e.g., <code>#{fieldName}</code>) that will be replaced 
 * by actual values when the template is applied (evaluated) to an object.
 * <p>
 * <code>
 * // the template (our formatting expression)<br>
 * var myTemplate = new Template(<br>
 * &nbsp;'The TV show #{title} was created by #{author}.');<br>
 * &nbsp;// our data to be formatted by the template<br>
 * var show = {<br>
 * &nbsp;title: 'The Simpsons',<br>
 * <code&nbsp;>author: 'Matt Groening',<br>
 * &nbsp;network: 'FOX'<br>
 * };<br>
 * // let's format our data<br>
 * myTemplate.evaluate(show);<br>
 * // -> "The TV show The Simpsons was created by Matt Groening."<br>
 * </code>
 * <p>
 * Templates are meant to be reused
 * <p>
 * As the example illustrates, Template objects are not tied to specific data. 
 * The data is bound to the template only during the evaluation of the template, 
 * without affecting the template itself. The next example shows the same 
 * template being used with a handful of distinct objects.
 * <p>
 * <code>
 * // creating a few similar objects<br>
 * var conversion1 = { from: 'meters', to: 'feet', factor: 3.28 };<br>
 * var conversion2 = { from: 'kilojoules', to: 'BTUs', factor: 0.9478 };<br>
 * var conversion3 = { from: 'megabytes', to: 'gigabytes', factor: 1024 };<br>
 * // the template<br>
 * var templ = new Template(<br>
 * &nbsp;'Multiply by #{factor} to convert from #{from} to #{to}.');<br>
 * // let's format each object<br>
 * [conversion1, conversion2, conversion3].each( function(conv){<br>    
 * &nbsp;&nbsp;templ.evaluate(conv);<br>
 * });<br>
 * // -> Multiply by 3.28 to convert from meters to feet.<br>
 * // -> Multiply by 0.9478 to convert from kilojoules to BTUs.<br>
 * // -> Multiply by 1024 to convert from megabytes to gigabytes.
 * </code>
 * <p>
 * Escape sequence
 * <p>
 * There's always the chance that one day you'll need to have a literal in your 
 * template that looks like a symbol, but is not supposed to be replaced. For 
 * these situations there's an escape character: the backslash (\\).
 * <p>
 * <code>
 * // NOTE: you're seeing two backslashes here because the backslash<br>
 * // is also an escape character in JavaScript strings, so a literal<br>
 * // backslash is represented by two backslashes.<br>
 * var t = new Template(<br>
 * &nbsp;'in #{lang} we also use the \\#{variable} syntax for templates.');<br>
 * var data = { lang:'Ruby', variable: '(not used)' };<br>
 * t.evaluate(data);<br>
 * // -> in Ruby we also use the #{variable} syntax for templates.
 * </code>
 * <p>
 * Custom syntaxes
 * <p>
 * The default syntax of the template strings will probably be enough for 
 * most scenarios. In the rare occasion where the default Ruby-like syntax is 
 * inadequate, there's a provision for customization. Template's constructor 
 * accepts an optional second argument that is a regular expression object to 
 * match the replaceable symbols in the template string. Let's put together a 
 * template that uses a syntax similar to the now ubiquitous {{ }} constructs:
 * <p>
 * <code>
 * // matches symbols like '{{ field }}'<br>
 * var syntax = /(^|.|\r|\n)(\{{\s*(\w+)\s*}})/;<br>
 * &nbsp;var t = new Template(<br>
 * &nbsp;'<div>Name: <b>{{ name }}</b>, Age: <b>{{ age }}</b></div>',<br>
 * &nbsp;syntax);<br>
 * t.evaluate( {name: 'John Smith', age: 26} );<br>
 * // -> <div>Name: <b>John Smith</b>, Age: <b>26</b></div><br>
 * </code>
 * <p>
 * There are important constraints to any custom syntax. Any syntax must 
 * provide at least three groupings in the regular expression. The first grouping 
 * is to capture what comes before the symbol, to detect the backslash escape 
 * character (no, you cannot use a different character). The second grouping 
 * captures the entire symbol and will be completely replaced upon evaluation. 
 * Lastly, the third required grouping captures the name of the field inside 
 * the symbol.
 */
vjo.ctype('org.prototypejs.Template') //< public
.props({
	
})
.protos({
	/**
	 * <code>new(template[, pattern = Template.Pattern])</code>
	 * <p>
	 * Creates a Template object.
	 * <p>
	 * The optional pattern argument expects a RegExp that defines a custom 
	 * syntax for the replaceable symbols in template.
	 * 
	 */
	//> public constructs(Object pattern)
	constructs: function() {},
	
	/**
	 * <code>Template#evaluate(object) ? String
	 * <p>
	 * Applies the template to object's data, producing a formatted string with 
	 * symbols replaced by object's corresponding properties.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * var hrefTemplate = new Template('/dir/showAll?lang=#{language}&amp;
	 * categ=#{category}&amp;lv=#{levels}');<br>
	 * var selection = {category: 'books' , language: 'en-US'};<br>
	 * &nbsp;hrefTemplate.evaluate(selection);<br>
	 * // -> '/dir/showAll?lang=en-US&amp;categ=books&amp;lv='<br>
	 * &nbsp;hrefTemplate.evaluate({language: 'jp', levels: 3, 
	 * created: '10/12/2005'});<br>
	 * // -> '/dir/showAll?lang=jp&amp;categ=&amp;lv=3'<br>
	 * &nbsp;hrefTemplate.evaluate({});<br>
	 * // -> '/dir/showAll?lang=&amp;categ=&amp;lv='<br>
	 * &nbsp;hrefTemplate.evaluate(null);<br>
	 * // -> error !
	 * </code>
	 *     
	 */
	//> public String evaluation(Object object)
	evaluate: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();