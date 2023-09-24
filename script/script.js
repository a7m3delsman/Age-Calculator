function calculateAge() {
  var birthdateInput = document.getElementById("birthdate").value;

  // التحقق من إدخال التاريخ
  if (birthdateInput === "") {
    document.getElementById("result").innerHTML = "<b>Please enter a birthdate.😒</b>";
    return;
  }

  var birthdate = new Date(birthdateInput);
  var currentDate = new Date();

  
  // التحقق من التاريخ القريب
  var timeDifference = currentDate.getTime() - birthdate.getTime();
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference < 365) {
    document.body.style.backgroundImage ="none";
    document.getElementById("Beautiful-message").innerHTML="";
    document.getElementById("result").innerHTML = "Warning: The entered birthdate is less than a year ago.";
  }

  var years = currentDate.getUTCFullYear() - birthdate.getUTCFullYear();
  var months = currentDate.getUTCMonth() - birthdate.getUTCMonth();
  var days = currentDate.getUTCDate() - birthdate.getUTCDate();
  var hours = currentDate.getUTCHours() - birthdate.getUTCHours();
  var minutes = currentDate.getUTCMinutes() - birthdate.getUTCMinutes();
  var seconds = currentDate.getUTCSeconds() - birthdate.getUTCSeconds();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
  }

  if (days < 0) {
    months--;
    days += 30.436875;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

 
  var result = years + " : years<br>" + months + " : months<br>" + days + " : days<br>" +( hours+3) + " : hours<br>" + minutes + " : minutes<br> " + seconds + " : seconds";

  document.getElementById("result").innerHTML = "<h3 class='your-age'> Your age is : </h3>" + result;
  document.body.style.backgroundImage ="none";
  document.getElementById("Beautiful-message").innerHTML="<br>I wish for you a long life. ❤️😊";
  if( months===0 && days===0 )
  {
    document.body.style.backgroundImage ="url('images/birthday-background.png')";
    document.getElementById("Beautiful-message").innerHTML="Today is your birthday.🤩 Happy birthday and I hope you have a beautiful day 🎂🎈";
  }
  // التحقق من صحة التاريخ
  if (birthdate > currentDate) {
    document.getElementById("result").innerHTML = "<b class='Invalid-birthdate'>Invalid birthdate.</b> Please enter a valid date.😕";
    document.body.style.backgroundImage ="none";
    document.getElementById("Beautiful-message").innerHTML="";
    return;
  }

}

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0%';
}
function close(){
    mainMenu.style.top = '-150%';
return;
}
var audio = new Audio('button-click.mp3');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }