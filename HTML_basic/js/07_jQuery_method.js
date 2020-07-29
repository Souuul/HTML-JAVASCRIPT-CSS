$(document).ready(function () {
    // browser에 내용이 완전히 출력되면 그 시점에 실행
    // li를 찾아서 각각에 대해 event처리를 지정해 줘요!
    $("ul > li").on("mouseover", function () {
        $(this).addClass("myStyle")
    }) // on ~~ 할떄! event를 지칭 // mouseover는 마우스를 가르킬떄

    $("ul > li").on("mouseleave", function () {
        $(this).removeClass("myStyle")
    })  // on ~~ 할떄! event를 지칭 // mouseleave는 마우스를 떠날
})


// function set_active() {
//     // 현재 이벤트가 발생된 이벤트 소스에 CSS를 적용해요!!
//     // 이벤트 소스 : 이벤트가 발생된 element > this
//     $(this).addClass("myStyle")


function insert_text() {
    $("#myDiv").html("<h1>이것은 소리없는 아우성!!</h1>")

    // text() : 문자를 그냥 가져다가 넣어요! 태그적용 안해요! // <h1>이것은 소리없는 아우성!!</h1>
    // html() : 문자를 그냥 가져다가 넣어요! 태그적용을 해요  // 이것은 소리없는 아우성!!
}

function delete_div() {
    // $("#deleteDiv").remove()  // 자신을 포함해서 후손들도 삭제

    $("#deleteDiv").empty()  // 자신을 제외한 후손들만 삭제

}

function add_list() {
    // 없는 tag를 만들려면 어떻게 해야하나요??
    // $("<li class="myStyle"></li>") : 태그를 만들라는 의미
    // $("<li></li>").text("박길동").attr("class", "myStyle")
    var my_li = $("<li></li>").text("박길동").addClass("myStyle")
    // 태그를 생성한다음 원하는 위치에 가져다 붙여요!!
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙여요!
    //$("ul").append(my_li)
    // 2. prepend() : 자식으로 붙이고 맨 앞으로 자식으로 붙여요!
    // $("ul").prepend(my_li)
    // 3. after() : 선택된 형제의 바로 이후에 순서를 추가
    // $("ul > li:nth-child(3)").after(my_li)
    // 4. before() : 선택된 형제의 바로 이전에 순서를 추가
    $("ul > li:nth-child(3)").before(my_li)
}

