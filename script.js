let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

const leadsFromLocalStorage = localStorage.getItem("myLeads");

if (leadsFromLocalStorage) {
  myLeads = JSON.parse(leadsFromLocalStorage);
  render(myLeads);
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
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

inputBtn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveLead();
  }
});

function render(leads) {
  let listItems = "";
  for (let i = leads.length - 1; i >= 0; i--) {
    listItems += `
                  <li>
                    <a href="${leads[i]}" target="_blank" >
                    ${leads[i]}
                    </a> 
                  </li>
                  `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
