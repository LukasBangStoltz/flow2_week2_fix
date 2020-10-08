//a
let all = ["Hassan", "Peter", "Carla", "Boline"]

let reducedAll = all.join("#")
console.log(reducedAll)

//b
let numbers = [2, 3, 67, 33]

function myCallback(array, callback) {

    return callback(array)
}

function reducer(numberArray) {
    return numberArray.reduce((total, amount) => total + amount)
}

console.log(myCallback(numbers, reducer))

//c

let members = [{ name: "Peter", age: 18 },
{ name: "Jan", age: 35 },
{ name: "Janne", age: 25 },
{ name: "Martin", age: 22 }]



function getAverage(array) {
    return array.reduce((accumulated, member) => accumulated + member.age, 0) / array.length
}

console.log(getAverage(members))

