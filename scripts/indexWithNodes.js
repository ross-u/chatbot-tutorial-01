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
var chat = document.getElementById("chat");
var messageInput = document.getElementById("message-input");
var sendButton = document.getElementById("message-send-btn-img");

// EHELPER FUNCTIONS
function sendMessage() {
  var messageText = messageInput.value;

  displayMessage(messageText, "Me");
  messageInput.value = "";
}

function replyBack() {
  var randomIndex = Math.floor(Math.random() * replies.length);
  var message = replies[randomIndex];

  displayMessage(message, "Chatbot");
}

function displayMessage(message, sender) {
  // CREATE NEW ELEMENTS
  var newMessage = document.createElement("div");
  var messageAuthor = document.createElement("h3");
  var messageContent = document.createElement("p");
  var messageAvatar = document.createElement("img");

  // CREATE TEXT NODES FOR THE NEW ELEMENTS
  var authorText = document.createTextNode(sender);
  var contentText = document.createTextNode(message);

  // APPEND TEXT NODES TO THE CREATED ELEMENTS
  messageAuthor.appendChild(authorText);
  messageContent.appendChild(contentText);

  // ADD SRC ATTRIBUTE TO THE IMAGE TAG
  messageAvatar.setAttribute("src", "./images/ironhack.png");

  // APPEND TEXT ELEMENTS TO THE DIV
  newMessage.append(messageAvatar, messageAuthor, messageContent);

  // ADD CLASS NAME TO EACH ELEMENT (TO APPLY THE CSS STYLES)
  newMessage.classList = "message";
  messageAuthor.classList = "headline";
  messageAvatar.classList = "avatar";

  if (sender === "Me") {
    newMessage.classList += " align-right";
  }

  // APPEND THE DIV WITH NEW ELEMENTS TO THE CHAT ELEMENT
  chat.appendChild(newMessage);

  // UPDATE THE SCROLL POSITION OF THE CHAT, TO THE BOTTOM
  chat.scrollTop = chat.scrollHeight;

  // IF SENDER WAS THE USER, CALL THE `replyBack` FUNCTION AFTER 2 SECONDS
  if (sender === "Me") {
    setTimeout(replyBack, 2000);
  }
}

// EVENT LISTENERS
sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") sendMessage(event);
});
