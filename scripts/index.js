const replies = [
  "Nooo way! Same here!!!",
  "How does that feel on a scale from 1 to 10 ?",
  "Hmmmm ... interesting!",
  "That could be a problem.",
  "I believe you. Some others may not, but I do believe you.",
  "Do not go to the bathroom in a dream. It’s a trap!",
  "It does make sense.",
  "Why is that?",
  "Who?",
  "Thank you for your visit. See you soon!",
  "Ironhack coding LAB a day keeps the bugs away!"
];

//  GET THE DOM ELEMENTS
const chat = document.getElementById("chat");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("message-send-btn-img");

// EVENT CALLBACK FUNCTION (ONCLICK / ENTER)
function sendMessage() {
  const inputValue = messageInput.value;

  displayMessage(inputValue, "Me");
  messageInput.value = "";
}

function chatbotReply() {
  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomMessage = replies[randomIndex];

  displayMessage(randomMessage, "Chatbot");
}

function displayMessage(message, sender) {
  // CREATE A TEMPORARY DIV ELEMENT
  const tempDiv = document.createElement("div");

  if (sender === "Me") {
    tempDiv.innerHTML = `
    <div class="message align-right">
      <img src="./images/ironhack.png" class="avatar">
      <h3 class="headline">Me</h3>
      <p>${message}</p>
    </div>
    `;
  } else if (sender === "Chatbot") {
    tempDiv.innerHTML = `
    <div class="message">
      <img src="./images/ironhack.png" class="avatar" />
      <h3 class="headline">${sender}</h3>
      <p>${message}</p>
    </div>
    `;
  }

  // RETURN THE ELEMENTS FROM THE TEMPORARY DIV
  const newMessage = tempDiv.children[0];

  // APPEND THE DIV WITH NEW ELEMENTS AND CONTENT TO THE CHAT
  chat.appendChild(newMessage);

  // TRIGGER THE AUTO SCROLL TO BOTTOM
  chat.scrollTop = chat.scrollHeight;

  if (sender === "Me") {
    setTimeout(chatbotReply, 2000);
  }
}

// ADD EVENT LISTENERS
sendButton.addEventListener("click", function() {
  sendMessage();
});

messageInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage(event);
  }
});
