// 6가지의 배열 조작 메서드


//1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// push 메서드는 메서드 실행후 , legth를 반환한다. 
let arr1 = [1,2,3];
const newLength =arr1.push(4,5,6,7);

// console.log(newLength);


//2.pop
//배열의 맨 뒤에 있는 요소를 제거하고 , 반환

let arr2=[1,2,3]
const popedItem = arr2.pop();

// console.log(popedItem);

//shift, unshift 는 push나 pop보다 느리다.
// push, pop 의 경우 인덱스를 유지한 상태에서 
// 호출한 index값만 조작한다면,
// shift, unshift 의 값은 index를 앞으로 당기거나, 앞에 요소를 추가한후,
// index 하나 밀어낸이후에 요소를 추가해야하기 때문이다. 

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거 , 반환
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();

//console.log(shiftedItem);


//4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// 추가한 이후에 추가된 요소를 반환해준다. 

let arr4 = [1,2,3];
const newLength2 = arr1.unshift(0);

console.log(newLength2,arr4)

//5. slice
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 원본메서드는 바뀌지 않는다. 
let arr5 = [1,2,3,4,5];
arr5.slice(2,5);
arr5.slice(-3);// 뒤에서 부터 3개를 짤라라
console.log();

//6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1,2];
let arr7 = [3,4];