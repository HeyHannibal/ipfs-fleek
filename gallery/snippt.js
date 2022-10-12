setTimeout(() => {
  let menu = document.querySelector('div[title="Toggle menu (m)"]');
  menu.childNodes[0].remove();
  let a = document.createElement("a");
  a.id = "chldlink";
  a.textContent = " fullscreen";
  a.href = "../index.html";
  menu.appendChild(a);
}, 1);
