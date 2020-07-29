function start_clock() {
    // alert("버튼이 클릭클릭!!")
    // 시계를 출력해야 해요!!
    // 현재 시간을 구해요!!
    // 현재 날짜의 시분초를 구할 수 있어요!!
    // 이 시간을 HTML 특정 영역에 출력해요!
    // 위의 작업을 1초마다 반복하면 되요!


    setInterval(function() {
        var today = new Date()
        console.log(today.toLocaleTimeString())
        var my_div = document.getElementById("myDiv") // document는 전체를 지칭합니다.
        my_div.innerText = today.toLocaleTimeString()},1000)
}