"use strict";
let dom = document;
const $root = dom.querySelector("#root");
const template = dom.querySelector("#card-template");

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
  const $clone = template.content.cloneNode(true);
  $clone.querySelector("h1").textContent = element.titulo;
  $clone.querySelector("img").setAttribute("src", element.src);
  $clone.querySelector("p").textContent = element.texto;

  $frag.appendChild($clone);
});
$root.appendChild($frag);
