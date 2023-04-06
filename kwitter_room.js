var firebaseConfig = {
      apiKey: "AIzaSyDiRQPWJN7C8PUKdHSddzIydMmee06s0kU",
  authDomain: "chatapp-49d5e.firebaseapp.com",
  databaseURL: "https://chatapp-49d5e-default-rtdb.firebaseio.com",
  projectId: "chatapp-49d5e",
  storageBucket: "chatapp-49d5e.appspot.com",
  messagingSenderId: "502962113825",
  appId: "1:502962113825:web:b542790219c6c6da858260"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("User Name");
    document.getElementById("user_name").innerHTML= "Welcome "+user_name+ " ! ";



    function addRoom()
    {
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location ="chat_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout()
{
      localStorage.removeItem("User Name");
      localStorage.removeItem("room_name");

      window.location ="index.html";
}