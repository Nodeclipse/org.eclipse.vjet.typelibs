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
vjo.ctype('com.google.swfobject2.SwfObject') //< public
.globals({
	swfobject:null//< com.google.swfobject2.SwfObject
})
.protos({
	/**
	 * swfobject.registerObject(objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn)
Embed Flash content and alternative content using standards compliant markup (the nested-objects method with proprietary Internet Explorer conditional comments), and use JavaScript to resolve the issues that markup alone cannot solve (also called static publishing).
Arguments:
objectIdStr (String, required) specifies the id used in the markup.
swfVersionStr (String, required) specifies the Flash player version your content is published for. It activates the Flash version detection for a SWF to determine whether to show Flash content or force alternative content by doing a DOM manipulation. While Flash version numbers normally consist of major.minor.release.build, SWFObject only looks at the first 3 numbers, so both "WIN 9,0,18,0" (IE) or "Shockwave Flash 9 r18" (all other browsers) will translate to "9.0.18". If you only want to test for a major version you can omit the minor and release numbers, like "9" instead of "9.0.0".
xiSwfUrlStr (String, optional) can be used to activate Adobe express install and specifies the URL of your express install SWF file. Express install displays a standardized Flash plugin download dialog instead of your Flash content when the required plugin version is not available. A default expressInstall.swf file is packaged with the project. It also contains the corresponding expressInstall.fla and AS files (in the SRC directory) to let you create your own custom express install experience. Please note that express install will only fire once (the first time that it is invoked), that it is only supported by Flash Player 6.0.65 or higher on Win or Mac platforms, and that it requires a minimal SWF size of 310x137px.
callbackFn (JavaScript function, optional) can be used to define a callback function that is called on both success or failure of embedding a SWF file (SWFObject 2.2+)
Where callbackFn is a JavaScript function that has an event object as a parameter:
function callbackFn(e) { ... }
Properties of this event object are:
success, Boolean to indicate whether the embedding of a SWF was success or not
id, String indicating the ID used in swfobject.registerObject
ref, HTML object element reference (returns undefined when success=false)
This method is explained in "How to embed Flash Player content using SWFObject static publishing" of the SWFObject documentation page.
	 */
	//> public void fn(String objectIdStr, String swfVersionStr, String? xiSwfUrlStr, (void fn(com.google.swfobject2.SwfObject.objects::event e))? callbackFn)
	registerObject:vjo.NEEDS_IMPL,
	
	objects : vjo.otype()
	.defs({
		event:{
			id:null, //< public String
			ref:nul,//< public HTMLElement
			success :null//< public boolean
	},
	version:{
		major:null, //< public Number
		release:nul,//< public Number
		minor :null//< public Number
},
	ua:{
	/**
	 * returns a Boolean whether or not W3C DOM methods are supported
	 */
		w3:null,//< public boolean
		/**
		 * returns an Array that contains the major, minor and release version number of the Flash Player
		 */
		pv:null,//< public Number[]
		/**
		 * returns the Webkit version or false if not Webkit
		 */
		wk:null,//< public {Number|String}
		/**
		 * returns a Boolean to indicate whether a visitor uses Internet Explorer on Windows or not
		 */
		ie:null,//< public boolean
		/**
		 * returns a Boolean to indicate whether a visitor uses Windows OS or not
		 */
		win:null,//<public  boolean
		/**
		 * returns a Boolean to indicate whether a visitor uses Mac OS or not
		 */
		mac:null//< public boolean

},
	flashattrs:{
		classid :null, //< public String?
		type    :null, //< public String?
		data    :null, //< public String?
		width   :null, //< public String?
		height  :null, //< public String?
		id      :null, //< public String?
		name    :null, //< public String?
		class   :null, //< public String?
		align   :null //< public String?
},
	flashparams:{
		movie   :null, //< public String?
		play               :null, //< public String?
		loop               :null, //< public String?
		menu               :null, //< public String?
		quality            :null, //< public String?
		scale              :null, //< public String?
		salign             :null, //< public String?
		wmode              :null, //< public String?
		bgcolor            :null, //< public String?
		base               :null, //< public String?
		swliveconnect      :null, //< public String?
		flashvars          :null, //< public String?
		devicefont         :null, //< public String?
		allowscriptaccess  :null, //< public String?
		seamlesstabbing    :null, //< public String?
		allowfullscreen    :null, //< public String?
		allownetworking    :null //< public String?
	}
	})
	.endType(),
	/**
	 * NOTE: For static publishing only (or: when using swfobject.registerObject() only)
Returns the active object element. One of the side-effects of the nested-objects approach is that per SWF there are two object elements available in the HTML code, however you can only use one id or name attribute, because these have to be unique within a web page.
The following browsers map to the following active object element:
Internet Explorer on Windows only sees the outer object, because the nested object is commented out by conditional comments
Both Opera and Safari support the notation for the outer object (Reference: Flash embed test suite, row: object ActiveX)
Firefox, Mozilla and all other Gecko based browsers use the inner object
You can reference the active object element by:
Add an id to the outer object element
Use the swfobject.getObjectById() method to reference the active object element
An example:
{code}
var obj = swfobject.getObjectById("myId");
if (obj) {
  obj.doSomething(); // e.g. an external interface call
}
{code}
	 */
	//>public Object getObjectById(String objectIdStr) 
	getObjectById : vjo.NEEDS_IMPL,
	/**
	 * Insert alternative content using standards compliant markup and embed Flash content with unobtrusive JavaScript (also called dynamic publishing).
Arguments:
swfUrl (String, required) specifies the URL of your SWF
id (String, required) specifies the id of the HTML element (containing your alternative content) you would like to have replaced by your Flash content
width (String, required) specifies the width of your SWF
height (String, required) specifies the height of your SWF
version (String, required) specifies the Flash player version your SWF is published for (format is: "major.minor.release" or "major")
expressInstallSwfurl (String, optional) specifies the URL of your express install SWF and activates Adobe express install. Please note that express install will only fire once (the first time that it is invoked), that it is only supported by Flash Player 6.0.65 or higher on Win or Mac platforms, and that it requires a minimal SWF size of 310x137px.
flashvars (Object, optional) specifies your flashvars with name:value pairs
params (Object, optional) specifies your nested object element params with name:value pairs
attributes (Object, optional) specifies your object's attributes with name:value pairs
callbackFn (JavaScript function, optional) can be used to define a callback function that is called on both success or failure of embedding a SWF file (SWFObject 2.2+)
Where callbackFn is a JavaScript function that has an event object as a parameter:
function callbackFn(e) { ... }
Properties of this event object are:
success, Boolean to indicate whether the embedding of a SWF was success or not
id, String indicating the ID used in swfobject.registerObject
ref, HTML object element reference (returns undefined when success=false)
	 */
	//>public void embedSWF(String swfUrlStr, String replaceElemIdStr, String widthStr, String heightStr, String swfVersionStr, String? xiSwfUrlStr, ObjLiteral? flashvarsObj, com.google.swfobject2.SwfObject.objects::flashparams? parObj, com.google.swfobject2.SwfObject.objects::flashattrs? attObj,  (void fn(com.google.swfobject2.SwfObject.objects::event e))?  callbackFn)
	embedSWF : vjo.NEEDS_IMPL,
	
	/**
	 * Returns a JavaScript object containing the major version (major:Number), minor version (minor:Number) and release version (release:Number) of an installed Flash player. Please note that while Flash version numbers normally consist of major.minor.release.build, SWFObject only looks at the first 3 numbers, so both "WIN 9,0,18,0" (IE) or "Shockwave Flash 9 r18" (all other browsers) will translate to "9.0.18".
	 */
	//>public com.google.swfobject2.SwfObject.objects::version getFlashPlayerVersion()
	getFlashPlayerVersion: vjo.NEEDS_IMPL,
	
	/**
	 * Returns a Boolean to indicate whether or not a specific minimum version of the Flash plugin is installed. Please note that while Flash version numbers normally consist of major.minor.release.build, SWFObject only looks at the first 3 numbers, so both "WIN 9,0,18,0" (IE) or "Shockwave Flash 9 r18" (all other browsers) will translate to "9.0.18".
	 */
	//>public boolean hasFlashPlayerVersion(String versionStr) 
	hasFlashPlayerVersion : vjo.NEEDS_IMPL,
	
	/**
	 * A safe (it doesn't overwrite existing onload events) cross-browser method to execute a function on the window onload event (which will fire as soon as a web page including all of its assets are loaded). Based on a solution by James Edwards.
	 */
	//>public void addLoadEvent(Function) 
	addLoadEvent : vjo.NEEDS_IMPL,
	
	/**
	 * A cross-browser method to execute a function as soon as the DOM of a web page is available. This method is supported by Gecko based browsers - like Firefox -, IE, Opera9+, and, Safari. For all other browsers the method will fall back to the addLoadEvent method. Based on a solution by Dean Edwards.
	 * {code}
	 * function sayHi() {
  alert("Hi!");
}
swfobject.addDomLoadEvent(sayHi);
{code}
	 */
	//>public void addDomLoadEvent(Function) 
	addDomLoadEvent : vjo.NEEDS_IMPL,
	
	//>public void createSWF(com.google.swfobject2.SwfObject.objects::flashattrs attObj, com.google.swfobject2.SwfObject.objects::flashparams parObj, String replaceElemIdStr) 
	createSWF : vjo.NEEDS_IMPL,
	/**
	 * NOTE: This method has been added in SWFObject 2.1 and is therefore only available from SWFObject 2.1 onwards
Removes a SWF from your web page. Is especially built to safely (only remove a SWF after it has been loaded, to avoid broken references) and completely (nullify references to avoid memory leaks) remove a SWF in Internet Explorer.
An example:
swfobject.removeSWF("myContent");
	 */
	//>public void removeSWF(String objElemIdStr) 
	removeSWF : vjo.NEEDS_IMPL,
	/**
	 * Exposes SWFObject's internal cross-browser method to create a dynamic stylesheet. It's most important feature is that it can be called before the DOM of a page is loaded. Based on a solution by Bobby van der Sluis:
selStr (String, required) represents a CSS selector
declStr (String, required) represents a CSS declaration
mediaStr (String, optional) to indicate the CSS media type (media type scree is the default, SWFObject 2.2+)
newStyleBoolean (Boolean, optional) to indicate whether a new dynamic style element should be appended to the head of the HTML document, or that SWFObject should reuse a possible earlier created dynamic style element (default, SWFObject 2.2+)
From SWFObject 2.2 onwards this method will by default append new dynamic styles to an earlier created dynamic style sheet (if available).
An example:
if (swfobject.hasFlashPlayerVersion("6.0.0")) {
  // Overwrite regular CSS used for alternative content to enable Full Browser Flash
  swfobject.createCSS("html", "height:100%;");
  swfobject.createCSS("body", "margin:0; padding:0; overflow:hidden; height:100%;");
  swfobject.createCSS("#container", "height:100%;");
}
	 */
	//>public void createCSS(String selStr, String declStr, String? mediaStr, boolean? newStyleBoolean) 
	createCSS : vjo.NEEDS_IMPL,
	/**
	 * Utility function that returns the value of the paramStr parameter in the URL query string or hash string. Similar functionality was already available in SWFObject 1.5 and lower.
To secure the method from possible XSS abuse SWFObject 2.1 will encode the returned value - using the JavaScript encodeURIComponent() function - if the query string includes one of the following characters:
[ \ " < > . ; ]
An example that uses the fictive URL "http://www.yoururl.com?foo=bar&abc=123" and passes the parameters from the URL query string to the SWF via flashvars:
var flashvars = {};
if (swfobject.getQueryParamValue("foo") && swfobject.getQueryParamValue("abc")) {
  flashvars.foo = swfobject.getQueryParamValue("foo");
  flashvars.abc = swfobject.getQueryParamValue("abc");
}
var params = {};
var attributes = {};
swfobject.embedSWF("myContent.swf", "altContent", "100%", "100%", "9.0.0","expressInstall.swf", flashvars, params, attributes);

	 */
	//>public void getQueryParamValue(String paramStr) 
	getQueryParamValue : vjo.NEEDS_IMPL,
	/**
	 * Disable SWFObject's default show/hide behavior (SWFObject 2.2+).
Ensure to call swfobject.switchOffAutoHideShow() after you have included the SWFObject library, but before any swfobject.registerObject() or swfobject.embedSWF() calls, like:
<script type="text/javascript" src="swfobject.js"></script>
<script type="text/javascript">
swfobject.switchOffAutoHideShow();
swfobject.embedSWF("test.swf", "myContent", "300", "120", "9", "expressInstall.swf");
</script>
	 */
	//>public void switchOffAutoHideShow() 
	switchOffAutoHideShow : vjo.NEEDS_IMPL,
	
	//>public void showExpressInstall(Object att, Object par, String replaceElemIdStr,  (void fn(com.google.swfobject2.SwfObject.objects::event e))? callbackFn)
	showExpressInstall : vjo.NEEDS_IMPL,
	/**
	 * SWFObject 2.2+ exposes the properties of its internal user agent detection for library authors (e.g. developers that like to write extensions for SWFObject).
	 */
	ua: null //< public com.google.swfobject2.SwfObject.objects::ua

	
})
.options({
	metatype: true
})
.endType();