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
vjo.mtype('com.sencha.extcore.ElementFx') //< public
//> needs(com.sencha.extcore.Element)
.props({
    DISPLAY    : null //< public Number
  , VISIBILITY : null //< public Number
})
.protos({
    originalDisplay : null //< public String
  , visibilityMode : null //< public Number
  
        /**
         * Perform custom animation on this element.
         * <div><ul class="mdetail-params">
         * <li><u>Animation Properties</u></li>
         * 
         * <p>The Animation Control Object enables gradual transitions for any member of an
         * element's style object that takes a numeric value including but not limited to
         * these properties:</p><div><ul class="mdetail-params">
         * <li><tt>bottom, top, left, right</tt></li>
         * <li><tt>height, width</tt></li>
         * <li><tt>margin, padding</tt></li>
         * <li><tt>borderWidth</tt></li>
         * <li><tt>opacity</tt></li>
         * <li><tt>fontSize</tt></li>
         * <li><tt>lineHeight</tt></li>
         * </ul></div>
         * 
         * 
         * <li><u>Animation Property Attributes</u></li>
         * 
         * <p>Each Animation Property is a config object with optional properties:</p>
         * <div><ul class="mdetail-params">
         * <li><tt>by</tt>*  : relative change - start at current value, change by this value</li>
         * <li><tt>from</tt> : ignore current value, start from this value</li>
         * <li><tt>to</tt>*  : start at current value, go to this value</li>
         * <li><tt>unit</tt> : any allowable unit specification</li>
         * <p>* do not specify both <tt>to</tt> and <tt>by</tt> for an animation property</p>
         * </ul></div>
         * 
         * <li><u>Animation Types</u></li>
         * 
         * <p>The supported animation types:</p><div><ul class="mdetail-params">
         * <li><tt>'run'</tt> : Default
         * <pre><code>
var el = Ext.get('complexEl');
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'run'      // animation type ('run','color','motion','scroll')    
);
         * </code></pre>
         * </li>
         * <li><tt>'color'</tt>
         * <p>Animates transition of background, text, or border colors.</p>
         * <pre><code>
el.animate(
    // animation control object
    {
        color: { to: '#06e' },
        backgroundColor: { to: '#e06' }
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'color'    // animation type ('run','color','motion','scroll')    
);
         * </code></pre> 
         * </li>
         * 
         * <li><tt>'motion'</tt>
         * <p>Animates the motion of an element to/from specific points using optional bezier
         * way points during transit.</p>
         * <pre><code>
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
        points: {
            to: [50, 100],  // go to this point
            control: [      // optional bezier way points
                [ 600, 800],
                [-100, 200]
            ]
        }
    },
    3000,      // animation duration (milliseconds!)
    null,      // callback
    'easeOut', // easing method
    'motion'   // animation type ('run','color','motion','scroll')    
);
         * </code></pre> 
         * </li>
         * <li><tt>'scroll'</tt>
         * <p>Animate horizontal or vertical scrolling of an overflowing page element.</p>
         * <pre><code>
el.animate(
    // animation control object
    {
        scroll: {to: [400, 300]}
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'scroll'   // animation type ('run','color','motion','scroll')    
);
         * </code></pre> 
         * </li>
         * </ul></div>
         * 
         * </ul></div>
         * 
         * @param {Object} args The animation control args
         * @param {Float} duration (optional) How long the animation lasts in seconds (defaults to <tt>.35</tt>)
         * @param {Function} onComplete (optional) Function to call when animation completes
         * @param {String} easing (optional) {@link Ext.Fx#easing} method to use (defaults to <tt>'easeOut'</tt>)
         * @param {String} animType (optional) <tt>'run'</tt> is the default. Can also be <tt>'color'</tt>,
         * <tt>'motion'</tt>, or <tt>'scroll'</tt>
         * @return {Ext.Element} this
         */
    //> public Element animate(Object args, float? duration, Function? onComplete, String? easing, String? animType)
  , animate : vjo.NEEDS_IMPL
  
    //> public boolean isVisible()
  , isVisible : vjo.NEEDS_IMPL
  
    //> public Element setVisible(boolean visible, {boolean | Object}? animate)
  , setVisible : vjo.NEEDS_IMPL
  
    //> public Element setVisibilityMode(Number visMode)
  , setVisibilityMode : null
  
    //> public Element toggle({boolean | Object}? animate)
  , toggle : vjo.NEEDS_IMPL
  
    //> public Element setDisplayed({boolean | String} value)
  , setDisplayed : vjo.NEEDS_IMPL
  
    //> public Element hide({boolean | Object}? animate)
  , hide : vjo.NEEDS_IMPL
  
    //> public Element show({boolean | Object}? animate)
  , show : vjo.NEEDS_IMPL
})
.options({
    metatype : true
})
.endType()