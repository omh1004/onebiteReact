//5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동장을 수행시키는 메서드

let arr1 = [1,2,3];
//현재요소의값, 현재요소의 카운트 , 전체배열의 값을 전달해줌 
// 배열의 요소의 갯수만큼 호출
// 배열을 순회하며, 특정 기능을 실행시킬수 있음

arr1.forEach(function(item,idx,arr){
    console.log(idx, item*2);
});


//2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2=[1,2,3];
let isInclude = arr2.includes(10);

//단순한 원시타입 => indexOf
//객체타입 => findIndex 


//3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 배열에 찾으려는 값이 여러개 존재하면 가장 먼저 찾은 요소의 인덱스값을 반환하고,
// 값이 없으면 -1 을 return 한다. 
// indexOf는 얕은 비교를 이용한다. 
let arr3 = [2,2,2];

//4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메소드
// 만족한다는 말은 return 값이 true라는 것이다. 
// 가장처음으로 조건문을 만족하는 index값을 반환해준다. 
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 존재하지 않으면 -1 을 반환한다. 
// indexOf 에서는 객체타입의 프로퍼티가 들어있을 경우 찾아낼수 없기때문에
// findIndex를 사용해야한다. 
let arr4 = [1,2,3];
arr4.findIndex(()=>{
    // if(item%2!==0) return true;
});
// 화살표함수로 더 간결하게 
arr4.findIndex((item)=> item ===999);

let arr5 = [
    {name: "오민현"},
    {name:"어니부기"}

];

//만약에 indexOf 로 위의 객체를 찾게되면, 
// 찾지못해서 -1 을 반환하며, 
console.log(arr5.indexOf("오민현"));

// findIndex로 찾게 되면, 해당값을 찾을수 있다. 이 차이는 얕은비교와 , 깊은 비교의 차이다.
 const finded2 = arr5.findIndex((item)=>item ==="오민현");

console.log(finded2);

//5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
// 객체자체를 반환 



console.log(arr5.find((item)=>item.name==="오민현"))




