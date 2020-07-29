// JavaScript code를 작성해요!!
// JavaScript에 대해서 알아보아요!!
// Python과 비교해서 알아볼꺼에여!!
// JavaScript : web client에서 실행되는 언어
//              요즘에는 서버용 개발언어로 사용되기도 해요(Node.js)
// 변수를 만들어 보아요!!
// python은 그냥 변수를 선언하죠...
// my_var = 100 (python)
var my_var = 100 // javascript
var tmp = 3.14 // number 정수와 실수를 따로 구분하지 않음
var tmp1 = "Hello"  // string " ' 사용가능//  (python과 동일)
var tmp2 = true //boolean (python True)
var tmp3 = [1,2,3,4.555]  // array // python에서는 list


// 객체를 어떻게 표현하나요??
var tmp4 = { name : "홍길동", age : 25} // 객체
//객체사용은 어떻게 하나요?
console.log(tmp4.name)


// 함수에 대해서 알아보아요!!
// 함수는 2가지가 존재해요!
// 1. 선언적 함수 (python의 일반적인 함수 정의하는 방법)
//    선언적 함수는 함수 이름이 존재해요!!
function my_add(x,y) {
    return x + y
}

// def my_add(x,y): # python
//     return x + y
// 2. 익명함수 (함수의 이름이 없어요!!) > 람다함수
//     변수에 저장해서 사용. 일급함수의 특징을 가지게 되요!
//     함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용
var my_add = function (x, y) {
    return x + y
}