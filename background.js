function loadXMLDoc(url, data) {
	'use strict';
	let xmlhttp = new XMLHttpRequest();
	data = data || {};

	xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
				if(xmlhttp.status === 200){
						console.log('great', xmlhttp);
				}
				else if(xmlhttp.status === 400) {
					console.warn('There was an error 400', xmlhttp);
				}
				else {
					console.warn('something else other than 200 was returned', xmlhttp);
				}
			}
	};

	alert(url + ' ' + data.text);
	xmlhttp.open("POST", url, true);
	xmlhttp.send(data);
}

function onclick(info){
	'use strict';
	let endpoint = 'https://boredatbutler.com/api/v1/post',
			// mediaType = info.mediaType,
			linkUrl = info.linkUrl,
			selectionText = info.selectionText || '';

	if (selectionText) selectionText = '"' + selectionText + '" ';

	let data = {text: selectionText + linkUrl};
	loadXMLDoc(endpoint, data);
}

chrome.contextMenus.create({
	title: 'Share this to b@',
	contexts: ['selection', 'link'],
	onclick: onclick
});
