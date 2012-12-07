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
vjo.ctype('com.sencha.extcore.DomHelper') //< public
.globals({
    DomHelper : null //< DomHelper
}, Ext) // Make child of Ext global
.props({
    data : vjo.otype().defs({
        elementSpec : {
            'id'   : null //< public String?
          , 'tag'  : null //< public String
          , 'cls'  : null //< public String?
          , 'html' : null //< public String?
          , 'children' : null //< public Array?
        }
    }).endType()
})
.protos({
    
})
.options({
    metatype : true
})
.endType()