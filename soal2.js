const name = "novi"
const map = Array.prototype.map

const newName = map.call(name, eachLetter =>{
    return `${eachLetter}i`
})

console.log(newName [2])