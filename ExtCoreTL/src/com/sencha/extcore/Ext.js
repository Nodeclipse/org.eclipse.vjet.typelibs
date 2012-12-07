/*
The MIT License

Copyright (c) 2011 Matthew Jaquish <mattjaq@yahoo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/* 
 * "The society that separates its scholars from its warriors will have its
 * thinking done by cowards and its fighting by fools." ~ Thucydides
 *  
 * Use for good, and not for evil.
 * 
 * @version ext-core-3.1.0
 * @author Zenwolf <https://github.com/Zenwolf> aka Matthew Jaquish <mattjaq@yahoo.com>
 * @description A VJET JavaScript IDE Type Library for Sencha Lab's Ext.Core open source product.
 */

vjo.ctype('com.sencha.extcore.Ext') //< public
//> needs(com.sencha.extcore.Element)
//> needs(com.sencha.extcore.EventManager)
//> needs(com.sencha.extcore.DomQuery)
.globals({
    Ext : null //< Ext
})
.props({
  // Objects
    data : vjo.otype().defs({
    }).endType()

  , USE_NATIVE_JSON             : null //< public boolean
})
.protos({
    // vvvvvvvvvv Exported Properties vvvvvvvvvv
    enableFx                    : null //< public boolean
  , enableGarbageCollector      : null //< public boolean
  , enableListenerCollection    : null //< public boolean
  , isAir                       : null //< public boolean
  , isBorderBox                 : null //< public boolean
  , isChrome                    : null //< public boolean
  , isGecko                     : null //< public boolean
  , isGecko2                    : null //< public boolean
  , isGecko3                    : null //< public boolean
  , isIE                        : null //< public boolean
  , isIE6                       : null //< public boolean
  , isIE7                       : null //< public boolean
  , isIE8                       : null //< public boolean
  , isLinux                     : null //< public boolean
  , isMac                       : null //< public boolean
  , isOpera                     : null //< public boolean
  , isReady                     : null //< public boolean
  , isSafari                    : null //< public boolean
  , isSafari2                   : null //< public boolean
  , isSafari3                   : null //< public boolean
  , isSafari4                   : null //< public boolean
  , isSecure                    : null //< public boolean
  , isStrict                    : null //< public boolean
  , isWebKit                    : null //< public boolean
  , isWindows                   : null //< public boolean
  , version                     : null //< public String
	
    // ^^^^^^^^^^ Exported Properties ^^^^^^^^^^
	
	
	/* TODO fix when globals bug is fixed */
  , Element : null //< public com.sencha.extcore.Element
  
  
    // vvvvvvvvvv Exported Types vvvvvvvvvv
    // TODO
    // ^^^^^^^^^^ Exported Types ^^^^^^^^^^
    
    
    // vvvvvvvvvv Public methods vvvvvvvvvv
	
    //> public Object apply(Object obj, Object config, Object defaults)
  , apply : vjo.NEEDS_IMPL
	
    //> public Object applyIf(Object obj, Object config)
  , applyIf : vjo.NEEDS_IMPL
  
    //> public Object decode(String json, boolean? safe)
  , decode : vjo.NEEDS_IMPL

    //> public void each({Array|NodeList} array, (void fn(Object o, Number index, Array allItems)), Object scope)
  , each : vjo.NEEDS_IMPL
	
	//> public String encode({String|boolean|Object|Array} o)
  , encode : vjo.NEEDS_IMPL
  
    /**
     * <p>Extends one class to create a subclass and optionally overrides members with the passed literal. This method
     * also adds the function "override()" to the subclass that can be used to override members of the class.</p>
     * For example, to create a subclass of Ext GridPanel:
     * <pre><code>
MyGridPanel = Ext.extend(Ext.grid.GridPanel, {
    constructor: function(config) {

//      Create configuration for this Grid.
        var store = new Ext.data.Store({...});
        var colModel = new Ext.grid.ColumnModel({...});

//      Create a new config object containing our computed properties
//      *plus* whatever was in the config parameter.
        config = Ext.apply({
            store: store,
            colModel: colModel
        }, config);

        MyGridPanel.superclass.constructor.call(this, config);

//      Your postprocessing here
    },

    yourMethod: function() {
        // etc.
    }
});
    </code></pre>
    *
    * <p>This function also supports a 3-argument call in which the subclass's constructor is
    * passed as an argument. In this form, the parameters are as follows:</p>
    * <div class="mdetail-params"><ul>
    * <li><code>subclass</code> : Function <div class="sub-desc">The subclass constructor.</div></li>
    * <li><code>superclass</code> : Function <div class="sub-desc">The constructor of class being extended</div></li>
    * <li><code>overrides</code> : Object <div class="sub-desc">A literal with members which are copied into the subclass's
    * prototype, and are therefore shared among all instances of the new class.</div></li>
    * </ul></div>
    *
    * @param {Function} superclass The constructor of class being extended.
    * @param {Object} overrides <p>A literal with members which are copied into the subclass's
    * prototype, and are therefore shared between all instances of the new class.</p>
    * <p>This may contain a special member named <tt><b>constructor</b></tt>. This is used
    * to define the constructor of the new class, and is returned. If this property is
    * <i>not</i> specified, a constructor is generated and returned which just calls the
    * superclass's constructor passing on its parameters.</p>
    * <p><b>It is essential that you call the superclass constructor in any provided constructor. See example code.</b></p>
    * @return {Function} The subclass constructor from the <code>overrides</code> parameter, or a generated one if not provided.
    */
    //> public Function extend(Function subclass, Function superclass, Object? overrides)
  , extend : vjo.NEEDS_IMPL
  
    //> public Element getBody()
  , getBody : vjo.NEEDS_IMPL
  
    //> public HTMLElement getDom({String|Node|Element} el)
  , getDom : vjo.NEEDS_IMPL
  
    //> public String id({String|Node|Element}? el, String? prefix)
  , id : vjo.NEEDS_IMPL
  
    //> public boolean isArray(Object object)
  , isArray : vjo.NEEDS_IMPL
  
    //> public boolean isEmpty({String|Array} value, boolean? allowBlank)
  , isEmpty : vjo.NEEDS_IMPL
  
    //> public boolean isFunction(Object object)
  , isFunction : vjo.NEEDS_IMPL
  
    //> public boolean isObject(Object object)
  , isObject : vjo.NEEDS_IMPL
  
    //> public boolean isPrimitive({String|boolean|Number|Object|Array|Function})
  , isPrimitive : vjo.NEEDS_IMPL
  
    //> public void namespace(String... namespace)
  , namespace : vjo.NEEDS_IMPL

    //> public void override(Object origclass, Object overrides)
  , override : vjo.NEEDS_IMPL
  
    //> public void removeNode(HTMLElement node)
  , removeNode : vjo.NEEDS_IMPL
  
    //> public Array toArray(Object a, Number i, Number j)
  , toArray : vjo.NEEDS_IMPL
  
    //> public Object urlDecode(String string, boolean? overwrite)
  , urlDecode : vjo.NEEDS_IMPL
  
    //> public String urlEncode(Object o, String? pre)
  , urlEncode : vjo.NEEDS_IMPL

    // ^^^^^^^^^^ Public methods ^^^^^^^^^^
	
	
    // vvvvvvvvvv Assigned methods vvvvvvvvvv
    
    //> public Element:fly
  , fly : null
    
    //> public Element:get
  , get : null

    //> public EventManager:onDocumentReady
  , onReady : null
  
    //> public DomQuery:select
  , query : null
  
    //> public Element:select
  , select : null
    
    // ^^^^^^^^^^ Assigned methods ^^^^^^^^^^
})
.options({
	metatype : true
})
.endType()