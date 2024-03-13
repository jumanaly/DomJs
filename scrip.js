const SecCreate = document.querySelector("#create");
const SecList = document.querySelector("#list");
const SecSave = document.querySelector("#save");
const SecDel = document.querySelector("#delete");
const inputs = document.querySelectorAll("input");
const imgInput = document.querySelector(".img");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const numberInput = document.querySelector(".number");
const dateInput = document.querySelector(".date");
const createBtn = document.querySelector(".createBtn");
const imgInput1 = document.querySelector(".img1");
const nameInput1 = document.querySelector(".name1");
const emailInput1 = document.querySelector(".email1");
const phoneInput1 = document.querySelector(".phone1");
const numberInput1 = document.querySelector(".number1");
const dateInput1 = document.querySelector(".date1");
const saveBtn = document.querySelector(".saveBtn");

// addList();

createBtn.addEventListener("click", () => {
  getList();
  SecList.style.display = "block";
  SecCreate.style.display = "none";
});

function getList() {
  let obj = {
    img: imgInput.value,
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    number: numberInput.value,
    date: dateInput.value,
  };
  if (
    imgInput.value !== "" &&
    nameInput.value !== "" &&
    emailInput.value !== "" &&
    phoneInput.value !== "" &&
    numberInput.value !== "" &&
    dateInput.value !== ""
  ) {
    const local = JSON.parse(localStorage.getItem("list")) || [];
    local.push(obj);
    localStorage.setItem("list", JSON.stringify(local));

    for (let i of inputs) {
      i.value = "";
    }
  } else {
    for (let i of inputs) {
      i.value = "";
    }
  }
  addList();
}

// list

const listBox = document.querySelector(".listBox");
const addBtn = document.querySelector(".addBtn");

function addList() {
  listBox.innerHTML = "";
  const local = JSON.parse(localStorage.getItem("list")) || [];
  local.forEach((element, idx) => {
    const listCard = document.createElement("div");
    const imagePeop = document.createElement("img");
    const h3div = document.createElement("div");
    const h3name = document.createElement("h3");
    const h3email = document.createElement("h3");
    const h3phone = document.createElement("h3");
    const h3number = document.createElement("h3");
    const h3date = document.createElement("h3");
    const savesvg = document.createElement("span");
    const delsvg = document.createElement("span");
    const icons = document.createElement("div");

    listCard.classList = "listCard";
    icons.classList = "icons";
    h3div.classList = "h3div";

    imagePeop.src = element.img;
    h3name.innerText = element.name;
    h3email.innerText = element.email;
    h3phone.innerText = element.phone;
    h3number.innerText = element.number;
    h3date.innerText = element.date;
    savesvg.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
    delsvg.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

    listBox.append(listCard);
    listCard.append(imagePeop);
    listCard.append(h3div);
    h3div.append(h3name);
    h3div.append(h3email);
    h3div.append(h3phone);
    h3div.append(h3number);
    h3div.append(h3date);
    listCard.append(icons);
    icons.append(savesvg);
    icons.append(delsvg);

    savesvg.addEventListener("click", () => getSave(idx));

    delsvg.addEventListener("click", () => getDelete(idx));
  });
}

addBtn.addEventListener("click", () => {
  SecList.style.display = "none";
  SecCreate.style.display = "block";
  SecCreate.style.padding = "15% 0";
});
// list

// save
function getSave(index) {
  const local = JSON.parse(localStorage.getItem("list")) || [];
  let oneProduct = local.splice(index, 1)[0];

  imgInput1.value = oneProduct.img;
  nameInput1.value = oneProduct.name;
  emailInput1.value = oneProduct.email;
  phoneInput1.value = oneProduct.phone;
  numberInput1.value = oneProduct.number;
  dateInput1.value = oneProduct.date;

  SecList.style.display = "none";
  SecSave.style.display = "block";

  imgInput1.setAttribute("id", index);
  nameInput1.setAttribute("id", index);
  emailInput1.setAttribute("id", index);
  phoneInput1.setAttribute("id", index);
  numberInput1.setAttribute("id", index);
  dateInput1.setAttribute("id", index);
}

saveBtn.addEventListener("click", () => saveData());

function saveData() {
  let imgId = imgInput1.id;
  let NameId = nameInput1.id;
  let emailId = emailInput1.id;
  let phoneId = phoneInput1.id;
  let numberId = numberInput1.id;
  let dateId = dateInput1.id;

  let Newobj = {
    img: imgInput1.value,
    name: nameInput1.value,
    email: emailInput1.value,
    phone: phoneInput1.value,
    number: numberInput1.value,
    date: dateInput1.value,
  };

  const local = JSON.parse(localStorage.getItem("list")) || [];
  local.splice(imgId, 1, Newobj);
  localStorage.setItem("list", JSON.stringify(local));

  const local1 = JSON.parse(localStorage.getItem("list")) || [];
  local1.splice(NameId, 1, Newobj);
  localStorage.setItem("list", JSON.stringify(local1));

  const local2 = JSON.parse(localStorage.getItem("list")) || [];
  local2.splice(emailId, 1, Newobj);
  localStorage.setItem("list", JSON.stringify(local2));

  const local3 = JSON.parse(localStorage.getItem("list")) || [];
  local3.splice(phoneId, 1, Newobj);
  localStorage.setItem("list", JSON.stringify(local3));

  const local4 = JSON.parse(localStorage.getItem("list")) || [];
  local4.splice(numberId, 1, Newobj);
  localStorage.setItem("list", JSON.stringify(local4));

  const local5 = JSON.parse(localStorage.getItem("list")) || [];
  local5.splice(dateId, 1, Newobj);
  localStorage.setItem("list", JSON.stringify(local5));

  SecSave.style.display = "none";
  SecList.style.display = "block";

  for (let i of inputs) {
    i.value = "";
  }

  addList();
}

// save

// delete

const delBtn1 = document.querySelector(".btn1");
const delBtn2 = document.querySelector(".btn2");

function getDelete(ind) {
  SecList.style.display = "none";
  SecDel.style.display = "block";

  delBtn1.addEventListener("click", () => {
    const local = JSON.parse(localStorage.getItem("list")) || [];
    local.splice(ind, 1);
    localStorage.setItem("list", JSON.stringify(local));
    SecDel.style.display = "none";
    SecList.style.display = "block";
    addList();
  });
  delBtn2.addEventListener("click", () => {
    SecDel.style.display = "none";
    SecList.style.display = "block";
    addList();
  });
}

// delete
