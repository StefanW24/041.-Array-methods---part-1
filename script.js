// Part A

// const addTheWordCool = function (array) {
//     array.push("cool");
//     return array;
// };

// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//  Part B

// const amountOfElementsInArray = function (array) {
//     return array.length;
// }

// console.log(amountOfElementsInArray(['apples', 'pears', 'lemons', 'test'])); 

// Part C

// const selectBelgiumFromBenelux = function (array) {
//     return array[0];
// }

// console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"])); 

// Part D

// const lastElementInArray = function (array) {
//     return array[array.length -1];
// }

// console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"])); 

// Part E

// const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

// const impeachTrumpSlice = function(array) {
//     return array.slice(1);
// }
// const impeachTrumpSplice = function(array) {
//     return array.splice(1);
// }

// console.log(impeachTrumpSlice(presidents));
// console.log(impeachTrumpSplice(presidents)); 

// Part F

// const stringsTogether = function(array) {
//     return array.join(' ');
// }

// console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}']));
// //result: "Winc Academy is fun ;-}"

// Part G

const combineArrays = function (arrayone, arraytwo) {
    return arrayone.concat(arraytwo);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]