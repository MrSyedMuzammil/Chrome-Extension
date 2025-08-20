let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

const leadsFromLocalStorage = localStorage.getItem("myLeads");

if (leadsFromLocalStorage) {
  myLeads = JSON.parse(leadsFromLocalStorage);
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  let lead = inputEl.value;
  myLeads.push(lead);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
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
