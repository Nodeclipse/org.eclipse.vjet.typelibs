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
 * Obtains the direction that the device is pointing.
 */

vjo.ctype('com.phonegap.Compass') //< public
.globals({
	compass:null //< com.phonegap.Compass
})
.protos({

	/**
	 * Get the current compass heading.
	 * 
	 * navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
	 * Description
	 * The compass is a sensor that detects the direction or heading that the device is pointed. It measures the heading in degrees from 0 to 359.99.
	 * The compass heading is returned using the compassSuccess callback function.
	 */
	//>public void getCurrentHeading((void fn(Number)) compassSuccess, (void fn()) compassError, com.phonegap.Compass.objects::options? compassOptions) 
	getCurrentHeading : vjo.NEEDS_IMPL,
		
	/**
	 * At a regular interval, get the compass heading in degrees.
	 * var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
	 * 
	 * Description
	 * The compass is a sensor that detects the direction or heading that the device is pointed. It measures the heading in degrees from 0 to 359.99.
	 * The compass.watchHeading gets the device's current heading at a regular interval. Each time the heading is retrieved, the headingSuccess callback function is executed. Specify the interval in milliseconds via the frequency parameter in the compassOptions object.
	 * The returned watch ID references references the compass watch interval. The watch ID can be used with compass.clearWatch to stop watching the compass.
	 * Supported Platforms
	 * Android
	 * iPhone
	 */
	//>public String watchHeading((void fn(Number)) compassSuccess, (void fn()) compassError, com.phonegap.Compass.objects::options? compassOptions)  
	watchHeading : vjo.NEEDS_IMPL,
	
	/**
	 * Stop watching the compass referenced by the watch ID parameter.
	 * @param watchID: The ID returned by compass.watchHeading.
	 */
	//>public void clearWatch(String watchID) 
	clearWatch : vjo.NEEDS_IMPL,
	
	//>public 
	objects : vjo.otype()
	.defs({
		options:{
			frequency:null //< Number
	}
		
	})
	.endType()
	
	

		
		
})
.options({metatype: true})
.endType();