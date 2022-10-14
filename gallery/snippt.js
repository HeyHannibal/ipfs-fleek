setTimeout(() => {
  let menu = document.querySelector('div[title="Toggle menu (m)"]');
  menu.setAttribute("title", "none");
  menu.classList.remove("ui-button-toggle");

  menu.childNodes[0].remove();
  let a = document.createElement("a");
  a.id = "chldlink";
  a.textContent = "back";
  a.href = "../index.html";
  menu.appendChild(a);
}, 1);
