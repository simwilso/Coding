$(document).ready(function() {
  //["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

   $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?").done(function(freecodecampuser){
    if(freecodecampuser.stream === null){
      $("#results1").html("not streaming");            $("#results1").css("background-color", "red");
    } else {
    $("#results1").html(freecodecampuser.stream.stream_type + " - " + freecodecampuser.stream.game);
       $("#results1").css("background-color", "green");
    }
    });
    $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?").done(function(esluser){
     if(esluser.stream === null){
       $("#results2").html("not streaming");             $("#results2").css("background-color", "red");
     } else {
    $("#results2").html(esluser.stream.stream_type + " - " + esluser.stream.game);
       $("#results2").css("background-color", "green");
     }
     });
     $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/OgamingSC2?").done(function(ogaminguser){
      if(ogaminguser.stream === null){
        $("#results3").html("not streaming");              $("#results3").css("background-color", "red");
      } else {      $("#results3").html(ogaminguser.stream.stream_type + " - " + ogaminguser.stream.game);            $("#results3").css("background-color", "green");
      }
      });
      $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/cretetion?").done(function(cretetionuser){
       if(cretetionuser.stream === null){
         $("#results4").html("not streaming");               $("#results4").css("background-color", "red");
       } else {       $("#results4").html(cretetionuser.stream.stream_type + " - " + cretetionuser.stream.game);            $("#results4").css("background-color", "green");
       }
       });
       $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/storbeck?").done(function(storbeckuser){
        if(storbeckuser.stream === null){
          $("#results5").html("not streaming");
          $("#results5").css("background-color", "red");
        } else {       $("#results5").html(storbeckuser.stream.stream_type + " - " + storbeckuser.stream.game);
  $("#results5").css("background-color", "green");
        }
        });
  });
