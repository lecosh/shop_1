const modal = {
    open(width, height, title, content, id, name){
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', `
            <div class="modal" data-name="${name}" style="
                width: ${width};
                height: ${height};
            ">
                <h2 class="modal-title">${title}</h2>
                <div class="modal-content modal-content-${id}">${content}</div>
            </div>
            <div class="modal-overlay"></div>
            <button class="modal-close-btn"><img src="images/close.svg" alt=""></button>
        `)
        setTimeout(() => {
            document.querySelector('.modal').classList.add('modal-open');
            document.querySelector('.modal-overlay').classList.add('modal-open');          
        }, 100);
    },
    close(){
        document.querySelector('.modal').classList.remove('modal-open');
        document.querySelector('.modal-overlay').classList.remove('modal-open');
        setTimeout(() => {
            document.querySelector('.modal').remove();
            document.querySelector('.modal-overlay').remove();
            document.querySelector('.modal-close-btn').remove();
        }, 200);
    },
    openReg(content, title, width, height){
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        modal.style.width = width;
        modal.style.height = height;
        document.querySelector('.modal > .modal-content > form').innerHTML = '';
        document.querySelector('.modal > .modal-title').innerHTML = '';
        document.querySelector('.modal > .modal-title').innerHTML = title;
        document.querySelector('.modal > .modal-content').innerHTML = content;
    }
}
const modalsArr = [
    {
        id: 1,
        name: 'city',
        width: '572px',
        height: '396px',
        title: 'Выберите ваш город',
        content: `
            <div class="modal-1-wrapper">
                <div class="modal-input-1-container">
                    <input type="text" class="modal-input-1" placeholder="Поиск">
                    <button class="modal-btn-1"><img src="images/search.svg" alt=""></button>
                </div>
                <div class="modal-cities">
                    <div class="modal__cities-row">
                        <p class="modal__city">Москва</p>
                        <p class="modal__city">Екатеринбург</p>
                        <p class="modal__city">Челябинск</p>
                        <p class="modal__city">Уфа</p>
                        <p class="modal__city">Воронеж</p>
                    </div>
                    <div class="cities-row">
                        <p class="modal__city">Санкт-Петербург</p>
                        <p class="modal__city">Казань</p>
                        <p class="modal__city">Самара</p>
                        <p class="modal__city">Омск</p>
                        <p class="modal__city">Пермь</p>
                    </div>
                    <div class="cities-row">
                        <p class="modal__city">Новосибирск</p>
                        <p class="modal__city">Нижний Новгород</p>
                        <p class="modal__city">Ростов-на-Дону</p>
                        <p class="modal__city">Красноярск</p>
                        <p class="modal__city">Красноярск</p>
                    </div>
                </div>
            </div>
            
        `
    },
    {
        id: 2,
        name: 'profile',
        width: '376px',
        height: '490px',
        title: 'Вход',
        content: `
        <form action="#" class="modal-auth__form">
            <label for="" class="modal-auth__label">E-mail</label>
            <input type="text" class="modal-auth__input modal-auth__email" placeholder="youmail@mail.com">
            <label for="" class="modal-auth__label">Пароль</label>
            <input type="password" class="modal-auth__input modal-auth__password">
            <a href="" class="modal-auth__forget-pass">Забыли пароль?</a>
            <button class="modal-auth__sign-in-btn" type="submit">Войти</button>
            <button class="modal-auth__reg-btn open-modal" data-name="registration" type="button">Создать учетную запись</button>
        </form>
        `
    },
    {
        id: 3,
        name: 'registration',
        width: '572px',
        height: '396px',
        title: 'Регистрация',
        content: `
        <form action="#" class="modal-reg__form">
            <div class="modal-reg-top modal-reg-content">
                <div class="modal-reg-section">
                    <label for="name" class="modal-reg__label">Имя</label>
                    <input type="text" class="modal-reg-name modal-reg__input _req" placeholder="Введите имя" name="name">
                </div>
                <div class="modal-reg-section">
                    <label for="email" class="modal-reg__label">E-mail</label>
                    <input type="text" class="modal-reg-email modal-reg__input _req reg-email" placeholder="youmail@mail.com" name="email">
                </div>
            </div>
            <div class="modal-reg-bottom modal-reg-content">
                <div class="modal-reg-section">
                    <label for="pass" class="modal-reg__label">Новый пароль</label>
                    <input type="password" class="modal-reg-pass modal-reg__input _req" name="pass">
                </div>
                <div class="modal-reg-section">
                    <label for="confirm-pass" class="modal-reg__label">Подтверждение пароля</label>
                    <input type="password" class="modal-reg-confpass modal-reg__input _req" name="confirm-pass">
                </div>
            </div>
            <button class="modal-reg__register" type="submit">Зарегистрироваться</button>
        </form>
        `,
        closable: true
    }
]
const openModal = () =>{
    const modalBtns = document.querySelectorAll('.open-modal')//массив кнопок по которым открываются модальные окна
    modalBtns.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            const index = modalsArr.findIndex((element)=>{//находим индекс элемента, свойство которого совпадает с dataset на нажатом элементе в объекте modalArr
                if (element.name === item.dataset.name){
                    return true;
                }
            })
            modal.open(modalsArr[index].width, modalsArr[index].height, modalsArr[index].title, modalsArr[index].content, modalsArr[index].id, modalsArr[index].name);
            if (modalsArr[index].name === 'profile'){
                const indexReg = modalsArr.findIndex((element)=>{
                    if (element.name === 'registration') {
                        return true;
                    }
                })
                const modalRegOpenBtn = document.querySelector('.modal-auth__reg-btn');
                modalRegOpenBtn.addEventListener('click', ()=>{
                    modal.openReg(modalsArr[indexReg].content, modalsArr[indexReg].title, modalsArr[indexReg].width, modalsArr[indexReg].height)
                })
            }
            const modalCloseBtn = document.querySelector('.modal-close-btn');
            modalCloseBtn.addEventListener('click', ()=>{
                modal.close();
            })
        })
    })
}
openModal();
