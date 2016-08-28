$(document).ready(function () {
	var myFirebaseRef = new Firebase("https://devansh.firebaseio.com/");

	if (document.cookie.indexOf('devansh') === -1) {
		document.cookie="devansh=true; expires=Thu, 03 Jan 2030 12:00:00 UTC; path=/";
		myFirebaseRef.child("UniqueVisitors").once("value", function(snapshot) {
			myFirebaseRef.update({UniqueVisitors: snapshot.val() + 1});
		});	 
	} else {
		myFirebaseRef.child("TotalVisitors").once("value", function(snapshot) {
			myFirebaseRef.update({TotalVisitors: snapshot.val() + 1});
		});
	}

    $('.carousel').carousel();

    $('.devansh').click(function() { 
    	myFirebaseRef.child("light").once("value", function(snapshot) {
    		if (snapshot.val() == 1) {
				myFirebaseRef.update({light: 0});
			} else {
				myFirebaseRef.update({light: 1});
			}
		});	 
    });

});
