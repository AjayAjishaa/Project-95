
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBi9MwLO-3kmVB5w7odNHf-u9WjUZ8s8Tk",
    authDomain: "let-chat--web-app.firebaseapp.com",
    databaseURL: "https://let-chat--web-app-default-rtdb.firebaseio.com",
    projectId: "let-chat--web-app",
    storageBucket: "let-chat--web-app.appspot.com",
    messagingSenderId: "802924335775",
    appId: "1:802924335775:web:82642fc3ce560dde7608aa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="welcome " + user_name + "!";
 
    function addRoom()
     {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
        });
 
        localStorage.setItem("room_name", room_name);
 
        window.location ="kwitter_page.html";
     }
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("room_name-" + Room_names);
        row ="<div class='room_name' id=" + Room_names +"onclick='redirectToRoomName(this.id)'> #" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
       });});}
 getData();
 function redirectToRoomName(name)
 {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location ="kwitter_page.html";
 }



  
  