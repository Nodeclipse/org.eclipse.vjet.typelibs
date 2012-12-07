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
vjo.ctype('org.eclipse.EclipseRoot') //< public
.globals({
	eclipse:null //< type::org.eclipse.EclipseRoot
})
.props({
	/**
	 * Adds an event listener to the service registry
	 */
	//>public void addEventListener(String eventName, (void fn(Object[]?)) serviceRegistry) 
	addEventListener : vjo.NEEDS_IMPL,
	
	//> public void clear()
	clear:vjo.NEEDS_IMPL,
	
	//>public void connect(Function, Function) 
	connect : vjo.NEEDS_IMPL,
	
	//> public void (String)
	DefaultPreferencesProvider:vjo.NEEDS_IMPL,
	
	
	//> public void disconnect()
	disconnect:vjo.NEEDS_IMPL,
	
	//> public void dispatchEvent(String eventName)
	dispatchEvent:vjo.NEEDS_IMPL,
	
	//>public void EventTarget() 
	EventTarget : vjo.NEEDS_IMPL,
	
	//>public void get(String name) 
	get : vjo.NEEDS_IMPL,
	
	//>public Object getData() 
	getData : vjo.NEEDS_IMPL,
	
	//>public Object getLocation() 
	getLocation : vjo.NEEDS_IMPL,
	
	//>public Object getName() 
	getName : vjo.NEEDS_IMPL,
	
	//>public void getPlugin() 
	getPlugin : vjo.NEEDS_IMPL,
	
	//> public Object getPlugins()
	getPlugins:vjo.NEEDS_IMPL,
	
	//>public void getPreferences(Object node) 
	getPreferences : vjo.NEEDS_IMPL,
	
	/**
	 * Retrieves the preferences of the given node name.
	 * <static>  	
	 * eclipse.getProperty(propertyName)
	 */
	//>public void getProperty(String propertyName) 
	getProperty : vjo.NEEDS_IMPL,
	
	//>public Object getPropertyNames() 
	getPropertyNames : vjo.NEEDS_IMPL,
	
	//>public void getService(String nameOrServiceReference, Number timeout) 
	getService : vjo.NEEDS_IMPL,
	
	//>public String getServiceId() 
	getServiceId : vjo.NEEDS_IMPL,
	
	//>public void getServiceReference() 
	getServiceReference : vjo.NEEDS_IMPL,
	
	//>public void getServiceReferences() 
	getServiceReferences : vjo.NEEDS_IMPL,
	
	//> public void installPlugin(String url, Object? opt_data)
	installPlugin: vjo.NEEDS_IMPL,
	
	//>public void keys() 
	keys : vjo.NEEDS_IMPL,
	
	//>public void OutlineService(Object serviceRegistry) 
	OutlineService : vjo.NEEDS_IMPL,
	
	//>public void Plugin(String url, Object data, Object internalRegistry)
	Plugin : vjo.NEEDS_IMPL,
	
	//>public org.eclipse.PluginRegistry PluginRegistry(org.eclipse.ServiceRegistry serviceRegistry, Object? opt_storage) 
	PluginRegistry : vjo.NEEDS_IMPL,
	
	//>public void PluginProvider() 
	PluginProvider : vjo.NEEDS_IMPL,
	
	
	
	//> public void Preferences(Object _name, Object _userProvider, Object _defaultsProvider)
	Preferences:vjo.NEEDS_IMPL,
	
	//> public void PreferencesService(Object serviceRegistry, Object userPreferencesLocation, Object defaultPreferencesLocation)
	PreferencesService: vjo.NEEDS_IMPL,
	
	//> public void ProblemService(Object serviceRegistry)
	ProblemService:vjo.NEEDS_IMPL,
	
	//>public void put(String name, Object data) 
	put : vjo.NEEDS_IMPL,
	
	//>public void registerService(String name, Object implementation, Object properties) 
	registerService : vjo.NEEDS_IMPL,
	
	//> public void registerServiceProvider(String name, Object implementation, Object properties)
	registerServiceProvider:vjo.NEEDS_IMPL,
	
	//> public void remove(String key)
	remove:vjo.NEEDS_IMPL,
	
	
	//> public void removeEventListener(String eventName, Object listener)
	removeEventListener:vjo.NEEDS_IMPL,
	
	
//	//> public void registerService(String name, Object implementation, Object properties)
//	registerService:vjo.NEEDS_IMPL,
//	
//	//> public void registerServiceProvider(type, implementation, properties)
//	registerServiceProvider:vjo.NEEDS_IMPL,
//	
//	
//	//> public void registerServiceProvider(type, implementation, properties)
//	registerServiceProvider:vjo.NEEDS_IMPL,
//	
//	//>public void remove(String key) 
//	remove : vjo.NEEDS_IMPL,
//	
//	//>public void removeEventListener(String eventName, Object listener) 
//	removeEventListener : vjo.NEEDS_IMPL,
	
	
	//>public void Service(String serviceId, Object implementation, Object internalRegistry) 
	Service : vjo.NEEDS_IMPL,
	
	//> public void ServiceProvider(String serviceId, Object internalProvider)
	ServiceProvider:vjo.NEEDS_IMPL,
	
	//>public void  ServiceReference(String serviceId, String name, Object properties)
	ServiceReference:vjo.NEEDS_IMPL,
	
	
	//> public void ServiceRegistration(String serviceId, Object serviceReference, Object internalRegistry)
	ServiceRegistration:vjo.NEEDS_IMPL,
	
	//>public org.eclipse.ServiceRegistry ServiceRegistry() 
	ServiceRegistry : vjo.NEEDS_IMPL,
	
	//>public void shutdown() 
	shutdown : vjo.NEEDS_IMPL,
	
	//>public void sync() 
	sync : vjo.NEEDS_IMPL,
	
	//>public void testSuite(Object mock) 
	testSuite : vjo.NEEDS_IMPL,
	
	//>public void uninstall() 
	uninstall : vjo.NEEDS_IMPL,
	
	//>public void unregister() 
	unregister : vjo.NEEDS_IMPL,
	

	//>public void UserPreferencesProvider(String location) 
	UserPreferencesProvider : vjo.NEEDS_IMPL
	

	
})
.protos({
	
})
.endType();