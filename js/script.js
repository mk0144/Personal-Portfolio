// variables
// sections
let scrollValues = [100, 100, 100, 100];
let sections = document.getElementsByTagName("section");
let menu_items = document.getElementsByClassName("menu_item");
menu_items[0].classList.add("active");
// \sections
// home
let roles = ["Web Developer", "Web Designer", "Artist"];
let rolesI = 0;
let charPos = 0;
// \home
// \variables

/////////////// functions /////////////
// menu link click
function menuLinkClick(index) {
  for (i = 0; menu_items.length > i; i++){
    menu_items[i].classList.remove("active");
  }
  menu_items[index].classList.add("active");
}
// \menu link click

// dynamic text
setInterval(function () {
  setText(roles[rolesI].charAt(charPos));

  if (roles[rolesI].length > charPos) {
    charPos++;
  } else if (rolesI === roles.length - 1 && roles[roles.length - 1].length === charPos) {
    document.getElementById("roleText").innerHTML = null;
    rolesI = 0;
    charPos = 0;
  } else {
    document.getElementById("roleText").innerHTML = null;
    rolesI++;
    charPos = 0;
  }
}, 300);

function setText(text) {
  document.getElementById("roleText").innerHTML += text;
}
// \dynamic text

// my current age
function age() {
  curYear = new Date().getFullYear();
  document.getElementById("age").innerHTML = curYear - 2000;
}

age();
// \my current age

// smooth scroll
function scrollFunc(index) {
  let scrollToBottom = Math.sign(event.deltaY) === 1;

  if (scrollToBottom && scrollValues[index] > 0 && scrollValues.length - 1 !== index) {
    // go top to bottom sections
    scrollValues[index] = scrollValues[index] - 100;
    console.log("if", scrollValues);
    sections[index].style.height = scrollValues[index] + "vh";
  } else if (!scrollToBottom && scrollValues[0] !== 100 && scrollValues[index - 1] < 100) {
    // got bottom to top sections
    scrollValues[index - 1] = scrollValues[index - 1] + 100;
    console.log("else", scrollValues);
    sections[index - 1].style.height = scrollValues[index - 1] + "vh";
  }

  for (i = 0; menu_items.length > i; i++){
    menu_items[i].classList.remove("active")
  }

  if (scrollToBottom && scrollValues[index] === 0) {
    menu_items[index + 1].classList.add("active");
  } else if (!scrollToBottom && scrollValues[index - 1] === 100) {
    menu_items[index - 1].classList.add("active");
  } else if (!scrollToBottom && scrollValues[0] === 100) {
    menu_items[0].classList.add("active");
  } else if (scrollToBottom && scrollValues[scrollValues.length - 1] === 100) {
    menu_items[scrollValues.length - 1].classList.add("active");
  } 

}
// \smooth scroll
