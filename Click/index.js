
let btn = document.querySelector("#Btn");


// Click yani bir mata bosilganda ishilidi 
btn.addEventListener("click", () => {
  // alert ("Salom");
})

//  dbclick => ikki marta bosganda ishlidi
btn.addEventListener("dblclick", () => {
  // alert ("SalomDbl");
})

// contextmenu => sichqonchani ong tarafi bosilganda ishlidi  ishlab menu chiqadi
btn.addEventListener("contextmenu", () => {
  alert ("Salom menu");
})