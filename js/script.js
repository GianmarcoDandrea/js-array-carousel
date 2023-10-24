// DICHIARAZIONI CONSTANTI
const imgArray = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];


let image = `<div class="item active">
                 <img src="./img/01.jpg" alt="">
            </div>`;

for (i = 1; i < imgArray.length; i++) {

    const curImage = imgArray[i];
    image += `<div class="item">
                <img src="${curImage}" alt="">
            </div>`;
}

document.querySelector(".items").innerHTML += image;

//SELEZIONO TUTTI GLI ELEMENTI CON CLASSE ITEM
const imageElem = document.querySelectorAll(".item");
console.log(imageElem);

// CONDIZIONE QUANDO PREMO IL PULSANTE NEXT
let activeImageIndex = 0;
document.querySelector(".next").addEventListener("click", function () {

    if (activeImageIndex < imageElem.length - 1) {

        imageElem[activeImageIndex].classList.remove("active");
        activeImageIndex++;
        imageElem[activeImageIndex].classList.add("active");
    } else {
        // PER IL LOOP
        imageElem[activeImageIndex].classList.remove("active")
        activeImageIndex = 0;
        imageElem[activeImageIndex].classList.add("active");
    }

    console.log(imageElem)
});

// CONDIZIONE QUANDO PREMO IL PULSANTE PREV
document.querySelector(".prev").addEventListener("click", function () {

    if (activeImageIndex > 0) {

        imageElem[activeImageIndex].classList.remove("active");
        activeImageIndex--;
        imageElem[activeImageIndex].classList.add("active");

    } else {
        // PER IL LOOP
        imageElem[activeImageIndex].classList.remove("active")
        activeImageIndex = imageElem.length - 1;
        imageElem[activeImageIndex].classList.add("active");
    }

    console.log(imageElem)
});
