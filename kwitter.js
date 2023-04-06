function addUser()
{
    username = document.getElementById("user_name").value;

    localStorage.setItem("User Name" , username);

    window.location="kwitter_room.html";
}

function opg()
{
    window.location="math.html";
}