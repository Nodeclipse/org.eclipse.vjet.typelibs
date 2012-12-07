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
 * These are the type extensions for the Prototype Typelib
 */
var typeExtensions = {
    //
    // Native JavaScript Extensions
    //
    'Array'    :[
       'org.prototypejs.nativeext.ArrayExt', 
       'org.prototypejs.Enumerable'
    ], 
    'Date'     : 'org.prototypejs.nativeext.DateExt',
    'Function' : 'org.prototypejs.nativeext.FunctionExt' ,
    'Number'   : 'org.prototypejs.nativeext.NumberExt' ,
    'Object'   : 'org.prototypejs.nativeext.ObjectExt' ,
    'RegExp'   : 'org.prototypejs.nativeext.RegExpExt' ,
    'String'   : 'org.prototypejs.nativeext.StringExt' ,
	
	//
	// DOM/HTML Extensions
	//
	'Document' : 'org.prototypejs.nativeext.documentExt',

	'Event' : [
	    'org.prototypejs.Event_Methods', 
        'org.prototypejs.Event_Ext2'
	],

	'Element' : [
	    'org.prototypejs.nativeext.ElementExt', 
        'org.prototypejs.Element_Methods', 
        'org.prototypejs.Layout_ElementExt', 
        'org.prototypejs.Element_addMethods'
    ]
	
}