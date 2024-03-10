let images = [
  "D:\js\rasn.jpg",
  // "https://www.google.com/url?sa=i&url= https%3A%2F%2Fwww.architecturaldigest.com%2Fgallery%2Fcars-future-bentley-bugatti-lamborghini&psig=AOvVaw2KzSv01Ohyr2BtAk-CM1J8&ust=1710155678980000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDChcDI6YQDFQAAAAAdAAAAABAE"
];

let imageElem = document.querySelector(".image");
console.log(imageElem.getAttribute("alt"));
// let i = 0;
imageElem.setAttribute("src", images[0]);

// setInterval(() => {
//   if (++i === images.length){
//     i = 0 ;
//   }
//   imageElem.setAttribute("src", images[i]);
// },1000 )
