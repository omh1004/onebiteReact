// 함수선언
// 함수가 호출되면, 함수내부로 실행이 넘어간다. 
// 매개변수 => 함수에 전달된 값
// 인수 => 함수에 전달하는 값

// function getArea(width , height){
//     let area = width*height;
//     console.log(area);
// }

// getArea(10,20);
// getArea(30,20);



function getArea(width , height){
    let area = width*height;
    return area;
    //return 을 했을경우에는 함수가 종료되므로 아래의 코드는 실행되지 않음; 
    console.log('asda');
}

let area1 = getArea(10,20);
getArea(30,20);


//함수내부에 또다른 함수를 만들수 있다. 
//함수의 선언이 이루어 지기전에 호출해도 함수를 호출할 수 있다.
// 이것을 호이스팅이라고 한다.
// -> 끌어올리다 라는 뜻 

function area(){

    function anothor(){//중첩함수 
        console.log('another');
    }

    anothor();
    let area = width * height;
}





