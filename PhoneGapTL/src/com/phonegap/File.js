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
 * The FileReader and FileWriter objects provide access to the devices file system for reading of files. 
 */
vjo.ctype('com.phonegap.File') //< public
//< needs(com.phonegap.FileEvent)
.globals({
	FileReader: null //< type::com.phonegap.File.FileReader
	
})
.protos({
	/*
	 * Properties

    * readyState: One of the three states the reader can be in EMPTY, LOADING or DONE.
    * result: The contents of the file that has been read. (DOMString)
    * error: An object containing errors. (FileError)
    * onloadstart: Called when the read starts. . (Function)
    * onprogress: Called while reading the file, reports progress (progess.loaded/progress.total). (Function) -NOT SUPPORTED
    * onload: Called when the read has successfully completed. (Function)
    * onabort: Called when the read has been aborted. For instance, by invoking the abort() method. (Function)
    * onerror: Called when the read has failed. (Function)
    * onloadend: Called when the request has completed (either in success or failure). (Function)

Methods

    * abort: Aborts reading file.
    * readAsDataURL: Read file and return data as a base64 encoded data url.
    * readAsText: Reads text file.

	 */
	
	FileReader: vjo.ctype()
		.protos({
			//>public constructs()
			constructs : vjo.NEEDS_IMPL,
			readyState:  null, //<public String ; EMPTY, LOADING, DONE
			result:  null, //<public String
			error:  null, //<public File.FileError
			onloadstart:  null, //<public Function
			onprogress:  null, //<public Function; -NOT SUPPORTED
			onload:  null, //<public (void fn(FileEvent))
			onabort:  null, //<public public (void fn(FileEvent))
			onerror:  null, //<public public (void fn(FileEvent))
			onloadend:  null, //<public Function
			//>public void abort() 
			abort : vjo.NEEDS_IMPL,
			//>public void readAsDataURL(String) 
			readAsDataURL : vjo.NEEDS_IMPL,
			//>public void readAsText(String) 
			readAsText : vjo.NEEDS_IMPL
		})
		.endType(),
	

		
	/**
	 * The FileError object may be thrown when an unrecoverable error occurs when reading, writing, seeking or truncating a file. 
	 * When the user calls the abort method of the writer a FileError with a code of ABORT_ERR is thrown if the current 
	 * state is FileWriter.DONE or FileWriter.INIT.
	 * 
	 */
	FileError:vjo.etype()
		.values("NOT_FOUND_ERR,SECURITY_ERR,ABORT_ERR,NOT_READABLE_ERR,ENCODING_ERR, " +
			"NO_MODIFICATION_ALLOWED_ERR , INVALID_STATE_ERR ,   SYNTAX_ERR   "  )
		.protos({
			code:null //< public com.phonegap.File.FileError
		})
		.endType(),
		
	FileMgr:vjo.ctype()
		.protos({
			//>public String[] getRootPaths() 
			getRootPaths : vjo.NEEDS_IMPL
			
		})
	.endType()
	
		
})
.options({metatype: true})
.endType();