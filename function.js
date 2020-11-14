let month = document.querySelector("#month");
let year = document.querySelector("#year");

const addDates = () => {
  for (let i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.text = i;
    month.add(option);
  }
  var d = new Date();
  var n = d.getFullYear();
  for (let i = n; i <= n + 10; i++) {
    var option = document.createElement("option");
    option.text = i;
    year.add(option);
  }
};

addDates();

const validate = () => {
  var validcardno = /^\d{16}$/;
  var validcvv = /^\d{3}$/;
  var name = /^[A-Za-z ]+$/;
  let month = document.querySelector("#month");
  let year = document.querySelector("#year");
  if (month.value == "") {
    return false;
  }
  if (year.value == "") {
    return false;
  }
  let cardnumber = document.querySelector("#cnumber").value.split(" ").join("");
  if (cardnumber.match(validcardno)) {
  } else {
    return false;
  }
  let cardname = document.querySelector("#cname").value;
  if (cardname.match(name)) {
  } else {
    return false;
  }
  let cvv = document.querySelector("#cvvno").value;
  if (cvv.match(validcvv)) {
  } else {
    return false;
  }
  return true;
};

//to space the card number after 4 digits
document
  .getElementById("cnumber")
  .addEventListener("keyup", function (event, callback) {
    const key = event.key;
    if (key != "Backspace" && key != "Delete") {
      let txt = this.value.split(" ").join("");
      if (txt.length % 4 === 0) {
        this.value = this.value + " ";
      }
    }
    let cno = this.value.split(" ").join("");
    if (cno.length == 0) {
      document.querySelector(".part1").innerHTML = "xxxx";
      document.querySelector(".part2").innerHTML = "xxxx";
      document.querySelector(".part3").innerHTML = "xxxx";
      document.querySelector(".part4").innerHTML = "xxxx";
    }
    for (let i = 1; i <= cno.length; i++) {
      document.querySelector(".part1").innerHTML = cno.slice(0, 4);
      document.querySelector(".part2").innerHTML = cno.slice(4, 8);
      document.querySelector(".part3").innerHTML = cno.slice(8, 12);
      document.querySelector(".part4").innerHTML = cno.slice(12, 16);
    }
    callback();
  });

document.getElementById("cname").addEventListener("keyup", function (event) {
  let cname = this.value;
  console.log(cname);
  document.querySelector(".cardholdername").innerHTML = cname;
});

document.querySelector("#month").addEventListener("change", function () {
  document.querySelector(".expmonth").innerHTML = this.value;
});

document.querySelector("#year").addEventListener("change", function () {
  document.querySelector(".expyear").innerHTML = this.value;
});

document.getElementById("submitbutton").addEventListener("click", () => {
  let check = validate();
  if (check) {
    alert("Valid input");
  } else {
    alert("incorrect data");
  }
});
