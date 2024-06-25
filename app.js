let win = window;
let dom = document;

const $header = dom.querySelector("header");
const $div = dom.querySelector("div");
const $divs = dom.querySelectorAll("div");
const $main = dom.querySelector("main");
const $div_item = dom.querySelectorAll("main > div.item");
// const $items = dom.getElementsByClassName("item");
const $items = dom.querySelectorAll(".item");
const $itemsid = dom.querySelector("#item");
const $img = dom.querySelector("img");
const $form = dom.querySelector("form");

console.log($header);
console.log($div);
console.log($divs);

const arreglo = [...$divs];
console.log([...$divs]);

arreglo.map((a) => {
  console.log(a);
});

console.log($main.childNodes);
console.log($main.childElementCount);
console.log($div_item);
console.log($items);
console.log($itemsid);

$itemsid.textContent = "hola";
$itemsid.innerHTML = "<p><b>otra palabra</b></p>";
console.log($main.firstElementChild);
console.log($main.lastElementChild);
console.log($main.parentElement);
console.log($main.previousElementSibling);
console.log($main.nextElementSibling);
console.log($img);

$img.setAttribute("src", "https://picsum.photos/seed/picsum/200/300");
$img.setAttribute("alt", "imagen");
console.log($img.classList);
$img.classList.add("block");
console.log($img.classList);
$img.classList.remove("block");
console.log($img.classList);
$img.classList.toggle("block");
$img.classList.add("block", "box");

console.log($form);
$form.setAttribute("enctype", "multipart/form-data");
$form.firstElementChild.setAttribute("type", "file");
