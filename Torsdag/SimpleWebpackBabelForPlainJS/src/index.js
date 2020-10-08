import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import personFacade from "./personFacade"





// make table rows

function fetchAllUsersToTable() {
  document.getElementById("error").innerText = ""
  personFacade.getAllUsers()
    .then(data => {

      const persons = data.all
      const tableRows = persons.map((person) =>`
        
    <tr>
    <td>${person.id}</td>
    <td>${person.fName}</td>
    <td>${person.lName}</td>
    <td>${person.phone}</td>
    <td>${person.street}</td>
    <td>${person.zip}</td>
    <td>${person.city}</td>
    </tr>
    `
      )

      const tableRowsAsStr = tableRows.join("")
      document.getElementById("tbody").innerHTML = tableRowsAsStr

    }).catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerText = e.msg)
      }
      else { console.log("Network error"); }
    });
}

fetchAllUsersToTable()




// reload button
document.getElementById("reload").addEventListener("click", event => {
  event.preventDefault()
  fetchAllUsersToTable()
})


// add a new user

function addUserFromForm(){
  let fName = document.getElementById("fname").value
  let lName = document.getElementById("lname").value
  let phone = document.getElementById("phone").value
  let street = document.getElementById("street").value
  let zip = document.getElementById("zip").value
  let city = document.getElementById("city").value


const user = {
fName,
lName,
phone,
street,
zip,
city
}

document.getElementById("error").innerText = ""
personFacade.addNewUser(user).
catch(err => {
  if (err.status) {
    err.fullError.then(e => document.getElementById("error").innerText = e.msg)
  }
  else { console.log("Network error"); }
});
}


document.getElementById("savebtn").addEventListener("click", event => {
event.preventDefault()
addUserFromForm()

})