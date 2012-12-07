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
 * Captures device motion in the x, y, and z direction.
 * http://docs.phonegap.com/phonegap_accelerometer_accelerometer.md.html#Acceleration
 */
vjo.ctype('com.phonegap.Accelerometer') //< public
.protos({
	
	//>public void getCurrentAcceleration((void onSuccess(com.phonegap.Accelerometer.objects::Acceleration acceleration)) accelerometerSuccess, (void fn()) accelerometerError) 
	getCurrentAcceleration : vjo.NEEDS_IMPL,
	//>public void watchAcceleration((void onSuccess(com.phonegap.Accelerometer.objects::Acceleration acceleration)) accelerometerSuccess, (void fn()) accelerometerError, com.phonegap.Accelerometer.objects::options? accelerometerOptions) 
	watchAcceleration : vjo.NEEDS_IMPL,
	//>public void clearWatch() 
	clearWatch : vjo.NEEDS_IMPL,
	
	objects:vjo.otype()
	.defs({
		/**
		 *
		 */
		Acceleration:{
			 /**
			  * x: Amount of motion on the x-axis. Range [0, 1] (Number)
			  */
			x:null,//< Number
			/**
			 * y: Amount of motion on the y-axis. Range [0, 1] (Number)
			 */
			y:null,//< Number
			/**
			 * z: Amount of motion on the z-axis. Range [0, 1] (Number)
			 */
			z:null,//<Number
			/**
			 * timestamp: Creation timestamp in milliseconds. (DOMTimeStamp)
			 */
			timestamp:null//< Number
		},
		
		options:{
		/**
		 * How often to retrieve the Acceleration in milliseconds. (Number) (Default: 10000)
		 */
			frequency:null //<Number?
		}
		
		
	})
	.endType()
	
	
})
.options({metatype: true})
.endType();