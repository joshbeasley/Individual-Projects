//Client_id = hcuewjhukj8mhau5gw0zubpgqadkuk
//https://api.twitch.tv/kraken/users/44322889?client_id=hcuewjhukj8mhau5gw0zubpgqadkuk
//["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

$(document).ready(function(){
  //array of all the twitch accounts
  var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  //loop therough the to perform functions and receive JSON data
  for(var i = 0; i < streams.length; i++){
    //ajax call to recieve JSON data
    $.ajax({
      type: "GET",
      url: "https://api.twitch.tv/kraken/channels/" + streams[i] + "?client_id=hcuewjhukj8mhau5gw0zubpgqadkuk",
      headers: {'client-ID':'hcuewjhukj8mhau5gw0zubpgqadkuk'},
      success: function(data){
        //console.log(data);
        $.getJSON('https://api.twitch.tv/kraken/streams/'+ data.name + '?client_id=hcuewjhukj8mhau5gw0zubpgqadkuk').done(function(data2){
          var name = data2._links.self.slice(37);
      
          if(data2.stream === null){
            $('#user').append('<p><a href = "https://www.twitch.tv/'+data.name+'" target = "blank">'+data.display_name+'</a></p>');
            $('#status').append('<p id = "offline">Offline</p>');
            $('#game').append('<p>N/A</p>');
            
          }
          else{
            $('#user').append('<p><a href = "https://www.twitch.tv/'+data.name+'" target = "blank">'+data.display_name+'</a></p>');
            $("#status").append('<p id = "online">Online</p>');
            $('#game').append('<p>'+data.game+'</p>');
           
          }
        });
      },
      error: function(errorMessage){
         $('#user').append('<p>Invalid User</p>');
         $('#status').append('<p>Not Found</p>');
         $('#game').append('<p>N/A</p>');
      }

    });
  }
});