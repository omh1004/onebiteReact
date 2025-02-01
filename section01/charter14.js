//스코프
// -> 전역(전체영역) 스코프 / 지역(특정영역) 스코프 
// -> 전역 스코프 : 전체 영역에서 접근가능
// -> 지역 스코프 : 특정영역에서만 접근가능 

// 함수의 경우 function 안에서만 지역스코프를 가지고,
// 함수가 아닌 if ,for문안에서는 전역스코프를 가진다. 
let a = 1;//전역스코프

function funcA(){
    let b= 2;
    console.log(a);

    function funcB(){

    }
}

funcA();

if(true){
    let c = 1;
}

