// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환


let arr1 = [
    {name:"오민현", hobby:"테니스"},
    {name: "이정효", hobby : "테니스"},
    {name: "홍길동",hobby: "독서"}
];

// filter를 사용하면, 배열요소에서 조건에 맞는 프로퍼티만 새로운 배열로 
// 반환해줌
// 웹서비스를 개발할때, 카테고리별 필터나 , 검색에 자주 사용된다. 
const tennisPeple = arr1.filter((item)=>{
    if(item.hobby==="테니스") return true;
});


// 2. map
// 배열의 모든 요소를 순회하면서 , 가각 콜백함수를 실행하고,
// 그결과를 모아서 새로운 배열로 반환
// 원본배열을 변형한 요소를 포함한 배열을 반환할 수 있다. 

let arr2 = [1,2,3];

const mapresult1 = arr2.map((item,idx,arr)=>{
    // console.log(idx,item);
    return item*2;
})

let names = arr1.map((item)=>item.name);
// console.log(names);

//3. sort
// 배열을 사전순으로 정렬하는 메서드
// 만약에 숫자값으로 이루어지면 정상적으로 작동하지 않는다. 
// 이런경우 callback 함수에 정렬기준을 적어줘야함 
let arr3 = ["b","a","c"];

arr3.sort();

// console.log(arr3);

//오름차순
arr3.sort((a,b)=>{
    if(a>b){
        // b가 a앞에 와라
        return 1;
    }else if(a<b){
        // a가 b앞에 와라 
        return -1;
    }else{
        // 두 값의 자리를 바꾸지 마라 
        return 0;
    }
})
// 내림차순 
arr3.sort((a,b)=>{
    if(a>b){
        // b가 a앞에 와라
        return 1;
    }else if(a<b){
        // a가 b앞에 와라 
        return -1;
    }else{
        // 두 값의 자리를 바꾸지 마라 
        return 0;
    }
})


// console.log()


// 4. toSorted(가장 최근에 추가된 최신함수 )
// 원본배열은 유지하고, 정렬을 한 새로운 배열을 return 해준다. 
let arr5 = ["c","a","b"];

console.log(arr5);


//5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 변환하는 메서드
// 여기서 , 는 구분자로서 다른 구분자를 사용하려면 , join() 안에 매개변수로 
// 기준이 되는 구분자를 선택해주면된다. 
let arr6= ["hi","im","oh"];

const joined = arr6.join();
console.log(joined);

