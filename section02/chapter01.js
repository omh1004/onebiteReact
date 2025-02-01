//1.Falsy한 값
//조건식에서 거짓으로 판단됨 
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n


//2. Trythy 한값
// 7가지 Falsy 한 값들 제외한 나머지 모든값

let t1 = "hello";
let t2= 123;
let t3 = [];
let t4 = {};



//3.활용 사례
// 인수로 전달된 객체가 undefined가 되었을떄,
// 해당객체에 접근하려 하면 , uncaugh TypeError 가 나온다.
// 그래서 조건문에 undefined 와 null 값에 대해서 조건을 달아줘야하지만,
// falsy 특성을 이용하면 간결하게 바꿀수 있다. 

function printName(person){

    if(!person){
        console.log("person의 값이 없음 ");
        return 
    }

    console.log(person.name);
}

let person ={name :"오민현"}
printName(person);