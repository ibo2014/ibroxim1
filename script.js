const addBtn = document.getElementById("addBtn");
let container = document.getElementById("container");

const hereos = [
  {
    name: "spiderman",
    age: "18",
    power: "tor chiqarish",
    info: "Spiderman - bu Marvel Comics kompaniyasining superqahramoni bo'lib, u o'zining ajoyib kuchlari va tezligi bilan tanilgan.",
    likes: 1500,
  },
  {
    name: "batman",
    age: "35",
    power: "aql va texnologiya",
    info: "Batman - DC Comics kompaniyasining superqahramoni bo'lib, u o'zining aql-zakovati va texnologik qurilmalari bilan jinoyatchilikka qarshi kurashadi.",
    likes: 2000,
  },
  {
    name: "Flash",
    age: "28",
    power: "super tezlik",
    info: "Flash - DC Comics kompaniyasining superqahramoni bo'lib, u o'zining super tezligi bilan tanilgan va vaqtni boshqarish qobiliyatiga ega.",
    likes: 1800,
  },
];

function createCard() {
  let name = prompt("Qahramon nomi:");
  let age = prompt("Qahramon yoshi:");
  let power = prompt("Qahramon kuchi:");
  let info = prompt("Qahramon haqida ma'lumot:");

  let newHero = {
    name,
    age,
    power,
    info,
    likes: 0,
  };

  hereos.push(newHero);
  renderdate()
}

addBtn.onclick = createCard;

function renderdate() {
     container.innerHTML = "";

  for (let i = 0; i < hereos.length; i++) {
     let div = document.createElement('div');
  div.classname = "card";

  let h2 = document.createElement('h2');
  h2.textContent = hereos[i].name;

  let power = document.createElement('p');
  power.textContent = "kuchi " + hereos[i].power;

  let age = document.createElement('p');
  age.textContent = "yoshi " + hereos[i].age;

  let info = document.createElement('p');
  info.textContent = hereos[i].info;

  let btn = document.createElement('button');
  btn.textContent = `Like ${hereos[i].likes}`;

  div.appendChild(h2);
  div.appendChild(power);
  div.appendChild(age);
  div.appendChild(info);
  div.appendChild(btn);

     container.appendChild(div);
  }
}

renderdate()
