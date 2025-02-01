//비동기작업을 함수안에서 동적인 Promise 객체 사용


function add10(num){
    const promise = new Promise((resolve, reject)=>{    
    
        setTimeout(()=>{

    
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다. ")
            }
        },2000);
        
    
    });

    return promise;

}
//비동기 함수의 결과를 받아서 비동기함수 결과를 이용할 수 있음
//then메소드에 return 을 쓰게되면, 
// then메소드의 결과값을 ㄱㄷ
const p  = add10(0);
p.then((result)=>{
    console.log(result);

    const newP = add10(result);
    newP.then((result)=>{
        console.log(result);
    })
    return newP;

})