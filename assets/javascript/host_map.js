
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  WARNING: Moovweb auto-generated file. Any changes you make here will *
 *  be overwritten.                                                      *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

(function(){

var mapProxyToOrigin = {"http://mlocal.alerts.us.reuters.com":"http://alerts.us.reuters.com","http://mlocal.ar.reuters.com":"http://ar.reuters.com","http://mlocal.ara.reuters.com":"http://ara.reuters.com","http://mlocal.blogs.reuters.com":"http://blogs.reuters.com","http://mlocal.br.reuters.com":"http://br.reuters.com","http://mlocal.ca.reuters.com":"http://ca.reuters.com","http://mlocal.cn.reuters.com":"http://cn.reuters.com","http://mlocal.commerce.us.reuters.com":"http://commerce.us.reuters.com","http://mlocal.de.reuters.com":"http://de.reuters.com","http://mlocal.es.reuters.com":"http://es.reuters.com","http://mlocal.fr.reuters.com":"http://fr.reuters.com","http://mlocal.funds.us.reuters.com":"http://funds.us.reuters.com","http://mlocal.in.reuters.com":"http://in.reuters.com","http://mlocal.it.reuters.com":"http://it.reuters.com","http://mlocal.jp.reuters.com":"http://jp.reuters.com","http://mlocal.lta.reuters.com":"http://lta.reuters.com","http://mlocal.mx.reuters.com":"http://mx.reuters.com","http://mlocal.newsandinsight.thomsonreuters.com":"http://newsandinsight.thomsonreuters.com","http://mlocal.portfolio.us.reuters.com":"http://portfolio.us.reuters.com","http://mlocal.reuters.com":"http://www.reuters.com","http://mlocal.ru.reuters.com":"http://ru.reuters.com","http://mlocal.stockscreener.us.reuters.com":"http://stockscreener.us.reuters.com","http://mlocal.uk.reuters.com":"http://uk.reuters.com","https://mlocal.alerts.us.reuters.com":"https://alerts.us.reuters.com","https://mlocal.ar.reuters.com":"https://ar.reuters.com","https://mlocal.ara.reuters.com":"https://ara.reuters.com","https://mlocal.blogs.reuters.com":"https://blogs.reuters.com","https://mlocal.br.reuters.com":"https://br.reuters.com","https://mlocal.ca.reuters.com":"https://ca.reuters.com","https://mlocal.cn.reuters.com":"https://cn.reuters.com","https://mlocal.commerce.us.reuters.com":"https://commerce.us.reuters.com","https://mlocal.de.reuters.com":"https://de.reuters.com","https://mlocal.es.reuters.com":"https://es.reuters.com","https://mlocal.fr.reuters.com":"https://fr.reuters.com","https://mlocal.funds.us.reuters.com":"https://funds.us.reuters.com","https://mlocal.in.reuters.com":"https://in.reuters.com","https://mlocal.it.reuters.com":"https://it.reuters.com","https://mlocal.jp.reuters.com":"https://jp.reuters.com","https://mlocal.lta.reuters.com":"https://lta.reuters.com","https://mlocal.mx.reuters.com":"https://mx.reuters.com","https://mlocal.newsandinsight.thomsonreuters.com":"https://newsandinsight.thomsonreuters.com","https://mlocal.portfolio.us.reuters.com":"https://portfolio.us.reuters.com","https://mlocal.reuters.com":"https://www.reuters.com","https://mlocal.ru.reuters.com":"https://ru.reuters.com","https://mlocal.stockscreener.us.reuters.com":"https://stockscreener.us.reuters.com","https://mlocal.uk.reuters.com":"https://uk.reuters.com"};
var mapOriginToProxy = {"http://alerts.us.reuters.com":"http://mlocal.alerts.us.reuters.com","http://ar.reuters.com":"http://mlocal.ar.reuters.com","http://ara.reuters.com":"http://mlocal.ara.reuters.com","http://blogs.reuters.com":"http://mlocal.blogs.reuters.com","http://br.reuters.com":"http://mlocal.br.reuters.com","http://ca.reuters.com":"http://mlocal.ca.reuters.com","http://cn.reuters.com":"http://mlocal.cn.reuters.com","http://commerce.us.reuters.com":"http://mlocal.commerce.us.reuters.com","http://de.reuters.com":"http://mlocal.de.reuters.com","http://es.reuters.com":"http://mlocal.es.reuters.com","http://fr.reuters.com":"http://mlocal.fr.reuters.com","http://funds.us.reuters.com":"http://mlocal.funds.us.reuters.com","http://in.reuters.com":"http://mlocal.in.reuters.com","http://it.reuters.com":"http://mlocal.it.reuters.com","http://jp.reuters.com":"http://mlocal.jp.reuters.com","http://lta.reuters.com":"http://mlocal.lta.reuters.com","http://mx.reuters.com":"http://mlocal.mx.reuters.com","http://newsandinsight.thomsonreuters.com":"http://mlocal.newsandinsight.thomsonreuters.com","http://portfolio.us.reuters.com":"http://mlocal.portfolio.us.reuters.com","http://reuters.com":"http://mlocal.reuters.com","http://ru.reuters.com":"http://mlocal.ru.reuters.com","http://stockscreener.us.reuters.com":"http://mlocal.stockscreener.us.reuters.com","http://uk.reuters.com":"http://mlocal.uk.reuters.com","http://www.reuters.com":"http://mlocal.reuters.com","https://alerts.us.reuters.com":"https://mlocal.alerts.us.reuters.com","https://ar.reuters.com":"https://mlocal.ar.reuters.com","https://ara.reuters.com":"https://mlocal.ara.reuters.com","https://blogs.reuters.com":"https://mlocal.blogs.reuters.com","https://br.reuters.com":"https://mlocal.br.reuters.com","https://ca.reuters.com":"https://mlocal.ca.reuters.com","https://cn.reuters.com":"https://mlocal.cn.reuters.com","https://commerce.us.reuters.com":"https://mlocal.commerce.us.reuters.com","https://de.reuters.com":"https://mlocal.de.reuters.com","https://es.reuters.com":"https://mlocal.es.reuters.com","https://fr.reuters.com":"https://mlocal.fr.reuters.com","https://funds.us.reuters.com":"https://mlocal.funds.us.reuters.com","https://in.reuters.com":"https://mlocal.in.reuters.com","https://it.reuters.com":"https://mlocal.it.reuters.com","https://jp.reuters.com":"https://mlocal.jp.reuters.com","https://lta.reuters.com":"https://mlocal.lta.reuters.com","https://mx.reuters.com":"https://mlocal.mx.reuters.com","https://newsandinsight.thomsonreuters.com":"https://mlocal.newsandinsight.thomsonreuters.com","https://portfolio.us.reuters.com":"https://mlocal.portfolio.us.reuters.com","https://reuters.com":"https://mlocal.reuters.com","https://ru.reuters.com":"https://mlocal.ru.reuters.com","https://stockscreener.us.reuters.com":"https://mlocal.stockscreener.us.reuters.com","https://uk.reuters.com":"https://mlocal.uk.reuters.com","https://www.reuters.com":"https://mlocal.reuters.com"};	
	
if (typeof(mw) == "undefined") {
	window.mw = {};
}

if(typeof(mw.catch_all_domain) == "undefined") {
	mw.catch_all_domain = ".moovapp.com";
} else {
  if (mw.catch_all_domain[0] != ".") {
  	console.log("Bad catch all domain");
  }
}


function detect_catch_all(url) {
	var found_index = url.host.indexOf(mw.catch_all_domain);
	var length = url.host.length;

	if (found_index != -1 && (found_index + mw.catch_all_domain.length) == length) {
		return true;
	}
	return false;
}

function strip_catch_all(url) {
	var found_index = url.host.indexOf(mw.catch_all_domain);
	var length = url.host.length;

	url.host = url.host.slice(0, found_index);
	return url;
}

function add_catch_all(url) {
	url.host = url.host + mw.catch_all_domain;
	return url;	
}

function getParsedURL(url) {
	var elem = document.createElement("a")
	elem.href = url;
	return elem;
}

function getSchemeAndHostname(url) {
	var result = {};
	result.scheme = url.protocol;
	result.host = url.host;
	return result;
}

function getKey(url) {
	var components = getSchemeAndHostname(url);
	return components.scheme + "//" + components.host;
}

function fetch(url, map) {
	var key = getKey(url);
	var result = map[key];
	
	if (result === undefined) {
		if (typeof(mw) != 'undefined' && mw.debug == true) {
			console.log("Warning. No rule to modify host (" + key + ").")
		}
		return url;
	}
	
	return result + url.pathname + url.search + url.hash;
}

function detect(rawURL) {
  var properties = {
    "secure": false,
    "schema_relative": false,
    "relative": false
  };  
  properties.raw = rawURL;
  
  if (rawURL.indexOf("https://") != -1) {
    properties.secure = true;
  } else if(rawURL.indexOf("http://") == -1) {
    if (rawURL.indexOf("//") == 0) {
      properties.schema_relative = true;
    } else {
      properties.relative = true;
    }
  }
  
  return properties;
}

function denormalize(url, properties) {
  url = getParsedURL(url);
  if (properties.relative) {    
    return url.pathname + url.search + url.hash;
  } else {
    if (properties.secure) {
      return url.href.replace("http://","https://");
    } 
    if (properties.schema_relative) {
      return url.href.replace(/^https*:/, "");
    }
    
  }
  return url.href;
}

mw.proxyURLToOrigin = function(rawURL){	

	var properties = detect(rawURL);

	// Make sure it includes the host, or it will still be proxied!
	properties.relative = false;

	var url = getParsedURL(rawURL);
	var catch_all = detect_catch_all(url);

  if (catch_all) {    
	  url = strip_catch_all(url);
  }
	
	url = fetch(url, mapProxyToOrigin);
	url = denormalize(url, properties);

	return url;
}

mw.originURLToProxy = function(rawURL){

	var properties = detect(rawURL);
	var url = getParsedURL(rawURL);
	var catch_all = detect_catch_all(url);

  if (catch_all) {    
	  url = add_catch_all(url);
  }

  url = fetch(url, mapOriginToProxy);
	url = denormalize(url, properties);
	
	return url;
}

}());
