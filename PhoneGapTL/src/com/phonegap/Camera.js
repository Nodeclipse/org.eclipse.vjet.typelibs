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
 * The camera object provides access to the device's default camera application.
 */
vjo.ctype('com.phonegap.Camera') //< public
.globals({
	Camera:null, //< type::Camera
	camera:null //< Camera
	
})
.props({
	
	//>public
	DestinationType:vjo.etype()
	.values("DATA_URL,FILE_URI")
	.endType(),
	
	//>public
	PictureSourceType:vjo.etype()
	.values("PHOTOLIBRARY,CAMERA,SAVEDPHOTOALBUM")
	.endType()
})
.protos({
	/**
	 * Takes a photo using the camera or retrieves a photo from the device's album. The image is returned as a base64 encoded String or as the URI of an image file.
	 * 
	 * Function camera.getPicture opens the device's default camera application so that the user can take a picture (if Camera.sourceType = Camera.PictureSourceType.CAMERA, which is the default). Once the photo is taken, the camera application closes and your application is restored.
	 * If Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY or Camera.PictureSourceType.SAVEDPHOTOALBUM, then a photo chooser dialog is shown, from which a photo from the album can be selected.
	 * The return value will be sent to the cameraSuccess function, in one of the following formats, depending on the cameraOptions you specify:
	 * A String containing the Base64 encoded photo image (default).
	 * A String representing the image file location on local storage.
	 * You can do whatever you want with the encoded image or URI, for example:
	 * Render the image in an <img> tag (see example below)
	 * Save the data locally (LocalStorage, Lawnchair, etc)
	 * Post the data to a remote server
	 * Note: The image quality of pictures taken using the camera on newer devices is quite good. Encoding such images using Base64 has caused memory issues on some of these devices (iPhone 4, BlackBerry Torch 9800). Therefore, using FILE_URI as the 'Camera.destinationType' is highly recommended.
	 */
	//>public void getPicture((void fn(String imageData))cameraSuccess, (void fn()) cameraError, Camera.objects::cameraOptions? cameraOptions ) 
	getPicture : vjo.NEEDS_IMPL,
	
	
	objects:vjo.otype()
	.defs({
		/**
		 *
		 */
		cameraOptions:{
			 /**
			  * x: Quality of saved image. Range is [0, 100]. (Number)
			  */
			quality:null,//< Number?
			/**
			 * destinationType: Choose the format of the return value. Defined in navigator.camera.DestinationType (Number)
			 */
			destinationType:null,//< Camera.DestinationType?
			/**
			 *Set the source of the picture. Defined in nagivator.camera.PictureSourceType (Number)
			 */
			sourceType:null,//<Camera.PictureSourceType?
			/**
			 *  Allow simple editing of image before selection. (Boolean)
			 */
			allowEdit:null//< Number?
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