https://eddb.io/archive/v5/commodities.json


  // Here we are building the URL we need to query the elite dangerous commodities database
  var queryURL = "https://eddb.io/archive/v5/commodities.json";

    // Running our AJAX call to the New York Times Article Search API
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response)

      // Log the queryURL
        console.log(queryURL);

        // Transfer content to HTML
        $("#result").html(response.response.id[2].name);
        // Log the data in the console as well
        //console.log("Wind Speed: " + response.wind.speed);
      });


