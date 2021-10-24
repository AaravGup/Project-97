function addRooms(){
    Room_name = document.getElementById("room_name").value;
    localStorage.setItem("Room_name",Room_name);
    window.location = "kwitter_page.html";
    firebase.database().ref("/").child().update({
        purpose:"adding user"
    });
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("room_name -" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_room.html";
    
    }
    function logOut(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
      }