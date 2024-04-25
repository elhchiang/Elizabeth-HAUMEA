const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Elizabeth Chiang &copy; ${thisYear}<small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);


const skills = ["Doughnuts", "Fruits", "Vegetables", "Dim Sum Sets"];
const skillsSection = document.getElementById("Skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
  let skillItem = document.createElement("li");
  skillItem.innerText = skill;
  skillsList.appendChild(skillItem);
}