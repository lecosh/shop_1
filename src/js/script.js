const closePopUp = () =>{
    const closePopup = document.querySelector('.close')
    const popUps = document.querySelectorAll('.popup')
    const body = document.querySelector('body')
    closePopup.addEventListener('click', ()=>{
        console.log(123);
        popUps.forEach(item=>{
            if (!item.classList.contains('popup--hidden')){
                item.classList.add('popup--hidden')
                body.classList.toggle('overlay')
                closePopup.classList.toggle('close--hidden')
            }
        })
    })
}

const popupCityOpen = () =>{
    const city = document.querySelector('.location__city')
    const body = document.querySelector('body')
    const popup = document.querySelector('.popup')
    const closePopup = document.querySelector('.close')
    city.addEventListener('click', ()=>{
        body.classList.toggle('overlay')
        popup.classList.toggle('popup--hidden')
        closePopup.classList.toggle('close--hidden')
    })
    // closePopup.addEventListener('click', closePopUp())
    
    const cities = document.querySelectorAll('.popup__city')
    cities.forEach(city =>{
        city.addEventListener('click', ()=>{
            document.querySelector('.location__city').innerHTML = city.innerHTML;
        })
    })
}
const popupRegOpen = () =>{
    const profileLink = document.querySelector('.search__personal-link')
    const popupReg = document.querySelector('.reg')
    const body = document.querySelector('body')
    const closePopup = document.querySelector('.close')
    profileLink.addEventListener('click', ()=>{
        body.classList.toggle('overlay')
        popupReg.classList.toggle('popup--hidden')
        closePopup.classList.toggle('close--hidden')
    })
    // closePopup.addEventListener('click', closePopUp())
}
const deliveryBurger = () =>{
    const deliveryItems = document.querySelectorAll('.delivery-burger__btn')
    const close = (index) =>{
        const descriptions = document.querySelectorAll('.delivery-burger__description')
        descriptions.forEach((item, ind) =>{
            if (ind != index){
                item.classList.remove('visible')
                item.style.height = ''
                item.parentElement.querySelector('.delivery-burger__btn').classList.remove('delivery-burger__btn--open')
            }
        })
    }
    deliveryItems.forEach((deliveryItem, index) =>{
        deliveryItem.addEventListener('click', ()=>{
            if (deliveryItem.parentElement.querySelector('.delivery-burger__description').classList.contains('visible')){
                deliveryItem.parentElement.querySelector('.delivery-burger__description').style.height = ''
            }
            else{
                deliveryItem.parentElement.querySelector('.delivery-burger__description').style.height = deliveryItem.parentElement.querySelector('.delivery-burger__description').scrollHeight + 'px'
            }
            deliveryItem.parentElement.querySelector('.delivery-burger__description')
                .classList.toggle('visible')
            deliveryItem.parentElement.querySelector('.delivery-burger__btn')
            .classList.toggle('delivery-burger__btn--open')
            close(index);
        })
    })
}
popupCityOpen();
popupRegOpen();
closePopUp();
deliveryBurger();