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
 * Sortable
 * <p>
 * Behaviours > Sortable
 * <p>
 * A Sortable is a quick way to initialize many Draggable elements in a container 
 * element. When you create a new Sortable, it takes care of the creation of the 
 * corresponding draggable Droppables.
 * <p>
 * Syntax
 * <code>
 * Use Sortable.create('id_of_container',[options]); 
 * </code>
 * <p>
 * to create new Sortables. See Sortable.create. Furthermore, there are special 
 * requirements to get sortables to work in FF3 which are also covered in 
 * Sortable.create.
 * <p>
 * Object
 * <p>
 * Property/Method 	Description
 * <p>
 * SERIALIZE_RULE 	(RegExp) /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/
 * <p>
 * sortables 	(Object) { }
 * <p>
 * options (element) 	Internal function
 * <p>
 * destroy (element) 	Destroys sortable
 * <p>
 * create (element, options) 	Creates sortable
 * <p>
 * findElements (element, options) 	Internal function
 * <p>
 * onHover (element, dropon, overlap) 	Internal function, which may be 
 * overridden through the options parameter on creation
 * <p>
 * onEmptyHover (element, dropon, overlap) 	Internal function
 * <p>
 * unmark() 	Internal function
 * <p>
 * mark() 	Internal function
 * <p>
 * tree (element) 	
 * <p>
 * sequence (element) 	
 * <p>
 * setSequence (element, new_sequence) 	
 * <p>serialize (element) 	
 * <p>
 * Disabling sortables
 * <code>
 * Sortable.destroy( element );
 * </code>
 * <p>
 * A call to Sortable.create implicitly calls Sortable.destroy if the referenced 
 * element was already a Sortable.
 * <p>
 * Functions
 * <p>
 * Function 	Description
 * <p>
 * Sortable.serialize 	The Sortable object also provides a function to serialize 
 * the Sortable in a format suitable for HTTP GET or POST requests. This can be 
 * used to submit the order of the Sortable via an Ajax call. See Sortable.serialize
 * <p>
 * Sortable.sequence 	The Sortable object also provides a function to get the 
 * values in an sequence array object. See Sortable.sequence
 */
vjo.ctype('org.scriptaculous.Sortable') //< public

.props({
	/**
	 * Sortable.serialize
	 * <p>
	 * Behaviours > Sortable > serialize
	 * <p>
	 * The Sortable object also provides a function to serialize the Sortable in 
	 * a format suitable for HTTP GET or POST requests. This can be used to submit 
	 * the order of the Sortable via an Ajax call:
	 * <code>
	 * poststring = Sortable.serialize('id_of_container',[options]);
	 * // poststring now contains key[]=value pairs separated by &
	 * </code>
	 * Important: For this to work, the elements contained in your Sortable must 
	 * have id attributes in the following form:
	 * <code>
	 * id="string_identifier" 
	 * //Example
	 * <ol id="container_id">
	 *   <li id="image_1">Item 1</li>
	 *   <li id="image_2">Item 1</li>
	 *   <li id="image_3">Item 1</li>
	 * </ol>
	 * </code>
	 * Only the identifier part of the id attribute will be serialized. If you 
	 * want to use an other form of id attributes, you need to implement your 
	 * own serialization.
	 * <p>
	 * Options
	 * <p>
	 * Option 	Since 	Description
	 * <p>
	 * tag 	v1.0 	The kind of tag (of the child elements of the container) that 
	 * will be serialized.
	 * <p>
	 * name 	v1.0 	The name of the key that will be used to create the key/value 
	 * pairs for serializing in HTTP GET/POST format (that is, key[]=value&key[]=value …)
	 * <p>
	 * Example (from the Sortable Ghosted example)
	 * <code>
<style>
  #content #testlist { 
      list-style-type:none;
      margin:0;
      padding:0;
   }
   #content #testlist li {
     width:200px;
     font:13px Verdana;
     margin:0;
     margin-left:20px;
     padding-left:20px;
     padding:4px;
     cursor:move;
   }
  div.dropmarker {
      height:6px;
      width:200px;
      background: url(/images/dropmarker.png) left top;
      margin-top:-3px;
      margin-left:-5px;
      z-index:1000;
      overflow: hidden;
   }
</style>

<ol id="testlist">
  <li id="image_1">Lorem ipsum dolor</li>
  <li id="image_2">sit amet</li>
  <li id="image_3">consectetur adipisicing</li>
  <li id="image_4">elit</li>
  <li id="image_5">sed do eiusmod</li>
  <li id="image_7">ut labore et dolore</li>
  <li id="image_6">tempor incididunt</li>
  <li id="image_8">magna aliqua</li>
</ol>

<script type="text/javascript" language="javascript">
  Sortable.create('testlist',{ghosting:true,constraint:false})
  alert(Sortable.serialize('testlist'));
</script>
</code>
<p>
Clarification: In this example, the output of the serialization will only give 
the numbers after the underscore in the list item IDs.
	 */
	//> public void serializable({String | Element} idOrElement, Sortable.options.serializable)
	serializable: vjo.NEEDS_IMPL,
	
	/**
	 * Behaviours > Sortable > sequence
	 * <p>
	 * The Sortable object also provides a function to get a sequence array of 
	 * the id’s.
	 * <p>
	 * Syntax
	 * <code>
	 * id_array = Sortable.sequence('id_of_container');
	 * </code>
	 * Example
	 * <p>
	 * Taken from the Puzzle Demo
	 * <code>
	 * (function() { 
	 *   var p = $('puzzle'), info = $('puzzleinfo'), moves = 0;
	 *   Sortable.create('puzzle', {
	 *     tag: 'img', overlap: 'horizontal', constraint: false,
	 *     onUpdate: function() {
	 *       info.update('You\'ve made ' + (++moves) + ' move' + (moves > 1 ? 's' : ''));
	 *       if (Sortable.sequence('puzzle').join('') == '123456789')
	 *         info.update('You\'ve solved the puzzle in ' + moves + ' moves!').morph('congrats')
	 *     }
	 *   });
	 * })();
	 * </code>
	 */
	//> public void sequence({String | Element} idOrElement)
	sequence: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void create({String | Element} idOrElement, Sortable.options.create? options)
	options: vjo.otype().defs({	//< public
		serializable: {			//< public
			/**
			 * The kind of tag (of the child elements of the container) that will be serialized.
			 */
			//> public String?
			tag: null,
			
			/**
			 * The name of the key that will be used to create the key/value pairs 
			 * for serializing in HTTP GET/POST format (that is, key[]=value&key[]=value …)
			 */
			//> public String?
			name: null
		},
		
		create: {				//< public
			/**
			 * Default: ‘li’
			 * <p>
			 * The kind of tag (of the child elements of the container) that will 
			 * be made sortable. 
			 * <p>
			 * For UL and OL containers, this is ‘LI’, you have to provide the 
			 * tag kind for other sorts of child tags.
			 */
			//> public String?
			tag: null,
			
			/**
			 * Default: (none)
			 * <p>
			 * Further restricts the selection of child elements to only encompass 
			 * elements with the given CSS class (or, if you provide an array of 
			 * strings, on any of the classes).
			 */
			//> public Object? ; MrP should be {String | String[]}
			only: null,
			
			/**
			 * Default: ‘vertical’
			 * <p>
			 * Either ‘vertical’ or ‘horizontal’. For floating sortables or horizontal 
			 * lists, choose ‘horizontal’. Vertical lists should use ‘vertical’.
			 */
			//> public String?
			overlap: null,
			
			/**
			 * Default: ‘vertical’
			 * <p>
			 * Restricts the movement of Draggables, see the constraint option of Draggables.
			 */
			//> public String?
			constraint: null,
			
			/**
			 * Default: (only within container)
			 * <p>
			 * Enables dragging and dropping between Sortables. Takes an array of 
			 * elements or element-ids (of the containers). Important note: To ensure 
			 * that two way dragging between containers is possible, place all 
			 * Sortable.create calls after the container elements.
			 */
			//> public Array? ; MrP should be {String[] | Element[]}
			containment:null,
			
			/**
			 * Default: /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/
			 * The format that the id is computed from each item-id
			 */
			//> public RegExp?
			format: null,
			
			/**
			 * Default: (none)
			 * <p>
			 * Makes the created Draggables use handles, see the handle option on Draggables.
			 */
			//> public Object?
			handle: null,
			
			/**
			 * Default: (none)
			 * <p>
			 * Gives the created Droppables a hoverclass (see there).
			 */
			//> public String?
			hoverclass: null,
			
			/**
			 * Default: false
			 * <p>
			 * If set to true, dragged elements of the Sortable will be cloned 
			 * and appear as “ghost”, i.e. a representation of their original element, 
			 * instead of directly dragging the original element. See below for 
			 * more details.
			 */
			//> public boolean?
			ghosting: null,
			
			/**
			 * Default: false
			 * <p>
			 * If set to true, the Sortable container will be made into a Droppable, 
			 * that can receive a Draggable (as according to the containment rules) 
			 * as a child element when there are no more elements inside.
			 */
			//> public boolean?
			dropOnEmpty: null,
			
			/**
			 * Default: none
			 * <p>
			 * When the sortable is contained in an element with style overflow:scroll, 
			 * this value can be set to the ID of that container (or the container’s 
			 * DOM object). The scroll position of the container will now move along 
			 * when the sortable is dragged out of the viewable area. The container 
			 * must have overflow:scroll set to include scroll bars. Does not yet 
			 * work for scrolling the entire document. To get this to work correctly, 
			 * include this line in your code before creating the sortable: 
			 * Position.includeScrollOffsets = true; Update: Scrolling the whole 
			 * document does work (at least on Safari 3.2 (Mac), IE7 and Firefox). 
			 * Use scroll: window
			 */
			//> public Object? ; MrP - Should be {String | Element}
			scroll: null,
			
			/**
			 * Default: 20
			 * <p>
			 * Will start scrolling when element is x pixels from the bottom, 
			 * where x is the scrollSensitivity.
			 */
			//> public int?
			scrollSensitivity: null,
			
			/**
			 * Default: 15
			 * <p>
			 * Will scroll the element in increments of scrollSpeed pixels.
			 */
			//> public int?
			scrollSpeed: null,
			
			/**
			 * Default: ul
			 * <p>
			 * The element type tree nodes are contained in.
			 */
			//> public String?
			treeTag: null,
			
			/**
			 * Default: false
			 * <p>
			 * If true, sets sortable functionality to elements listed in treeTag
			 */
			//> public boolean?
			tree: null,
			
			// Callbacks
			
			/**
			 * Called whenever the sort order changes while dragging. When dragging 
			 * from one Sortable to another, the callback is called once on each 
			 * Sortable. Gets the affected element as its parameter.
			 */
			//> public (void onChange(Element? sortable))?
			onChange: vjo.NEEDS_IMPL,
			
			/**
			 * Called when the drag ends and the Sortable’s order is changed in 
			 * any way. When dragging from one Sortable to another, the callback 
			 * is called once on each Sortable. Gets the container as its parameter. 
			 * Note that the id attributes of the elements contained in the Sortable 
			 * must be named as described in Sortable.serialize
			 */
			//> public (void onChange(Element? sortable))?
			onUpdate: vjo.NEEDS_IMPL
		}
		
	}).endType()
})
.protos({
	
})
.options({
	metatype: true
})
.endType();