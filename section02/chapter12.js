//비동기처리의 결과값인 sum의 결과값을 function 밖에서 이용할 수 있도록 하려면, 
//함수가 호출되면서 , setTimeout함수가 호출되고 ,  setTimeout함수는 3초후에 , 
// callback함수를 실행하게 되는데 , 콜백함수안에 , 인수로 받은 callback 함수를 
// 실행하면서, 호출한 곳에 , 콜백함수를 실행함 
// 비동기 작업을 하는 함수의 결과값을 외부에서 이용하려면, 
// callback 함수를 비동기 함수 안에서 호출하도록 하면된다. 

// function task(a,b,callback){
//     setTimeout(()=>{
//         const sum = a+b;
//         callback(sum);
//     },3000);
// }


// task(1,2,(value)=>{
//     console.log(value);
// });

// 음식을 주문하는 상황 
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    },3000);
}


function cooldownFood(food,callback){
    setTimeout(()=>{
        const cooldownedFood =`식은 ${food}`;
        callback(cooldownedFood);
    },2000);
}

//콜백지옥!!!
// 콜백에 계속 콜백이 실행되면서 , indent(들여쓰기) 가 늘어남 
function freezeFood(food,callback){
    setTimeout(()=>{
        const frezedFood = `냉동된 ${food}`;
        callback(frezedFood);
    })
}

orderFood((food)=>{
    console.log(food);


    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood)=>{
            console.log(freezedFood);
        })

    });
})