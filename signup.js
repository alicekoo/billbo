$(document).ready(function() {

    Parse.initialize("Sw9a7pzhAZVvLbDCwhof4ZQWMKi4ef86kup5KIHT", "pNFcpIqqXDXQYTRecjAcT0NOckPfsuIH6p00c7ZC");
	
	$('.form-signin').on('submit', function(e) {
 
	    e.preventDefault();
 
	    var data = $(this).serializeArray();
        username = data[0].value
        email = data[1].value
        password = data[2].value

		  var user = new Parse.User();

		  user.set("username", username);    // in my app, email==username
		  user.set("password", password);
		  user.set("email", email);

	    user.signUp().done(function(user) {
	        	window.location.replace("index.html");
	        })
	        .fail( function(error) {
	        	alert(error.message);
	            console.log("Error sign up", error);
	        });
	});
	
});

