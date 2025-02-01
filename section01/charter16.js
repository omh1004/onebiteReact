//1. 상수 객체
// 상수에 다른 프로퍼티를 생성해 할당하는것은 에러가 나지만,
// 상수에 저장된 프로퍼티의 값을 추가, 수정, 삭제 하는건 가능하다. 
const animal ={
    type:"고양이",
    name:"나비"
}

animal.age = 2;
animal.name="까망이 ";
delete animal[type];

//2. 메서드 
// -> 값이 함수인 프로퍼티를 말함 
// -> 객체의 동작을 정의함 

const person ={
    name:"오민현",
    sayHi(){
        console.log("안녕!");
    }
}

person.sayHi();
person["sayHi"]();
