// get slider item  | Array.from 
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slides
let slidesCount = sliderImages.length;

// set current slide 
let currentSlide = 1;

// slide number element 
let slideNumberElement = document.getElementById("slide-number");

// prev and next btn
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// handle onclick in prev and next
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create the main UL Element 
let paginationElement = document.createElement('ul');

// set id on created element
paginationElement.setAttribute("id","pagination-ul");

// create list items based on slide count
for (let i = 1;i <= slidesCount; i++){
    // create the li
    let paginationItem = document.createElement("li");

    // set custom attribute
    paginationItem.setAttribute("data-index", i);

    // set item content
    paginationItem.appendChild(document.createTextNode(`${i}`));

    // append item to the main ul list

    paginationElement.appendChild(paginationItem);


}
// append main ul to the body
document.getElementById("indicators").appendChild(paginationElement);

// get the new created ul 
let paginationCreatedUl = document.getElementById("pagination-ul");
// get pagination items
let paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop through bullets item
for (let i =0; i < paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute("data-index"));

        theChecker();
    }

}
    



// trigger the checker function
theChecker();








// function next slide
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {
        return false;

    } else {

    currentSlide++

    theChecker();

    }

}
// function prev slide
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;

    } else {

    currentSlide--

    theChecker();

    }
}
// create the checker function 
function theChecker() {
    // remove all active class
    removeAllActive();
    
    // set the slide number
    slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`

    // set active class to current slide
    sliderImages[currentSlide -1].classList.add("active")

    // set active class on current pagination
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");

    
}

// remove all active classes 

function removeAllActive() {

    // loop through images 
    sliderImages.forEach(img => {
        img.classList.remove("active")
    })

    // loop throw bullets
    paginationsBullets.forEach(bullet => {
        bullet.classList.remove("active")
    })

    // check if the current slide is the first
    if (currentSlide == 1) {
        
        prevButton.classList.add("disabled");

    } else {

        prevButton.classList.remove("disabled");


    }
    // check if current slide is the last
    if (currentSlide == slidesCount) {
        
        nextButton.classList.add("disabled");

    } else {

        nextButton.classList.remove("disabled");


    }
    


}



