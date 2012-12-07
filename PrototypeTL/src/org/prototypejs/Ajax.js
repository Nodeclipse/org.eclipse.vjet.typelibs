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
 * 
 */
//> public
vjo.ctype('org.prototypejs.Ajax') 

.props({
	/**
	 *  Ajax.activeRequestCount -> Number
	 *	<p>
	 *  Represents the number of active XHR requests triggered through
	 *  [[Ajax.Request]], [[Ajax.Updater]], or [[Ajax.PeriodicalUpdater]].
	 */
	//> public Number
	activeRequestCount: null,	
	
	/**
	 * 
	 */
	//> public
	Base: vjo.ctype()
		// Empty base class
	.endType(),
	

	/** section: Ajax<br>
	 *  class Ajax.PeriodicalUpdater<br>
	 *  <p>
	 *  Periodically performs an Ajax request and updates a container's contents
	 *  based on the response text.
	 *  <p>
	 *  [[Ajax.PeriodicalUpdater]] behaves like [[Ajax.Updater]], but performs the
	 *  update at a prescribed interval, rather than only once. (Note that it is
	 *  _not_ a subclass of [[Ajax.Updater]]; it's a wrapper around it.)
	 *  <p>
	 *  This class addresses the common need of periodical update, as required by
	 *  all sorts of "polling" mechanisms (e.g., an online chatroom or an online
	 *  mail client).
	 *  <p>
	 *  The basic idea is to run a regular [[Ajax.Updater]] at regular intervals,
	 *  keeping track of the response text so it can (optionally) react to
	 *  receiving the exact same response consecutively.
	 *  <p>
	 *  ##### Additional options
	 *  <p>
	 *  [[Ajax.PeriodicalUpdater]] features all the common options and callbacks
	 *  described in the [[Ajax section]] &mdash; _plus_ those added by
	 *  [[Ajax.Updater]].
	 *  <p>
	 *  It also provides two new options:
	 *  <p>
	 *  * `frequency` ([[Number]]; default is `2`): How long, in seconds, to wait
	 *    between the end of one request and the beginning of the next.
	 *  <p>
	 *  * `decay` ([[Number]]; default is `1`): The rate at which the `frequency`
	 *    grows when the response received is _exactly_ the same as the previous.
	 *    The default of `1` means `frequency` will never grow; override the
	 *    default if a stale response implies it's worthwhile to poll less often.
	 *    If `decay` is set to `2`, for instance, `frequency` will double
	 *    (2 seconds, 4 seconds, 8 seconds...) each consecutive time the result
	 *    is the same; when the result is different once again, `frequency` will
	 *    revert to its original value.
	 *  <p>
	 *  ##### Disabling and re-enabling a [[Ajax.PeriodicalUpdater]]
	 *  <p>
	 *  You can hit the brakes on a running [[Ajax.PeriodicalUpdater]] by calling
	 *  [[Ajax.PeriodicalUpdater#stop]]. If you wish to re-enable it later, call
	 *  [[Ajax.PeriodicalUpdater#start]].
	 */
	//> public
	PeriodicalUpdater: vjo.ctype()
	.props({
		
	})
	.protos({
		/**
         *  new (container, url[, options])
         *  <p>
         *  <ul>
         *  <li>container (String | Element): The DOM element whose contents to update
         *    as a result of the Ajax request. Can be a DOM node or a string that
         *    identifies a node's ID.</li>
         *  <li>url (String): The URL to fetch. When the _same-origin_ policy is in
         *    effect (as it is in most cases), `url` **must** be a relative URL or an
         *    absolute URL that starts with a slash (i.e., it must not begin with
         *    `http`).</li>
         *  <li>options (Object): Configuration for the request. See the
         *    [[Ajax section]] for more information.</li>
         *   </ul>
         *  <p>
         *  Creates a new [[Ajax.PeriodicalUpdater]].
         *  <p>  
         *  Periodically performs an AJAX request and updates a container's contents
         *  based on the response text. Offers a mechanism for "decay," which lets it   
         *  trigger at widening intervals while the response is unchanged.
         *  <p>
         *  This object addresses the common need of periodical update, which is used
         *  by all sorts of "polling" mechanisms (e.g. in an online chatroom or an
         *  online mail client).
         *  <p>
         *  The basic idea is to run a regular [[Ajax.Updater]] at
         *  regular intervals, monitoring changes in the response text if the `decay`
         *  option (see below) is active.
         *  <p>
         *  ##### Additional options
         *  <p>
         *  [[Ajax.PeriodicalUpdater]] features all the common options and callbacks
         *  (see the [[Ajax section]] for more information), plus those added by
         *  [[Ajax.Updater]]. It also provides two new options that deal with the
         *  original period, and its decay rate (how Rocket Scientist does that make
         *  us sound, uh?!).
         *  <p>
         *  <table>
         *  <thead>
         *    <tr>
         *      <th>Option</th>
         *      <th>Default</th>
         *      <th>Description</th>
         *    </tr>
         *  </thead>
         *  <tbody>
         *    <tr>
         *      <th><code>frequency</code></th>
         *      <td><code>2</code></td>
         *  <td>Okay, this is not a frequency (e.g 0.5Hz), but a period (i.e. a number of seconds).
         *  Don't kill me, I didn't write this one! This is the minimum interval at which AJAX
         *  requests are made. You don't want to make it too short (otherwise you may very well
         *  end up with multiple requests in parallel, if they take longer to process and return),
         *  but you technically can provide a number below one, e.g. 0.75 second.</td>
         *    </tr>
         *    <tr>
         *      <th><code>decay</code></th>
         *      <td>1</td>
         *  <td>This controls the rate at which the request interval grows when the response is
         *  unchanged. It is used as a multiplier on the current period (which starts at the original
         *  value of the <code>frequency</code> parameter). Every time a request returns an unchanged
         *  response text, the current period is multiplied by the decay. Therefore, the default
         *  value means regular requests (no change of interval). Values higher than one will
         *  yield growing intervals. Values below one are dangerous: the longer the response text
         *  stays the same, the more often you'll check, until the interval is so short your browser
         *  is left with no other choice than suicide. Note that, as soon as the response text
         *  <em>does</em> change, the current period resets to the original one.</td>
         *    </tr>
         *  </tbody>
         *  </table>
         *  <p>
         *  To better understand decay, here is a small sequence of calls from the
         *  following example:
         *  <code>
         *      new Ajax.PeriodicalUpdater('items', '/items', {
         *        method: 'get', frequency: 3, decay: 2
         *      });
         *  </code>
         *  <p>
         *  <table id="decayTable">
         *  <thead>
         *    <tr>
         *      <th>Call#</th>
         *      <th>When?</th>
         *      <th>Decay before</th>
         *      <th>Response changed?</th>
         *      <th>Decay after</th>
         *      <th>Next period</th>
         *      <th>Comments</th>
         *    </tr>
         *  </thead>
         *  <tbody>
         *    <tr>
         *      <td>1</td>
         *      <td>00:00</td>
         *      <td>2</td>
         *      <td>n/a</td>
         *      <td>1</td>
         *      <td>3</td>
         *  <td>Response is deemed changed, since there is no prior response to compare to!</td>
         *    </tr>
         *    <tr>
         *      <td>2</td>
         *      <td>00:03</td>
         *      <td>1</td>
         *      <td>yes</td>
         *      <td>1</td>
         *      <td>3</td>
         *  <td>Response did change again: we "reset" to 1, which was already the decay.</td>
         *    </tr>
         *    <tr>
         *      <td>3</td>
         *      <td>00:06</td>
         *      <td>1</td>
         *      <td>no</td>
         *      <td>2</td>
         *      <td>6</td>
         *  <td>Response didn't change: decay augments by the <code>decay</code> option factor:
         *  we're waiting longer now&#8230;</td>
         *    </tr>
         *    <tr>
         *      <td>4</td>
         *      <td>00:12</td>
         *      <td>2</td>
         *      <td>no</td>
         *      <td>4</td>
         *      <td>12</td>
         *      <td>Still no change, doubling again.</td>
         *    </tr>
         *    <tr>
         *      <td>5</td>
         *      <td>00:24</td>
         *      <td>4</td>
         *      <td>no</td>
         *      <td>8</td>
         *      <td>24</td>
         *      <td>Jesus, is this thing going to change or what?</td>
         *    </tr>
         *    <tr>
         *      <td>6</td>
         *      <td>00:48</td>
         *      <td>8</td>
         *      <td>yes</td>
         *      <td>1</td>
         *      <td>3</td>
         *  <td>Ah, finally! Resetting decay to 1, and therefore using the original period.</td>
         *    </tr>
         *  </tbody>
         *  </table>
         *  <p>
         *  ##### Disabling and re-enabling a [[Ajax.PeriodicalUpdater]]
         *  <p>
         *  You can pull the brake on a running [[Ajax.PeriodicalUpdater]] by simply
         *  calling its `stop` method. If you wish to re-enable it later, just call
         *  its `start` method. Both take no argument.
         *  <p>
         *  ##### Beware!  Not a specialization!
         *  <p>
         *  [[Ajax.PeriodicalUpdater]] is not a specialization of [[Ajax.Updater]],
         *  despite its name. When using it, do not expect to be able to use methods
         *  normally provided by [[Ajax.Request]] and "inherited" by [[Ajax.Updater]],
         *  such as `evalJSON` or `getHeader`. Also the `onComplete` callback is
         *  hijacked to be used for update management, so if you wish to be notified
         *  of every successful request, use `onSuccess` instead (beware: it will get
         *  called *before* the update is performed).
		 */
		//> public constructs({String | Element} container, String url, Object? options)
		constructs: function() {},
		
		/**
		 *  Ajax.PeriodicalUpdater#start() -> undefined
		 *  <p>
		 *  Starts the periodical updater (if it had previously been stopped with
		 *  [[Ajax.PeriodicalUpdater#stop]]).
		 */
		//> public void start()
		start: vjo.NEEDS_IMPL,
		
		/**
		 *  Ajax.PeriodicalUpdater#stop() -> undefined
		 *	<p>
		 *  Stops the periodical updater.
		 *	<p>
		 *  Also calls the `onComplete` callback, if one has been defined. 
		 */
		//> public void stop()
		stop: vjo.NEEDS_IMPL
	})
	.endType(),
	
	/** 
	 * 	section: Ajax <br>
	 *  class Ajax.Request<br>
	 *  <p>
	 *  Initiates and processes an Ajax request.
	 *	<p>
	 *  [[Ajax.Request]] is a general-purpose class for making HTTP requests which
	 *  handles the life-cycle of the request, handles the boilerplate, and lets
	 *  you plug in callback functions for your custom needs.
	 *	<p>
	 *  In the optional `options` hash, you usually provide an `onComplete` and/or
	 *  `onSuccess` callback, unless you're in the edge case where you're getting a
	 *  JavaScript-typed response, that will automatically be `eval`'d.
	 *  <p>
	 *  For a full list of common options and callbacks, see "Ajax options" heading
	 *  of the [[Ajax section]].
	 *	<p>
	 *  ##### A basic example
	 *  <p>
	 *	<code>
	 *      new Ajax.Request('/your/url', {
	 *        onSuccess: function(response) {
	 *          // Handle the response content...
	 *        }
	 *      });
	 *	</code>
	 *	<p>
	 *  ##### Request life-cycle
	 *	<p>
	 *  Underneath our nice requester objects lies, of course, `XMLHttpRequest`. The
	 *  defined life-cycle is as follows:
	 *	<p> 
	 *  1. Created <br>
	 *  2. Initialized<br>
	 *  3. Request sent<br>
	 *  4. Response being received (can occur many times, as packets come in)<br>
	 *  5. Response received, request complete
	 *  <p>
	 *  As you can see under the "Ajax options" heading of the [[Ajax section]],
	 *  Prototype's AJAX objects define a whole slew of callbacks, which are
	 *  triggered in the following order:
	 *  <p>
	 *  1. `onCreate` (this is actually a callback reserved to [[Ajax.Responders]])<br>
	 *  2. `onUninitialized` (maps on Created)<br>
	 *  3. `onLoading` (maps on Initialized)<br>
	 *  4. `onLoaded` (maps on Request sent)<br>
	 *  5. `onInteractive` (maps on Response being received)<br>
	 *  6. `on`*XYZ* (numerical response status code), onSuccess or onFailure (see below)<br>
	 *  7. `onComplete`
	 *  <p>
	 *  The two last steps both map on *Response received*, in that order. If a
	 *  status-specific callback is defined, it gets invoked. Otherwise, if
	 *  `onSuccess` is defined and the response is deemed a success (see below), it
	 *  is invoked. Otherwise, if `onFailure` is defined and the response is *not*
	 *  deemed a sucess, it is invoked. Only after that potential first callback is
	 *  `onComplete` called.
	 *  <p>
	 *  ##### A note on portability
	 *  <p>
	 *  Depending on how your browser implements `XMLHttpRequest`, one or more
	 *  callbacks may never be invoked. In particular, `onLoaded` and
	 *  `onInteractive` are not a 100% safe bet so far. However, the global
	 *  `onCreate`, `onUninitialized` and the two final steps are very much
	 *  guaranteed.
	 *  <p>
	 *  ##### `onSuccess` and `onFailure`, the under-used callbacks
	 *  <p>
	 *  Way too many people use [[Ajax.Request]] in a similar manner to raw XHR,
	 *  defining only an `onComplete` callback even when they're only interested in
	 *  "successful" responses, thereby testing it by hand:
	 *  <p>
	 *  <code>
	 *      // This is too bad, there's better!
	 *      new Ajax.Request('/your/url', {
	 *        onComplete: function(response) {
	 *          if (200 == response.status)
	 *            // yada yada yada
	 *        }
	 *      });
	 *  </code>
	 *  <p>
	 *  First, as described below, you could use better "success" detection: success
	 *  is generally defined, HTTP-wise, as either no response status or a "2xy"
	 *  response status (e.g., 201 is a success, too). See the example below.
	 *  <p>
	 *  Second, you could dispense with status testing altogether! Prototype adds
	 *  callbacks specific to success and failure, which we listed above. Here's
	 *  what you could do if you're only interested in success, for instance:
	 *  <p>
	 *  <code>
	 *      new Ajax.Request('/your/url', {
	 *        onSuccess: function(response) {
	 *            // yada yada yada
	 *        }
	 *      });
	 *  </code>
	 *  <p>
	 *  ##### Automatic JavaScript response evaluation
	 *  <p>
	 *  If an Ajax request follows the _same-origin policy_ **and** its response
	 *  has a JavaScript-related `Content-type`, the content of the `responseText`
	 *  property will automatically be passed to `eval`.
	 *  <p>
	 *  In other words: you don't even need to provide a callback to leverage
	 *  pure-JavaScript Ajax responses. This is the convention that drives Rails's
	 *  RJS.
	 *  <p>
	 *  The list of JavaScript-related MIME-types handled by Prototype is:
	 *  <p>
	 *  <ul>
	 *  <li> `application/ecmascript`</li>
	 *  <li> `application/javascript`</li>
	 *  <li> `application/x-ecmascript`</li>
	 *  <li> `application/x-javascript`</li>
	 *  <li> `text/ecmascript`</li>
	 *  <li> `text/javascript`</li>
	 *  <li> `text/x-ecmascript`</li>
	 *  <li> `text/x-javascript`</li>
	 *	</ul>
	 *	<p>
	 *  The MIME-type string is examined in a case-insensitive manner.
	 *  <p>
	 *  ##### Methods you may find useful
	 *  <p>
	 *  Instances of the [[Ajax.Request]] object provide several methods that come
	 *  in handy in your callback functions, especially once the request is complete.
	 *  <p>
	 *  ###### Is the response a successful one?
	 *  <p>
	 *  The [[Ajax.Request#success]] method examines the XHR object's `status`
	 *  property and follows general HTTP guidelines: unknown status is deemed
	 *  successful, as is the whole `2xy` status code family. It's a generally
	 *  better way of testing your response than the usual
	 *  `200 == transport.status`.
	 *  <p>
	 *  ###### Getting HTTP response headers
	 *  <p>
	 *  While you can obtain response headers from the XHR object using its
	 *  `getResponseHeader` method, this makes for verbose code, and several
	 *  implementations raise an exception when the header is not found. To make
	 *  this easier, you can use the [[Ajax.Response#getHeader]] method, which
	 *  delegates to the longer version and returns `null` if an exception occurs:
	 *  <p>
	 *	<code>
	 *      new Ajax.Request('/your/url', {
	 *        onSuccess: function(response) {
	 *          // Note how we brace against null values
	 *          if ((response.getHeader('Server') || '').match(/Apache/))
	 *            ++gApacheCount;
	 *          // Remainder of the code
	 *        }
	 *      });
	 *	</code>
	 *	<p>
	 *  ##### Evaluating JSON headers
	 *  <p>
	 *  Some backends will return JSON not as response text, but in the `X-JSON`
	 *  header. In this case, you don't even need to evaluate the returned JSON
	 *  yourself, as Prototype automatically does so. It passes the result as the
	 *  `headerJSON` property of the [[Ajax.Response]] object. Note that if there
	 *  is no such header &mdash; or its contents are invalid &mdash; `headerJSON`
	 *  will be set to `null`.
	 *  <p>
	 *	<code>
	 *      new Ajax.Request('/your/url', {
	 *        onSuccess: function(transport) {
	 *          transport.headerJSON
	 *        }
	 *      });
	 *  </code>
	 *  <p>
	**/
	//> public 
	Request: vjo.ctype()
	.inherits('org.prototypejs.Ajax.Base')
	.props({
		/**
		 * ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete']
		 */
		//> public String[]
		Events: null
	})
	.protos({
		
		/**
	   *  new Ajax.Request(url[, options])
	   *  <ul>
	   *  <li>url (String): The URL to fetch. When the _same-origin_ policy is in
	   *    effect (as it is in most cases), `url` **must** be a relative URL or an
	   *    absolute URL that starts with a slash (i.e., it must not begin with
	   *    `http`).</li>
	   *  <li>options (Object): Configuration for the request. See the
	   *    [[Ajax section]] for more information.</li>
	   *  </ul>
	   *  <p>
	   *  Creates a new `Ajax.Request`.
	  **/
		//> public constructs(String url, Object? options)
		constructs: function() {},
		
		/**
		 * 
		 */
		//> public void request(String url)
		request: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void onStateChange()
		onStateChange: vjo.NEEDS_IMPL,
		
	  /**
	   *  Ajax.Request#getHeader(name) -> String | null
	   *  <ul>
	   *  <li>name (String): The name of an HTTP header that may have been part of
	   *    the response.</li>
	   *  </ul>
	   *  <p>
	   *  Returns the value of the given response header, or `null` if that header
	   *  was not found.
	  **/
		//> public String getHeader(String name)
		getHeader: vjo.NEEDS_IMPL,
		
		 /**
		   *  Ajax.Request#success() -> Boolean
		   *  <p>
		   *  Tests whether the request was successful.
		  **/
		//> public boolean success()
		success: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public boolean getStatus()
		getStatus: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void setRequestHeaders()
		setRequestHeaders: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public void respondToReadyState(String readyState)
		respondToReadyState: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public boolean isSameOrigin()
		isSameOrigin: vjo.NEEDS_IMPL,
		
		/**
		 * 
		 */
		//> public Object evalResponse()
		evalResponse: vjo.NEEDS_IMPL
	})
	.endType(),
	
	/** 
	 *	section: Ajax<br>
	 * 	Ajax.Responders<br>
	 *  includes Enumerable<br>
	 *  <p>
	 *  A repository of global listeners notified about every step of
	 *  Prototype-based Ajax requests.
	 *  <p>
	 *  Sometimes, you need to provide generic behaviors over all Ajax operations
	 *  happening on the page (through [[Ajax.Request]], [[Ajax.Updater]] or
	 *  [[Ajax.PeriodicalUpdater]]).
	 *  <p>
	 *  For instance, you might want to automatically show an indicator when an
	 *  Ajax request is ongoing, and hide it when none are. You may well want to
	 *  factor out exception handling as well, logging those somewhere on the page
	 *  in a custom fashion. The possibilities are myriad.
	 *  <p>
	 *  To achieve this, Prototype provides `Ajax.Responders`, which lets you
	 *  register (and, if you wish, unregister later) _responders_, which are
	 *  objects with specially-named methods. These names come from a set of
	 *  general callbacks corresponding to different points in time (or outcomes)
	 *  of an Ajax request's life cycle.
	 *  <p>
	 *  For instance, Prototype automatically registers a responder that maintains
	 *  a nifty variable: [[Ajax.activeRequestCount]]. This represents, at a given
	 *  time, the number of currently active Ajax requests &mdash; by monitoring their
	 *  `onCreate` and `onComplete` events. The code for this is fairly simple:
	 *  <p>
	 *	<code>
	 *      Ajax.Responders.register({
	 *        onCreate: function() {
	 *          Ajax.activeRequestCount++;
	 *        },
	 *        onComplete: function() {
	 *          Ajax.activeRequestCount--;
	 *        }
	 *      });
	 *	</code>
	 *  <p>
	 *  ##### Responder callbacks
	 *  <p>
	 *  The callbacks for responders are similar to the callbacks described in
	 *  the [[Ajax section]], but take a different signature. They're invoked with
	 *  three parameters: the requester object (i.e., the corresponding "instance"
	 *  of [[Ajax.Request]]), the `XMLHttpRequest` object, and the result of
	 *  evaluating the `X-JSON` response header, if any (can be `null`). They also
	 *  execute in the context of the responder, bound to the `this` reference.
	 *  <p>
	 *  * `onCreate`: Triggered whenever a requester object from the `Ajax`
	 *    namespace is created, after its parameters are adjusted and before its
	 *    XHR connection is opened. This takes *two* arguments: the requester
	 *    object and the underlying XHR object.
	 *  <p>
	 *  * `onUninitialized` (*Not guaranteed*):  Invoked just after the XHR object
	 *    is created.
	 *  <p>
	 *  * `onLoading` (*Not guaranteed*): Triggered when the underlying XHR object
	 *    is being setup, and its connection opened.
	 *  <p>
	 *  * `onLoaded` (*Not guaranteed*): Triggered once the underlying XHR object
	 *    is setup, the connection is open, and it is ready to send its actual
	 *    request.
	 *  <p>
	 *  * `onInteractive` (*Not guaranteed*): Triggered whenever the requester
	 *    receives a part of the response (but not the final part), should it
	 *    be sent in several packets.
	 *  <p>
	 *  * `onException`: Triggered whenever an XHR error arises. Has a custom
	 *    signature: the first argument is the requester (i.e. an [[Ajax.Request]]
	 *    instance), and the second is the exception object.
	 *  <p>
	 *  * `onComplete`: Triggered at the _very end_ of a request's life-cycle, after
	 *    the request completes, status-specific callbacks are called, and possible
	 *    automatic behaviors are processed. Guaranteed to run regardless of what
	 *    happened during the request.
	**/
	//> public 
	Responders: vjo.ctype()
	.props({
		//> public Array
		responders: null,
		
		/**
		 * Add a group of responders to all Ajax requests
		 * Param is a list of functions with keys corresponding to the names
		 * of possible callbacks.
		 */
		//> public void register(Object responder)
		register: vjo.NEEDS_IMPL,
		
		/**
		 * Ajax.Responders.unregister(responder) ? undefined
		 * <p>
		 * responder (Object) – A list of functions with keys corresponding to 
		 * the names of possible callbacks.
		 * <p>
		 * Remove a previously-added group of responders.
		 * <p>
		 * As always, unregistering something requires you to use the very same 
		 * object you used at registration. If you plan to use unregister, be 
		 * sure to assign your responder to a variable before passing it into 
		 * Ajax.Responders#register — don't pass it an object literal.
		 */
		//> public void unregister(Object reponder)
		unregister: vjo.NEEDS_IMPL
	})
	.protos({
		
	})
	.endType(),
	
	/**
	 *  class Ajax.Response
	 *  <p>
	 *  A wrapper class around `XmlHttpRequest` for dealing with HTTP responses
	 *  of Ajax requests.
	 *	<p>
	 *  An instance of [[Ajax.Response]] is passed as the first argument of all Ajax
	 *  requests' callbacks. You <i>will not</i> need to create instances of
	 *  [[Ajax.Response]] yourself.
	 */
	//> public
	Response: vjo.ctype()
	.props({
		/**
		 *  Ajax.Response#headerJSON -> Object | Array | null
		 *  <p>
		 *  Auto-evaluated content of the `X-JSON` header if present; `null` otherwise.
		 *  This is useful to transfer <i>small</i> amounts of data.
		 */
		//> public Object ; MrP - should be {Object | Array}
		headerJSON: null,
		
		/**
		 *  Ajax.Response#readyState -> Number
		 *  <p>
		 *  A [[Number]] corresponding to the request's current state.
		 *	<p>
		 *  `0` : `"Uninitialized"`<br />
		 *  `1` : `"Loading"`<br />
		 *  `2` : `"Loaded"`<br />
		 *  `3` : `"Interactive"`<br />
		 *  `4` : `"Complete"`
		 */
		//> public Number
		readyState: null,
		
		/**
		 *  Ajax.Response#request -> Ajax.Request | Ajax.Updater
		 *	<p>
		 *  The request object itself (an instance of [[Ajax.Request]] or
		 *  [[Ajax.Updater]]).
		 */
		//> public Ajax.Request ; MrP - should be {Ajax.Request | Ajax.Updater}
		request: null,
		
		/**
		 *  Ajax.Response#responseJSON -> Object | Array | null
		 *  <p>
		 *  The JSON body of the response if the `Content-type` of the request is set
		 *  to `application/json`; `null` otherwise.
		 */
		//> public Object ; MrP - should be {Object | Array}
		responseJSON: null,
		
		/**
		 *  Ajax.Response#responseText -> String
		 *	<p>
		 *  The text body of the response.
		 */
		//> public String
		responseText: null,
		
		/**
		 *  Ajax.Response#responseXML -> document | null
		 *	<p>
		 *  The XML body of the response if the `Content-type` of the request is set
		 *  to `application/xml`; `null` otherwise.
		 */
		//> public Document ; MrP should be DOM document type
		responseXML: null,
		
		/**
		 *  Ajax.Response#status -> Number
		 *  <p> 
		 *  The HTTP status code sent by the server.
		 */
		//> public Number
		status: null,
		
		/**
	     *  Ajax.Response#statusText -> String
	     *  <p>
	     *  The HTTP status text sent by the server.
		 */
		//> public String
		statusText: null,
		
		/**
		 *  Ajax.Response#transport -> XmlHttpRequest
		 *	<p>
		 *  The native `XmlHttpRequest` object itself. 
		 */
		//> public XMLHttpRequest
		transport: null,
		
		/**
		 *  Ajax.Response#getAllHeaders() -> String | null
		 *  <p>
		 *  Returns a [[String]] containing all headers separated by line breaks.
		 *  _Does not_ throw errors if no headers are present the way its native
		 *  counterpart does.
		 */
		//> public String getAllHeaders()
		getAllHeaders: vjo.NEEDS_IMPL,
		
		/**
	     *  Ajax.Response#getAllResponseHeaders() -> String
	     *	<p>
	     *  Returns a [[String]] containing all headers separated by line breaks; throws
	     *  an error if no headers exist. This is just a wrapper around the
	     *  `XmlHttpRequest` method of the same name. Prefer it's shorter counterpart:
	     *  [[Ajax.Response#getAllHeaders]].
		 */
		//> public String getAllResponseHeaders()
		getAllResponseHeaders: vjo.NEEDS_IMPL,
		
		/**
	     *  Ajax.Response#getHeader(name) -> String | null
	     *	<p>
	     *  See [[Ajax.Request#getHeader]].
		 */
		//> public String getHeader(String name)
		getHeader: vjo.NEEDS_IMPL,
		
		/**
	     *  Ajax.Response#getResponseHeader(name) -> String
		 *	<p>
		 *  Returns the value of the requested header if present; throws an error
		 *  otherwise. This is just a wrapper around the `XmlHttpRequest` method of
		 *  the same name. Prefer it's shorter counterpart:
		 *  [[Ajax.Response#getHeader]].
		 */
		//> public String getResponseHeader(String name)
		getResponseHeader: vjo.NEEDS_IMPL
	})
	.protos({
		
	})
	.endType(),
		
	/** section: Ajax<br>
	 *  class Ajax.Updater < Ajax.Request<br>
	 *  <p>
	 *  A class that performs an Ajax request and updates a container's contents
	 *  with the contents of the response.
	 *  <p>
	 *  [[Ajax.Updater]] is a subclass of [[Ajax.Request]] built for a common
	 *  use-case.
	 *  <p>
	 *  ##### Example
	 *  <p>
	 *	<code>
	 *      new Ajax.Updater('items', '/items', {
	 *        parameters: { text: $F('text') }
	 *      });
	 *	</code>
	 *  <p>
	 *  This example will make a request to the URL `/items` (with the given
	 *  parameters); it will then replace the contents of the element with the ID
	 *  of `items` with whatever response it receives.
	 *  <p>
	 *  ##### Callbacks
	 *  <p>
	 *  [[Ajax.Updater]] supports all the callbacks listed in the [[Ajax section]].
	 *  Note that the `onComplete` callback will be invoked **after** the element
	 *  is updated.
	 *  <p>
	 *  ##### Additional options
	 *  <p>
	 *  [[Ajax.Updater]] has some options of its own apart from the common options
	 *  described in the [[Ajax section]]:
	 *  <p>
	 *  * `evalScripts` ([[Boolean]]; defaults to `false`): Whether `<script>`
	 *    elements in the response text should be evaluated.
	 *  <p>
	 *  * `insertion` ([[String]]): By default, `Element.update` is used, meaning
	 *    the contents of the response will replace the entire contents of the
	 *    container. You may _instead_ insert the response text without disrupting
	 *    existing contents. The `insertion` option takes one of four strings &mdash;
	 *    `top`, `bottom`, `before`, or `after` &mdash; and _inserts_ the contents
	 *    of the response in the manner described by [[Element#insert]].
	 *  <p>
	 *  ##### More About `evalScripts`
	 *  <p>
	 *  If you use `evalScripts: true`, any _inline_ `<script>` block will be
	 *  evaluated. This **does not** mean it will be evaluated in the global scope;
	 *  it won't, and that has important ramifications for your `var` and `function`
	 *  statements.  Also note that only inline `<script>` blocks are supported;
	 *  external scripts are ignored. See [[String#evalScripts]] for the details.
	 *  <p>
	 *  ##### Single container, or success/failure split?
	 *  <p>
	 *  The examples above all assume you're going to update the same container
	 *  whether your request succeeds or fails. Instead, you may want to update
	 *  _only_ for successful requests, or update a _different container_ on failed
	 *  requests.
	 *  <p>
	 *  To achieve this, you can pass an object instead of a DOM element for the
	 *  `container` parameter. This object _must_ have a `success` property whose
	 *  value identifies the container to be updated on successful requests.
	 *  <p>
	 *  If you also provide it with a `failure` property, its value will be used as
	 *  the container for failed requests.
	 *  <p>
	 *  In the following code, only successful requests get an update:
	 *  <p>
	 *	<code>
	 *      new Ajax.Updater({ success: 'items' }, '/items', {
	 *        parameters: { text: $F('text') },
	 *        insertion: 'bottom'
	 *      });
	 *	</code>
	 *  <p>
	 *  This next example assumes failed requests will deliver an error message as
	 *  response text &mdash; one that should be shown to the user in another area:
	 *  <p>
	 *	<code>
	 *      new Ajax.Updater({ success: 'items', failure: 'notice' }, '/items',
	 *        parameters: { text: $F('text') },
	 *        insertion: 'bottom'
	 *      });
	 *	</code>
	**/
	//> public 
	Updater: vjo.ctype()
	//> needs(org.prototypejs.Ajax.Request)
	.inherits('org.prototypejs.Ajax.Request')
	.props({
//		/**
//		 * 
//		 */
//		viewport: vjo.ctype() //< public
//		.props({
//			/**
//			 * 
//			 */
//			//> 
//			getDimensions: vjo.NEEDS_IMPL,
//			
//			/**
//			 * 
//			 */
//			//>
//			getHeight: vjo.NEEDS_IMPL,
//			
//			/**
//			 * 
//			 */
//			//>
//			getScrollOffsets: vjo.NEEDS_IMPL,
//			
//			/**
//			 * 
//			 */
//			//>
//			getWidth: vjo.NEEDS_IMPL
//		})
//		.endType()
	})
	.protos({
		
	/**
	   *  new Ajax.Updater(container, url[, options])
	   *  <p>
	   *  <ul>
	   *  <li>container (String | Element): The DOM element whose contents to update
	   *    as a result of the Ajax request. Can be a DOM node or a string that
	   *    identifies a node's ID.</li>
	   *  <li>url (String): The URL to fetch. When the _same-origin_ policy is in
	   *    effect (as it is in most cases), `url` **must** be a relative URL or an
	   *    absolute URL that starts with a slash (i.e., it must not begin with
	   *    `http`).</li>
	   *  <li>options (Object): Configuration for the request. See the
	   *    [[Ajax section]] for more information.</li>
	   *  </ul>
	   *  <p>
	   *  Creates a new `Ajax.Updater`.
	  **/
		//> public constructs({String | Element}container, String url, Object? options)
		constructs: function() { }
	})
	.endType()
	
})
.protos({
	
})
.options({
	metatype: true
})
.endType();