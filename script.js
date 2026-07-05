const button = document.getElementById("btn");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

button.addEventListener("click", function (event) {
  event.preventDefault();

  const age = ageInput.value;
  const name = nameInput.value.trim();

  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then(function (message) {
      alert(message);
    })
    .catch(function (message) {
      alert(message);
    });
});