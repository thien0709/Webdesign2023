// Change text
function handleInput(event) {
  // Xử lý sự kiện thay đổi nội dung
  console.log(event.target.innerHTML);
}
//Create new note
const newNote = document.querySelector("#content #status .icon");
const note = document.querySelector("#content #note");
const createDel = document.querySelector("#note .head .delete");
const noti = document.querySelector("#note .head .delete h6");
const iconNoti = document.querySelector("#note .head .delete i");
newNote.addEventListener("click", function () {
  note.style.display = "block";
  let cr = "fa-solid fa-plus";
  let del = "fa-solid fa-trash";
  iconNoti.setAttribute("class", cr);
  noti.innerHTML = "Create";
});
//Create
const text = document.querySelector("#note .text p");
const outText = document.querySelector("#content .notes p");
const notes = document.querySelector("#content #status .notes");
const tittle = document.querySelector("#note .head h3");
createDel.addEventListener("click", function () {
  let contents = {
    // author:,
    content: text.textContent,
  };
  localStorage.setItem("contents", JSON.stringify(contents));
  const x = JSON.parse(localStorage.getItem("contents"));
  let newDiv = document.createElement("div");
  newDiv.classList.add("div");
  notes.appendChild(newDiv);
  let newH1 = document.createElement("h1");
  newH1.innerText = `${tittle.textContent}`; 
  newDiv.appendChild(newH1);
  var newp = document.createElement("p");
  newp.innerText = `${contents.content}`;
  newDiv.appendChild(newp);
});
const arrText = [
  {
    id: 1,
    author: "thien123",
    content: "",
  },
];
