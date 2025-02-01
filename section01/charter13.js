// 1. 콜백함수
// 다른함수에 인수로 전달하여 , 나중에 실행되도록 하는 함수
// main 함수 가 알아서 실행한다.
// main 함수에서 콜백함수를 원하는 타이밍에 호출할 수 있음  
function main(value){
    console.log(value);
}

function sub(){
    console.log("i am sub");
}

main(()=>{});

//2. 콜백함수의 활용
function repeat(count,callback){
    for(let idx=1; idx<=count;idx++){
       callback(idx);
    }
}

repeat(5, function (idx){
    console.log(idx);
});

repeat(5, function(idx){
    console.log(idx*3);
})

repeat(5,(idx)=>console.log(idx*3));