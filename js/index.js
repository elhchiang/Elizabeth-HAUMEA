const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Elizabeth Chiang &copy; ${thisYear}<small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);


const skills = ["Tunisian Crochet", "Amigurumi", "Freeform Crochet", "Pattern Writing"];
const skillsSection = document.getElementById("Skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
  let skillItem = document.createElement("li");
  skillItem.innerText = skill;
  skillsList.appendChild(skillItem);
}

function onRemoveButton(event) {
  console.log("Remove");
  const entry = event.target.parentNode
  entry.remove();

const messageSection = document.getElementById("messages");
const messageList = messageSection.getElementsByTagName("li");
console.log(messageList);
console.log(messageList.length);
if (messageList.length === 0) {
  messageSection.hidden = true;
}
}

function onFormSubmit(event) {
  event.preventDefault();

const data = new FormData (event.target);
console.log(data);

const userName = data.get("usersName");
const email = data.get("email");
const usersMessage = data.get("usersMessage");
console.log(userName);
console.log(email);
console.log(usersMessage);

const messageSection = document.getElementById("messages");
const messageList = messageSection.getElementsByTagName("ul");
console.log(messageList);

messageSection.hidden = false;

const newMessage = document.createElement("li");
newString = `<a href="mailto:${email}">${userName}</a>\n
<span>${usersMessage} </span>`;
newMessage.innerHTML = newString;

const removeButton = document.createElement("BUTTON");
removeButton.innerText = "Remove";
removeButton.setAttribute("type", "button");
removeButton.setAttribute("id","removeButtonId");
removeButton.addEventListener("click", onRemoveButton);
console.log(removeButton);

newMessage.appendChild(removeButton);

messageList[0].appendChild(newMessage);

event.target.reset();
}

const messageForms = document.getElementsByName("leave_message");
console.log(messageForms);
const messageForm = messageForms[0];
console.log(messageForms);
messageForm.addEventListener("submit", onFormSubmit);
