// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

// ARRAY + OBJECT
const students = [
  { name: "John", class: "SS1" },
  { name: "Mary", class: "SS2" }
];

// TEMPLATE LITERAL + DOM
const welcome = document.getElementById("welcome");

if (welcome) {
  welcome.textContent = `Welcome! We currently manage ${students.length} students in our system.`;
}

// FORM + EVENT + CONDITION + localStorage
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if (name === "") {
      alert("Please enter your name");
      return;
    }

    document.getElementById("response").textContent =
      `Thank you ${name}, your message has been received successfully!`;

    let count = localStorage.getItem("messages") || 0;
    count++;
    localStorage.setItem("messages", count);
  });
}