function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myreg").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    
  }

  function openreg(){
    document.getElementById("myreg").style.display = " block";
    document.getElementById("myForm").style.display = "none";

  }

  function add() {
    var fnn = document.getElementById("fn").value;
    var lnn = document.getElementById("ln").value;
    var mobb = document.getElementById("mob").value;
    var emaill = document.getElementById("email").value;
    var user= document.getElementById("username").value;
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;


    var obj = { fn: fnn, ln: lnn, mob: mobb, email: emaill, username: user, password: pass1 };
    localStorage.setItem(user, JSON.stringify(obj));
    alert(fnn + " " + lnn+" "+"added");
}
function del() {
    var d = document.getElementById("s").value;
    localStorage.removeItem(d);
    alert("Deleted");
}
function show() {
    var d = document.getElementById("s").value;
    var a = localStorage.getItem(d);
    document.getElementById("1").innerHTML = a;
}