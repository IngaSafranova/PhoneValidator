const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearkBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


const checkNumber = (event) => {
  event.preventDefault();

  const phoneNumber = input.value;
  console.log(phoneNumber);
  // When you click on the #check-btn element without entering a value into the #user-input element, an alert should appear with the text Please provide a phone number
  if (phoneNumber === "") {
    alert("Please provide a phone number");
  }

  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
  const match = regex.test(phoneNumber)

  if (match) {
    result.textContent = `Valid US number: ${phoneNumber}`
  } else {
    result.textContent = `Invalid US number: ${phoneNumber}`
  }
  
}

// input.addEventListener("input", checkNumber
// );


checkBtn.addEventListener("click", checkNumber);

clearkBtn.addEventListener('click', () => {
  result.textContent = ''
  input.value = ''
})