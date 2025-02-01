// 1. Spread 연산자.
/// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1= [1,2,3];
let arr2 = [4,...arr1,5,6];

let obj1= {
    a:1,
    b:2
};

let obj2={
    ...obj1,
    c:3,
    d:4,
};

function fancA(p1,p2,p3){
    console.log(p1,p2,p3);
}

funcA(...arr1);



//2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수 
// rest매개변수 앞에 변수로 넘어온 배열, 객체의 값을 낱개로 먼저받고,
// 나머지를 rest매개변수로 받을수 있지만, rest뒤에는 변수를 쓰면 에러
// Spread와 다른 점은 매개변수가 선언되는 소괄호 안에 선언된다는 점이다. 

function funcB(one,...rest){
    console.log(rest);
}


funcB(...arr1);
