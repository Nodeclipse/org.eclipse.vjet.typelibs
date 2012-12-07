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
vjo.ctype('com.sencha.extcore.Element') //< public
//> needs(com.sencha.extcore.CompositeElementLite)
//> needs(com.sencha.extcore.Ext)
//> needs(com.sencha.extcore.EventManager)
.mixin('com.sencha.extcore.ElementFx')
/*
.globals({
    Element : null //< Element
}, Ext)
*/
.props({
    /**
     * Retrieves Ext.Element objects.
     * <p><b>This method does not retrieve {@link Ext.Component Component}s.</b> This method
     * retrieves Ext.Element objects which encapsulate DOM elements. To retrieve a Component by
     * its ID, use {@link Ext.ComponentMgr#get}.</p>
     * <p>Uses simple caching to consistently return the same object. Automatically fixes if an
     * object was recreated with the same id via AJAX or DOM.</p>
     * @param {Mixed} el The id of the node, a DOM Node or an existing Element.
     * @return {Element} The Element object (or null if no matching element was found)
     * @static
     * @member Ext.Element
     * @method get
     */
    //> public Element get({String | Element | Node | CompositeElementLite | Array} el)
    get : vjo.NEEDS_IMPL
  
  , data : vjo.otype().defs({
        animPropSpec : { by   : null //< public {String | Number | Number[]}?
                       , from : null //< public {String | Number | Number[]}?
                       , to   : null //< public {String | Number | Number[]}?
                       , control : null //< public Array<Number[]>?
                       , unit : null //< public String?
                       }
      , posSpec : { 'position' : null //< public String
                  , 'left'     : null //< public String
                  , 'right'    : null //< public String
                  , 'top'      : null //< public String
                  , 'bottom'   : null //< public String
                  , 'z-index'  : null //< public String
                  }
      , scrollSpec : { 'left' : null //< public String
                     , 'top'  : null //< public String
                     }
    }).endType()
})
.protos({
    autoBoxAdjust   : null //< public boolean
  , defaultUnit     : null //< public String
  , dom             : null //< public HTMLElement
  , id              : null //< public String
  
    //> public constructs({String|HTMLElement} element, boolean? forceNew)
  , constructs : function() {}
  
    //> public Element addClass({String|Array} className)
  , addClass : vjo.NEEDS_IMPL
  
    /**
     * Appends an event handler to this element.  The shorthand version {@link #on} is equivalent.
     * @param {String} eventName The name of event to handle.
     * @param {Function} fn The handler function the event invokes. This function is passed
     * the following parameters:<ul>
     * <li><b>evt</b> : EventObject<div class="sub-desc">The {@link Ext.EventObject EventObject} describing the event.</div></li>
     * <li><b>el</b> : HtmlElement<div class="sub-desc">The DOM element which was the target of the event.
     * Note that this may be filtered by using the <tt>delegate</tt> option.</div></li>
     * <li><b>o</b> : Object<div class="sub-desc">The options object from the addListener call.</div></li>
     * </ul>
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.
     * <b>If omitted, defaults to this Element.</b>.
     * @param {Object} options (optional) An object containing handler configuration properties.
     * This may contain any of the following properties:<ul>
     * <li><b>scope</b> Object : <div class="sub-desc">The scope (<code><b>this</b></code> reference) in which the handler function is executed.
     * <b>If omitted, defaults to this Element.</b></div></li>
     * <li><b>delegate</b> String: <div class="sub-desc">A simple selector to filter the target or look for a descendant of the target. See below for additional details.</div></li>
     * <li><b>stopEvent</b> Boolean: <div class="sub-desc">True to stop the event. That is stop propagation, and prevent the default action.</div></li>
     * <li><b>preventDefault</b> Boolean: <div class="sub-desc">True to prevent the default action</div></li>
     * <li><b>stopPropagation</b> Boolean: <div class="sub-desc">True to prevent event propagation</div></li>
     * <li><b>normalized</b> Boolean: <div class="sub-desc">False to pass a browser event to the handler function instead of an Ext.EventObject</div></li>
     * <li><b>target</b> Ext.Element: <div class="sub-desc">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>
     * <li><b>delay</b> Number: <div class="sub-desc">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>
     * <li><b>single</b> Boolean: <div class="sub-desc">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>
     * <li><b>buffer</b> Number: <div class="sub-desc">Causes the handler to be scheduled to run in an {@link Ext.util.DelayedTask} delayed
     * by the specified number of milliseconds. If the event fires again within that time, the original
     * handler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>
     * </ul><br>
     * <p>
     * <b>Combining Options</b><br>
     * In the following examples, the shorthand form {@link #on} is used rather than the more verbose
     * addListener.  The two are equivalent.  Using the options argument, it is possible to combine different
     * types of listeners:<br>
     * <br>
     * A delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the
     * options object. The options object is available as the third parameter in the handler function.<div style="margin: 5px 20px 20px;">
     * Code:<pre><code>
el.on('click', this.onClick, this, {
    single: true,
    delay: 100,
    stopEvent : true,
    forumId: 4
});</code></pre></p>
     * <p>
     * <b>Attaching multiple handlers in 1 call</b><br>
     * The method also allows for a single argument to be passed which is a config object containing properties
     * which specify multiple handlers.</p>
     * <p>
     * Code:<pre><code>
el.on({
    'click' : {
        fn: this.onClick,
        scope: this,
        delay: 100
    },
    'mouseover' : {
        fn: this.onMouseOver,
        scope: this
    },
    'mouseout' : {
        fn: this.onMouseOut,
        scope: this
    }
});</code></pre>
     * <p>
     * Or a shorthand syntax:<br>
     * Code:<pre><code></p>
el.on({
    'click' : this.onClick,
    'mouseover' : this.onMouseOver,
    'mouseout' : this.onMouseOut,
    scope: this
});
     * </code></pre></p>
     * <p><b>delegate</b></p>
     * <p>This is a configuration option that you can pass along when registering a handler for
     * an event to assist with event delegation. Event delegation is a technique that is used to
     * reduce memory consumption and prevent exposure to memory-leaks. By registering an event
     * for a container element as opposed to each element within a container. By setting this
     * configuration option to a simple selector, the target element will be filtered to look for
     * a descendant of the target.
     * For example:<pre><code>
// using this markup:
&lt;div id='elId'>
    &lt;p id='p1'>paragraph one&lt;/p>
    &lt;p id='p2' class='clickable'>paragraph two&lt;/p>
    &lt;p id='p3'>paragraph three&lt;/p>
&lt;/div>
// utilize event delegation to registering just one handler on the container element:
el = Ext.get('elId');
el.on(
    'click',
    function(e,t) {
        // handle click
        console.info(t.id); // 'p2'
    },
    this,
    {
        // filter the target element to be a descendant with the class 'clickable'
        delegate: '.clickable'
    }
);
     * </code></pre></p>
     * @return {Ext.Element} this
     */
    //> public Element addListener(String eventName, EventManager.event.callback, Object? scope, Object? options)
  , addListener : vjo.NEEDS_IMPL  
  
    //> public Element appendChild({String|HTMLElement|Array|Element|CompositeElementLite} el)
  , appendChild : vjo.NEEDS_IMPL
  
    //> public Element blur()
  , blur : vjo.NEEDS_IMPL
  
    //> public Element child(String selector)
	//> public {Element|HTMLElement} child(String selector, boolean returnDom)
  , child : vjo.NEEDS_IMPL
  
    //> public Element clearOpacity()
  , clearOpacity : vjo.NEEDS_IMPL
  
    //> public Element clearPositioning(String? value)
  , clearPositioning : vjo.NEEDS_IMPL
  
    //> public Element clip()
  , clip : vjo.NEEDS_IMPL
  
    //> public boolean contains({HTMLElement|String} el)
  , contains : vjo.NEEDS_IMPL
  
    //> public Element createChild(Object config, HTMLElement? insertBefore)
    //> public {Element|HTMLElement} createChild(Object config, HTMLElement insertBefore, boolean returnDom)
  , createChild : vjo.NEEDS_IMPL
  
    //> public Element down(String selector)
    //> public {Element|HTMLElement} down(String selector, boolean returnDom)
  , down : vjo.NEEDS_IMPL
  
    //> public Element findParent(String selector, {Number|HTMLElement}? maxDepth)
    //> public {Element|HTMLElement} findParent(String selector, {Number|HTMLElement} maxDepth, boolean returnEl)
  , findParent : vjo.NEEDS_IMPL
  
    //> public Element findParentNode(String selector, {Number|HTMLElement}? maxDepth)
    //> public {Element|HTMLElement} findParentNode(String selector, {Number|HTMLElement} maxDepth, boolean returnEl)
  , findParentNode : vjo.NEEDS_IMPL
  
    //> public Element fly({String|HTMLElement} el, String? named)
  , fly : vjo.NEEDS_IMPL
  
    //> public Element focus(Number? defer)
  , focus : vjo.NEEDS_IMPL
  
    //> public String gretAttribute(String name, String? namespace)
  , getAttribute : vjo.NEEDS_IMPL
  
    //> public String getAttributeNS(String namespace, String name)
  , getAttributeNS : vjo.NEEDS_IMPL
  
    //> public Number getBorderWidth(String side)
  , getBorderWidth : vjo.NEEDS_IMPL
  
    //> public Number getBottom(boolean? local)
  , getBottom : vjo.NEEDS_IMPL
  
    //> public void getColor(String arr, String defaultValue, String? prefix)
  , getColor : vjo.NEEDS_IMPL
  
    //> public Number getHeight(boolean? contentHeight)
  , getHeight : vjo.NEEDS_IMPL
  
    //> public Number getLeft(boolean? local)
  , getLeft : vjo.NEEDS_IMPL
  
    //> public Array getOffsetsTo({String|Element|Node|CompositeElementLite|Array} element)
  , getOffsetsTo : vjo.NEEDS_IMPL
  
    //> public Number getPadding(String side)
  , getPadding : vjo.NEEDS_IMPL
  
    //> public data.positioning getPositioning()
  , getPositioning : vjo.NEEDS_IMPL
  
    //> public Number getRight(boolean? local)
  , getRight : vjo.NEEDS_IMPL
  
    //> public Element.data.scrollSpec getScroll()
  , getScroll : vjo.NEEDS_IMPL
  
    //> public String getStyle(String property)
  , getStyle : vjo.NEEDS_IMPL
  
    //> public Number getTop(boolean? local)
  , getTop : vjo.NEEDS_IMPL
  
    //> public String getValue()
    //> public {String|Number} getValue(boolean asNumber)
  , getValue : vjo.NEEDS_IMPL
  
    //> public Number getWidth(boolean? contentWidth)
  , getWidth : vjo.NEEDS_IMPL
  
    //> public Number getX()
  , getX : vjo.NEEDS_IMPL
  
    //> public Number[] getXY()
  , getXY : vjo.NEEDS_IMPL
  
    //> public Number getY()
  , getY : vjo.NEEDS_IMPL
  
    //> public boolean hasClass(String className)
  , hasClass : vjo.NEEDS_IMPL
  
  , hover : vjo.NEEDS_IMPL
  , insertAfter : vjo.NEEDS_IMPL
  , insertBefore : vjo.NEEDS_IMPL
  , insertFirst : vjo.NEEDS_IMPL
  , insertHtml : vjo.NEEDS_IMPL
  , is : vjo.NEEDS_IMPL
  , isBorderBox : vjo.NEEDS_IMPL
  , isScrollable : vjo.NEEDS_IMPL
  , last : vjo.NEEDS_IMPL
  , load : vjo.NEEDS_IMPL
  , moveTo : vjo.NEEDS_IMPL
  , next : vjo.NEEDS_IMPL
  
    //> Element::addListener
  , on : null
  
  , parent : vjo.NEEDS_IMPL
  , position : vjo.NEEDS_IMPL
  , prev : vjo.NEEDS_IMPL
  , query : vjo.NEEDS_IMPL
  , radioClass : vjo.NEEDS_IMPL
  , remove : vjo.NEEDS_IMPL
  , removeAllListeners : vjo.NEEDS_IMPL
  , removeClass : vjo.NEEDS_IMPL
  , removeListener : vjo.NEEDS_IMPL
  , replace : vjo.NEEDS_IMPL
  , replaceClass : vjo.NEEDS_IMPL
  , replaceWith : vjo.NEEDS_IMPL
  , scrollTo : vjo.NEEDS_IMPL
  
    //> public CompositeElementLite select({String|Array} selector, boolean? unique, {HTMLElement|String}? root)
  , select : vjo.NEEDS_IMPL
  
  , set : vjo.NEEDS_IMPL
  , setBottom : vjo.NEEDS_IMPL
  , setHeight : vjo.NEEDS_IMPL
  , setleft : vjo.NEEDS_IMPL
  , setLocation : vjo.NEEDS_IMPL
  , setOpacity : vjo.NEEDS_IMPL
  , setPositioning : vjo.NEEDS_IMPL
  , setRight : vjo.NEEDS_IMPL
  , setStyle : vjo.NEEDS_IMPL
  , setTop : vjo.NEEDS_IMPL
  , setWidth : vjo.NEEDS_IMPL
  , setX : vjo.NEEDS_IMPL
  , setXY : vjo.NEEDS_IMPL
  , setY : vjo.NEEDS_IMPL
  , toggleClass : vjo.NEEDS_IMPL
  , translatePoints : vjo.NEEDS_IMPL
  
    //> Element::removeListener
  , un : null
  
  , unclip : vjo.NEEDS_IMPL
  , up : vjo.NEEDS_IMPL
  , wrap : vjo.NEEDS_IMPL
})
.options({
    metatype : true
})
.endType()