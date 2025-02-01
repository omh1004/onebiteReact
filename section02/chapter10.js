//1. Date 객체를 생성하는 방법
let date1 = new Date(); // Date는 내장함수 
// // new 라는 키워드와 함께 생성하는 함수를 생성자 함수라고 한다. 
// Date객체는 생성자 함수에 아무것도 매개변수로 전달하지 않으면, 
// 현재시간으로 return 됨

let date2 = new Date("1997/11/22/10/10/10");

// console.log(date2);

//2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값반환
// 타임스탬프에 기준이 되는 시간을 '협정세계시' , UTC 라고 한다.  
// 모든나라가 표준으로 사용하는 시간이 시작되는 시간을 의미한다. 


let ts1 = date1.getTime();

console.log(ts1);

// 새로운 데이트 객체를 생성할때도 사용한다. 
let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법 
// 자바스크립트의 월은 0부터 시작해서 +1을 해줘야한다. 
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

//4. 시간 수정하기 
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
// 시분초 제외 현재 날짜만 출력하려면
console.log(date1.toDateString());
// 한글 포맷으로 시간 출력
console.log(date1.toLocaleString());