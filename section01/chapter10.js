﻿//for

// for(초기식; 조건식; 증감식){
//     console.log("반복!;")
// }
for(let idx=0; idx<=10; idx++){
    console.log("idx");


    if(idx%2===0){
        continue;
    }


    //반복에서 해당 회차에서 멈춤
    if(idx>=5){
        break;
    }

}



