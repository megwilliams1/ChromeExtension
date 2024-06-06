let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')

// localStorage.setItem("myName", "Megan")
// localStorage.getItem("myName")
// localStorage.clear()

inputBtn.addEventListener("click", function() {
    // console.log("Button clicked from addEventListener")

    myLeads.push(inputEl.value);
    renderLeads()
    inputEl.value= ""
    renderLeads()
})

function renderLeads() {
     let listItems =""
     for (let i = 0; i < myLeads.length; i++) {
    listItems += 
    `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        ` 
     }
     ulEl.innerHTML = listItems
    }