//1. 묵시적 형 변환
//-> 자바스크립트 엔진이 알아서 형 변환하는것

let num =10;
let str = "20";
//숫자와 문자연산은 숫자를 문자로 자바스크립트에서 변환해서
//연산해준다. 
const result = num +str;


//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// ->문자열 ->숫자
let str1= "10";
let strToNum1 = Number(str1);

//숫자가 앞쪽에 있으면 , parseInt를 통해서 숫자변환이 가능하다.
let str2  = "10개";
let strToNum2 = parseInt(str2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);


