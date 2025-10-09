console.warn(`--------- flat method ---------`)
const numbers = [1,2,3,4,5,6]

const multiArray = [1,[2,3],[4,5],6]
console.log(multiArray)
const simpleArray = multiArray.flat()
console.log(simpleArray)

const arr1 = [1,[2,[3,[4,[5,[6]]]]]]
console.log(arr1)
const result = arr1.flat(5)
console.log(result)

const arr2 = [1,[2,[4,[5],[6,7,[8,9,[10],[11],[12],[13,14,15]]]]]]
console.log(arr2)
const result1 = arr2.flat(Infinity)
console.log(result1)

console.log(document)

function darkMode () {
    document.getElementsByTagName('body')[0].style.backgroundColor = "black"
}