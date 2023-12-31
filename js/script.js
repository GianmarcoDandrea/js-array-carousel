// DICHIARAZIONI CONSTANTI
const imgArray = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];
const items = document.getElementById("items")
let activeImageIndex = 0;

let image = `<div class="item active">
                 <img src="./img/01.jpg" alt="">
            </div>`;

for (i = 1; i < imgArray.length; i++) {

    const curImage = imgArray[i];
    image += `<div class="item">
                <img src="${curImage}" alt="">
            </div>`;
}

items.innerHTML += image;

//SELEZIONO TUTTI GLI ELEMENTI CON CLASSE ITEM
const imageElem = document.querySelectorAll(".item");
console.log(imageElem);

//AUTOLOOP PER BACKGROUND 
let autoLoop;

items.addEventListener("mouseout", function() {
    
    autoLoop = setInterval(function() {
    
        if(activeImageIndex < imageElem.length - 1) {
    
            imageElem[activeImageIndex].classList.remove("active");
            activeImageIndex++;
            imageElem[activeImageIndex].classList.add("active");
        } else {
            imageElem[activeImageIndex].classList.remove("active")
            activeImageIndex = 0;
            imageElem[activeImageIndex].classList.add("active");
        };
            
    }, 3000);
});   


items.addEventListener("mouseover", function(){
    clearInterval(autoLoop);
})

// CONDIZIONE QUANDO PREMO IL PULSANTE NEXT
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
