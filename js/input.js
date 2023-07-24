function checkForm(element) {
  let username = element.username.value;
  let userphone = element.userphone.value;
  let usertext = element.usertext.value;
  let fail = "";

  if (username == "" || userphone == "" || usertext == "")
    fail = "Заполните все поля";
  else if (username.length < 3 || username.length > 40)
    fail = "Введите корректное имя";

  if (fail != "") {
    document.getElementById("error").innerHTML = fail;
    return false;
  } else {
    alert("Все ок");
    return true;
  }
}

const input = document.getElementById("userphone");

userphone.addEventListener("keydown", function (event) {
  if (
    event.keyCode == 46 ||
    event.keyCode == 8 ||
    event.keyCode == 9 ||
    event.keyCode == 27 ||
    (event.keyCode == 65 && event.ctrlKey === true) ||
    (event.keyCode >= 35 && event.keyCode <= 39)
  ) {
    return;
  } else {
    if (
      (event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      event.preventDefault();
    }
  }
});

const username = document.getElementById("username");

username.addEventListener("keydown", function (e) {
  if (e.key.match(/[0-9]/)) return e.preventDefault();
});

username.addEventListener("input", function (e) {
  username.value = username.value.replace(/[0-9]/g, "");
});
