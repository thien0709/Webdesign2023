// Change text
function handleInput(event) {
  console.log(event.target.innerHTML);
}
//Hello user
const userName = document.querySelector("#navbar .user .logo h4");
let n = JSON.parse(localStorage.getItem("user"));
userName.innerHTML = `Hello ${n.username}`;
//Create new note
const newNote = document.querySelector("#content #status .icon");
const note = document.querySelector("#content #note");
const notiDel = document.querySelector("#note .head .delete");
const notiCre = document.querySelector("#note .head .create");
const at = document.querySelector(".head .name h5");
newNote.addEventListener("click", function () {
  note.style.display = "block";
  notiCre.style.display = "flex";
  at.innerHTML = '';
});
//Create note
const text = document.querySelector("#note .text p");
const outText = document.querySelector("#content .notes p");
const notes = document.querySelector("#content #status .notes");
const tittle = document.querySelector("#note .head h3");
let userTexts = [];
notiCre.addEventListener("click", function () {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  //Them content va user vao mang
  let userText = {
    author: n.username,
    content: text.textContent,
    at: `${hour} : ${minute} : ${second} ${date}/${month}/${year}`,
  };
  userTexts.push(userText);
  localStorage.setItem("userTexts", JSON.stringify(userTexts));
  const x = JSON.parse(localStorage.getItem("userTexts"));
  //Tao phan tu su dung innerHTML
  for (let i = 0; i < x.length; i++) {
    var newElement = `<div class="myNewDiv"> <div class="tittle">
${tittle.textContent}
  </div>
  <div class="content">${x[i].content}</div>
  </div>
  `;
  }
  notes.innerHTML += newElement;
  //Remove note
  const removeText = document.querySelectorAll(".myNewDiv");
  for (let i = 0; i < removeText.length; i++) {
    removeText[i].addEventListener("click", function () {
      //Create at time by username
      at.innerHTML = `Create at ${x[i].at} by ${x[i].author}`;
      notiDel.style.display = "flex";
      notiCre.style.display = "none";
      notiDel.addEventListener("click", function () {
        removeText[i].remove();
        notiDel.style.display = "none";
        notiCre.style.display = "flex";
        return;
      });
    });
  }
});
