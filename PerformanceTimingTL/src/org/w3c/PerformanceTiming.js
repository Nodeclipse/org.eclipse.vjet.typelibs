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
 * https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html
 * 
 * interface PerformanceTiming {
  readonly attribute unsigned long long navigationStart;
  readonly attribute unsigned long long unloadEventStart;
  readonly attribute unsigned long long unloadEventEnd;
  readonly attribute unsigned long long redirectStart;
  readonly attribute unsigned long long redirectEnd;
  readonly attribute unsigned long long fetchStart;
  readonly attribute unsigned long long domainLookupStart;
  readonly attribute unsigned long long domainLookupEnd;
  readonly attribute unsigned long long connectStart;
  readonly attribute unsigned long long connectEnd;
  readonly attribute unsigned long long secureConnectionStart;
  readonly attribute unsigned long long requestStart;
  readonly attribute unsigned long long responseStart;
  readonly attribute unsigned long long responseEnd;
  readonly attribute unsigned long long domLoading;
  readonly attribute unsigned long long domInteractive;
  readonly attribute unsigned long long domContentLoadedEventStart;
  readonly attribute unsigned long long domContentLoadedEventEnd;
  readonly attribute unsigned long long domComplete;
  readonly attribute unsigned long long loadEventStart;
  readonly attribute unsigned long long loadEventEnd;
};
 */

vjo.ctype('org.w3c.PerformanceTiming') //< public
.protos({
	/**
	 * This attribute must return the time immediately after the user agent finishes prompting to unload the previous document. If there is no previous document, this attribute must return the same value as fetchStart.

	 */
	navigationStart: null,             //< public long  
	/**
	 * If the previous document and the current document have the same origin, this attribute must return the time immediately before the user agent starts the unload event of the previous document. If there is no previous document or the previous document has a different origin than the current document, this attribute must return zero.
	 */
	unloadEventStart: null,            //< public long   
	/**
	 *  If the previous document and the current document have the same origin, this attribute must return the time immediately after the user agent finishes the unload event of the previous document. If there is no previous document or the previous document has a different origin than the current document or the unload is not yet completed, this attribute must return zero.
	 * If there are HTTP redirects or equivalent when navigating and not all the redirects or equivalent are from the same origin, both unloadEventStart and unloadEventEnd must return the zero. 
	 **/
	unloadEventEnd: null,              //< public long 
	/**
	 * If there are HTTP redirects or equivalent when navigating and if all the redirects or equivalent are from the same origin, this attribute must return the starting time of the fetch that initiates the redirect. Otherwise, this attribute must return zero.
	 */
	redirectStart: null,               //< public long         
	/**
	 * If there are HTTP redirects or equivalent when navigating and all redirects and equivalents are from the same origin, this attribute must return the time immediately after receiving the last byte of the response of the last redirect. Otherwise, this attribute must return zero.
	 */
	redirectEnd: null,                 //< public long         
	/**
	 * If the new resource is to be fetched using HTTP GET or equivalent, fetchStart must return the time immediately before the user agent starts checking any relevant application caches. Otherwise, it must return the time when the user agent starts fetching the resource.
	 */
	fetchStart: null,                  //< public long    
	/**
	 * This attribute must return the time immediately before the user agent starts the domain name lookup for the current document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return the same value as fetchStart.
	 */
	domainLookupStart: null,           //< public long         
	/**
	 * This attribute must return the time immediately after the user agent finishes the domain name lookup for the current document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return the same value as fetchStart.
	<br>
	This section is non-normative.
	<br>
	Checking and retrieving contents from the HTTP cache [RFC 2616] is part of the fetching process. It's covered by the requestStart, responseStart and responseEnd attributes.
	<br>
	Example
	In case where the user agent already has the domain information in cache, domainLookupStart and domainLookupEnd represent the times when the user agent starts and ends the domain data retrieval from the cache.
	 */
	domainLookupEnd: null,             //< public long      
	/**
	 * This attribute must return the time immediately before the user agent start establishing the connection to the server to retrieve the document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return value of domainLookupEnd.
	 */
	connectStart: null,                //< public long      
	/**
	 * This attribute must return the time immediately after the user agent finishes establishing the connection to the server to retrieve the current document. If a persistent connection [RFC 2616] is used or the current document is retrieved from relevant application caches or local resources, this attribute must return the value of domainLookupEnd
	<br>If the transport connection fails and the user agent reopens a connection, connectStart and connectEnd should return the corresponding values of the new connection.
	
	connectEnd must include the time interval to establish the transport connection as well as other time interval such as SSL handshake and SOCKS authentication.
	 */
	connectEnd: null,                  //< public long 
	/**
	 * This attribute is optional. User agents that don't have this attribute available must set it as undefined. When this attribute is available, if the scheme of the current page is HTTPS, this attribute must return the time immediately before the user agent starts the handshake process to secure the current connection. If this attribute is available but HTTPS is not used, this attribute must return zero.
	 */
	secureConnectionStart: null,       //< public long         
	/**
	 * This attribute must return the time immediately before the user agent starts requesting the current document. It is set prior to checking HTTP cache.
<bt>
If the transport connection fails after a request is sent and the user agent reopens a connection and resend the request, requestStart should return the corresponding values of the new request.
<br>
This interface does not include an attribute to represent the completion of sending the request, e.g., requestEnd.
<br>
<ul>
<li>Completion of sending the request from the user agent does not always indicate the corresponding completion time in the network transport, which brings most of the benefit of having such an attribute.
<li>Some user agents have high cost to determine the actual completion time of sending the request due to the HTTP layer encapsulation.
</ul>
	 */
	requestStart: null,                //< public long     
	/**
	 * This attribute must return the time immediately after the user agent receives the first byte of the response from the server, or from relevant application caches or from local resources.
	 */
	responseStart: null,               //< public long      
	/**
	 * This attribute must return the time immediately after the user agent receives the last byte of the current document or immediately before the transport connection is closed, whichever comes first. The document here can be received either from the server, relevant application caches or from local resources.
	 */
	responseEnd: null,                 //< public long     
	/**
	 * This attribute must return the time immediately before the user agent sets the current document readiness to "loading".
	 */
	domLoading: null,                  //< public long     
	/**
	 * This attribute must return the time immediately before the user agent sets the current document readiness to "interactive".
	 */
	domInteractive: null,              //< public long    
	/**
	 * This attribute must return the time immediately before the user agent fires the DOMContentLoaded event at the Document.
	 */
	domContentLoadedEventStart: null,  //< public long    
	/**
	 * This attribute must return the time immediately after the document's DOMContentLoaded event completes.
	 */
	domContentLoadedEventEnd: null,    //< public long     
	/**
	 * This attribute must return the time immediately before the user agent sets the current document readiness to "complete".
	<br>
	If the current document readiness changes to the same state multiple times, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd and domComplete must return the time of the first occurrence of the corresponding document readiness change.
	 */
	domComplete: null,                 //< public long   
	/**
	 * This attribute must return the time immediately before the load event of the current document is fired. It must return zero when the load event is not fired yet.
	 */
	loadEventStart: null,              //< public long    
	/**
	 * This attribute must return the time when the load event of the current document is completed. It must return zero when the load event is not fired or is not completed.
	 */
	loadEventEnd:null                  //< public long         
                             
})
.options({
	metatype:true
})
.endType();