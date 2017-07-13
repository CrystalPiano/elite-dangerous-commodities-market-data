//https://eddb.io/archive/v5/commodities.json


jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

  // Here we are building the URL we need to query the elite dangerous commodities database
  var queryURL = "https://eddb.io/archive/v5/commodities.json";

    // Running our AJAX call to the New York Times Article Search API
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response[46-1])

      // Log the queryURL
        console.log(queryURL);

        // Transfer content to HTML
        $("#name").append(response[46-1].name);
        $("#price").append(response[46-1].average_price);
        $("#category").append(response[46-1].category.name);
        // Log the data in the console as well
        //console.log("Wind Speed: " + response.wind.speed);
      });


