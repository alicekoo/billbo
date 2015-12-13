$(document).ready(function() {

    Parse.initialize("Sw9a7pzhAZVvLbDCwhof4ZQWMKi4ef86kup5KIHT", "pNFcpIqqXDXQYTRecjAcT0NOckPfsuIH6p00c7ZC");
	
	$('.form-signin').on('submit', function(e) {
 
	    e.preventDefault();
 
	    var data = $(this).serializeArray();
        username = data[0].value
        // username = "alicekoo",
        password = data[1].value
        // password = "12345";

	    Parse.User.logIn(username, password, {
	        success: function(user) {
	        	$('.form-signin').hide();
				var allQuery=new Parse.Query(Parse.Object.extend("Instachecks"));
 				allQuery.find({
					success: function(results){
						$('#signout').removeClass('disabled');
						$('.table-container').show();
						for (var i = 0; i < results.length; i++) { 
		             		var row = results[i];
	                    	$('.bills-table').append('<tr><td>' + row.get('bill') + '</td><td>' + row.get('createdAt') + '</td></tr>');
					   }
					   $('#signout').on('click', function() {
					   		location.reload();
					   });
					},
					error: function(object, error) {
						console.log(error);
				  	}
				}); 
	        },
	        error: function(user, error) {
	            console.log("The user is not found in the Cloud DB");
	        }
	    });
		
		
	});
	
	
});

