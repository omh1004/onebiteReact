// 기본적을 동기 방식으로 실행
console.log(1);

//비동기함수 
// 3000ms만큼 대기했다가, callback 함수 실행 
// 3초를 세는 타이머만 실행시키고 밑으로 넘어간다.
// 그리고 3초가 지나면, setTimeout 함수가 
// 콜백함수를 실행한다. 
//setTimeout(callback함수,시간인수)
setTimeout(()=>{
    console.log(2);
},3000);

console.log(3);

