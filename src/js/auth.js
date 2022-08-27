import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

const auth = () =>{
    const authForm = document.querySelector('.modal-auth__form');
    const authEmail = document.querySelector('.modal-auth__email');
    const authPass = document.querySelector('.modal-auth__password');
    const authBtn = document.querySelector('.modal-auth__sign-in-btn');
    authForm.addEventListener('submit', (event)=>{
        event.preventDefault(authEmail);
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
        signInWithEmailAndPassword(auth, authEmail.value, authPass.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .then(()=>{
                modal.close();
                console.log('working...');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
        });
        observerAuth.disconnect();
    })
}


var observerAuth = new MutationObserver(()=>{
    if (document.querySelector('.modal-auth__form') != null){
        auth();
    }
});
var config = { attributes: true, childList: true, characterData: true };
observerAuth.observe(document.querySelector('body'), config);