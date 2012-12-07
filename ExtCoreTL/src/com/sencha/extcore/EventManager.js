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
vjo.ctype('com.sencha.extcore.EventManager') //< public
.globals({
    EventManager : null //< EventManager
}, Ext)
.props({
    EventObject : vjo.ctype()
    .protos({
        getCharCode : vjo.NEEDS_IMPL
      , getKey : vjo.NEEDS_IMPL
      , getPageX : vjo.NEEDS_IMPL
      , getPageY : vjo.NEEDS_IMPL
      , getRelatedTarget : vjo.NEEDS_IMPL
      , getTarget : vjo.NEEDS_IMPL
      , getTime : vjo.NEEDS_IMPL
      , getWheelDelta : vjo.NEEDS_IMPL
      , getXY : vjo.NEEDS_IMPL
      , preventDefault : vjo.NEEDS_IMPL
      , stopDefault : vjo.NEEDS_IMPL
      , stopPropagation : vjo.NEEDS_IMPL
      , within : vjo.NEEDS_IMPL
    })
    .endType()

  , data : vjo.otype().defs({
        handlerOptions : { scope           : null //< public Object?
                         , delegate        : null //< public String?
                         , stopEvent       : null //< public boolean?
                         , preventDefault  : null //< public boolean?
                         , stopPropagation : null //< public boolean?
                         , normalized      : null //< public boolean?
                         , delay           : null //< public Number?
                         , single          : null //< public boolean?
                         , buffer          : null //< public Number?
                         , target          : null //< public Element?
                         }
    }).endType()

  , event : vjo.otype().defs({
      //> public void callback(EventObject e, HTMLElement t, Object o)
	  callback : vjo.NEEDS_IMPL
    }).endType()
})
.protos({
    //> public void addListener({String|HTMLElement} el, String eventName, EventManager.event.callback handler, Object? scope, EventManager.data.handlerOptions? options)
    addListener : vjo.NEEDS_IMPL
  
    //> public EventManager:addListener
  , on : null
    
    //> public void onDocumentReady(EventManager.event.callback fn, Object scope, boolean? options)
  , onDocumentReady : vjo.NEEDS_IMPL
  
    //> public void removeAll({String|HTMLElement} el)
  , removeAll : vjo.NEEDS_IMPL
  
    //> public void removeListener({String|HTMLElement} el)
  , removeListener : vjo.NEEDS_IMPL
  
    //> public EventManager:removeListener
  , un : null
})
.options({
    metatype : true
})
.endType()