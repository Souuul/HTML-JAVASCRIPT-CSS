// jQuery CDN을 이용했기 때문에 jQuery code를 사용할 수 있어요!!
// 버튼을 클릭하면 아래의 함수가 호출되요!
function my_func() {
    // alert("함수가 호출되요") // print 기능으로 활용가능합니다!
    // 0. jQuery를 공부할 때 가장먼저 배워야 하는건 ...selector
    // 1. 전체 선택자(universal selector)
    // $("*").css("color","red") // *전체선택자
    // console.log($("*").text())
    // 2. 태그 선택자(tag selector)
    // $("li").remove() 항목과 태그 모두삭제
    // 3. 아이디 선택자(id selector)  중복하여 사용불가능
    // console.log($("#haha").text())  // # ID지칭
                        // 인자가 없으면 값을 알아오라는 의미, 인자가 있으면 값을 변경하라는 의미
    // $("#haha").text("울산")
    // 4. 클래스 선택자 (class selector) 중복하여 사용가능
    // $(".region").css("background-color", "yellow") // 클래스를 찾음
    // 5. 구조 선택자 (자식 선택자 후손 선택자)
    // $("ol > *").remove() // ol > * ol에 자식으로 있는 것들중 모든것
    // $("ol > li").css("color", "blue") // ol > * ol에 자식으로 있는 것들중 li
    // $("div li").css("color", "pink")    // div 후손으로 있는 것들 중  li를 모두 선택
    // 6. 구조 선택자 (형제 선택자)
    // $("#haha + li").css("color", "pink")  // id의 형제를 찾고 +를 이용하여 바로 다음 형제를 찾는 것이 가능
    // $("#hong ~ li").css("color", "pink")  //id 이후의 모든 형제를 찾음 (자신제외)
    // 7. 속성 선택자
    // $("[id]").css("color", "yellow")  // id 모든 속성을 전부 찾음
    // $("[class]").css("color", "red")     // class 모든 속성을 전부 찾음


    // $("ul > li[class]").text() // ul안에 li안에 class 찾음


    // 이 7가지를 조합하면 왠만한 element는 지정하는게 가능 !!!!

}
