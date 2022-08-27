import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
const registration = () =>{
    const modalWindow = document.querySelector('.modal');
    const form = document.querySelector('.modal-reg__form');
    const submitBtn = document.querySelector('.modal-reg__register');
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        let error = validation();
        const user = {};
        const userForAuth = {};
        if (error === 0){
            const data = form.querySelectorAll('._req');
            data.forEach(item =>{
                if (item.name === 'name') user.name = item.value;
                if (item.name === 'email') {
                    user.email = item.value;
                    userForAuth.email = item.value;
                };
                if (item.name === 'pass') {
                    user.password = item.value;
                    userForAuth.password = item.value;
                };
            })
        }
    
    const firebaseConfig = {
        apiKey: "AIzaSyAB-gM6y2Tz0Yo0QdS1xfflbq4-j-dJjls",
        authDomain: "stroykastore-2044a.firebaseapp.com",
        databaseURL: "https://stroykastore-2044a-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "stroykastore-2044a",
        storageBucket: "stroykastore-2044a.appspot.com",
        messagingSenderId: "162649177161",
        appId: "1:162649177161:web:507329733ad5020fe71398"
    };
    const app = initializeApp(firebaseConfig);
    const dataBase = getDatabase(app);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userForAuth.email, userForAuth.password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .then(()=>{
            fetch('https://stroykastore-2044a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
        .then(()=>{
            modal.close();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 
            addPassError();
        });
    })

    function validation(){
        let errors = 0;
        const input = form.querySelectorAll('._req');
        const inputPass = document.querySelector('.modal-reg-pass');
        const inputConfPass = document.querySelector('.modal-reg-confpass');
        input.forEach(item =>{
            removeError(item);
            if (item.classList.contains('reg-email')){
                if (!isEmailValid(item.value)){
                    addError(item);
                    errors++;
                }
            } else if (item.classList.contains('modal-reg-pass')){
                if(item.value.length <= 2){
                    addError(item);
                    errors++;
                }
            } else if (item.classList.contains('modal-reg-confpass')){
                if(item.value.length <= 2){
                    addError(item);
                    errors++;
                }
            }else if(inputPass.value !== inputConfPass.value){
                addError(inputPass);
                addError(inputConfPass);
                errors++;
            } else if (item.value === ''){
                addError(item);
                errors++;
            }
        })
        return  errors;
    }

    function addError(input){
        input.classList.add('animate__animated', 'animate__shakeX', '_error');
    }
    function removeError(input){
        input.classList.remove('animate__animated', 'animate__shakeX', '_error');
    }
    function isEmailValid(input){
        const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return EMAIL_REGEXP.test(input);
    }
    function addPassError(){
            document.querySelector('.modal-reg-pass').insertAdjacentHTML('beforebegin', `<span style="font-size: 10px;">Длина пароля больше 6 символов</span>`);
            document.querySelector('.modal-reg-pass').classList.add('animate__animated', 'animate__shakeX', '_error');
    }
    // observer.disconnect();
}
var observer = new MutationObserver(()=>{
    if (document.querySelector('.modal-reg__form')){
        registration();
    }
});
observer.observe(document.querySelector('body'), 
    {childList: true, subtree: true})