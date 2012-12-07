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
/** from effects.js
 * 
 */
vjo.ctype('org.scriptaculous.Effect_Base') //< public

.props({
	
})
.protos({
	//> public Number
	position: null,
	
	/*
    if (options && options.transition === false) options.transition = Effect.Transitions.linear;
    this.options      = Object.extend(Object.extend({ },Effect.DefaultOptions), options || { });
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn+(this.options.duration*1000);
    this.fromToDelta  = this.options.to-this.options.from;
    this.totalTime    = this.finishOn-this.startOn;
    this.totalFrames  = this.options.fps*this.options.duration;
	 */
	//> public Object
	options: null,
	
	//> public int
	currentFrame: null,
	
	//> public String
	state: null,
	
	//> public Number
	startOn: null,
	
	//> public Number
	finishOn: null,
	
	//> public Number
	fromToDelta: null,
	
	//> public Number
	totalTime: null,
	
	//> public Number
	totalFrames: null,
	
	//> public void start(Object options)
	start: vjo.NEEDS_IMPL,
	
	//> public void loop(Number timePos)
	loop: vjo.NEEDS_IMPL,
	
	//> public void cancel()
	cancel: vjo.NEEDS_IMPL,
	
	//> public void event(String eventName) 
	event: vjo.NEEDS_IMPL,
	
	//> public String inspect()
	inspect: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();