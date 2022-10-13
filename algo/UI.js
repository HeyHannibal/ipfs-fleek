let qsel = (tag) => document.querySelector(tag);
let cre = (tag, className, id) => {
  let elem = document.createElement(tag);
  if (className) elem.setAttribute("class", `${className}`);
  if (id) elem.setAttribute("id", `${id}`);

  return elem;
};

let createArt = document.querySelector("#createBtn");
createArt.addEventListener("click", (e) => {
  draw();
  console.log(console.log(e.target.style.opacity));
  function lightOrDark(color) {
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    // HSP equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return false;
    } else {
      return true;
    }
  }
  isDark = lightOrDark(buttonColor);
  if (isDark) e.target.style.color = "white";
  else e.target.style.color = "black";

  e.target.style.background = buttonColor;
});

let colorSelectorDiv = qsel("#colorPalletes");

// function displayPallete(pllt, index, del) {
//   let plltContainer = cre("div", "color", "div" + index);
//   let background = cre("div", "colors background");
//   background.style.background = pllt.background;
//   let linee = cre("div", "colors line");
//   linee.style.background = pllt.line;
//   let hlt = cre("div", "colors hlt");
//   hlt.style.background = pllt.hlt1;

//   plltContainer.append(background, linee, hlt);
//   colorSelectorDiv.appendChild(plltContainer);
// }
// palletes.forEach((pllt, index) => {
//   displayPallete(pllt, index);
// });

/// select size
let main = document.querySelector("main");

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("main").then((elm) => {
  let ui = document.querySelector("#UI");
  elm.append(ui);
});

let closeModal = document.querySelector("#modalBtn");

let removeModal = (e) => {
  document.querySelector("#modal").remove();
  removeEventListener("click", removeModal, true);
};
closeModal.addEventListener("click", (e) => removeModal(e));

let selectingNShapes = false;
let nShapes = qsel("#NShapes");
nShapes.addEventListener("change", (e) => {
  selectingNShapes = true;
  numberOfShapes = e.target.value;
});
