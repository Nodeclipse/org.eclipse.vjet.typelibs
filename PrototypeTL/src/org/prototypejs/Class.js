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
 * Manages Prototype's class-based OOP system.
 * <p>
 * Refer to Prototype's web site for a tutorial on classes and inheritance.
 *
 */
//> public
vjo.ctype('org.prototypejs.Class') 
.props({
	/**
	 * <code>Class.create([superclass][, methods...]) ? Class</code>
	 * <p>
	 * <ul>
	 * <li>superclass (Class) – The optional superclass to inherit methods from. </li>
	 * <li>methods (Object) – An object whose properties will be "mixed-in" to 
	 * the new class. Any number of mixins can be added; later mixins take precedence.</li>
	 * </ul>
	 * <p>
	 * Class.create creates a class and returns a constructor function for 
	 * instances of the class. Calling the constructor function (typically as 
	 * part of a new statement) will invoke the class's initialize method.
	 * <p>
	 * Class.create accepts two kinds of arguments. If the first argument is a 
	 * Class, it's used as the new class's superclass, and all its methods are 
	 * inherited. Otherwise, any arguments passed are treated as objects, and 
	 * their methods are copied over ("mixed in") as instance methods of the new 
	 * class. In cases of method name overlap, later arguments take precedence 
	 * over earlier arguments.
	 * <p>
	 * If a subclass overrides an instance method declared in a superclass, the 
	 * subclass's method can still access the original method. To do so, declare 
	 * the subclass's method as normal, but insert $super as the first argument. 
	 * This makes $super available as a method for use within the function.
	 * <p>
	 * To extend a class after it has been defined, use Class#addMethods.
	 * <p>
	 * For details, see the inheritance tutorial on the Prototype website.
	 */
	//> public Class create(Object? methods)
	//> public Class create(Class superclass, Object? methods)
	create: vjo.NEEDS_IMPL
})
.protos({
	/**
	 * <code>Class#addMethods(methods) ? Class</code>
	 * <p>
	 * <ul>
	 * <li>methods (Object) – The methods to add to the class.</li>
	 * </ul>
	 * <p>
	 * Adds methods to an existing class.
	 * <p>
	 * Class#addMethods is a method available on classes that have been defined 
	 * with Class.create. It can be used to add new instance methods to that 
	 * class, or overwrite existing methods, after the class has been defined.
	 * <p>
	 * New methods propagate down the inheritance chain. If the class has 
	 * subclasses, those subclasses will receive the new methods — even in the 
	 * context of $super calls. The new methods also propagate to instances of 
	 * the class and of all its subclasses, even those that have already been 
	 * instantiated.
	 * <p>
	 * Examples
	 * <p>
	 * <code>
	 * var Animal = Class.create({
	 * 	initialize: function(name, sound) {
	 * 		this.name  = name;
	 * 		this.sound = sound;
	 * 	},<br>
	 * 		speak: function() {   
	 * 			alert(this.name + " says: " + this.sound + "!");
	 * 	}
	 * });
	 * 	// subclassing Animal
	 * var Snake = Class.create(Animal, {
	 * 	initialize: function($super, name) {
	 * 		$super(name, 'hissssssssss');
	 * 	}
	 * });
	 * 	var ringneck = new Snake("Ringneck");
	 * ringneck.speak();
	 * 	//-> alerts "Ringneck says: hissssssss!"
	 * 	// adding Snake#speak (with a supercall)
	 * Snake.addMethods({
	 * 	speak: function($super) {
	 * 		$super();
	 * 		alert("You should probably run. He looks really mad.");
	 * 	}
	 * });
	 * 	ringneck.speak();
	 * //-> alerts "Ringneck says: hissssssss!"
	 * //-> alerts "You should probably run. He looks really mad."
	 * 	// redefining Animal#speak
	 * Animal.addMethods({
	 * 	speak: function() {
	 * 		alert(this.name + 'snarls: ' + this.sound + '!');
	 * 	}
	 * });
	 * 	ringneck.speak();
	 * //-> alerts "Ringneck snarls: hissssssss!"
	 * //-> alerts "You should probably run. He looks really mad."
	 * </code>
	 *                                             
	 */
	//> public Class addMethods(Object methods)
	addMethods: vjo.NEEDS_IMPL	
})
.options({
	metatype: true
})
.endType();