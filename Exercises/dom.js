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
