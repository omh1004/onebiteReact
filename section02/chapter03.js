//1. 배열의 구조 분해 할당 
let arr = [1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// let [one,two,three,four] = arr;

// console.log(one, two,three, four);

//2. 객체의 구조분해 할당
// 객체는 배열과 달리 객체를 상징하는 {} 로 구조 분해 할당 할 수 있다. 
// 객체는 받는 변수를 지정해서 담을 수 있다. 

let person ={
    name : "오민현",
    age : 27,
    hobby: {"sport":"테니스"}
}

//객체의 값을 구조분해 할당으로 받을수 있으며, 
// 객체의 프로퍼티키값 : 받을 키값으로 받을 값의 변수를 매핑해서 받을 수 있다.

let {
    name : myName,
    hobby,
    name,
    extra="hello"
}= person;

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func =({name,age,hobby,extra})=>{
    console.log(name,age,hobby,extra);
};


//매개변수에서도 구조분해 할당으로 값을 받을 수 있으며, 
//단 매개변수타입이 객체여야 가능하다. 
func(person);