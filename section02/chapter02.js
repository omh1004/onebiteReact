// //단락평가 

// function returnFalse(){
    
//     //falsy 값에도 적용 
//     return false;
// }

// function returnTrue(){
//     return true;
// }

// console.log(returnFlase() && returnTrue());
// console.log(returnFlase() || returnTrue());


//단락평가 활용사례
// && 조건에서는 두 값이 trusy 이면 뒤에값이 저장  
// 값으로 저장될때는 앞에 값이 저장되며, 
// || 조건에서는 두값이 모두 트루이면 뒤에값 거짓이여도 뒤에값이 저장된다. ////////

function printName(person){
    
    const name = person && person.name;

    console.log(name || undefined);
    
}

printName();
printName({name : "오민현"});