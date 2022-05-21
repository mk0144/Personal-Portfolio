// variables
// sections
let scrollValues = [100, 100, 100, 100];
let sections = document.getElementsByTagName("section");
let menu_items = document.getElementsByClassName("menu_item");
menu_items[0].classList.add("active");
// \sections
// home
let roles = ["Web Developer", "Web Designer", "Artist", "Police"];
let rolesI = 0;
let charPos = 0;
// \home
// \variables

/////////////// functions /////////////
// dynamic text
setInterval(function () {
  setText(roles[rolesI].charAt(charPos));

  if (roles[rolesI].length > charPos) {
    charPos++;
    console.log("if");
  } else {
    document.getElementById("roleText").innerHTML = null;
    if (roles[3].length === charPos) {
      rolesI = 0;
      charPos = 0;
      console.log("else if");
    } else {
      rolesI++;
      charPos = 0;
      console.log("else's else");
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
