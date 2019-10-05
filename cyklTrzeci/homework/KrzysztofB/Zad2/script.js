const slider = document.getElementById('slider')
const sliderItems = [...slider.querySelectorAll('li')]
let sliderItem = 0;


slider.querySelector(".control_next").addEventListener('click', nextSlide)
slider.querySelector(".control_prev").addEventListener('click', prevSlide)


function nextSlide(){
    sliderItems[sliderItem].classList.remove('show')
    sliderItem++
    if(sliderItem >= sliderItems.length) sliderItem = 0
    sliderItems[sliderItem].classList.add('show')
}

function prevSlide(){
    sliderItems[sliderItem].classList.remove('show')
    sliderItem--
    if(sliderItem < 0) sliderItem = sliderItems.length - 1
    sliderItems[sliderItem].classList.add('show')
}
// auto slider
setInterval(nextSlide, 3000);