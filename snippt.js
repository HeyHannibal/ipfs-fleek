setTimeout(() => {
  let menu = document.querySelector('div[title="Toggle menu (m)"]');
  menu.childNodes[0].remove();
  let a = document.createElement("a");
  a.id = "chldlink";
  a.textContent = " fullscreen";
  a.href =
    "https://ipfs.fleek.co/ipfs/QmfP8AKf1V3em29jLsrpD3gDNAsKAKwLja3JjcNgwBKVi9/#/1";
  menu.appendChild(a);
}, 1);
