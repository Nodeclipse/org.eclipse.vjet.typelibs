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
/**> public ;
 *The <dfn id="dom-context-2d-canvas" title="dom-context-2d-canvas"><code>canvas</code></dfn>
  attribute must return the <code>canvas</code> element that the
  context paints on.</p>

  <p>Except where otherwise specified, for the 2D context interface,
  any method call with a numeric argument whose value is infinite or a
  NaN value must be ignored.</p>


  <p>Whenever the CSS value <code title="">currentColor</code> is used
  as a color in this API, the "computed value of the 'color' property"
  for the purposes of determining the computed value of the <code title="">currentColor</code> keyword is the computed value of the
  'color' property on the element in question at the time that the
  color is specified (e.g. when the appropriate attribute is set, or
  when the method is called; not when the color is rendered or
  otherwise used). If the computed value of the 'color' property is
  undefined for a particular case (e.g. because the element is not
  <span>in a <code>Document</code></span>), then the "computed value
  of the 'color' property" for the purposes of determining the
  computed value of the <code title="">currentColor</code> keyword is
  fully opaque black. <a href="http://dev.w3.org/html5/2dcontext/#refsCSSCOLOR">[CSSCOLOR]</a></p>

  <p>In the case of <code title="dom-canvasgradient-addColorStop"><a href="http://dev.w3.org/html5/2dcontext/#dom-canvasgradient-addcolorstop">addColorStop()</a></code> on
  <code><a href="#canvasgradient">CanvasGradient</a></code>, the "computed value of the 'color'
  property" for the purposes of determining the computed value of the
  <code title="">currentColor</code> keyword is always fully opaque
  black (there is no associated element). <a href="http://dev.w3.org/html5/2dcontext/#refsCSSCOLOR">[CSSCOLOR]</a>
 *  
                    
@author      Ian Hickson
 *  
                    
@version     %I%, %G%
 *  
                    
@since       1.0
 */


vjo.ctype('org.w3c.CanvasRenderingContext2D')
//< needs(org.w3c.ImageData)
//< needs(org.w3c.CanvasGradient)
//< needs(org.w3c.CanvasPattern)
//< needs(org.w3c.TextMetrics)
.protos({
	
	 // back-reference to the canvas
	canvas:undefined, //< public HTMLCanvasElement
	

	  // state
	save:vjo.NEEDS_IMPL,//< public void save()
	restore:vjo.NEEDS_IMPL,//< public void restore()

	// transformations (default transform is the identity matrix)
	scale:vjo.NEEDS_IMPL, //< public void scale(double x, double y)
	rotate:vjo.NEEDS_IMPL, //< public void rotate(double angle)
	translate:vjo.NEEDS_IMPL, //< public void translate(double x, double y)
	transform:vjo.NEEDS_IMPL, //< public void transform(double a, double b, double c, double d, double e, double f)
	setTransform:vjo.NEEDS_IMPL, //< public void setTransform(double a, double b, double c, double d, double e, double f)

	// compositing
	// (default 1.0)
	globalAlpha: undefined, //< public double
	
	// (default source-over)
	globalCompositeOperation: undefined, //< public String
	
	 // colors and styles
	strokeStyle: undefined, //< public String
	fillStyle: undefined, /*< public String; 
	 <br>Returns the current style used for filling shapes.

   <br> Can be set, to change the fill style.

    <br>The style can be either a string containing a CSS color, or a CanvasGradient or CanvasPattern object. Invalid values are ignored.
*/
	
	createLinearGradient:vjo.NEEDS_IMPL, //< public CanvasGradient createLinearGradient(double x0, double y0, double x1, double y1);
	createRadialGradient: vjo.NEEDS_IMPL, //< public CanvasGradient createRadialGradient(double x0, double y0, double r0, double x1, double y1, double r1);
	createPattern:vjo.NEEDS_IMPL,//< public CanvasPattern createPattern(HTMLImageElement image, String repetition);
	//< public CanvasPattern createPattern(HTMLCanvasElement image, String repetition);
	//< public CanvasPattern createPattern(HTMLVideoElement image, String repetition);
	
	// line caps/joins
	lineWidth:undefined,   //< public double lineWidth; // (default 1)
    lineCap:undefined, //< public String lineCap;  "butt", "round", "square" (default "butt")
	lineJoin:undefined, //< public String lineJoin;  "round", "bevel", "miter" (default "miter")
	miterLimit:undefined, //< public double miterLimit; // (default 10)

	// shadows
	shadowOffsetX: undefined, //< public double;  (default 0)
	shadowOffsetY: undefined, //< public double;  (default 0)
	shadowBlur: undefined, //< public double;  (default 0)
	shadowColor: undefined, //< public String; (default transparent black)
	
	// rects

	clearRect: vjo.NEEDS_IMPL,	 //< public void clearRect(double x, double y, double w, double h); <a href="http://dev.w3.org/html5/2dcontext/#canvasgradient">CanvasGradient</a> Clears all pixels on the canvas in the given rectangle to transparent black. 
	
	
	fillRect: vjo.NEEDS_IMPL, //< public void fillRect(double x, double y, double w, double h); Paints the given rectangle onto the canvas, using the current fill style.
	strokeRect: vjo.NEEDS_IMPL, //< public void strokeRect(double x, double y, double w, double h);
	
	// path API
	beginPath:vjo.NEEDS_IMPL,//< public  void beginPath();
	closePath :vjo.NEEDS_IMPL,//<public void closePath();
	moveTo  :vjo.NEEDS_IMPL,//< public void moveTo(double x, double y);
	lineTo:vjo.NEEDS_IMPL,//< public void lineTo(double x, double y);
	quadraticCurveTo :vjo.NEEDS_IMPL,//< public void quadraticCurveTo(double cpx, double cpy, double x, double y);
	bezierCurveTo:vjo.NEEDS_IMPL,//< public void bezierCurveTo(double cp1x, double cp1y, double cp2x, double cp2y, double x, double y);
	arcTo:vjo.NEEDS_IMPL,//< public void arcTo(double x1, double y1, double x2, double y2, double radius);
	rect:vjo.NEEDS_IMPL,//< public void rect(double x, double y, double w, double h);
	arc :vjo.NEEDS_IMPL,//< public void arc(double x, double y, double radius, double startAngle, double endAngle, boolean? anticlockwise);
	fill:vjo.NEEDS_IMPL,//< public void fill();
	stroke:vjo.NEEDS_IMPL,//< public void stroke();
	clip :vjo.NEEDS_IMPL,//< public void clip();
	isPointInPath:vjo.NEEDS_IMPL, //< public  boolean isPointInPath(double x, double y);
	
	// focus management
	drawFocusRing:vjo.NEEDS_IMPL, //< public  boolean drawFocusRing(Element element, double xCaret, double yCaret, boolean? canDrawCustom);
	
	  // text
	font:undefined, //< public String;  font; // (default 10px sans-serif)
    textAlign:undefined, //< public String textAlign; // "start", "end", "left", "right", "center" (default: "start")
    textBaseline:undefined, //< public String textBaseline; values allowed: "top", "hanging", "middle", "alphabetic", "ideographic", "bottom" (default: "alphabetic")
    fillText: vjo.NEEDS_IMPL, //< public void fillText(String text, double x, double y, double? maxWidth);
	strokeText: vjo.NEEDS_IMPL, //< public void strokeText(String text, double x, double y, double? maxWidth);
	measureText: vjo.NEEDS_IMPL, //< public TextMetrics measureText(String text); 
	
	// drawing images
	//> public void drawImage(HTMLImageElement image, double dx, double dy, double? dw, double? dh);
	//> public void drawImage(HTMLImageElement image, double sx, double sy, double sw, double sh, double dx, double dy, double dw, double dh);
	//> public void drawImage(HTMLCanvasElement image, double dx, double dy, double? dw, double? dh);
	//> public void drawImage(HTMLCanvasElement image, double sx, double sy, double sw, double sh, double dx, double dy, double dw, double dh);
	//> public void drawImage(HTMLVideoElement image, double dx, double dy, double? dw, double? dh);
	//> public void drawImage(HTMLVideoElement image, double sx, double sy, double sw, double sh, double dx, double dy, double dw, double dh);
	drawImage:vjo.NEEDS_IMPL, 
	
    // pixel manipulation
	//> public ImageData createImageData(double sw, double sh);
	//> public ImageData createImageData(ImageData imagedata);
	createImageData:vjo.NEEDS_IMPL,
	
	//> public ImageData getImageData(double sx, double sy, double sw, double sh);
	getImageData:vjo.NEEDS_IMPL,
	
	//> public void putImageData(ImageData imagedata, double dx, double dy, double? dirtyX, double? dirtyY, double? dirtyWidth, double? dirtyHeight);
	putImageData:vjo.NEEDS_IMPL
	

})
.options({
	metatype:true
})
.endType();