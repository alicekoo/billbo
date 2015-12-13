$(function() {
	
	 Parse.$ = jQuery;
	 Parse.initialize("3HBsy8qXrSR4LbWEchW1vTFNNi8hB1Gx12QTvRct", "OL6MBLaOBkYwsXv0XepGQS59btezExTcprfrxgtc");


	 var TestObject = Parse.Object.extend("TestObject");
	 var testObject = new TestObject();

	 testObject.save(
	 {
	 	foo:"bar"
	 }).then(function(object)
	  {
	 	alert("Yay! It worked!");
	 }
	 );

 
  $('.form-signin').on('submit', function(e) {

  	 e.preventDefault();

  	 var data = $(this).serializeArray();
  	 username = data[0].value;
  	 password = data[1].value;

  	 Parse.User.logIn(username, password, {
  	 	success: function(user) {
  	 		alert('Welcome User');
  	 		//do something if user logged in correctly
  	 		var query = new Parse.Query("Instachecks");
  	 		query.get("RgtlUQ50rf", {
  	 			success: function(object) {
  	 					console.log(JSON.stringify(object));
  	 					document.getElementById('billsdiv').innerText = JSON.stringify(object);
  	 			},
  	 			error: function(object,error) {
  	 				console.log(error);
  	 			}
  	 		});



  	 	},
  	 	error: function(object, error) {
  	 		alert('Unauthorized!');
  	 	}
  	 });

  });

});