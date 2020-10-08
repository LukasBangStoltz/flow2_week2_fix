//a filter

let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Jeanne", "Bo", "Bob"]

let filteredArray = nameArray.filter(n => n.includes("a"))

console.log(filteredArray)

//b map

//step 1 looper igennem array. for hvert element splittes delen af arrayet, til et ny array. eks: Hassan.split = "H", "a", "s", "s", "a", "n".
//herefter kalder vi reverse, som vender det hele på hovedet. til sidste joiner vi så vores arrays til et et array, og får altså alle navne bagvendgt
let mappedArray = nameArray.map(n=> n.split("").reverse().join(""))

console.log(mappedArray)
