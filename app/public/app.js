
//<!-- BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS SENT TO OUR SERVER -->

// In this code below we create the Front-end Javascript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/survey)... and then runs the associated code (found in api-routes.js).
// In this case the associated code "saves" the data to the friends.js file 
