const form = document.getElementById("voter-form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

function checkVotingEligibility(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = ageInput.value;
  const name = nameInput.value.trim();

  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  checkVotingEligibility(name, Number(age))
    .then(function (message) {
      alert(message);
    })
    .catch(function (message) {
      alert(message);
    });
});