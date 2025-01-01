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
const arrayInput = document.getElementById('arrayInput');
const numberInput = document.getElementById('numberInput');
const findButton = document.getElementById('findButton');
const output = document.getElementById('output');

function findIndex(arr, num) {
    const index = arr.indexOf(num); 
    return index !== -1 ? index : -1; 
}

findButton.addEventListener('click', () => {
    const array = arrayInput.value.split(',').map(Number);
    const number = parseFloat(numberInput.value);

    const result = findIndex(array, number);
    if (result !== -1) {
        output.textContent = `the index of number: ${result}`;
    } else {
        output.textContent = `the number cannot be found: ${result}`;
    }
});




