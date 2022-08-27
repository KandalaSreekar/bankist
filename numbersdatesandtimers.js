// Every number is a decimal in Javascript.
console.log(23 === 23.0)
console.log(0.1 + 0.2)
// The output of the above line should be 0.3, but it is 0.3000000004. This is an error in JavaScript. 
// This is why Js should not be used for any precise scientific calculations.
console.log(Number("20"))
console.log(+"414")
console.log(Number.parseInt("50px", 10))
console.log(Number.parseFloat("2.5rem"))
console.log(Number.isNaN(+"123c"))
console.log(Number.isFinite(123))
console.log(Number.isInteger("S"))

console.log(Math.sqrt(25))
console.log(8 ** (1/3))
console.log(Math.max(1,2,3,4,5,6))
console.log(Math.min(1,2,3,45))
console.log(Math.PI * Number.parseFloat("10.2px")**2)
console.log(Math.trunc(Math.random() * 6 ) + 1) // random number between 1 and 6

const randInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min

console.log(randInt(5,10))
console.log(2 ** 53 -1)

console.log(123456798123456789123456789n)
// console.log(new Date('20 August, 2022'))
console.log(Date.now())