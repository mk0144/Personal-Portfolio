// variables
let i = 0;
let j = 0;
let curScrollY = null;
let scrollValues = [100, 100, 100, 100];
// sections
let sections = document.getElementsByTagName("section");
let menu_items = document.getElementsByClassName("menu_item");
menu_items[0].classList.add("active");
// \sections
let roles = [
  "Web Developer",
  "Web Designer",
  "Artist",
];
// \variables

// dynamic text
setInterval(function () {
  setText(roles[i].charAt(j));
  if (roles[i].length > j) {
    j++;
  } else {
    document.getElementById("roleText").innerHTML = null;
    if (roles[roles.length - 1].length === j) {
      i = 0;
      j = 0;
    } else {
      i++;
      j = 0;
    }
  }
}, 300);

function setText(text) {
  document.getElementById("roleText").innerHTML += text;
}
// \dynamic text

// smooth scroll
function scrollFunc(index) {
  let scrollToBottom = Math.sign(event.deltaY) === 1;

  if (scrollToBottom && scrollValues[index] > 0) {
    // go top to bottom sections
    if (scrollValues[index - 1] < 100 && scrollValues[index - 1] > 0) {
      scrollValues[index - 1] = scrollValues[index - 1] - 50;
      console.log("if's if", scrollValues);
      sections[index - 1].style.height = scrollValues[index - 1] + "vh";
    } else if (scrollValues.length - 1 !== index) {
      scrollValues[index] = scrollValues[index] - 50;
      console.log("if's else", scrollValues);
      sections[index].style.height = scrollValues[index] + "vh";
    }
  } else if (!scrollToBottom && scrollValues[0] !== 100) {
    // got bottom to top sections
    if (scrollValues[index] < 100) {
      scrollValues[index] = scrollValues[index] + 50;
      console.log("else if's if", scrollValues);
      sections[index].style.height = scrollValues[index] + "vh";
    } else if (scrollValues[index - 1] < 100) {
      scrollValues[index - 1] = scrollValues[index - 1] + 50;
      console.log("else if's else", scrollValues);
      sections[index - 1].style.height = scrollValues[index - 1] + "vh";
    }
  }
}
// \smooth scroll
