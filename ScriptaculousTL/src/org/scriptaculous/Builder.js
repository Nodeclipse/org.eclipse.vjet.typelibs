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
 * Use Builder to easily create DOM elements dynamically.
 * <p>
 * Syntax
 * <code>
 * Builder.node( elementName )
 * Builder.node( elementName, attributes )
 * Builder.node( elementName, children )
 * Builder.node( elementName, attributes, children )
 * </code>
 * <p>
 * Arguments 	Description
 * <p>elementName 	String, The tag name for the element
 * <p>attributes 	Object, Typical attributes are id, className, style, onclick, etc.
 * <p>children 	Array, List of other nodes to be appended as children
 * <p>
 * If an element of the children Array is a String or Number, it will be 
 * automatically appended as a text node. Instead of an array, children can also 
 * be a JavaScript String or Number, to ease usage.
 * <p>
 * Special cases
 * <p>class: When specifying the class attribute for the node, use className to 
 * circumvent a Firefox bug.
 * <p>for: To set a for attribute (in labels) use htmlFor, since ‘for’ is a 
 * reserved word in javascript.
 * <p>
 * Examples
 * <p>
 * Creating TR and TD elements
 * <code>
 * var table = Builder.node('table', {
 *   width: '100%',
 *   cellpadding: '2',
 *   cellspacing: '0',
 *   border: '0'
 * });
 * var tbody = Builder.node('tbody'),
 *   tr = Builder.node('tr', { className: 'header' }),
 *   td = Builder.node('td', [Builder.node('strong', 'Category')]);
 * tr.appendChild(td);
 * tbody.appendChild(tr);
 * table.appendChild(tbody);
 * $('divCat').appendChild(table);
 * </code>
 * You can also combine them but you need to make sure you create the tbody tag 
 * or it will not work in IE. I have tested this in FF 1.5 and IE 6. I don’t have 
 * access to other browsers. The one problem that I have found is that with TR 
 * and TD elements you can not put a style tag on them as it just makes IE stop 
 * doing the Builder Function.
 * <p>
 * Simple Example
 * <code>
 * var element = Builder.node('p', { className:'error' }, 'An error has occurred');
 * </code>
 * creates following element:
 * <p class="error">An error has occured</p>
 * <p>
 * Complex Example
 * <code>
 * var element = Builder.node('div', { id: 'ghosttrain' }, [
 *   Builder.node('div',{ className: 'controls', style: 'font-size:11px;' }, [
 *     Builder.node('h1', 'Ghost Train'),
 *       'testtext', 2, 3, 4,
 *       Builder.node('ul', [
 *         Builder.node('li', { className: 'active', onclick: 'test()' }, 'Record')
 *       ]),
 *     ]),
 *   ]);
 *   </code>
 *   <p>
 *   creates (without newlines):
 * <code>
 * <div id="ghosttrain">
 *   <div class="controls" style="font-size:11px">
 *     <h1>Ghost Train</h1>
 *     testtext234
 *     <ul>
 *       <li class="active" onclick="test()">Record</li>
 *     </ul>
 *   </div>
 * </div>
 * <p>
 * Usage
 * <p>
 * In JavaScript code, if you want to use your new element, you can add it to an 
 * existing DOM element by using the browsers native appendChild function:
 * <code>
 * $('myExistingDomElement').appendChild(element);
 * </code>
 * … or by using Protoypes built-in Element#insert method which allows you to 
 * specify a position the new node gets inserted into:
 * <code>
 * $('myExistingDomElement').insert(element); // appends the new node to @myExistingDomElement@-element
 * $('myExistingDomElement').insert({ after: element }); // inserts the new node right after the @myExistingDomElement@-element
 * $('myExistingDomElement').insert({ top: element }); // inserts the new node as the first element in @myExistingDomElement@
 * </code>
 * If you want to be able to call any of Prototype’s extension-methods on the 
 * created node, then you need to pass it through the $ function:
 * <code>
 * var div = Builder.node('div', { id: 'some_id' })
 * div = $(div);
 * div.hide();
 * </code>
 */
vjo.ctype('org.scriptaculous.Builder') //< public

.props({
	/**
	 * 
	 */
	//> public void node(String elementName)
	//> public void node(String elementName, Object attributes)
	//> public void node(String elementName, Array children)
	//> public void node(String elementName, Object Attributes, Array children)
	node: vjo.NEEDS_IMPL
})
.protos({
	
})
.options({
	metatype: true
})
.endType();