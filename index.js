const day = new Date();
hour = day.getHours();
minute = day.getMinutes();
;
if (minute < 10) {
  minute = "0" + minute;

}


let P;

if (hour < 12) {
  P = "AM";
}
else if (hour > 12) {
  hour = hour - 12;
  P = "PM";
}

const time = hour + ":" + minute + " " + P;
const box = document.getElementById("box");
box.innerHTML = time;






var buttion = document.querySelectorAll('.button');

console.log(buttion);
for (var i = 0; i < buttion.length; i++) {
  buttion[i].addEventListener('click', function () {
    if (this.innerHTML === "=") {
      num = eval(document.querySelector('input').value);
      document.querySelector('input').value = num;
    }
    else if (this.innerHTML === "C") {
      document.querySelector('input').value = " ";

    }
    else
      document.querySelector('input').value += this.innerHTML;

  })
}





