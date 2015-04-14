var apiUrl;
$(document).ready(function(){
	apiUrl = "http://api.bigoven.com/recipe/47725?api_key=dvxT4D8UO8D032EF8uNm36S093QyKk21";
	$('#mybutton').click(function(){
	    $.getJSON(apiUrl, function(data) {
	    	console.log(data);
	    	propertyTest(data);
	  	});
	});

	$('#mybutton2').click(function(){
		apiUrl = "http://api.bigoven.com/recipe/196149?api_key=dvxT4D8UO8D032EF8uNm36S093QyKk21";
	    $.getJSON(apiUrl, function(data) {
	    	console.log(data);
	    	propertyTest(data);
	  	});
	});

});

function propertyTest(currentObject) {
    for (var property in currentObject) {
        if (typeof currentObject[property] === "object") {
            propertyTest(currentObject[property], property);
        } else {
            $('#demo').append(property + ': ' + currentObject[property] + '<br />');
        }
    }
}
