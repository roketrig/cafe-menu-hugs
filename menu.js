const menuData = [
  {
    name: "Americano",
    category: "kahveler",
    description: "",
    price: "150 TL",
    image: "/images/americano.png"
  },
    {
    name: "Ice Americano",
    category: "kahveler",
    description: "",
    price: "155 TL",
    image: "https://cdn-icons-png.flaticon.com/512/12511/12511282.png"
  },
  {
    name: "Espresso",
    category: "kahveler",
    description: "",
    price: "80 TL",
    image: "/images/coffee.png"
  },
    {
    name: "Double Espresso",
    category: "kahveler",
    description: "",
    price: "130 TL",
    image: "/images/coffee.png"
  },
  {
    name: "Affogato",
    category: "kahveler",
    description: "",
    price: "275 TL",
    image: "/images/americano.png"
  },
    {
    name: "Latte",
    category: "kahveler",
    description: "",
    price: "160 TL",
    image: "/images/latte.png"
  },
      {
    name: "Ice Latte",
    category: "kahveler",
    description: "",
    price: "165 TL",
    image: "/images/iced-latte.png"
  },
    {
    name: "Flat White",
    category: "kahveler",
    description: "",
    price: "170 TL",
    image: "/images/latte.png"
  },
    {
    name: "Cortado",
    category: "kahveler",
    description: "",
    price: "150 TL",
    image: "/images/latte.png"
  },
    {
    name: "Cappuccino",
    category: "kahveler",
    description: "",
    price: "150 TL",
    image: "/images/latte.png"
  },
    {
    name: "Macchiato",
    category: "kahveler",
    description: "",
    price: "140 TL",
    image: "/images/latte.png"
  },
    {
    name: "Caramel Macchiato",
    category: "kahveler",
    description: "",
    price: "165 TL",
    image: "/images/latte.png"
  },
    {
    name: "Ice Caramel Macchiato",
    category: "kahveler",
    description: "",
    price: "180 TL",
    image: "/images/latte.png"
  },
    {
    name: "Mocha",
    category: "kahveler",
    description: "",
    price: "165 TL",
    image: "/images/latte.png"
  },
        {
    name: "Ice Chocolate Mocha",
    category: "kahveler",
    description: "",
    price: "180 TL",
    image: "/images/iced-latte.png"
  },
    {
    name: "Türk Kahvesi",
    category: "kahveler",
    description: "",
    price: "80 TL",
    image: "/images/coffee.png"
  },
  {
    name: "Çay",
    category: "kahveler",
    description: "",
    price: "30 TL",
    image: "/images/tea-cup.png"
  },
    {
    name: "Sahlep",
    category: "kahveler",
    description: "",
    price: "250 TL",
    image: "/images/mug.png"
  },
    {
    name: "Cool Lime",
    category: "kahveler",
    description: "",
    price: "0 TL",
    image: "/images/lime-juice.png"
  },

  /*
  Sanviç + Tostssdsd
  */
     {
    name: "Dondurma",
    category: "yemekler",
    description: "",
    price: "Top: 150 TL",
    image: "/images/ice-cream.png"
  },
      {
    name: "Dondurma Kg",
    category: "yemekler",
    description: "",
    price: "1800 TL",
    image: "/images/ice-cream.png"
  },
  /*
  Tatlılar
  */
    {
    name: "Dondurmalı Waffle",
    category: "tatlılar",
    description: "Çilek, Muz, Siyah Çikolata, Beyaz Çikolata ve Tercihinize göre 1 top dondurma",
    price: "475 TL",
    image: "/images/cake.png"
  },

    {
    name: "Dondurmasız Waffle",
    category: "tatlılar",
    description: "Çilek, Muz, Siyah Çikolata, Beyaz Çikolata",
    price: "400 TL",
    image: "/images/cake.png"
  },
   {
    name: "Mozaik Pasta",
    category: "tatlılar",
    description: "",
    price: "200 TL",
    image: "/images/cake.png"
  },

    {
    name: "Brownie",
    category: "tatlılar",
    description: "",
    price: "250 TL",
    image: "/images/cake.png"
  },
    {
    name: "Cookie",
    category: "tatlılar",
    description: "",
    price: "200 TL",
    image: "/images/cake.png"
  },
      {
    name: "Marlenka",
    category: "tatlılar",
    description: "",
    price: "250 TL",
    image: "/images/cake.png"
  },
      {
    name: "Nutella Pie",
    category: "tatlılar",
    description: "",
    price: "250 TL",
    image: "/images/cake.png"
  }
 
  
];

const container = document.getElementById("menu-container");

function renderMenu(category) {
  container.innerHTML = "";
  const filtered = menuData.filter(item => item.category === category);

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <div class="item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="item-price">
        <span>${item.price}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

document.getElementById("btn-kahveler").addEventListener("click", () => renderMenu("kahveler"));
document.getElementById("btn-tatlılar").addEventListener("click", () => renderMenu("tatlılar"));
document.getElementById("btn-yemekler").addEventListener("click", () => renderMenu("yemekler"));


renderMenu("kahveler");