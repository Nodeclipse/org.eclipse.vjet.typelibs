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
 * Droppables
 * <p>
 * Behaviours > Droppables
 * <p>
 * To make an element react when a Draggable is dropped onto it, you’ll add it 
 * to the Droppables of the page with the Droppables.add class method.
 * <p>
 * Syntax
 * <code>
 * Droppables.add('id_of_element',[options]);
 * </code>
 * <p>
 * Options
 * <p>
 * Options 	Description
 * <p>
 * accept 	Set accept to a string or an array of strings describing CSS classes. 
 * The Droppable will only accept Draggables that have one or more of these CSS 
 * classes.
 * <p>
 * containment 	The droppable will only accept the Draggable if the Draggable is 
 * contained in the given elements (or element ids). Can be a single element or 
 * an array of elements. This option is used by Sortables to control Drag-and-Drop 
 * between Sortables.
 * <p>
 * hoverclass 	if set, the Droppable will have this additional CSS class when an 
 * accepted Draggable is hovered over it.
 * <p>
 * overlap 	If set to ‘horizontal’ or ‘vertical’ the droppable will only react to 
 * a Draggable if its overlapping by more than 50% in the given direction. Used 
 * by Sortables.
 * <p>
 * greedy 	OBSOLETE starting at v1.6.1 (mid-2006) boolean, defaults to true, 
 * stops processing hovering (don’t look for other Droppables that are under the 
 * Draggable)
 * <p>
 * Callbacks
 * <p>
 * Callback 	Description
 * <p>
 * onHover 	Called whenever a Draggable is moved over the Droppable and the 
 * Droppable is affected (would accept it). The callback gets three parameters: 
 * the Draggable, the Droppable element, and the percentage of overlapping as 
 * defined by the overlap option. Used by Sortables.
 * <p>
 * onDrop 	Called whenever a Draggable is released over the Droppable and the 
 * Droppable accepts it. The callback gets three parameters: the Draggable element, 
 * the Droppable element and the Event. You can extract additional information 
 * about the drop – like if the Ctrl or Shift keys were pressed – from the Event 
 * object.
 * <p>
 * Examples
 * <code>
 * Droppables.add('shopping_cart', {
 *   accept: 'products',
 *   onDrop: function(element) {
 *     $('shopping_cart_text').update('Dropped the ' + element.alt + ' on me.');
 * });
 * 
 * Droppables.add('shopping_cart', {
 *   accept: 'products',
 *   onDrop: function(dragged, dropped, event) {
 *     alert('Dragged: ' + dragged.id);
 *     alert('Dropped onto: ' + dropped.id);
 *     alert('Held ctrl key: ' + event.ctrlKey);
 *   }
 * });
 * </code>
 * Removing Droppables
 * <p>When you delete a Node in the HTML Code that was droppable you will not be 
 * able to use any draggable Element. Before you delete a droppable element be 
 * sure to remove it first from the Droppables list:
 * <code>
 * Droppables.remove(element);
 * </code>
 * <p>
 * Notes
 * <p>
 * Nested Droppables
 * <p>
 * If you’re adding droppable elements that have other droppable elements inside 
 * of them, make sure that you add the droppables in reverse order of the nesting 
 * (i.e. most inner droppable first, then second most inner droppable second)
 * <p>
 * For example you have a nested list:
 * <code>
 * <ul>
 *   <li>Parent
 *     <ul>
 *       <li>Child 1</li>
 *       <li>Child 2</li>
 *       <li>Child 3</li>
 *     </ul>
 *   </li>
 * </ul>
 * </code>
 * <p>
 * Make sure that the children get defined as droppables before the parent is.
 */
vjo.ctype('org.scriptaculous.Droppables') //< public

.props({
	/**
	 * MrP - from code itself
	 */
	//> public Element[]
	drops: null,
	
	/**
	 * 
	 */
	//> public void add({String | Element} idOrElement, Droppables.options.one? options)
	add: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public Element findDeepestChild(Object drops) ; MrP - Array or Element[]?
	findDeepestChild: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean isContained(Element element, Element drop)
	isContained: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean isAffected(Object point, Element element, Element drop)
	isAffected: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void deactivate(Element drop)
	deactivate: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void activate(Element drop)
	activate: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void show(Object point, Element element)
	show: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public boolean fire(Event event, Element element)
	fire: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void reset()
	reset: vjo.NEEDS_IMPL,
	
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
			 * Set accept to a string or an array of strings describing CSS classes. 
			 * The Droppable will only accept Draggables that have one or more of 
			 * these CSS classes. 
			 */
			//> public Object? ; MrP - should be {String | String[])
			accept: null,
			
			/**
			 * The droppable will only accept the Draggable if the Draggable is 
			 * contained in the given elements (or element ids). Can be a single 
			 * element or an array of elements. This option is used by Sortables 
			 * to control Drag-and-Drop between Sortables.
			 */
			//> public Object? ; MrP - should be {Element | Element[]}
			containment: null,
			
			/**
			 * if set, the Droppable will have this additional CSS class when an 
			 * accepted Draggable is hovered over it. 
			 */
			//> public String?
			hoverclass: null,
			
			/**
			 * If set to ‘horizontal’ or ‘vertical’ the droppable will only react 
			 * to a Draggable if its overlapping by more than 50% in the given 
			 * direction. Used by Sortables. 
			 */
			//> public String?
			overlap: null,
			
			/**
			 * OBSOLETE starting at v1.6.1 (mid-2006) boolean, defaults to true, 
			 * stops processing hovering (don’t look for other Droppables that 
			 * are under the Draggable) 
			 */
			//> public boolean?
			greedy: null,
			
			// Callbacks
	
			/**
			 * Called whenever a Draggable is moved over the Droppable and the 
			 * Droppable is affected (would accept it). The callback gets three 
			 * parameters: 
			 * the Draggable
			 * the Droppable element
			 * and the percentage of overlapping as defined by the overlap option. 
			 * Used by Sortables. 
			 */
			//> public (void onHover(Element draggable, Element droppable, Number? percentage))?
			onHover: vjo.NEEDS_IMPL,
			
			/**
			 * Called whenever a Draggable is released over the Droppable and the 
			 * Droppable accepts it. The callback gets three parameters: 
			 * the Draggable element
			 * the Droppable element
			 * and the Event. 
			 * You can extract additional information about the drop – like if the Ctrl 
			 * or Shift keys were pressed – from the Event object. 
			 */
			//> public (void onDrop(Element draggable, Element droppable, Event event))?
			onDrop: vjo.NEEDS_IMPL
				
		}
	}).endType()
})
.protos({
	
})
.options({
	metatype: true
})
.endType();