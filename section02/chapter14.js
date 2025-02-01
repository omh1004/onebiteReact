//async
// 함수앞에 붙이는 키워드
// 어떤함수를 비동기 함수로 만들어주는 키워드
// 함수가  프로미스를 반환하도록 변환해주는 키워드
// 동기함수를 비동기로 변환해줌 

async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name:"이정환",
                id: "winterlood"
            })
        },1500);
    });
}

// await
// anync 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다르는 역할 
// await 키워드는 async 키워드 단 함수에만 사용 
async function printData(){
    const data = await getData();
    console.log(data);
}

printData();

