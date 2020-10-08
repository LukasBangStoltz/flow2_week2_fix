import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "../userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */

//get jokes
function makeListItems() {
  const jokes = jokeFacade.getJokes()
  let jokelist = jokes.map(joke => `<li> ${joke} </li>`)
  const listItemsAsStr = jokelist.join("")
  document.getElementById("jokes").innerHTML = listItemsAsStr
}
makeListItems()

//find joke with id
function getJokeFromId() {
  event.preventDefault()
  let jokeId = document.getElementById("jokeId").value
  let joke = jokeFacade.getJokeById(jokeId)
  document.getElementById("jokeFind").innerText = joke

}


//adding new joke
function addJoke() {
  event.preventDefault()
  let newJoke = document.getElementById("addJoke").value
  jokeFacade.addJoke(newJoke)
  makeListItems()
}
document.getElementById("button").addEventListener("click", getJokeFromId)
document.getElementById("addButton").addEventListener("click", addJoke)

/* JS For Exercise-2 below */
function clickEventAction() {


  fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(res => res.json())
    .then(data => document.getElementById("pId").innerHTML = data.joke)

}
setInterval(clickEventAction, 1000 * 60 * 60)
document.getElementById("buttonEx2").addEventListener("click", clickEventAction)


/* JS For Exercise-3 below */
//Show all users(in table)
function findUsers() {
  userFacade.getUsers()
    .then(data => {
      let table = document.getElementById("allUserRows")
      let result = ''
      data.forEach((x) => {
        result += getTableRow(x)
      })
      table.innerHTML = result
    })

}

findUsers()

function getTableRow(member) {
  return `<tr>
  <td>${member.id}</td>
  <td>${member.age}</td>
  <td>${member.name}</td>
  <td></td>
  <td>${member.gender}</td>
  <td>${member.email}</td>
  </tr>`
}
//Show a single user, given an ID
function findUser() {
  event.preventDefault()

  let id = document.getElementById("userID").value
  userFacade.getUsers(id)
  

    .then(data => {
      let pTag = document.getElementById("singleUserP")
      let result = ''
      data.forEach((x) => {
        if (x.id == id) {
          result = "ID: " + x.id + ", age: " + x.age + ", name: " + x.name + ", gender: " + x.gender + ", email:" + x.email
          pTag.innerHTML = result
        }
      })

    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorFind").innerText = e.msg)
      }
      else { console.log("Network error"); }
    })
   
}
document.getElementById("but").addEventListener("click", findUser)
//Add a new User

function addUserFromForm() {
  let age = document.getElementById("ageId").value
  let name = document.getElementById("nameId").value
  let gender = document.getElementById("genderId").value
  let email = document.getElementById("emailId").value

  const newUser = {
    age,
    name,
    gender,
    email
  }

  userFacade.addUser(newUser)

    .then(user => alert(JSON.stringify(user)))
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorAdd").innerText = e.msg)
      }
      else { console.log("Network error"); }
    });

}

document.getElementById("addNewUser").addEventListener("click", event => {
  event.preventDefault()
  addUserFromForm()
  findUsers()
})

//Delete an existing user
function deleteUser() {


  let id = document.getElementById("userIDtoDelete").value
  userFacade.deleteUser(id)
    .then(data => (JSON.stringify(data)))
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorDelete").innerText = e.msg)
      }
      else { console.log("Network error"); }
    });

}

document.getElementById("butDelete").addEventListener("click", (event) => {
  event.preventDefault()
  deleteUser()
  findUsers()
   
})

//Edit an existing user
function editUserFromForm() {
  let id = document.getElementById("userIdEdit").value
  let age = document.getElementById("ageIdEdit").value
  let name = document.getElementById("nameIdEdit").value
  let gender = document.getElementById("genderIdEdit").value
  let email = document.getElementById("emailIdEdit").value

  const newUserEdit = {
    age: age,
    name: name,
    gender: gender,
    email: email
  }
  newUserEdit.id = id
  userFacade.editUser(newUserEdit)
    .then(user => (JSON.stringify(user)))
}

document.getElementById("editUser").addEventListener("click", event => {
  event.preventDefault()
  editUserFromForm()
  findUsers()

})

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



