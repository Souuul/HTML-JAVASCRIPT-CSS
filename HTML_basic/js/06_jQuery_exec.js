function print_text() {
     // 버튼을 눌렀을때 실행할 코드를 기술해요!
    // alert("호출되요!!!")
    // console.log($("#apple").text()) // .text 함수는 글자를 찾는 역할!
    // console.log($("#fineapple").text()) // .text 함수는 글자를 찾는 역할!
    // console.log($("ul > li.my_list").text())
    // console.log($("ul > li[class]").text())
    console.log($("ul li[class = my_list1]").text()) // 특정 클래스만 선택가능
    console.log($(".my_list1").text()) // class 명으로 바로 선택가능

    // console.log($("input > type[text]").text()) // input 사이의 글자를 가져옴
    // console.log($("input > [type=text]").text()) // input 사이의 글자를 가져옴
    // console.log($("input[type = text]").val())  // 사용자가 입력한 글자를 가져옴
    // console.log($("input > type.text").val())  // input이 부모가 아니기 때문에 불러오기 실패
    // console.log($("input[type[text]]").val())  // error
    // console.log($("input > type[text]").val())  // input이 부모가 아니기 때문에 불러오기 실패
    // console.log($("[type = text]").val())   // 모든 type = text 찾음
    // console.log($("ol > li.my_list:first").text()) // 위치를 가지고 찾음 (첫번째)
    // console.log($("ol > li.my_list:last").text()) // 위치를 가지고 찾음 (마지막)
    // console.log($("ol > li.my_list:first + li").text()) // 위치를 가지고 찾음 (첫번째 다음)
    // console.log($("ol > li.my_list:nth-child(1)").text()) //위치를 가지고 찾음 (첫번째)
    // console.log($("input[type = text]").attr("size", 10))  // 속성을 변경!!
    // console.log($("div > ul > li[class]").text())  // 아들의 아들도 탐색가능!!

}

function my_func() {
    // select box에서 과일이 바뀌면 실행되요!!
    // 1. 선택한 과일이 어떤 과일인지 알아내야 해요!!
    var fruit = $("select > option:selected").text()  // "select > option:selected" option tag에서 선택된 것을 지칭!!
    var my_list = $("ul > li")
    // my_list.each("람다함수"(idx, item)) // 반복함수 for 문처럼 활용 !! idx 순번, item 인
    my_list.each(function (idx, item) {
        if ($(item).text() == fruit) {$(item).css("color", "red")}  // if (조건) {실행해야하는 것!!}
        else {
            $(item).css("color", "black")
        }

    }) // 반복함수

}