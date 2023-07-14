// Section Skills Logic
let sectionSkills = document.querySelector(".our-skills");
let spanSkills = document.querySelectorAll(
   ".our-skills .skill .the-progress span"
);

window.onscroll = function () {
   spanSkills.forEach((span) => {
      if (window.scrollY >= sectionSkills.offsetTop - 200) {
         span.style.width = span.dataset.width;
      }
   });
};
// ----------------------------------
// Section Events Logic

//The End of The Year Date
let countDownDate = new Date("Dec 31 , 2023 23:59:59").getTime();

let timecounter = setInterval(() => {
   // Get Date Now
   let dateNow = new Date().getTime();
   //difrent between now and count Down Date
   let dateDiff = countDownDate - dateNow;

   //Get Time Units
   let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
   let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   let minuts = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

   document.querySelector(".events .info .time .unit .days").innerHTML = days;
   document.querySelector(".events .info .time .unit .hours").innerHTML =
      hours < 10 ? `0${hours}` : hours;
   document.querySelector(".events .info .time .unit .minuts").innerHTML =
      minuts < 10 ? `0${minuts}` : minuts;
   document.querySelector(".events .info .time .unit .seconds").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// ----------------------------------
// Section State Logic

let sectionState = document.querySelector(".stats");
let spanState = document.querySelectorAll(".stats .box span.number");
let started = false; //is function Started ? NO

window.onscroll = function () {
   if (window.scrollY >= sectionState.offsetTop) {
      if (!started) {
         spanState.forEach((span) => countIncrement(span));
         //Switch On The Function
      }
      started = true;
      //Function has alerady Started
   }
   //That for Switch On the Function One Time
};
function countIncrement(ele) {
   let goal = ele.dataset.number;
   let counter = setInterval(() => {
      ele.textContent++;
      if (ele.textContent == goal) {
         clearInterval(counter);
         if (goal == "500") {
            ele.textContent += "k";
         }
      }
   }, 1000 / goal);
}
