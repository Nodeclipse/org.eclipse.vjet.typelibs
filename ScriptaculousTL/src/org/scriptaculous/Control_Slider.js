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
 * Slider
 * <p>
 * Controls > Slider
 * <p>
 * Introduction
 * <p>
 * A slider control which can be used to select a single or multiple values from 
 * a given range, or even set of values.
 * <p>
 * Syntax
 * <p>
 * To make a slider element, you create a new instance of class Control.Slider.
 * <code>
 * new Control.Slider('handles','track', [options]);
 * </code>
 * <p>
 * handles can either be a single id (or element) or, if you want more than one 
 * handle, an array of ids (or elements). track is either id or element.
 * <p>
 * Options
 * <p>
 * Option 	Since 	Default 	Description
 * <p>
 * axis 	V1.5 	horizontal 	Sets the direction that the slider will move in. 
 * It should either be horizontal or vertical.
 * <p>
 * increment 	V1.5 	1 	Defines the relationship of value to pixels. Setting 
 * this to 1 will mean each movement of 1 pixel equates to 1 value.
 * <p>
 * maximum 	V1.5 	(none) 	Length of track in pixels adjusted by increment. The 
 * maximum value that the slider will move to. For horizontal this is to the right 
 * while vertical it is down.
 * <p>minimum 	V1.5 	0 	The minimum value that the slider can move to. For 
 * horizontal this is to the left while vertical it is up. Note: this also sets 
 * the beginning of the slider (zeroes it out).
 * <p>
 * range 	0 	(none) 	Use the $R(min,max)
 * <p>
 * alignX 	V1.5 	0 	This will move the starting point on the x-axis for the 
 * handle in relation to the track. It is often used to move the ‘point’ of the 
 * handle to where 0 should be. It can also be used to set a different starting 
 * point on the track.
 * <p>
 * alignY 	V1.5 	0 	This will move the starting point on the y-axis for the 
 * handle in relation to the track. It is often used to move the ‘point’ of the 
 * handle to where 0 should be. It can also be used to set a different starting 
 * point on the track.
 * <p>
 * sliderValue 	V1.5 	0 	Will set the initial slider value. The handle will 
 * be set to this value, assuming it is within the minimum and maxium values.
 * <p>
 * disabled 	V1.5 	(none) 	This will lock the slider so that it will not 
 * move and thus is disabled.
 * <p>
 * handleImage 	V1.5 	(none) 	The id of the image that represents the handle. 
 * This is used to swap out the image src with disabled image src when the slider 
 * is enabled.
 * <p>
 * handleDisabled 	V1.5 	(none) 	The id of the image that represents the 
 * disabled handle. This is used to change the image src when the slider is disabled.
 * <p>
 * values 	V1.5 	(none) 	Accepts an array of integers. If set these will be 
 * the only legal values for the slider to be at. Thus you can set specific slider 
 * values that the user can move the slider to.
 * <p>
 * spans 	?? 	(none) 	An array of ids or elements which are positioned between 
 * handles. This is used only when slider has more than one handle.
 * <p>
 * restricted 	?? 	false 	Used only for multiple handles, when restricted is 
 * true, handle(s) with greater indexes are not allowed to have values less than 
 * handles with smaller indexes. When restricted is false, handles can be moved 
 * independently from others.
 * <p>
 * The slider control offers some functions to let javascript update its state:
 * <p>
 * Function 	Parameters 	Description
 * <p>
 * setValue 	value, handleIndex 	Will update the slider’s value and thus move 
 * the slider handle to the appropriate position. handleIndex is optional, when 
 * it is not passed then ‘active’ (last-dragged/used) handle is used. NOTE: when 
 * using setValue, the onChange callback function is called.
 * <p>
 * setDisabled 	(none) 	Will set the slider to the disabled state (disabled = true).
 * <p>
 * setEnabled 	(none) 	Will set the slider to the enabled state (disabled = false).
 * <p>
 * Additionally, the options parameter can take the following callback function:
 * <p>
 * Callback 	Description
 * <p>
 * onSlide 	Called whenever the Slider is moved by dragging. The called function 
 * gets the slider value (or array if slider has multiple handles) as its parameter.
 * <p>
 * onChange 	Called whenever the Slider has finished moving or has had its 
 * value changed via the setSlider Value function. The called function gets the 
 * slider value (or array if slider has multiple handles) as its parameter.
 * <p>
 * With both of the above, using multiple handles causes an array of their 
 * respective values to be passed to the callback. Both receive the Slider object 
 * as a second paramater.
 * <p>
 * Examples
 * <p>
 * Single handle
 * <code>
 * // from the author's first demo of a vertical slider.  It begins disabled.
 * var s2 = new Control.Slider('slider_2', 'track_2', {
 *   axis:'vertical',
 *   minimum: 60,
 *   maximum: 288,
 *   alignX: -28,
 *   alignY: -5,
 *   disabled: true, 
 *   handleImage: 'slider_2handle',
 *   handleDisabled: 'images/vsliderhandle_gray.gif'
 * });
 * // example of a horizontal slider that allows only 4 possible values
 * var sliderLimited = new Control.Slider('slider_Limited', 'track_Limited', {
 *   minimum: 2,
 *   maximum: 30,
 *   increment: 9,
 *   alignX: -5,
 *   alignY: -5,
 *   values: [2, 10, 15, 30]
 * });
 * 
 * // Setting the callbacks later on
 * s2.options.onChange = function(value) {
 *   // ...
 *   $('height_value').update(value);
 * };
 * s2.options.onSlide = function(value) {
 *   // ...
 *   $('height_value').update(value);
 * };
 * </code>
 * <p>
 * Multiple handles
 * <code>
 * <div id="square_slider" class="slider">
 *   <div id="square_slider_handle_min" class="handle left"></div>
 *   <div id="square_slider_handle_max" class="handle right"></div>
 *   <div id="square_slider_span" class="span"></div>
 * </div>
 * 
 * var handles = ['square_slider_handle_min', 'square_slider_handle_max'];
 * var square_slider = new Control.Slider(handles, 'square_slider', {
 *   range: $R(0, 100),
 *   values: $R(0, 100),
 *   sliderValue: [20, 80],
 *   spans: ["square_slider_span"],
 *   restricted: true
 * });
 * </code>
 */
vjo.ctype('org.scriptaculous.Control_Slider') //< public

.props({
	/**
	 * 
	 */
	//> public 
	options: vjo.otype().defs({
		/**
		 * 
		 */
		//> public
		one: {
			/**
			 * Sets the direction that the slider will move in. It should either 
			 * be horizontal or vertical. 
			 */
			//> public String?
			axis: null,
			
			/**
			 * Defines the relationship of value to pixels. Setting this to 1 
			 * will mean each movement of 1 pixel equates to 1 value. 
			 */
			//> public Number?
			increment: null,
			
			/**
			 * Length of track in pixels adjusted by increment. The maximum value 
			 * that the slider will move to. For horizontal this is to the right 
			 * while vertical it is down. 
			 */
			//> public Number?
			maximum: null,
			
			/**
			 * The minimum value that the slider can move to. For horizontal this 
			 * is to the left while vertical it is up. Note: this also sets the 
			 * beginning of the slider (zeroes it out). 
			 */
			//> public int?
			minimum: null,
			
			/**
			 * Use the $R(min,max) 
			 */
			//> public Array?
			range: null,
			
			/**
			 * This will move the starting point on the x-axis for the handle in 
			 * relation to the track. It is often used to move the ‘point’ of the 
			 * handle to where 0 should be. It can also be used to set a different 
			 * starting point on the track. 
			 */
			//> public int?
			alignX: null,
			
			/**
			 * This will move the starting point on the y-axis for the handle in 
			 * relation to the track. It is often used to move the ‘point’ of the 
			 * handle to where 0 should be. It can also be used to set a different 
			 * starting point on the track. 
			 */
			//> public int?
			alignY: null,
			
			/**
			 * Will set the initial slider value. The handle will be set to this 
			 * value, assuming it is within the minimum and maxium values
			 */
			//> public Number?
			sliderValue: null,
			
			/**
			 * This will lock the slider so that it will not move and thus is disabled. 
			 */
			//> public boolean?
			disabled: null,
			
			/**
			 * The id of the image that represents the handle. This is used to 
			 * swap out the image src with disabled image src when the slider is 
			 * enabled. 
			 */
			//> public String?
			handleImage: null,
			
			/**
			 * The id of the image that represents the disabled handle. This is 
			 * used to change the image src when the slider is disabled.
			 */
			//> public String?
			handleDisabled: null,
			
			/**
			 * Accepts an array of integers. If set these will be the only legal 
			 * values for the slider to be at. Thus you can set specific slider 
			 * values that the user can move the slider to. 
			 */
			//> public int[]?
			values: null,
			
			/**
			 * An array of ids or elements which are positioned between handles. 
			 * This is used only when slider has more than one handle. 
			 */
			//> public Array?
			spans: null,
			
			/**
			 * Used only for multiple handles, when restricted is true, handle(s) 
			 * with greater indexes are not allowed to have values less than handles 
			 * with smaller indexes. When restricted is false, handles can be 
			 * moved independently from others. 
			 */
			//> public boolean?
			restricted: null,
			
			// The slider control offers some functions to let javascript update 
			// its state
			
			/**
			 * Will update the slider’s value and thus move the slider handle to 
			 * the appropriate position. handleIndex is optional, when it is not 
			 * passed then ‘active’ (last-dragged/used) handle is used. NOTE: 
			 * when using setValue, the onChange callback function is called. 
			 */
			//> public (void setValue(Object o))?
			setValue: vjo.NEEDS_IMPL,
			
			/**
			 * Will set the slider to the disabled state (disabled = true). 
			 */
			//> public (void setDisabled())?
			setDisabled: vjo.NEEDS_IMPL,
			
			/**
			 * Will set the slider to the enabled state (disabled = false).
			 */
			//> public (void setEnabled())?
			setEnabled: vjo.NEEDS_IMPL,
			
			// Additionally the following callbacks can be used
	
			/**
			 * Called whenever the Slider is moved by dragging. The called function 
			 * gets the slider value (or array if slider has multiple handles) as 
			 * its parameter. 
			 */
			//> public (void onSlide({Number | Array}))?
			onSlide: vjo.NEEDS_IMPL,
			
			/**
			 * Called whenever the Slider has finished moving or has had its value 
			 * changed via the setSlider Value function. The called function gets 
			 * the slider value (or array if slider has multiple handles) as its 
			 * parameter.
			 */
			//> public (void onChange({Number | Array}))?
			onChange: vjo.NEEDS_IMPL
		}
	}).endType()
})
.protos({
	/**
	 * 
	 */
	//> public constructs(String element, String track, Control_Slider.options.one options)
	constructs: function() {}
})
.options({
	metatype: true
})
.endType();