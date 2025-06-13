const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

// faqs page //

document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const expanded = question.getAttribute('aria-expanded') === 'true';
      question.setAttribute('aria-expanded', !expanded);

      const answerId = question.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);
      if (answer) {
        if (expanded) {
          answer.hidden = true;
        } else {
          answer.hidden = false;
        }
      }
    });
  });
});

// contact us page //

const form = document.querySelector("#contactForm");
const feedback = document.querySelector("#formFeedback");
const messageCountDisplay = document.querySelector("#messageCount");

let messages = JSON.parse(localStorage.getItem("messages")) || [];
updateMessageCount();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    showFeedback("Please complete all required fields.", "error");
    return;
  }

  // Create a message object and store in localStorage
  const newMessage = {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  messages.push(newMessage);
  localStorage.setItem("messages", JSON.stringify(messages));

  showFeedback(`Thanks, ${name}! Your message was submitted successfully. Please allow our team up to 3 business days to review your question and get back to you. Thank you and have a wonderful day!`, "success");
  form.reset();
  updateMessageCount();
});

function showFeedback(text, type) {
  feedback.textContent = text;
  feedback.className = type === "success" ? "success" : "error";
  feedback.classList.remove("hidden");
}

function updateMessageCount() {
  messageCountDisplay.textContent = `Total messages submitted: ${messages.length}`;
}