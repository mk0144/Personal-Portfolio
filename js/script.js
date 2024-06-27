// variables
// sections
let scrollValues = [100, 100, 100, 100, 100, 100];
let sections = document.getElementsByTagName("section");
let section_ins = document.getElementsByClassName("section_in");
let menu_items = document.getElementsByClassName("menu-item");
let portfolioMenus = document.getElementsByClassName("portfolioMenu");
let portfolioMenuContents = document.getElementsByClassName("portfolioMenuContent");
// \sections
// home
let roles = ["Web Developer", "Web Designer", "Artist"];
let rolesI = 0;
let charPos = 0;
// \home

// colors
let primay = "#6200ee";
// colors
// \variables

/////////////// functions /////////////
// on init
menu_items[0].classList.add("active");
section_ins[0].classList.add("scale1");
// \on init

// menu link click
function menuLinkClick(index) {
  sections[index].scrollIntoView();
  for (i = 0; menu_items.length > i; i++) {
    menu_items[i].classList.remove("active");
    if (i < index) {
      scrollValues[i] = 0;
    }
  }
  scrollValues[index] = 100;
  menu_items[index].classList.add("active");
  section_ins[index].style.transform = "scale(1)";
  console.log(scrollValues);
}
// \menu link click

// dynamic text
setInterval(function () {
  setText(roles[rolesI].charAt(charPos));

  if (roles[rolesI].length > charPos) {
    charPos++;
  } else if (
    rolesI === roles.length - 1 &&
    roles[roles.length - 1].length === charPos
  ) {
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

  if (
    scrollToBottom &&
    scrollValues[index] > 0 &&
    scrollValues.length - 1 !== index
  ) {
    // go top to bottom sections
    scrollValues[index] = scrollValues[index] - 100;
    sections[index].style.height = scrollValues[index] + "vh";
    console.log("scroll if" + ",  " + sections[index].style.height);
  } else if (
    !scrollToBottom &&
    scrollValues[0] !== 100 &&
    scrollValues[index - 1] < 100
  ) {
    // got bottom to top sections
    scrollValues[index - 1] = scrollValues[index - 1] + 100;
    sections[index - 1].style.height = scrollValues[index - 1] + "vh";
    console.log("scroll else if" + ",  " + sections[index - 1].style.height);
  }

  for (i = 0; menu_items.length > i; i++) {
    menu_items[i].classList.remove("active");
    section_ins[i].style.transform = "scale(0.6)";
  }

  if (scrollToBottom && scrollValues[index] === 0) {
    menu_items[index + 1].classList.add("active");
    section_ins[index + 1].style.transform = "scale(1)";
    console.log("if", scrollValues);
  } else if (!scrollToBottom && scrollValues[index - 1] === 100) {
    menu_items[index - 1].classList.add("active");
    section_ins[index - 1].style.transform = "scale(1)";
    console.log("else if 1", scrollValues);
  } else if (!scrollToBottom && scrollValues[0] === 100) {
    menu_items[0].classList.add("active");
    section_ins[0].style.transform = "scale(1)";
    console.log("else if 2", scrollValues);
  } else if (scrollToBottom && scrollValues[scrollValues.length - 1] === 100) {
    menu_items[scrollValues.length - 1].classList.add("active");
    section_ins[index].style.transform = "scale(1)";
    console.log("else if 3", scrollValues);
  }
}
// \smooth scroll

// portfolio
function portfolioMenuClick(index) {
  for (i = 0; i < portfolioMenuContents.length; i++) {
    portfolioMenuContents[i].style.display = "none";
    portfolioMenus[i].style.backgroundColor = "initial";
  }
  portfolioMenuContents[index].style.display = "block";
  portfolioMenus[index].style.backgroundColor = primay;
}
// \portfolio
