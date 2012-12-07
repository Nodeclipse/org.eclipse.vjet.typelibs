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
 * An abstract DOM element observer class, subclasses of which can be used to 
 * periodically check a value and trigger a callback when the value has changed.
 */
//> public abstract
vjo.ctype('org.prototypejs.Abstract') 

.props({
	/**
	 * An abstract DOM element observer class, subclasses of which can be used 
	 * to periodically check a value and trigger a callback when the value has 
	 * changed.
	 * <p>
	 * A TimedObserver object will try to check a value using the getValue() 
	 * instance method which must be defined by the subclass. There are two 
	 * out-of-the-box subclasses: Form.Observer, which serializes a form and 
	 * triggers when the result has changed; and Form.Element.Observer, which 
	 * triggers when the value of a given form field changes.
	 * <p>
	 * Using TimedObserver implementations is straightforward; simply instantiate 
	 * them with appropriate arguments. For example:
	 * <p>
	 * <code>
	 * new Form.Element.Observer(
	 *   'myelement',
	 *   0.2,  // 200 milliseconds
	 *   function(el, value){
	 *     alert('The form control has changed value to: ' + value)
	 *   }
	 * );
	 * </code>
	 * <p>
	 * Now that we have instantiated an object, it will check the value of the 
	 * form control every 0.2 seconds and alert us of any change. While it is 
	 * useless to alert the user of his own input (like in the example), we 
	 * could be doing something useful like updating a certain part of the UI 
	 * or informing the application on server of stuff happening (over Ajax).
	 * <p>
	 * The callback function is always called with 2 arguments: the element 
	 * given when the observer instance was made and the actual value that has 
	 * changed and caused the callback to be triggered in the first place.
	 * <p>
	 * Creating Your Own TimedObserver Implementations
	 * <p>
	 * It's easy to create your own TimedObserver implementations: Simply subclass 
	 * TimedObserver and provide the getValue() method. For example, this is the 
	 * complete source code for Form.Element.Observer:
	 * <p>
	 * <code>
	 * Form.Element.Observer = Class.create(Abstract.TimedObserver, {
	 *   getValue: function() {
	 *     return Form.Element.getValue(this.element);
	 *   }
	 * });
	 * </code>
	 */
	//> public abstract
	TimedObserver: vjo.ctype()
	.inherits('org.prototypejs.Abstract')
	.props({
		
	})
	.protos({

		/**
	   *  new Abstract.TimedObserver(element, frequency, callback)
	   *  <ul>
	   *  <li>element (String | Element): The DOM element to watch. Can be an element
	   *    instance or an ID.</li>
	   *  <li>Frequency (Number): The frequency, in seconds&nbsp;&mdash; e.g., 0.33 to
	   *    check for changes every third of a second.</li>
	   *  <li>callback (Function): The callback to trigger when the value changes.</li>
	   *  </ul>
	   *  <p>
	   *  Initializes an [[Abstract.TimedObserver]]; used by subclasses.
	  **/
		//> public constructs(Object supr, {String | Element} idOrElement, Number frequency, Function? callback)
		constructs: function() {}
		
	})
	.endType(),
	
	/**
	 * 
	 */
	//> public abstract
	EventObserver: vjo.ctype()
	.inherits('org.prototypejs.Abstract')
	.props({
		
	})
	.protos({
		/**
		 * 
		 */
		//> public constructs({String | Element} idOrElement, Function? callback)
		constructs: function() {},
		
		/**
		 * 
		 */
		//> public void onElement()
		onElementEvent: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void registerFormCallbacks(Object...)
		registerFormCallbacks: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void registerCallback(Object element)
		registerCallback: vjo.NEEDS_IMPL
	})
	.endType()
})
.protos({
	
})
.options({
	metatype: true
})
.endType();