//a
let numbers = [1, 3, 5, 10, 11]




function newNumbers(array, callback) {
    return callback(array)
}

function addElements(array) {
    let count = 1
    let test = array.map(x => x + array[count++])
    return test
}



console.log(newNumbers(numbers, addElements))


//b
let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]


let newNameArray = nameArray.map(function(n){
    let newArray = n.split("")
    newArray.unshift("<a href=””>")
    newArray.push("</a>\n")
    return newArray.join("")

})

newNameArray.unshift("<nav>\n")
newNameArray.push("</nav>")


console.log(newNameArray.join(""))

//c
let persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

let ost = persons.map(function(n){
    return "\n<tr>\n" + "<td>" + n.name + "</td>" + "<td>" + n.phone + "</td>" + "\n</tr>\n"
})

let template = "<table> \n<tr>\n<th>name</th>\n<th>phone</th>\n</tr>\n"
ost.unshift(template)
ost.push("</table>")
console.log(ost.join(""))