// Select the element
const btn = document.querySelector(".btn");
// the function
const handlclick = () => {
  console.log("Hey! You!");
};
btn.addEventListener("click", handlclick);
// to remove it
btn.removeEventListener("click", handlclick);

// now if we need to apply the same eventlistener to multiplie btns
// select all the elements
const buyBtn = document.querySelectorAll(".buyBtn");
// what to do
const handleBuy = () => {
  console.log("added");
};
// handle the click
const handleBuyClick = (buybutton) => {
  buybutton.addEventListener("click", handleBuy);
};
// add it to forEach so it can loop all over the elements
buyBtn.forEach(handleBuyClick);
