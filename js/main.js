let base = [
    {id:1, img:"./image/image 1.png", title: 'Syltherine',subtitle:"Stylish cafe chair",price:"Rp 2.500.000"},
    {id:2, img:"./image/image 2.png", title: 'Leviosa',subtitle:"Stylish cafe chair",price:"Rp 2.500.000"},
    {id:3, img:"./image/image 3.png", title: 'Lolito',subtitle:"Luxury big sofa",price:"Rp 7.000.000"},
    {id:4, img:"./image/image 4.png", title: 'Respira',subtitle:"Minimalist fan",price:"Rp 500.000"},
    {id:5, img:"./image/image 9.png", title: 'Grifo',subtitle:"Night lamp",price:"Rp 1.500.000"},
    {id:6, img:"./image/image 6.png", title: 'Muggo',subtitle:"Small mug",price:"Rp 150.000"},
    {id:7, img:"./image/image 7.png", title: 'Pingky',subtitle:"Cute bed set",price:"Rp 7.000.000"},
    {id:8, img:"./image/image 8.png", title: 'Potty',subtitle:"Minimalist flower pot",price:"Rp 500.000"},
]
let container = document.querySelector(".container")
let row = document.querySelector(".row")
base.forEach((item)=> {
    row.innerHTML += `<div class="card" id="${item.id}">
    <img src="${item.img}", alt="${item.subtitle}">
    <h2 class="card_title">${item.title}</h2>
    <p class="card_subtatle">${item.subtitle}</p>
    <p class="price">${item.price}</p>
    </div>`
})
container.innerHTML += `<div class="div_link"><a class="link" href="#">Show More</a></div>`