// variables
let i = 0;
let j = 0;
let curScrollY = null;
let scrollValues = [100, 100, 100];
// sections
let sections = document.getElementsByTagName("section");
let menu_links = document.getElementsByClassName("menu_link");
// \sections
let roles = [
  "Web Developer",
  "Web Designer",
  "1st Artist",
  "2nd Artist",
  "3rd Artist",
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
}, 250);

function setText(text) {
  document.getElementById("roleText").innerHTML += text;
}
// \dynamic text

// scroll section
function scrollFunc(index) {
  let yVal = event.deltaY;
  if (Math.sign(yVal) === 1 && scrollValues[index] > 0) {
    if (scrollValues[index - 1] < 100 && scrollValues[index - 1] > 0) {
      scrollValues[index - 1] = scrollValues[index - 1] - 25;
      console.log("if's if", scrollValues);
      sections[index - 1].style.height = scrollValues[index - 1] + "vh";
    } else if (scrollValues.length - 1 !== index) {
      scrollValues[index] = scrollValues[index] - 25;
      console.log("if's else", scrollValues);
      sections[index].style.height = scrollValues[index] + "vh";
    }
  } else if (scrollValues[0] !== 100) {
    if (scrollValues[index] < 100) {
      scrollValues[index] = scrollValues[index] + 25;
      console.log("else if's if", scrollValues);
      sections[index].style.height = scrollValues[index] + "vh";
    } else {
      scrollValues[index - 1] = scrollValues[index - 1] + 25;
      console.log("else if's else", scrollValues);
      sections[index - 1].style.height = scrollValues[index - 1] + "vh";
    }
  }
}
// \scroll section
