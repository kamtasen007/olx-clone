let country = document.getElementById("country");
let moving = document.getElementById("moving");
let text = document.getElementById("text")
let List = document.getElementById("List")

country.addEventListener("click", () => {
    List.classList.toggle("hidden");
    moving.classList.toggle("rotate");
});

function myFunction(country) {
    text.innerHTML = country;
};

let eng_tag = document.getElementById("eng_tag");
let hin_eng = document.querySelector(".hin_eng");
let langauge = document.querySelector(".langauge");

langauge.addEventListener('click', () => {
    hin_eng.classList.toggle("display_div")
})

function Langauge(lang) {
    eng_tag.innerHTML = lang;

}

let boy_img_id = document.getElementById('boy_img_id');
let dropdwonid = document.getElementById('dropdownid');

boy_img_id.addEventListener('click', () => {
    dropdwonid.classList.toggle("block_div")
})

Load_more_id = document.getElementById('Load_more_id');
load_more_product_id = document.getElementById('load_more_product_id');

Load_more_id.addEventListener("click", () => {
    load_more_product_id.style = "display:block";
    Load_more_id.style = "display:none"
})