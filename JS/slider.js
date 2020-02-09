let firstImage = document.querySelector('.background-picture')
let slider = ["img/slider-image1.jpg","img/slider-image2.jpg","img/slider-image3.jpg"]

let imageIndex = 1;
let imageIndexLeft = 1;
let dugmeDesno = document.querySelector('.dugme-desno') 
let dugmeLevo = document.querySelector('.dugme-levo') 

function changeSlide(){
    firstImage.src = slider[imageIndex];
    if (imageIndex < slider.length -1){
        imageIndex++;
    }
    else {
        imageIndex = 0;
    }
    console.log(imageIndex)
}
function changeSlideLeft(){
    
    firstImage.src = slider[imageIndexLeft];
    if (imageIndexLeft > 0){
        imageIndexLeft--;
    }
    else {
        imageIndexLeft = slider.length-1;
    }
    console.log(imageIndexLeft)
}

dugmeDesno.addEventListener('click',changeSlide)
dugmeLevo.addEventListener('click',changeSlideLeft)

/* image: "",
        title: "",
        description: "",
        url: ""
        
function changeSlideLevo(){
    firstImage.setAttribute('src', slider[imageIndexLevo])
    imageIndexLevo--;
    if (imageIndexLevo < 0){imageIndexLevo = 2}
}        
        
        
        
        */
