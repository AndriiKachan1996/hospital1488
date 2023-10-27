const location = document.getElementById("location");
location.addEventListener("click", function() {
  window.open("https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D0%BB%D0%BE%D0%BC-%D0%90%D0%BB%D0%B5%D0%B9%D1%85%D0%B5%D0%BC%D0%B0,+46,+%D0%91%D1%96%D0%BB%D0%B0+%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+09100/@49.7907398,30.1263525,17z/data=!3m1!4b1!4m5!3m4!1s0x40d342033c4cab13:0xe44612821b60b0a3!8m2!3d49.7907398!4d30.1263525?entry=ttu", "_blank");
});



const call = document.getElementById("call");
call.addEventListener("click", function() {

  const link = call.querySelector(".info__link");
  const phoneNumber = link.getAttribute("href");

  window.location.href = phoneNumber;
});


const workHours = document.getElementById("workHours");

workHours.addEventListener("click", function() {
  window.location.href = "./contants.html";
});



const myCity = {

  country: "Ukraine",
  favorite: true
}


myCity['popular'] = false;

const cityName = null;

myCity[cityName] = "Bila Tserkva"

console.log(myCity)

// delete myCity.country;


// const keys = Object.keys(myCity)
// const values = Object.values(myCity)

// console.log(keys);
// console.log(values);






