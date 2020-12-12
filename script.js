// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info 
var config = {
  apiKey: "<your data>",
    authDomain: "<your data>",
    databaseURL: "<your data>",
    projectId: "nodemcu-efe88",
    storageBucket: "<your data>",
    messagingSenderId: "<your data>",
    appId: "<your data>",
    measurementId: "<your data>"
};
firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var HeartBeat;

  database.ref().on("value", function(snap){
    HeartBeat = snap.val().HeartBeat;
    if(HeartBeat == 1){
      $(".lightStatus").text("The light is on");
    } else {
      $(".lightStatus").text("The light is off");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("HeartBeat");

    if(HeartBeat == 1){
      firebaseRef.set(0);
      HeartBeat = 0;
    } else {
      firebaseRef.set(1);
      HeartBeat = 1;
    }
  });
});
