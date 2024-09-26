import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCptDPy1670W7oBwYLjkVVK6dStge3qS00",
    authDomain: "shopify-49fc5.firebaseapp.com",
    projectId: "shopify-49fc5",
    storageBucket: "shopify-49fc5.appspot.com",
    messagingSenderId: "952274681218",
    appId: "1:952274681218:web:2a5e40125122b89192639b",
    measurementId: "G-T68E74XCE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const showPsdCheckBox=document.getElementById("showPswd")
const signInButton =document.querySelector(".SignInButton")
const Username=document.getElementById("Username")
// const Password =document.getElementById("Password")
const showPassword=document.getElementById("Password")
const PopUp=document.querySelector(".PopUp")
let isPassword = true;

let Myname=""
let MyPassword=""
function setupPasswordToggle(showPsdCheckBox, showPassword) {    
    showPsdCheckBox.addEventListener("change", (event) => {
        if (event.target.checked) {
            showPassword.type = "text";
        } else {
            showPassword.type = "password";
        }
    });
}
Username.addEventListener("input",(event)=>{
    Myname=event.target.value
    console.log(event.target.value);
})

showPassword.addEventListener("input",(event)=>{
    MyPassword=event.target.value
})


// isPassword.setTimeout(() => {
//     isPassword=true
// }, 3000);


signInButton.addEventListener("click",(e)=>{

    e.preventDefault()

    if (Myname.length === 0 || MyPassword.length === 0) {
        alert("Email or Password cannot be empty.");
        return;
    }

    signInWithEmailAndPassword(auth, Myname, MyPassword)
        .then((userCredential) => {
            // Signed in successfully
            console.log(userCredential);
            
            const user = userCredential.user;
            console.log("User signed in:", user);
            // window.location.href = "HomePage/Home.html"; // Redirect to homepage
        })
        .catch((error) => {
            PopUp.classList.add("show");
            setTimeout(() => {
                PopUp.classList.remove("show");
                Username.value=""
                showPassword.value=""
                Myname=""
                MyPassword=""
            }, 3000);

            // if (error.code === "auth/wrong-password") {
            //     alert("Incorrect password.");
            // } 
            // else if (error.code === "auth/user-not-found") {
            //     alert("No user found with this email.");
            // } 
            // else if (error.code === "auth/invalid-email") {
            //     alert("Invalid email format.");
            // } 
            // else {
            //     // PopUp.style.visibility = "visible"
            //     alert("Sign-in failed: " + error.message);
            // }
            console.error("Error signing in:", error.code);
            // PopUp.style.visibility = "visible"
            
        });
        console.log(Myname , MyPassword);
        
        
    
})



// function checkValidUser(Myname,MyPassword) {
    // signInButton.addEventListener("click",(e)=>{

    //     e.preventDefault()

    //     fire.auth().signInWithEmailAndPassword(this.state.Myname, this.state.MyPassword)
    //     .then((u) => {
    //     }).catch((error) => {
    //     console.log(error);
    // });
        // fetch("https://api.escuelajs.co/api/v1/users")
        // .then((res)=>{
        //     res.json().then((data)=>{
        //         data.map(element => {
        //             if((element.name == Myname || element.email == Myname) &&(element.password == MyPassword)){
        //                 return true
        //             } 
        //             else{
        //                 count=false   
        //             }   
        //         });
        //     })
        // })  
    // })
// }

// if(checkValidUser(Myname,MyPassword)){
//     console.log("Navigate to next page ");
// }
// else{
//     console.log("Invalid Credencial");
// }
setupPasswordToggle(showPsdCheckBox,showPassword)
