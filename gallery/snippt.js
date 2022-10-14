setTimeout(() => {
  let menu = document.querySelector('div[title="Toggle menu (m)"]');
  // console.log(menu.removeEventListener("click"), "");
  console.log(getEventListeners(menu));
  menu.childNodes[0].remove();

  let a = document.createElement("a");
  a.id = "chldlink";
  a.textContent = "back";
  a.href = "../index.html";
  menu.appendChild(a);
}, 1);
let aaa = document.querySelector('div[title="Toggle menu (m)"]');
console.log(aaa);
