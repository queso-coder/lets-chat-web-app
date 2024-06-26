function loginBtn() {
user_name1 = document.getElementById("username").value;
localStorage.setItem("username", user_name1);
window.location="kwitter_room.html";
}