let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

const leadsFromLocalStorage = localStorage.getItem("myLeads");

if (leadsFromLocalStorage) {
  myLeads = JSON.parse(leadsFromLocalStorage);
  renderLeads();
}

inputBtn.addEventListener("click", saveLead);
inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveLead();
  }
});

function saveLead() {
  let lead = inputEl.value;
  myLeads.push(lead);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
}

inputBtn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveLead();
  }
});

function renderLeads() {
  let listItems = "";
  for (let i = myLeads.length - 1; i >= 0; i--) {
    listItems += `
                  <li>
                    <a href="${myLeads[i]}" target="_blank" >
                    ${myLeads[i]}
                    </a> 
                  </li>
                  `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
