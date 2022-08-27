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
deliveryBurger();
