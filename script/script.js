let autoUpdateInterval = null;
        
        function startCalculation() {
            playClickSound();
            calculateAge();
            
            // إيقاف أي تحديث سابق إذا كان موجوداً
            if (autoUpdateInterval) {
                clearInterval(autoUpdateInterval);
            }
            
            // بدء التحديث التلقائي كل ثانية
            autoUpdateInterval = setInterval(calculateAge, 1000);
        }
        
        function calculateAge() {
            const birthdateInput = document.getElementById("birthdate").value;
            
            if (!birthdateInput) {
                document.getElementById("result").innerHTML = "<b>Please enter a birthdate.😒</b>";
                document.body.style.backgroundImage =null;

                document.getElementById("Beautiful-message").innerHTML = "";
                document.body.classList.remove("birthday");
                return;
            }
            
            const birthdate = new Date(birthdateInput);
            const now = new Date();
            
            if (birthdate > now) {
                document.getElementById("result").innerHTML = "<b class='Invalid-birthdate'>Invalid birthdate.</b> Please enter a valid date.😕";
                document.getElementById("Beautiful-message").innerHTML = "";
                document.body.style.backgroundImage =null;
                document.body.classList.remove("birthday");
                return;
            }
            
            let years = now.getFullYear() - birthdate.getFullYear();
            let months = now.getMonth() - birthdate.getMonth();
            let days = now.getDate() - birthdate.getDate();
            let hours = now.getHours() - birthdate.getHours();
            let minutes = now.getMinutes() - birthdate.getMinutes();
            let seconds = now.getSeconds() - birthdate.getSeconds();
            
            // تصحيح القيم السالبة
            if (seconds < 0) {
                seconds += 60;
                minutes--;
            }
            
            if (minutes < 0) {
                minutes += 60;
                hours--;
            }
            
            if (hours < 0) {
                hours += 24;
                days--;
            }
            
            if (days < 0) {
                const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
                days = lastDayOfMonth - birthdate.getDate() + now.getDate();
                months--;
            }
            
            if (months < 0) {
                months += 12;
                years--;
            }
            
            const result = `
                ${years} : years<br>
                ${months} : months<br>
                ${days} : days<br>
                ${hours} : hours<br>
                ${minutes} : minutes<br>
                ${seconds} : seconds
            `;
            
            document.getElementById("result").innerHTML = "<h3 class='your-age'> Your age is </h3>" + result;
            
            // التحقق من عيد الميلاد
            if (now.getMonth() === birthdate.getMonth() && now.getDate() === birthdate.getDate()) {
                document.body.classList.add("birthday");
                document.body.style.backgroundImage ="url('images/birthday-background.png')";
                document.getElementById("Beautiful-message").innerHTML = "Today is your birthday.🤩 Happy birthday and I hope you have a beautiful day 🎂🎈";
            } else {
                document.body.classList.remove("birthday");
                document.body.style.backgroundImage =null;
                document.getElementById("Beautiful-message").innerHTML = "I wish for you a long life. ❤️😊";
            }
        }
        
        function playClickSound() {
            const clickSound = document.getElementById("clickSound");
            clickSound.currentTime = 0;
            clickSound.play();
        }
        
        
