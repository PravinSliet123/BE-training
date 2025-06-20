// let dummyArray = [2, 3, 4,10,20,60];
// console.log("dummyArray: ", dummyArray);

// function forEEach() {
//   let multiplyByTwo = [];

//   dummyArray.forEach((element, index, copyArray) => {
//     multiplyByTwo.push(element * 2);
//   });

//   let size = multiplyByTwo.length;
//   console.log("size: ", size);
//   for (let index = 0; index < size; index++) {
//     console.log("multiplyByTwo: ", multiplyByTwo);
//     console.log("index: ", index);
//     multiplyByTwo.pop();
//   }

//   console.log("multiplyByTwo: ", multiplyByTwo);
// }

// function MAP() {
//   const multiplyByTwo = dummyArray.map(
//     (element, index) => "Hello " + element.toString()
//   );
//   console.log("multiplyByTwo: ", multiplyByTwo);
// }
// function FILTER() {
//   const graterThanFive = dummyArray.filter(
//     (element, index, existingArray) => element % 2 === 1
//   );
//   console.log("graterThanFive: ", graterThanFive);
// }

// function REDUCE(){

//      const SUM = dummyArray.reduce((acc,element,index,existingArray)=> acc+element ,5)
//      console.log('SUM: ', SUM);
// }

// function FIND(){
//    const found = dummyArray.find((element,index,existingArray)=>  element>60)

//    if(dummyArray.includes(100))
//    {
//     console.log("Yes we have 20 in the list")
//    }else{
//     alert("Do you want me to add 20 in the list")
//     dummyArray.push(100)

//    }
//       console.log('found: ', found);
//    console.log("isExist",dummyArray.includes(100))
//    console.log('dummyArray: ', dummyArray);

// }

// FIND()

// "Overview of DOM manipulation"

const helloText = document.getElementById("Hello");
const changeColor = document.getElementById("changeColor");
const changeText = document.getElementById("changeText");
console.log("changeColor: ", changeColor);
console.log("changeText: ", changeText);

console.log("helloText: ", helloText);

changeColor.addEventListener("click", () => {
  if (helloText.style.color === "green") {
    helloText.style.color = "red";
  } else {
    helloText.style.color = "green";
  }
});
changeText.addEventListener("click", () => {
  helloText.innerText = "Hello Duniya";
});
