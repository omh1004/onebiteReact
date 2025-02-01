//1. 함수표현식 

// function funcA(){
//     console.log("funcA");
// }


// let varA = funcA;
// console.log(varA);
// varA();

// //변수에 함수를 담았을 경우에는 어짜피 
// //함수를 호출할때, 어짜피 변수로 호출해야 하므로,
// //함수명을  생략할 수있다. 
// //익명함수 
// //익명함수의 경우 호이스팅에 대상이 되지 않는다. 
// let varB = function(){
//     console.log("funcB");
// }


//2. 화살표 함수

let varC = () =>1;

let varD = (value) =>1;

console.log(varC());
