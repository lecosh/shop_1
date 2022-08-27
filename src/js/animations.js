const headerMiddle = document.querySelector('.header__middle')
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 42){
        headerMiddle.classList.add('header__middle--fixed')
    }
    else if(window.scrollY < 42){
        headerMiddle.classList.remove('header__middle--fixed')
    }
})
