function handleHttpErrors(res) {
  if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function makeOptions(method, body) {
  var opts = {
      method: method,
      headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
      }
  }
  if (body) {
      opts.body = JSON.stringify(body);
  }
  return opts;
}



function getAllUsers() {
  let URL = "https://hamderelskercode.com/person/api/xxx/all"
 return fetch(URL)
      .then(handleHttpErrors)

}

function addNewUser(user){
  let URL = "https://hamderelskercode.com/person/api/xxx/insertPerson"
  const options = makeOptions("POST", user)
  return fetch(URL, options)
      .then(handleHttpErrors)

}



const personFacade = {
  getAllUsers,
  addNewUser
}
export default personFacade