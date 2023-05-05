const track=document.querySelector(".carousel-track");
const slides=Array.from(track.children);
const prevButton=document.querySelector(".carousel-button-left");
const nextButton=document.querySelector(".carousel-button-right");


//getBoundingClientRect Provides information about the size of an element 
//and its position relative to the viewport.
const slideWidth=slides[0].getBoundingClientRect().width;


//For each slide and the index. Slide gets the slideWidth with the index
//of 0 (starts at 0) and then adds px 
slides.forEach((slide,index)=>{
    slide.style.left = slideWidth * index + "px";
}); 


const moveToSlide=(track,currentSlide,targetSlide)=>{
    track.style.transform="translateX(-"+ targetSlide.style.left +")";
    currentSlide.classList.remove("current-slide");//Removes the classname from the current slide 
    targetSlide.classList.add("current-slide");//Adds the classname to the next element for it to move
};

//When clicked slide moves to the left
prevButton.addEventListener("click",e =>{
    const currentSlide=track.querySelector(".current-slide");//Find what the current slide is
    const prevSlide=currentSlide.previousElementSibling;//Moves with the previous sibling

    moveToSlide(track,currentSlide,prevSlide);
});


//When clicked slide moves to the right
nextButton.addEventListener("click",e =>{
    const currentSlide=track.querySelector(".current-slide");//Find what the current slide is
    const nextSlide = currentSlide.nextElementSibling;//Moves with the next sibling
    
    moveToSlide(track,currentSlide,nextSlide);
});

