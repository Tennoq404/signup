const FirstName = document.querySelector(".box1");
const LastName = document.querySelector(".box2");
const MatrivNo = document.querySelector(".box3");
const PhoneNumber = docujment.querySelector(".box4");
const form = document.getElementById("form");
const error = document.getElementById("p1");
form.addEventListener("submit", (e) => {
  let messages = [];
  if (FirstName.value === "" || FirstName.value === null) {
    messages.push("Name is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
  }
});
