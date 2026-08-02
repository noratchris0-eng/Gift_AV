// =============================
// ELEMENTOS
// =============================

const startBtn = document.getElementById("startBtn");
const showGallery = document.getElementById("showGallery");
const finalBtn = document.getElementById("finalBtn");
const loveBtn = document.getElementById("love");

const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const finalSection = document.getElementById("final");

const music = document.getElementById("music");

// =============================
// ABRIR CARTA
// =============================

startBtn.addEventListener("click", () => {

    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {});

});

// =============================
// MOSTRAR GALERÍA
// =============================

showGallery.addEventListener("click", () => {

    gallery.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth"
    });

});

// =============================
// MENSAJE FINAL
// =============================

finalBtn.addEventListener("click", () => {

    finalSection.classList.remove("hidden");

    finalSection.scrollIntoView({
        behavior: "smooth"
    });

});

// =============================
// BOTÓN FINAL
// =============================

loveBtn.addEventListener("click", () => {

    alert("❤️ Yo también te amo muchísimo, Evangeline ❤️");

    lluviaCorazones();

});

// =============================
// LLUVIA DE CORAZONES
// =============================

function crearCorazon(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (15 + Math.random()*25) + "px";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(crearCorazon,300);

// =============================
// LLUVIA INTENSA
// =============================

function lluviaCorazones(){

    for(let i=0;i<80;i++){

        setTimeout(()=>{
            crearCorazon();
        },i*80);

    }

}

// ===========================
// CARRUSEL
// ===========================

const slides = document.querySelectorAll(".carousel-track img");

let current = 0;

function mostrarSlide(indice){

    slides.forEach((img)=>{

        img.classList.remove("active");

    });

    slides[indice].classList.add("active");

}

function siguiente(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    mostrarSlide(current);

}

function anterior(){

    current--;

    if(current < 0){

        current = slides.length - 1;

    }

    mostrarSlide(current);

}

document.querySelector(".next").onclick = siguiente;

document.querySelector(".prev").onclick = anterior;

// Cambia automáticamente cada 4 segundos
setInterval(siguiente,4000);