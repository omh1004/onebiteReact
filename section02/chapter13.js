

//resolve 에는 Promise 에서 진행하는 비동기 작업을 성공상태로 바꾸는 함수가들어있음

//rejectsms  Promise 에서 진행하는 비동기 작업을 실패상태로 바꾸는 함수가들어있음

const promise = new Promise((resolve, reject)=>{    
    
    setTimeout(()=>{
        const num =10;

        if(typeof num === 'number'){
            resolve(num+10);
        }else{
            reject("num이 숫자가 아닙니다. ")
        }
    },2000);
    

});

// then 메서드
// -> 그 후에 
// then 메서드는 executor 에서 resolve라는 함수를 호출하면,
// then 메서드에 전달한 콜백함수를 실행해주고,
// collback함수에 전달한 매개변수의 결과값도 return 해줌 
// promise then 메소드는 promise를 한번더 반환함 
// 그래서 then 메소드 뒤에 .으로 연결해서 catch 메소드를 호출할 수 있음
// promise 체이닝 
promise.then((value)=>{
    console.log(value);
})

promise.catch((error)=>{
    console.log(error);
});

