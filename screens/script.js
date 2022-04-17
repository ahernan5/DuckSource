// Dropdown Menu
function openDrop(){
document.getElementById("myDropdown").classList.toggle("show");
 }

// Checkboxes select
document.getElementById('select').onclick = function() {
    var checkboxes = document.getElementsByName('vehicle');
    for (var checkbox of checkboxes)
    {
        if (checkbox.checked) {
            document.write(checkbox.value + ' ');
            document.cookie
        }
    }
}


// JavaScript code
function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('element');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD_7SPQLK8prAl_KNb_ue6hqZsQZant-yI",
//   authDomain: "ducksource-1.firebaseapp.com",
//   databaseURL: "https://ducksource-1-default-rtdb.firebaseio.com",
//   projectId: "ducksource-1",
//   storageBucket: "ducksource-1.appspot.com",
//   messagingSenderId: "267158158863",
//   appId: "1:267158158863:web:54c3d71f510f2861aced7a",
//   measurementId: "G-2N57SXS2LC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// // Reference messages collection
// var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var school = getInputVal('school');
//   var email = getInputVal('email');
//   var phone = getInputVal('phone');
//   var message = getInputVal('message');

//   // Save message
//   saveMessage(name, school, email, phone, message);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, school, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     school:school,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }