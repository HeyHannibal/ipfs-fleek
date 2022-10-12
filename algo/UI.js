let qsel = (tag) => document.querySelector(tag);
let cre = (tag, className, id) => {
  let elem = document.createElement(tag);
  if (className) elem.setAttribute("class", `${className}`);
  if (id) elem.setAttribute("id", `${id}`);

  return elem;
};

let createArt = document.querySelector("#createBtn");
createArt.addEventListener("click", () => {
  draw();
  console.log();
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
