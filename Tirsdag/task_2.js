//a

let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Jeanne", "Bo", "Bob"]

function myFilter(array, callback) {


    return callback(array)
}



function filterMyNames(array) {
    let filteredArray = []
    array.forEach(element => {
        if (element.includes("a")) {
            filteredArray.push(element)
        }

    });
    return filteredArray
}

console.log(myFilter(nameArray, filterMyNames))

//b

function myMap(array, callback){


    return callback(array)
}

function mapMyNames(array){
    let mappedArray = []
    array.forEach(element => {
    mappedArray.push(element.split("").reverse().join(""))
    });
    return mappedArray
}

console.log(myMap(nameArray, mapMyNames))