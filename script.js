// const input_field = document.querySelectorAll(".form-control");
// const login = document.querySelector("#login");

// // const signInBtn = document.querySelector("#signin-mode-btn")
// // const signUpBtn = document.querySelector("#signup-mode-btn")
// // const container = document.querySelector(".container")
// // const loginBtn = document.querySelector("#login-btn")
// // const signBtn = document.querySelector("#signup-btn")
// // const userLogin = document.querySelector("#username-login")
// // const passLogin = document.querySelector("#password-login")
// // const userSignup = document.querySelector("#username-signup")
// // const emailSignup = document.querySelector("#email-signup")
// // const passSignup = document.querySelector("#password-signup")

// signInBtn.addEventListener("click", ()=> {
//  container.classList.remove("signup-mode")
// })

// signUpBtn.addEventListener("click", ()=> {
//  container.classList.add("signup-mode")
// })

// loginBtn.addEventListener("click", ()=>{
//     if (userLogin >= 4) {
//         if (passLogin >= 8) {
//             alert("Validation is successful")
//  } else {
//  alert("Validation is not successful")
//  }
//  } else {
//  alert("Username must be atleat 4 characters long.")
//  }
// })

// let matchEmailRegex = /[a-zA-Z]{1}[a-zA-Z0-9]{2,}@[a-zA-Z]{1}[a-zA-Z0-9\.\-_]{2,}\.[a-zA-Z]{1}[a-zA-Z]{2,}/
// signBtn.addEventListener("click", (e)=>{
//     e.preventDefault()
//     if (userSignup.value.length >= 4) {
//         if (matchEmailRegex.test(emailSignup.value)) {
//             if (passLogin >= 8) {
//                 alert("Validation is successful")
//             } 
//             else {
//                 alert("Validation is not successful")
//             }
//         } else {
//             alert("Invalid Email")
//         }
//     } 
//     else {
//         alert("Username must be atleat 4 characters long.")
//     }
// })

const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
    if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}