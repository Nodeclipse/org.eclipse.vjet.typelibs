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
 * Behaviours > Draggable
 * <p>
 * To make an element draggable, create a new instance of class Draggable.
 * <p>
 * For additional built-in functionality, make a Sortable instead.
 * <p>
 * There is also a class named Draggables that exposes functions for observing 
 * drag actions.
 * <p>
 * Draggables become much more useful when you use them with droppables, which 
 * are the areas that you can drag draggables to.
 * <p>
 * Syntax
 * <code>
 * new Draggable('id_of_element', [options]);
 * </code>
 * <p>
 * Options
 * <p>
 * Option 	Since 	Description
 * <p>handle 	1.0 	string or DOM reference, not set by default. Sets whether 
 * the element should only be draggable by an embedded handle. The value must be 
 * an element reference or element id.
 * <p>
 * handle 	1.5. 	string or DOM reference, not set by default. As above, except 
 * now the value may be a string referencing a CSS class value. The first 
 * child/grandchild/etc. element found within the element that has this CSS class 
 * value will be used as the handle.
 * <p>
 * revert 	1.0 	boolean, defaults to false. If set to true, the element 
 * returns to its original position when the drags ends.
 * <p>
 * revert 	1.5 	boolean or function reference, defaults to false. Revert can 
 * also be an arbitrary function reference, called when the drag ends. Specifying 
 * 'failure' will instruct the draggable not to revert if successfully dropped 
 * in a droppable.
 * <p>
 * snap 	1.5 	If set to false no snapping occurs. Otherwise takes one of 
 * the following forms – ?i: one delta value for both horizontal and vertical 
 * snap, [?x, ?y]: delta values for horizontal and vertical snap, 
 * function(x, y, draggable_object) { return [x, y]; }: a function that receives 
 * the proposed new top left coordinate pair and returns the coordinate pair to 
 * actually be used.
 * <p>
 * zindex 	1.5 	integer value, defaults to 1000. The css z-index of the 
 * draggable item.
 * <p>
 * constraint 	1.0 	string, not set by default. If set to 'horizontal' or 
 * 'vertical' the drag will be constrained to take place only horizontally or 
 * vertically.
 * <p>
 * ghosting 	?? 	boolean, defaults to false. Clones the element and drags the 
 * clone, leaving the original in place until the clone is dropped.
 * <p>
 * starteffect 	?? 	Effect, defaults to Effect.Opacity. Defines the effect to 
 * use when the draggable starts being dragged.
 * <p>
 * reverteffect 	?? 	Effect, default to Effect.Move. Defines the effect to use 
 * when the draggable reverts back to its starting position.
 * <p>
 * endeffect 	?? 	Effect, defaults to Effect.Opacity. Defines the effect to 
 * use when the draggable stops being dragged.
 * <p>
 * scroll 	?? 	string or DOM reference, not set by default. Specifies the element 
 * which will scroll when you get to the boundary. By default this is turned off.
 * <p>
 * scrollSensitivity 	?? 	integer value, defaults to 20 pixels. Minimum distance 
 * from the element boundary to start scrolling.
 * <p>
 * Additionally, the options parameter accepts any of the following callback functions:
 * <p>
 * Callback 	Description
 * <p>
 * onStart 	Called when a drag is initiated.
 * <p>
 * onDrag 	Called repeatedly as the mouse moves, before the draggable position 
 * is updated if mouse position changed from previous call.
 * <p>
 * change 	Called just as onDrag, but after the draggable position is updated. 
 * Gets the Draggable instance as its parameter.
 * <p>
 * onEnd 	Called when a drag is ended.
 * <p>
 * Except for the change callback, each of these callbacks accepts two parameters: 
 * the Draggable object, and the mouse event object.
 * <p>
 * Examples
 * <code>
 * // revert
 * new Draggable('product_1', { revert: true });
 * // constrain direction and give a handle
 * new Draggable('my_div', { constraint: 'horizontal', handle: 'handle' });
 * </code>
 * <p>
 * To disable draggables later on, store it in a variable like:
 * <code>
 * var mydrag = new Draggable('product_1', { revert: true });
 * // then destroy it when you don't need it anymore
 * mydrag.destroy();
 * </code>
 * This way, you can enable and disable dragging at will.
 */
vjo.ctype('org.scriptaculous.Draggable') //< public

.props({
	dragging: null, //< public Object ; MrP - internal member
	
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
		 * string or DOM reference, not set by default. As above, except now the 
		 * value may be a string referencing a CSS class value. The first 
		 * child/grandchild/etc. element found within the element that has this 
		 * CSS class value will be used as the handle. 
		 */
		//> public Object? ; MrP should be {String | Element}
		handle: null,
		
		/**
		 * boolean or function reference, defaults to false. Revert can also be 
		 * an arbitrary function reference, called when the drag ends. Specifying 
		 * 'failure' will instruct the draggable not to revert if successfully 
		 * dropped in a droppable. 
		 */
		//> public boolean?
		revert: null,
		
		/**
		 * If set to false no snapping occurs. Otherwise takes one of the following 
		 * forms – ?i: one delta value for both horizontal and vertical snap, [?x, ?y]: 
		 * delta values for horizontal and vertical snap, function(x, y, 
		 * draggable_object) { return [x, y]; }: a function that receives the 
		 * proposed new top left coordinate pair and returns the coordinate pair 
		 * to actually be used. 
		 */
		//> public boolean?
		snap: null,
		
		/**
		 * integer value, defaults to 1000. The css z-index of the draggable item
		 */
		//> public int?
		zindex: null,
		
		/**
		 * string, not set by default. If set to 'horizontal' or 'vertical' the 
		 * drag will be constrained to take place only horizontally or vertically. 
		 */
		//> public String?
		constraint: null,
		
		/**
		 * boolean, defaults to false. Clones the element and drags the clone, 
		 * leaving the original in place until the clone is dropped. 
		 */
		//> public boolean?
		ghosting: null,
		
		/**
		 * Effect, defaults to Effect.Opacity. Defines the effect to use when 
		 * the draggable starts being dragged.
		 */
		//> public Effect_Base?
		startEffect: null,
		
		/**
		 * Effect, default to Effect.Move. Defines the effect to use when the 
		 * draggable reverts back to its starting position. 
		 */
		//> public Effect_Base?
		revertEffect: null,
		
		/**
		 * Effect, defaults to Effect.Opacity. Defines the effect to use when the 
		 * draggable stops being dragged. 
		 */
		//> public Effect_Base?
		endeffect: null,
		
		/**
		 * string or DOM reference, not set by default. Specifies the element 
		 * which will scroll when you get to the boundary. By default this is 
		 * turned off. 
		 */
		//> public Object? ; MrP - Should be {String | Element}
		scroll: null,
		
		/**
		 * integer value, defaults to 20 pixels. Minimum distance from the element 
		 * boundary to start scrolling. 
		 */
		//> public int?
		scrollSensitivity: null,
		
		// Addtionally the options parameter accepts any of the following callbacks:
	
		/**
		 * Called when a drag is initiated. 
		 */
		//> public Function?
		onStart: null,
		
		/**
		 * Called repeatedly as the mouse moves, before the draggable position is 
		 * updated if mouse position changed from previous call. 
		 */
		//> public Function?
		onDrag: null,
		
		/**
		 * Called just as onDrag, but after the draggable position is updated. 
		 * Gets the Draggable instance as its parameter.
		 */
		//> public Function?
		change: null,
		
		/**
		 * Called when a drag is ended. 
		 */
		//> public Function?
		onEnd: null
	} // end of OL one
	}).endType()
})
.protos({
	/**
	 * 
	 */
	//> public constructs({String | Element} idOrElement, Draggable.options.one options)
	constructs: function() {},
	
	/**
	 * 
	 */
	//> public void destroy()
	destroy: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public int[] currentDelta()
	currentDelta: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void initDrag(Event event)
	initDrag: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void startDrag(Event event)
	startDrag: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void updateDrag(Event event, Object pointer)
	updateDrag: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void finishDrag(Event event, boolean? success)
	finishDrag: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void keyPress(Event event)
	keyPress: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void endDrag(Event event)
	endDrag: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void draw(Object point)
	draw: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void stopScrolling()
	stopScrolling: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void startScrolling(Object speed)
	startScrolling: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void scroll()
	scroll: vjo.NEEDS_IMPL,
	
	/**
	 * returns { top: T, left: L, width: W, height: H };
	 */
	//> public Object _getWindowScroll(Window window)
	_getWindowScroll: vjo.NEEDS_IMPL
	
})
.options({
	metatype: true
})
.endType();