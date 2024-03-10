
// Getting elements
// let btn = document.getElementById("btn")
// let btns = document.getElementsByClassName("add")
// let elements = document.getElementsByTagName( "body");
// let getname = document.getElementsByName("street")
// let quary = document.querySelector(".add")
// let quary = document.querySelectorAll(".add")
//  btn.style.color = "red";
//  btn.style.backgroundColor = "black"

// let body = document.querySelector("body");
// console.log(body.classList.contains("add"))


// setInterval(() => {
//   // if(body.classList.contains("dark")){
//   //   body.classList.remove("dark");
//   // }else{
//   //   body.classList.add("dark")
//   // }
// }, 1000);

// ////////////////////////ikalasi bir xil ishlidi \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// setInterval(() => {
//   body.classList.toggle("dark");
  
// }, 1000);

////////////////////////// Reading Content\\\\\\\\\\\\\\\\\

// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");

// console.log(h1.innerText);      => elementni textini olib kevotii
// console.log(p.innerText);        => elementni textini olib kevotii
// console.log(h1.textContent);     => Orasidan prabellar bilan olib keladi
// console.log(p.textContent);      => Orasidan prabellar bilan olib keladi
// console.log(h1.innerHTML);      => html taglari bn olib keladi
// console.log(p.innerHTML);        => html taglari bn olib keladi

/////////////////// filterlash \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let Users = [
  { Id : 1 , Name : "Husan",Age : 23 ,price :100  },
  { Id : 2 , Name : "Majid",Age : 43,price :400  },
  { Id : 3 , Name : "Odil",Age : 53,price :200  },
];
// let FilterUsers = Users.filter((User) => User.Age > 43); Filterlab olish 

// let Username = Users.map((user) => {return user.Name}); map qlish 

// let total = Users.reduce((prev, item  ,index, arr) => prev +item.price,0); => total yengndni qoshb beradi

// let find = Users.find((item , index, arr) => item.Id === 2);  =>  bergan narsamizni topb  ozini qaytaradi 



// console.log(Users); 
// console.log(FilterUsers); 
// console.log(Username); 
// console.log(total);
// console.log(find); 