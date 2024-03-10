
// Getting elements
// let btn = document.getElementById("btn")
// let btns = document.getElementsByClassName("add")
// let elements = document.getElementsByTagName( "body");
// let getname = document.getElementsByName("street")
// let quary = document.querySelector(".add")
// let quary = document.querySelectorAll(".add")

let body = document.querySelector("body");
console.log(body.classList.contains("add"))


setInterval(() => {
  if(body.classList.contains("dark")){
    body.classList.remove("dark");
  }else{
    body.classList.add("dark")
  }
}, 1000);










//  btn.style.color = "red";
//  btn.style.backgroundColor = "black"