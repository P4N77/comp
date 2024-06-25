"use strict";
let dom = document;
const $root = dom.querySelector("#root");

const $frag = dom.createDocumentFragment();
const lista = [
  {
    id: 1,
    titulo: "titulo 1",
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, perferendis?",
    src: "https://picsum.photos/200",
  },
  {
    id: 2,
    titulo: "titulo 2",
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, perferendis?",
    src: "https://picsum.photos/200",
  },
  {
    id: 3,
    titulo: "titulo 3",
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, perferendis?",
    src: "https://picsum.photos/200",
  },
  {
    id: 4,
    titulo: "titulo 4",
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, perferendis?",
    src: "https://picsum.photos/200",
  },
];

lista.forEach((element) => {
  const $div = dom.createElement("div");
  const $h1 = dom.createElement("h1");
  const $p = dom.createElement("p");
  const $img = dom.createElement("img");

  $h1.textContent = element.titulo;
  $img.setAttribute("src", element.src);
  $p.textContent = element.texto;
  $div.appendChild($h1);
  $div.appendChild($img);
  $div.appendChild($p);

  $div.classList.add("card");
  $frag.appendChild($div);
});
$root.appendChild($frag);
