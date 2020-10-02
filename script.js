
const  slideWrapper = document.querySelector('.sideIconsWrapper')
const  linkSlide = document.querySelectorAll('.sideIcons__link');
const  linkContainer = document.querySelector('.sideIcons__container');
const  icons = document.querySelectorAll('.icon');


console.log(window.innerWidth);


window.addEventListener("resize", ()=>{
    if (window.innerWidth>=374){
        slideWrapper.classList.remove('activeWrap');
        linkContainer.classList.remove('sideIcons__container-active');
        linkSlide.forEach(slide =>{
            slide.classList.remove('linkShow');
        })
        icons.forEach(icon =>{
            icon.classList.remove('iconActive')
        })
    }
})



slideWrapper.addEventListener('click', ()=>{

   slideWrapper.classList.toggle('activeWrap');
   linkContainer.classList.toggle('sideIcons__container-active');
    linkSlide.forEach(slide =>{
        slide.classList.toggle('linkShow');
    })
    icons.forEach(icon =>{
        icon.classList.toggle('iconActive')
    })

});