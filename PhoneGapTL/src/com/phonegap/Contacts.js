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
vjo.ctype('com.phonegap.Contacts') //< public
.globals({
	ContactFindOptions : null, // type::Contacts.ContactFindOptions
	ContactName : null //< type::Contacts.ContactName
})
.protos({
	
	//>public Contacts.Contact create(com.phonegap.Contacts.objects::contact? properties) 
	create : vjo.NEEDS_IMPL,
	
	//>public void find(String[], (void fn(Contacts.objects::contact[] contacts)) onSuccess, (void fn()) onError, Contacts.objects::contactFindOptions contactFindOptions) 
	find : vjo.NEEDS_IMPL,
	
	Contact : vjo.ctype()
		.protos({	
			/**
			 * A globally unique identifier. (DOMString)
			 */
			id:null, //< public String
			/**
			 * The name of this Contact, suitable for display to end-users. (DOMString)
			 */
			displayName : null, //< public String
			/**
			 * An object containing all components of a persons name. 
			 */
			name : null, //< public Contacts.ContactName
			/**
			 * A casual name to address the contact by. (DOMString)
			 */
			nickname: null, //< public String
			/**
			 * : An array of all the contact's phone numbers.
			 */
			phoneNumbers : null, //< public Contacts.ContactField[]
			/**
			 * An array of all the contact's email addresses.
			 */
			emails : null, //< public Contacts.ContactField[]
			/**
			 * An array of all the contact's addresses. 
			 */
			addresses : null, //< public Contacts.ContactAddress[]
			/**
			 * An array of all the contact's IM addresses.
			 */
			ims : null, //< public Contacts.ContactField[]
			/**
			 * An array of all the contact's organizations. 
			 */
			organizations : null, //< public Contacts.ContactOrganization[]
			/**
			 * The last date the contact was revised. (DOMString)
			 */
			revision : null, //< public String
			/**
			 * The birthday of the contact. 
			 */
			birthday : null, //< public Date
			/**
			 * The gender of the contact. 
			 */
			gender : null, //< public String
			/**
			 * A note about the contact.
			 */
			note : null, //< public String
			/**
			 * An array of the contact's photos.
			 */
			photos : null, //< public Contacts.ContactField[]
			/**
			 * An array of all the contacts user defined categories.
			 */
			categories : null, //< public Contacts.ContactField[]
			/**
			 * An array of web pages associated to the contact. 
			 */
			urls : null, //< public Contacts.ContactField[]
			/**
			 * The timezone of the contact.
			 */
			timezone : null, //< public String
			
			/**
			 * Returns a new Contact object that is a deep copy of the calling object, with the id property set to null. 
			 */
			//>public com.phonegap.Contacts.Contact clone() 
			clone : vjo.NEEDS_IMPL,
		
			/**
			 * Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same id already exists.
			 */
			//>public void save((void fn(com.phonegap.Contacts.objects::contact[] contacts)) onSuccess, Function onError) 
			save : vjo.NEEDS_IMPL,
			/**
			 * Removes the contact from the device contacts database. An error callback is called with a ContactError object if the removal is unsuccessful.
			 */
			//>public void remove( (void fn()) onSuccess, (void fn(Contacts.objects::contactError contactError)) onError) 
			remove : vjo.NEEDS_IMPL
		
		})
		.endType(),
	
	
	objects:vjo.otype()
	.defs({
		
		contact: 	{/*
			 * id: A globally unique identifier. (DOMString)
		displayname: The name of this Contact, suitable for display to end-users. (DOMString)
		name: An object containing all components of a persons name. (ContactName)
		nickname: A casual name to address the contact by. (DOMString)
		phoneNumbers: An array of all the contact's phone numbers. (ContactField[])
		emails: An array of all the contact's email addresses. (ContactField[])
		addresses: An array of all the contact's addresses. (ContactAddresses[])
		ims: An array of all the contact's IM addresses. (ContactField[])
		organizations: An array of all the contact's organizations. (ContactOrganization[])
		revision: The last date the contact was revised. (DOMString)
		birthday: The birthday of the contact. (Date)
		gender: The gender of the contact. (DOMString)
		note: A note about the contact. (DOMString)
		photos: An array of the contact's photos. (ContactField[])
		categories: An array of all the contacts user defined categories. (ContactField[])
		urls: An array of web pages associated to the contact. (ContactField[])
		timezone: The timezone of the conact. (DOMString)
				 */
			/**
			 * A globally unique identifier. (DOMString)
			 */
			id:null, //< public String?
			/**
			 * The name of this Contact, suitable for display to end-users. (DOMString)
			 */
			displayName : null, //< public String?
			/**
			 * An object containing all components of a persons name. 
			 */
			name : null, //< public Contacts.ContactName?
			/**
			 * A casual name to address the contact by. (DOMString)
			 */
			nickname: null, //< public String?
			/**
			 * : An array of all the contact's phone numbers.
			 */
			phoneNumbers : null, //< public Contacts.ContactField[]?
			/**
			 * An array of all the contact's email addresses.
			 */
			emails : null, //< public Contacts.ContactField[]?
			/**
			 * An array of all the contact's addresses. 
			 */
			addresses : null, //< public Contacts.ContactAddress[]?
			/**
			 * An array of all the contact's IM addresses.
			 */
			ims : null, //< public Contacts.ContactField[]?
			/**
			 * An array of all the contact's organizations. 
			 */
			organizations : null, //< public Contacts.ContactOrganization[]?
			/**
			 * The last date the contact was revised. (DOMString)
			 */
			revision : null, //< public String?
			/**
			 * The birthday of the contact. 
			 */
			birthday : null, //< public Date?
			/**
			 * The gender of the contact. 
			 */
			gender : null, //< public String?
			/**
			 * A note about the contact.
			 */
			note : null, //< public String?
			/**
			 * An array of the contact's photos.
			 */
			photos : null, //< public Contacts.ContactField[]?
			/**
			 * An array of all the contacts user defined categories.
			 */
			categories : null, //< public Contacts.ContactField[]?
			/**
			 * An array of web pages associated to the contact. 
			 */
			urls : null, //< public Contacts.ContactField[]?
			/**
			 * The timezone of the contact.
			 */
			timezone : null //< public String?
			
				
		
		},
		
	contactError:{
		code:null //< public Contacts.ContactError
		},
	contactFindOptions:{
		filter : null, //< public String?
		multiple : null, //< public boolean?
		updatedSince : null //< public String?
	}
	})
	.endType(),
	
	
			
			/*
			 *  ContactError.UNKNOWN_ERROR
				ContactError.INVALID_ARGUMENT_ERROR
				ContactError.NOT_FOUND_ERROR
				ContactError.TIMEOUT_ERROR
				ContactError.PENDING_OPERATION_ERROR
				ContactError.IO_ERROR
				ContactError.NOT_SUPPORTED_ERROR
				ContactError.PERMISSION_DENIED_ERROR
			 */
	//>public
	ContactError : vjo.etype()
	.values("UNKNOWN_ERROR, INVALID_ARGUMENT_ERROR, NOT_FOUND_ERROR, TIMEOUT_ERROR,PENDING_OPERATION_ERROR, IO_ERROR, NOT_SUPPORTED_ERROR,PERMISSION_DENIED_ERROR")
	.endType(),
				
	
	ContactField:vjo.ctype()
	.protos({
		//>public constructs(String type, String value, boolean pref)
		constructs : vjo.NEEDS_IMPL,
		
		type : null, //< public String
		value : null, //< public String
		pref : null //< public boolean
	})
	.endType(),
	
	ContactAddress:vjo.ctype()
	.protos({
		formatted : null, //< public String
		streetAddress : null, //< public String
		locality : null, //< public String
		region : null, //< public String
		postalCode : null, //< public String
		country : null //< public String
		
	})
	.endType(),
	
	ContactFindOptions : vjo.ctype()
	.protos({
		//>public constructs()
		constructs :  vjo.NEEDS_IMPL,
		filter : null, //< public String?
		multiple : null, //< public boolean?
		updatedSince : null //< public String?
	}).endType(),
	
	/**
	 * The ContactName object stores name properties of a contact.
	 */
		//> public
	ContactName:vjo.ctype()
	.protos({
		//>public constructs()
		constructs : vjo.NEEDS_IMPL,
		formatted : null, //< public String
		familyName : null, //< public String
		givenName : null, //< public String
		middleName : null, //< public String
		honorificPrefix : null, //< public String
		honorificSuffix : null //< public String
	})
	.endType(),
	
	ContactOrganization:vjo.ctype()
	.protos({
		name : null, //< public String
		department : null, //< public String
		title : null //< public String
	})
	.endType()
	
	
	
})
.options({metatype: true})
.endType();