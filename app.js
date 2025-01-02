//////////////////////Q1 ///////////////////////

let fruits = ["Apple", "Lemon","Orange", "Kiwi", "Mango"];
let urlImage=["image/apple.jpg","image/lemon.jpg","image/orange.jpg","image/kiwi.jpg","image/mango.jpg"];
let list = document.createElement("ul");
document.body.appendChild(list);

for(let i=0; i<fruits.length ;i++){
let typeFruit = document.createElement("li");
let imges =  document.createElement("img");
document.getElementById("fruit").appendChild(typeFruit);
document.getElementById("fruit").appendChild(imges);
typeFruit.textContent = fruits[i];
imges.setAttribute("src", urlImage[i]);
imges.style.width = "100px", height = "auto";

}

///////////////////////////////Q2///////////////////////////
let num = prompt("Enetr Number");
let arr = [10, 15, 12, 17,20];

function equal(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) 
        return i;
  }
  return -1;
}

console.log(equal(arr, num));


