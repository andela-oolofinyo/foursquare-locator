//Check

$(document).ready(function() {


$('form').submit(function(evt) {
    evt.preventDefault(); // this is to prevent the submit button from refrshing the page when clicked

  var randomLocation = $('#search').val();

  var fourSquareAPI = "https://api.foursquare.com/v2/venues/search?client_id=2W3FEHKKUS5VJURDMO0WUV2PFYDGCFGYWPVWPWBHSBR2MRSP&client_secret=MUORUSSSGSCDZRYJMMV3QDJFJ0GTYUVKXHST50IOGLUGFPWI&v=20140806&m=foursquare&near=lagos,lagos";
  var users = randomLocation;
  var user = {
    query: randomLocation,
  };

    var displayVenue = function (data) {
      var locatorHTML = '<ul>';
      $.each(data.response.venues, function(i, list) {

        locatorHTML += '<li class="grid-25 tablet-grid-50">';
        locatorHTML += '<p> Name: ' + list.name + '</p>';
        locatorHTML += '<p> Address: ' + list.location.address +  list.location.city + '</p>';
        locatorHTML += '<p> Country: ' + list.location.state + ", " + list.location.country + '</p>';
        locatorHTML += '<p> Latitude: ' + list.location.lat + '</p>';
        locatorHTML += '<p> Longitude: ' + list.location.lng + '</p>';
        locatorHTML += '<p> Here Now: ' + list.hereNow.count + " People are here now" + '</p>';
        locatorHTML += '<p> Summary: ' + list.hereNow.summary + '</p>';
        locatorHTML += '</li>'
      });

      locatorHTML += '</ul>';
      $('#options').html(locatorHTML);
    };

    $.getJSON (fourSquareAPI, user, displayVenue);
    console.log(displayVenue);

  });

});
