//Day 1

// select first element
const div = document.querySelector("div");
//select all element
const divs = document.querySelectorAll("div");
//select all images in an element
const imgs = document.querySelectorAll("div img");
//or can be
const div2 = document.querySelector("div");
const imgs = div2.querySelectorAll("img");
// some methods
const heading = document.querySelector("h1");
console.log(heading.textContent); // this take care of the text inside the element with taking care of the style too
console.log(heading.innerText); // just the text the way it's displayed

console.log(heading.innerHTML); // the text
console.log(heading.outerHTML); // text with tag

//example

const pizza = document.querySelector(".pizza");
// add to end of the text
pizza.textContent = `${pizza.textContent} 2`;

// other way using insertAdjacentText (MDN)
pizza.insertAdjacentText("afterbegin", "2"); // inside the corrent tags in the beganing
pizza.insertAdjacentText("afterend", "2"); // outside the corrent tags in the end
pizza.insertAdjacentText("beforeend", "2"); // inside the corrent tags in the end
pizza.insertAdjacentText("beforebegin", "2"); // outside the corrent tags in the beganing

//class
const pic = document.querySelector(".img");
// add class to the element
pic.classList.add("open");
//remove
pic.classList.remove("img");
//toggle
pic.classList.toggle("round");
// you can make it a function too
function round() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", round());

//attributet
pic.alt = "cute cat";
pic.width = 440; //pixel
console.log(pic.naturalWidth);
// sey custom attr
pic.setAttribute("marwan-is-good", "really");
//get the value
pic.getAttribute("alt");
//get list pf attrs
pic.dataset;

//Day2

//creating new element
// make a paragrap p with text inside and class
const myParagraph = document.createElement("p");
myParagraph.textContent = "I am cool";
myParagraph.classList.add("special");

// create img
const myImsge = document.createElement("img");
myImsge.src = "https://picsum.photo/500";
myImsge.alt = "nice photo";

//create div

const myDiv = document.createElement("div");
myDiv.classList.add("container");

// Add the img to the div

myDiv.appendChild(myImsge);
myDiv.appendChild(myParagraph);

// then add to body * order is better add everything you need before append to html
document.body.appendChild(myDiv);
//use insertAdjacentText  if you want to but that div before anything for example like earlier
document.body.insertAdjacentText("afterbegin", myDiv); // inside the corrent tags in the beganing

//other way with string

const width = 400;
const src = `https://picsum.phots/${width}`;
const desc = `Cute pic`;
const myHtml = `
  <div class="container">
    <h2> Cute ${desc}</h2>
    <img src=${src} alt=${desc} >
  </div>
`;
// turn the string into DOM element
const myFragment = document.createRange().createContextualFragment(myHtml);
// append it
document.body.appendChild(myFragment);

//Traversing and Removing Nodes
// sone usful way to traversing

const me = document.querySelector(".me");
//see children elements
me.children;
//see first chile
me.firstElementChild;
//see last child
me.lastElementChild;
//see previous element
me.previousElementSibling;
//see next element
me.nextElementSibling;
// see the parent
me.parentElement;

//remove
me.remove();
