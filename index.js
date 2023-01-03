
const email = document.querySelector("#email-field");
const text = document.querySelector("#textField");
const btn = document.querySelector("#sub-btn");
const icon2 = document.querySelector("#icon2")
let regExp = /^[^]+@[^]+\.[a-z]{2,3}$/ ;

function check(){

    if (email.value.match(regExp)){
        text.innerHTML = "Your Email Address is Valid.";
        text.style.color = "green"
        email.style.borderColor = "green";
        icon2.style.display = "none";
        document.getElementById("sub-btn").onclick = function(){
            text.innerHTML = "Thank You For Subscribing!";
            setTimeout(function(){
                text.innerHTML = " ";
                email.style.borderColor = "hsl(0, 36%, 70%)";
            },5000);
            form.reset();
        }
        

    }
    else{
        text.innerHTML = "Please Enter a Valid Email Address.";
        text.style.color = "hsl(0, 93%, 68%)"
        email.style.borderColor = "hsl(0, 93%, 68%)";
        icon2.style.display = "block";
    }
    if (email.value == ""){
        text.innerHTML = " ";
        text.style.color = ""
        email.style.borderColor = "hsl(0, 36%, 70%)";
        icon2.style.display = "none";
        btn.onclick = ""

    }
}

// connecting form to google sheet

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyzr8ED8p2jNFA-snQqpoRpvlaLymP8gIcLyH4wCwQ7AmSdIoBxiJWG2o9qjliBtaw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      })
      .catch(error => console.error('Error!', error.message))
  })

