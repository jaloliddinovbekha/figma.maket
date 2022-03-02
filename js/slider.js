const carouselSlide = document.querySelector('.carousel-slide');

// const slider = document.querySelector('.slider');

const carouselImages = document.querySelectorAll('.carousel-slide img');

// const img = document.querySelectorAll('.img');

/* Buttoms */
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let  cicrle = document.querySelectorAll('#cicrle');

let cicrleButton = document.querySelectorAll('.cicrle_button .cicrle');


/* counter */

let counter = 1;

let i = 1;
let ix = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)'; 
carouselSlide.style.opacity = "1";


/* buttons listeners */

nextBtn.addEventListener('click',  () => {
    if(counter >= carouselImages.length -1 ) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
    // IMG 
    carouselImages[i].classList.remove('active-img');
    i++;
    if(i == carouselImages.length -1){
        i= 1;
    }
    carouselImages[i].classList.add('active-img');
    
    /* INDIKATOR */
    cicrleButton[ix].classList.remove('active-c');
    ix++;
    if(ix == cicrleButton.length){
        ix= 0;
    }
    cicrleButton[ix].classList.add('active-c');
    
});

prevBtn.addEventListener('click',  ()=> {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
    // IMG 
    carouselImages[i].classList.remove('active-img');
    i--;
   if( i <= 0 ){
       i = carouselImages.length -2;
   }
   
   carouselImages[i].classList.add('active-img');
   
   /* INDIKATOR */
   cicrleButton[ix].classList.remove('active-c');
   ix--;
   if( ix < 0 ){
    ix = cicrleButton.length -1;
   }
   
   cicrleButton[ix].classList.add('active-c');
   
   
    
});

for(let  i=0; i<cicrle.length; i++)
{
    cicrle[i].addEventListener('click',() =>{
        /* idvf8sdyv89u */
        
        // if(counter >= carouselImages.length -1 ) return;
        // carouselSlide.style.transition = "transform 0.8s ease-in-out";
        // counter++;
        // carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
        
        /* fhue8uygf8uwrygf */
    for(let x=0; x<cicrle.length;x++){
        cicrle[x].classList.remove('active-c');
        
        // if(counter <= 0) return;
        // carouselSlide.style.transition = "transform 0.8s ease-in-out";
        // counter--;
        // carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
        
    }
    
    cicrle[i].classList.add('active-c');
})
}



carouselSlide.addEventListener('transitionend', () =>{
   if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "transform 1.9s ease-in-out";
    counter = carouselImages.length  -2;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)'; 
    
   }
   if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "transform 1.9s ease-in-out";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)'; 
   }
    
});


const imgslider = document.querySelectorAll('.img_2');
const prevslider = document.querySelector('#prevbtn');
const nextslider = document.querySelector('#nextbtn');
const slider = document.querySelector('.slider');


let s = 0;

nextslider.addEventListener('click', function () {
    imgslider[s].classList.remove('active-tab');
    s++;
    if(s == imgslider.length){
        s=0;
    }
    imgslider[s].classList.add('active-tab');
})
prevslider.addEventListener('click', function () {
    imgslider[s].classList.remove('active-tab');
    s--;
   if( s < 0 ){
       s = imgslider.length -1;
   }
   
   imgslider[s].classList.add('active-tab');
})
