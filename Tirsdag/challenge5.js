const obj = {a: 1, b: true, c: "hello", d: "aaa"}

//console.log(Object.keys(obj))
//console.log(Object.values(obj))
console.log(Object.entries(obj))


function printKeyValuePairs(obj) {
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
    }
  }
  

  
  printKeyValuePairs(obj)