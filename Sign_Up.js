// import { setupPasswordToggle } from "./main"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCptDPy1670W7oBwYLjkVVK6dStge3qS00",
    authDomain: "shopify-49fc5.firebaseapp.com",
    projectId: "shopify-49fc5",
    storageBucket: "shopify-49fc5.appspot.com",
    messagingSenderId: "952274681218",
    appId: "1:952274681218:web:2a5e40125122b89192639b",
    measurementId: "G-T68E74XCE3"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const fName = document.getElementById("name")
const userName = document.getElementById("Username")
const Email = document.getElementById("Email")
const PSWD = document.getElementById("Password")
const showPassword = document.getElementById("Password")
const showPsdCheckBox = document.getElementById("showPswd")
const Submit = document.querySelector(".SingUpform")

const errorMessageName = document.querySelector(".errorMessageName")
const errorMessageforUserName = document.querySelector(".errorMessageUserName")
const errorMessageforEmail = document.querySelector(".errorMessageEmail")
const errorMessageforPsd = document.querySelector(".errorMessagePsd")

const errorMessageNameRequired = document.querySelector(".errorMessageNameRequired")
const errorMessageUsernameRequired = document.querySelector(".errorMessageUsernameRequired")
const errorMessageEmaiRequired = document.querySelector(".errorMessageEmaiRequired")
const errorMessagePsdRequired = document.querySelector(".errorMessagePsdRequired")

let myName = ""
let Username = ""
let userEmail = ""
let userPSWD = ""

fName.addEventListener("input", (event) => {
    const regex = /^.{3,}$/;
    myName = event.target.value
    if (regex.test(myName)) {
        errorMessageName.style.display = "none"

    } else {
        // console.log(myName);
        errorMessageName.style.display = "block"
        errorMessageNameRequired.style.display = "none"

    }

    if (myName.length != 0) {
        errorMessageNameRequired.style.display = "none"
    }
})
userName.addEventListener("input", (event) => {

    const usernameRegex = /^[\S]{4,}$/;
    Username = event.target.value
    if (usernameRegex.test(Username)) {
        errorMessageforUserName.style.display = "none"
    }
    else {
        errorMessageforUserName.style.display = "block"
        errorMessageUsernameRequired.style.display = "none"

    }

    if (Username.length != 0) {
        errorMessageUsernameRequired.style.display = "none"
    }
})

Email.addEventListener("input", (event) => {

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    userEmail = event.target.value
    if (regexEmail.test(userEmail)) {
        errorMessageforEmail.style.display = "none"
    }
    else {
        errorMessageforEmail.style.display = "block"
        errorMessageEmaiRequired.style.display = "none"

    }

    if (userEmail.length != 0) {
        errorMessageEmaiRequired.style.display = "none"
    }
})

PSWD.addEventListener("input", (event) => {

    const regexPSWD = /^.{8,}$/;
    userPSWD = event.target.value
    if (regexPSWD.test(userPSWD)) {
        errorMessageforPsd.style.display = "none"
    }
    else {
        errorMessageforPsd.style.display = "block"
        errorMessagePsdRequired.style.display = "none"

    }

    if (userPSWD.length != 0) {
        errorMessagePsdRequired.style.display = "none"
    }
})

Submit.addEventListener("submit", (event) => {
    // event.preventDefault ? event.preventDefault() : event.returnValue = false
    event.preventDefault()

    if (myName.length == 0) {
        errorMessageNameRequired.style.display = "block"
    }
    else {
        errorMessageNameRequired.style.display = "none"
    }

    if (Username.length == 0) {
        errorMessageUsernameRequired.style.display = "block"
    }
    else {
        console.log("false");
        errorMessageUsernameRequired.style.display = "none"
    }

    if (userEmail.length == 0) {
        errorMessageEmaiRequired.style.display = "block"
    }
    else {
        console.log("false");
        errorMessageEmaiRequired.style.display = "none"
    }

    if (userPSWD.length == 0) {
        errorMessagePsdRequired.style.display = "block"
    }
    else {
        console.log("false");
        errorMessagePsdRequired.style.display = "none"
    }
    if (((!myName.length == 0) && (!userEmail.length == 0) && (!userPSWD.length == 0))) {


        set(ref(db, 'userDetails/' + myName), {
            NameOfUser: myName,
            UserId: Username,
            EmailOfUser: userEmail,
            PasswordofUser: userPSWD

        })
            .then(() => {
                alert("Sign up sucessfully")
                fName.value = "";
                userName.value = "";
                Email.value = "";
                PSWD.value = "";
                myName = "";
                Username = "";
                userEmail = ""
                userPSWD = "";
            })
            .catch((error)=>{
                console.log(error);
                
            })



        // fetch('https://api.escuelajs.co/api/v1/users')
        // .then((res)=>{
        //     console.log(res);
        // })
        // fetch('https://api.escuelajs.co/api/v1/users/', {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     },
        //     body: JSON.stringify({
        //         "name": myName,
        //         "userName": Username,
        //         "email": userEmail,
        //         "password": userPSWD,
        //         "avatar": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKpoK2btuNW_wE9IEUcuvJNH-N7l77OSBYohuJXVl9eutmPuz0"
        //     }),
        // })
        // .then(response => response.json())
        // .then(() => {
        //     fName.value = "";
        //     userName.value = "";
        //     Email.value = "";
        //     PSWD.value = "";
        //     myName = "";
        //     Username = "";
        //     userEmail = "";
        //     userPSWD = "";
        // })

    }


})

function setupPasswordToggle(showPsdCheckBox, showPassword) {
    showPsdCheckBox.addEventListener("change", (event) => {
        if (event.target.checked) {
            showPassword.type = "text";
        } else {
            showPassword.type = "password";
        }
    });
}



setupPasswordToggle(showPsdCheckBox, showPassword)

